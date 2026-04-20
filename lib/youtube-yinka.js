"use server";

const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const YINKA_CHANNEL_ID = "UCeavPPeMq5XZzks8KARYn1Q";
const BASE_URL = "https://www.googleapis.com/youtube/v3";

export async function getYinkaVideos(maxResults = 3) {
  if (!API_KEY || API_KEY === "your_api_key_here") {
    console.warn("YouTube API Key is missing or invalid on server.");
    return [];
  }

  console.log("Fetching Yinka Oladeru's YouTube videos from server...");

  try {
    const url = `${BASE_URL}/search?key=${API_KEY}&channelId=${YINKA_CHANNEL_ID}&part=snippet,id&order=date&maxResults=50&type=video`;
    
    const response = await fetch(url, { next: { revalidate: 3600 } }); // Cache for 1 hour

    if (!response.ok) {
      const errorData = await response.json();
      console.error("YouTube API Server-side Error:", JSON.stringify(errorData, null, 2));
      throw new Error(errorData.error?.message || `Failed to fetch YouTube videos (Status: ${response.status})`);
    }

    const data = await response.json();
    console.log(`Server-side successfully fetched ${data.items?.length || 0} items from Yinka's channel.`);

    if (!data.items || data.items.length === 0) return [];

    const videoIds = data.items.map(item => item.id.videoId).join(',');
    const videoDetailsUrl = `${BASE_URL}/videos?key=${API_KEY}&part=contentDetails&id=${videoIds}`;
    
    const detailsResponse = await fetch(videoDetailsUrl, { next: { revalidate: 3600 } });
    const detailsData = await detailsResponse.json();
    
    const durationMap = {};
    detailsData.items?.forEach(item => {
      durationMap[item.id] = parseDuration(item.contentDetails.duration);
    });

    // Filter out shorts (less than 60 seconds) and get only the requested number
    const longFormVideos = data.items
      .filter(item => {
        const duration = durationMap[item.id.videoId] || 0;
        return duration >= 60;
      })
      .slice(0, maxResults);

    console.log(`Filtered down to ${longFormVideos.length} long-form videos for Yinka.`);

    return longFormVideos.map((item) => ({
      id: item.id.videoId,
      title: decodeHtmlEntities(item.snippet.title),
      description: decodeHtmlEntities(item.snippet.description),
      thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url,
      date: new Date(item.snippet.publishedAt).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }),
      rawDate: item.snippet.publishedAt,
      series: extractSeries(decodeHtmlEntities(item.snippet.title)),
      speaker: "Pastor Yinka Oladeru"
    }));
  } catch (error) {
    console.error("Server-side error fetching Yinka's YouTube videos:", error);
    return [];
  }
}

function decodeHtmlEntities(text) {
  if (!text) return "";
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}

function parseDuration(duration) {
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return 0;
  const hours = parseInt(match[1] || 0);
  const minutes = parseInt(match[2] || 0);
  const seconds = parseInt(match[3] || 0);
  return hours * 3600 + minutes * 60 + seconds;
}

function extractSeries(title) {
  const match = title.match(/\[(.*?)\]/) || title.match(/\((.*?)\)/);
  return match ? match[1] : "Sermon";
}
