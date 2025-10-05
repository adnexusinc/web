import { CaseStudyData } from '@/types/caseStudy';

const insurtechStartup: CaseStudyData = {
  id: "insurtech-startup",
  title: "INSURTECH STARTUP",
  subtitle: "REVOLUTIONARY DIGITAL INSURANCE PLATFORM",
  client: "InsurTech Startup",
  services: [
    "CTV Advertising Strategy",
    "Programmatic Campaign Design",
    "Creative Production",
    "Performance Marketing"
  ],
  results: [
    "300% increase in qualified leads",
    "40% reduction in sales cycle",
    "70% of customers engaged with video ads before purchase",
    "Improved customer understanding of product benefits",
    "Enhanced digital acquisition experience"
  ],
  videoUrl: "https://www.youtube.com/embed/zZwdjRw3w2w?autoplay=1&loop=1&playlist=zZwdjRw3w2w&mute=1&controls=1&showinfo=0",
  videoId: "insurtech-video",
  overview: [
    "An innovative insurtech startup is reinventing insurance with digital-first, fully customizable coverage solutions. We partnered with them to create a CTV advertising presence that would showcase their innovative approach to modern insurance.",
    "Our team developed a comprehensive programmatic platform that highlighted the simplicity, customization options, and technological advantages of their insurance solutions."
  ],
  challenge: [
    "We needed to communicate the value of digital insurance to a market accustomed to traditional providers. The CTV campaigns needed to highlight the technological innovation while making the customization process appealing to potential customers.",
    "Overcoming preconceptions about online insurance and demonstrating the superior service and customization options available through this digital-first approach presented a unique marketing challenge."
  ],
  solution: [
    "We developed immersive video creative featuring clear explanations of the digital insurance process. The campaigns incorporated detailed animations explaining the coverage options and showcased customer success stories through compelling video testimonials.",
    "Our strategy included highlighting the technological innovation behind the platform and emphasizing the convenience and cost-saving benefits of the digital-first approach."
  ],
  testimonial: {
    quote: "Adnexus transformed how potential customers experience our insurance platform before they sign up. The CTV campaigns and clear communication of our value proposition have dramatically improved our conversion rates and reduced our sales cycle.",
    author: "Alexis Rivas",
    role: "CEO at InsurTech Startup"
  },
  images: [
    "/images/insurtech/insurtech.jpg",
    "/images/insurtech/insurtech-1.jpg",
    "/images/insurtech/insurtech-2.jpg",
    "/images/insurtech/insurtech-3.jpg"
  ],
  socialLinks: {
    links: [
      { platform: "Website", url: "#" },
      { platform: "LinkedIn", url: "#" },
      { platform: "Instagram", url: "#" },
      { platform: "Facebook", url: "#" },
      { platform: "Twitter", url: "#" }
    ]
  },
  relatedProjects: [
    {
      id: "mobility-startup",
      title: "MOBILITY STARTUP",
      subtitle: "HIGHLY CONVERTING 500X ROI CTV CAMPAIGN",
      imageUrl: "/images/mobility/mobility-1.jpg",
      route: "/case-study/mobility-startup"
    },
    {
      id: "healthtech-startup",
      title: "HEALTHTECH STARTUP",
      subtitle: "WOMEN'S HEALTH WEARABLE TECH PLATFORM",
      imageUrl: "/images/healthtech/healthtech-1.jpg",
      route: "/case-study/healthtech-startup"
    }
  ]
};

export default insurtechStartup;
