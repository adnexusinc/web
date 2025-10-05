import { CaseStudyData } from '@/types/caseStudy';

const mobilityStartup: CaseStudyData = {
  id: "mobility-startup",
  title: "MOBILITY STARTUP",
  subtitle: "HIGHLY CONVERTING 500X ROI CTV CAMPAIGN",
  client: "Mobility Startup",
  services: [
    "CTV Advertising",
    "Programmatic Strategy",
    "Creative Production",
    "Performance Marketing"
  ],
  results: [
    "500x return on advertising investment",
    "230% increase in qualified leads",
    "65% conversion rate from lead to sale",
    "45% reduction in customer acquisition cost",
    "Featured in top industry publications"
  ],
  videoUrl: "https://www.youtube.com/embed/TVExxxHKqF8?autoplay=1&loop=1&playlist=TVExxxHKqF8&mute=1&controls=1&showinfo=0",
  videoId: "mobility-thumbnail",
  overview: [
    "A leading electric vehicle startup came to us with a challenge: create a high-converting CTV advertising campaign that would generate significant ROI for their innovative mobility solutions.",
    "Through a comprehensive programmatic strategy focusing on premium CTV inventory and targeted audience segments, we created a campaign that resonated with early adopters and eco-conscious consumers alike."
  ],
  challenge: [
    "The electric vehicle market was growing, but this startup needed to stand out in a space dominated by traditional manufacturers and establish credibility for their revolutionary technology.",
    "We needed to communicate complex technological advantages while creating an emotional connection with potential customers through premium video content."
  ],
  solution: [
    "We developed a multi-platform CTV campaign that highlighted the startup's revolutionary safety features and performance capabilities, using a mix of video content, interactive demonstrations, and targeted programmatic advertising across premium streaming platforms.",
    "Our strategy incorporated partnerships with automotive influencers and sustainability advocates to build trust with multiple audience segments."
  ],
  testimonial: {
    quote: "The CTV campaign Adnexus created for us exceeded all expectations. Not only did they help us reach new customers through premium streaming platforms, but they truly understood our technology and brand values. The ROI speaks for itself.",
    author: "Jay Giraud",
    role: "CEO at Mobility Startup"
  },
  images: [
    "/images/mobility/cover.jpg",
    "/images/mobility/mobility-2.jpg",
    "/images/mobility/mobility-3.jpg"
  ],
  socialLinks: {
    links: [
      { platform: "Website", url: "#" },
      { platform: "LinkedIn", url: "#" },
      { platform: "Instagram", url: "#" },
      { platform: "Facebook", url: "#" },
      { platform: "Twitter", url: "#" },
      { platform: "YouTube", url: "#" }
    ],
    totalFollowers: 85000
  },
  relatedProjects: [
    {
      id: "entertainment-platform",
      title: "ENTERTAINMENT PLATFORM",
      subtitle: "LARGEST VIRTUAL MUSIC FESTIVAL IN HISTORY",
      imageUrl: "/images/entertainment/entertainment-banner.png",
      route: "/case-study/entertainment-platform"
    }
  ]
};

export default mobilityStartup;
