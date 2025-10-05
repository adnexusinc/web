// Premium CTV Channels and Streaming Platforms
// Logos will be added from public CDN or local assets

export interface Channel {
  name: string;
  category: 'News' | 'Sports' | 'Entertainment' | 'Streaming';
  logo?: string;
}

export const channels: Channel[] = [
  // News
  { name: "CNN", category: "News", logo: "/channels/cnn.svg" },
  { name: "Fox News", category: "News", logo: "/channels/fox-news.svg" },
  { name: "Bloomberg TV", category: "News", logo: "/channels/bloomberg.svg" },

  // Sports
  { name: "ESPN", category: "Sports", logo: "/channels/espn.svg" },
  { name: "CBS Sports", category: "Sports", logo: "/channels/cbs-sports.svg" },
  { name: "NFL Network", category: "Sports", logo: "/channels/nfl.svg" },
  { name: "NBA TV", category: "Sports", logo: "/channels/nba.svg" },
  { name: "MLB Network", category: "Sports", logo: "/channels/mlb.svg" },

  // Major Streaming Platforms
  { name: "Hulu", category: "Streaming", logo: "/channels/hulu.svg" },
  { name: "Roku", category: "Streaming", logo: "/channels/roku.svg" },
  { name: "Samsung TV+", category: "Streaming", logo: "/channels/samsung-tv.svg" },
  { name: "Pluto TV", category: "Streaming", logo: "/channels/pluto-tv.svg" },
  { name: "Paramount+", category: "Streaming", logo: "/channels/paramount.svg" },
  { name: "Peacock", category: "Streaming", logo: "/channels/peacock.svg" },
  { name: "Tubi", category: "Streaming", logo: "/channels/tubi.svg" },

  // Entertainment
  { name: "Discovery+", category: "Entertainment", logo: "/channels/discovery.svg" },
  { name: "AMC+", category: "Entertainment", logo: "/channels/amc.svg" },
  { name: "Comedy Central", category: "Entertainment", logo: "/channels/comedy-central.svg" },
];

export const channelsByCategory = {
  News: channels.filter(c => c.category === 'News'),
  Sports: channels.filter(c => c.category === 'Sports'),
  Streaming: channels.filter(c => c.category === 'Streaming'),
  Entertainment: channels.filter(c => c.category === 'Entertainment'),
};

export const totalChannelCount = "500+";
