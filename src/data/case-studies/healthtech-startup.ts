import { CaseStudyData } from '@/types/caseStudy';

const healthtechStartup: CaseStudyData = {
  id: "healthtech-startup",
  title: "HEALTHTECH STARTUP",
  subtitle: "WOMEN'S HEALTH WEARABLE TECH PLATFORM",
  client: "HealthTech Startup",
  services: [
    "Programmatic DSP Strategy",
    "CTV Campaign Management",
    "Performance Analytics",
    "Audience Targeting"
  ],
  results: [
    "67% increase in user engagement",
    "45% improvement in user retention",
    "$35 million revenue estimation by 2024",
    "Successful multi-platform campaign deployment",
    "Improved user acquisition and personalization"
  ],
  videoUrl: "https://www.youtube.com/embed/rsda3VIuRxM?autoplay=1&mute=1&loop=1&playlist=rsda3VIuRxM&controls=1&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3",
  videoId: "healthtech-hero",
  overview: [
    "A pioneering fem-tech company dedicated to women's health and wellness came to Adnexus to enhance their market position through strategic programmatic advertising.",
    "Adnexus was engaged to develop and execute comprehensive DSP strategies and CTV campaigns, helping the company reach a broader audience and scale operations effectively."
  ],
  challenge: [
    "In its early years, the healthtech startup faced significant challenges in scaling user acquisition and reaching a broader audience. The competitive landscape of health tech demanded innovative advertising strategies.",
    "Audience segmentation and personalization at scale were key obstacles to overcome in order to support future growth and maintain quality user engagement."
  ],
  solution: [
    "Adnexus implemented advanced audience targeting algorithms to analyze consumer behavior and preferences, enabling the startup to tailor its advertising campaigns effectively across premium CTV inventory.",
    "Our team created personalized video creative and developed segmented programmatic strategies that addressed different user profiles, maximizing reach and conversion rates."
  ],
  testimonial: {
    quote: "Adnexus transformed our approach to both user acquisition and programmatic advertising. Their data-driven CTV strategies helped us connect with our target audience on a deeper level while building the scalable advertising infrastructure we needed. The results speak for themselves.",
    author: "Urška Sršen",
    role: "Co-founder & CPO at HealthTech Startup"
  },
  images: [
    "/images/healthtech/cover.jpg",
    "/images/healthtech/healthtech-1.jpg",
    "/images/healthtech/healthtech-2.jpg",
    "/images/healthtech/healthtech-3.jpeg"
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
    totalFollowers: 114000
  },
  relatedProjects: [
    {
      id: "mobility-startup",
      title: "MOBILITY STARTUP",
      subtitle: "HIGHLY CONVERTING 500X ROI CTV CAMPAIGN",
      imageUrl: "/images/mobility/mobility-campaign.webp",
      route: "/case-study/mobility-startup"
    },
    {
      id: "entertainment-platform",
      title: "ENTERTAINMENT PLATFORM",
      subtitle: "LARGEST VIRTUAL MUSIC FESTIVAL IN HISTORY",
      imageUrl: "/images/entertainment/entertainment-banner.png",
      route: "/case-study/entertainment-platform"
    }
  ]
};

export default healthtechStartup;
