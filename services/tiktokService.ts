
import { TikTokLinkInfo } from '../types';

export const parseTikTokLink = (url: string): TikTokLinkInfo => {
  const trimmedUrl = url.trim();
  const info: TikTokLinkInfo = {
    originalUrl: trimmedUrl,
    cleanUrl: '',
    embedUrl: '',
    videoId: null,
    isValid: false,
    type: 'unknown'
  };

  if (!trimmedUrl) return info;

  // Regex patterns
  const fullLinkPattern = /tiktok\.com\/@([^\/]+)\/video\/(\d+)/;
  const shortLinkPattern = /(vm|vt|t)\.tiktok\.com\/[\w\d]+/;

  const fullMatch = trimmedUrl.match(fullLinkPattern);
  const shortMatch = trimmedUrl.match(shortLinkPattern);

  if (fullMatch) {
    const username = fullMatch[1];
    const videoId = fullMatch[2];
    info.videoId = videoId;
    info.isValid = true;
    info.type = 'full';
    info.cleanUrl = `https://www.tiktok.com/@${username}/video/${videoId}?is_copy_url=1&is_from_webapp=1`;
    info.embedUrl = `https://www.tiktok.com/embed/v2/${videoId}`;
  } else if (shortMatch) {
    info.isValid = true;
    info.type = 'short';
    // For short links, we can't get the clean URL without expanding them on the backend (CORS)
    // So we just provide the link as is but with a warning or suggestion to use the tool
    info.cleanUrl = trimmedUrl; 
  }

  return info;
};
