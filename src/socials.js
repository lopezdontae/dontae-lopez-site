import substackIcon from './social-icons/substack.svg?raw';
import newsletterIcon from './social-icons/newsletter.svg?raw';
import youtubeIcon from './social-icons/youtube.svg?raw';
import instagramIcon from './social-icons/instagram.svg?raw';
import tiktokIcon from './social-icons/tiktok.svg?raw';
import xIcon from './social-icons/x.svg?raw';
import threadsIcon from './social-icons/threads.svg?raw';
import blueskyIcon from './social-icons/bluesky.svg?raw';
import linkedinIcon from './social-icons/linkedin.svg?raw';
import facebookIcon from './social-icons/facebook.svg?raw';
import snapchatIcon from './social-icons/snapchat.svg?raw';
import indiehackersIcon from './social-icons/indiehackers.svg?raw';

import redditIcon from './social-icons/reddit.svg?raw';

export const socialLinks = [
  { icon: substackIcon, name: "Substack", detail: "Essays & everything I\u2019m making", url: "https://lopezdontae.substack.com", featured: true },
  { icon: newsletterIcon, name: "Off Script By Dontae", detail: "1\u20133 minute thoughts. The occasional detour.", url: "https://off-script-by-dontae.beehiiv.com", featured: true },
  { icon: youtubeIcon, name: "YouTube", detail: "@lopezdontae", url: "https://www.youtube.com/@lopezdontae", featured: false },
  { icon: youtubeIcon, name: "Taysonlyfun", detail: "Random videos. A little less polished, a little more me.", url: "https://www.youtube.com/@taysonlyfun", featured: false },
  { icon: instagramIcon, name: "Instagram", detail: "@lopezdontae", url: "https://www.instagram.com/lopezdontae/", featured: false },
  { icon: tiktokIcon, name: "TikTok", detail: "@lopezdontae", url: "https://www.tiktok.com/@lopezdontae", featured: false },
  { icon: xIcon, name: "X", detail: "@lopezdontae", url: "https://x.com/lopezdontae", featured: false },
  { icon: threadsIcon, name: "Threads", detail: "@lopezdontae", url: "https://www.threads.com/@lopezdontae", featured: false },
  { icon: blueskyIcon, name: "Bluesky", detail: "@lopezdontae.bsky.social", url: "https://bsky.app/profile/lopezdontae.bsky.social", featured: false },
  { icon: linkedinIcon, name: "LinkedIn", detail: "Dontae X.Y. Lopez", url: "https://www.linkedin.com/in/dontaelopez/", featured: false },
  { icon: facebookIcon, name: "Facebook", detail: "Dontae X.Y. Lopez \u00b7 Creator page", url: "https://www.facebook.com/lopezdontae", featured: false },
  { icon: snapchatIcon, name: "Snapchat", detail: "@lopezdontae", url: "https://www.snapchat.com/add/lopezdontae", featured: false },
  { icon: redditIcon, name: 'Reddit', detail: 'u/lopezdontae', url: 'https://www.reddit.com/user/lopezdontae/', featured: false },
  { icon: indiehackersIcon, name: "Indie Hackers", detail: "Building & sharing what I learn", url: "https://www.indiehackers.com/SkillIssue", featured: false }
];

function iconMarkup(icon) {
  return icon.replace('<svg ', '<svg aria-hidden="true" focusable="false" ').replace(/<title>.*?<\/title>/g, '');
}

export function socialDirectory() {
  return `<div class="social-directory">${socialLinks.map(link => `
    <a class="social-card${link.featured ? ' social-card--featured' : ''}" href="${link.url}" target="_blank" rel="noopener noreferrer" aria-label="${link.name} (opens in a new tab)">
      <span class="social-card__icon">${iconMarkup(link.icon)}</span>
      <span class="social-card__copy"><span class="social-card__name">${link.name}</span><span class="social-card__detail">${link.detail}</span></span>
      <span class="social-card__arrow" aria-hidden="true">↗</span>
    </a>`).join('')}</div>`;
}

export function socialShortcuts() {
  return socialLinks.filter(link => ['Substack', 'Instagram', 'YouTube', 'X', 'LinkedIn'].includes(link.name)).map(link => `<a href="${link.url}" target="_blank" rel="noopener noreferrer" aria-label="${link.name} (opens in a new tab)" title="${link.name}">${iconMarkup(link.icon)}</a>`).join('');
}
