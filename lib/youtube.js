const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;
const BASE_URL = "https://www.googleapis.com/youtube/v3";

export async function fetchYoutubeVideos(maxResults = 50) {
  if (!API_KEY || API_KEY === "your_api_key_here") {
    console.warn("YouTube API Key is missing or invalid.");
    return [];
  }

  try {
    const response = await fetch(
      `${BASE_URL}/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${maxResults}&type=video`
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || "Failed to fetch YouTube videos");
    }

    const data = await response.json();
    
    return data.items.map((item) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url,
      date: new Date(item.snippet.publishedAt).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }),
      rawDate: item.snippet.publishedAt,
      // Attempt to extract series/speaker from title if possible, else defaults
      series: extractSeries(item.snippet.title),
      speaker: extractSpeaker(item.snippet.title, item.snippet.description) || "The Citizen's Place"
    }));
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return [];
  }
}

function extractSeries(title) {
  // Simple heuristic: check if title contains "Series" or something in brackets
  const match = title.match(/\[(.*?)\]/) || title.match(/\((.*?)\)/);
  return match ? match[1] : "Sermon";
}

function extractSpeaker(title, description) {
  // Common church speakers
  if (title.includes("Yinka") || description.includes("Yinka")) return "Pastor Yinka Oladeru";
  if (title.includes("Nike") || description.includes("Nike")) return "Pastor Nike Oladeru";
  if (title.includes("Muyiwa") || description.includes("Muyiwa")) return "Pastor Muyiwa";
  return null;
}
