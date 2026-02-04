"use server";

const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;
const BASE_URL = "https://www.googleapis.com/youtube/v3";

export async function getYoutubeVideosServer(maxResults = 50) {
  if (!API_KEY || API_KEY === "your_api_key_here") {
    console.warn("YouTube API Key is missing or invalid on server.");
    return [];
  }

  console.log("Fetching YouTube videos from server...");

  try {
    const url = `${BASE_URL}/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${maxResults}&type=video`;
    
    const response = await fetch(url);

    if (!response.ok) {
      const errorData = await response.json();
      console.error("YouTube API Server-side Error:", JSON.stringify(errorData, null, 2));
      throw new Error(errorData.error?.message || `Failed to fetch YouTube videos (Status: ${response.status})`);
    }

    const data = await response.json();
    console.log(`Server-side successfully fetched ${data.items?.length || 0} items from search.`);

    if (!data.items || data.items.length === 0) return [];

    const videoIds = data.items.map(item => item.id.videoId).join(',');
    const videoDetailsUrl = `${BASE_URL}/videos?key=${API_KEY}&part=contentDetails&id=${videoIds}`;
    
    const detailsResponse = await fetch(videoDetailsUrl);
    const detailsData = await detailsResponse.json();
    
    const durationMap = {};
    detailsData.items?.forEach(item => {
      durationMap[item.id] = parseDuration(item.contentDetails.duration);
    });

    // Filter out shorts (less than 60 seconds)
    const longFormVideos = data.items.filter(item => {
      const duration = durationMap[item.id.videoId] || 0;
      return duration >= 60;
    });

    console.log(`Filtered down to ${longFormVideos.length} long-form videos.`);

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
      speaker: extractSpeaker(decodeHtmlEntities(item.snippet.title), decodeHtmlEntities(item.snippet.description)) || "The Citizen's Place"
    }));
  } catch (error) {
    console.error("Server-side error fetching YouTube videos:", error);
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

function extractSpeaker(title, description) {
  if (title.includes("Yinka") || description.includes("Yinka")) return "Pastor Yinka Oladeru";
  if (title.includes("Nike") || description.includes("Nike")) return "Pastor Nike Oladeru";
  if (title.includes("Muyiwa") || description.includes("Muyiwa")) return "Pastor Muyiwa";
  return null;
}
