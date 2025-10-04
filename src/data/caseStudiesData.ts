// Case Study data for Adnexus CTV advertising campaigns

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  metrics: {
    roi: string;
    adSpend: string;
    impressions: string;
    primaryMetric: string;
    primaryMetricValue: string;
  };
  results: string[];
  image?: string;
  featured?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "damon-motorcycles",
    client: "Damon Motorcycles",
    industry: "Automotive",
    title: "500x ROI: Electric Motorcycle Launch",
    description: "Revolutionary CTV campaign for electric motorcycle manufacturer achieving unprecedented ROI and lead generation.",
    challenge: "Launch innovative electric motorcycles in a market dominated by traditional brands, reaching both motorcycle enthusiasts and eco-conscious consumers.",
    solution: "Multi-channel CTV strategy featuring premium inventory on automotive and lifestyle channels, with dynamic creative optimization and retargeting across Connected TV platforms.",
    metrics: {
      roi: "500%",
      adSpend: "$250K",
      impressions: "45M",
      primaryMetric: "Qualified Leads",
      primaryMetricValue: "2,300"
    },
    results: [
      "500% return on ad spend",
      "230% increase in qualified leads",
      "65% conversion rate from lead to sale",
      "45% reduction in customer acquisition cost"
    ],
    featured: true
  },
  {
    id: "retailco",
    client: "RetailCo",
    industry: "Retail",
    title: "450% ROI: Holiday Season Domination",
    description: "National retail chain's CTV campaign during Q4 holiday season driving massive in-store and online sales.",
    challenge: "Compete with major retailers during peak holiday season while maintaining profitable ROAS across multiple product categories.",
    solution: "Geo-targeted CTV campaigns with dynamic creative showcasing local inventory, combined with sequential messaging strategy across premium streaming platforms.",
    metrics: {
      roi: "450%",
      adSpend: "$500K",
      impressions: "25M",
      primaryMetric: "Revenue Generated",
      primaryMetricValue: "$2.8M"
    },
    results: [
      "450% return on ad spend",
      "$2.8M in attributed revenue",
      "38% increase in store visits",
      "28% boost in online conversions"
    ],
    featured: true
  },
  {
    id: "techstartup",
    client: "TechStartup",
    industry: "Technology",
    title: "380% ROI: SaaS Product Launch",
    description: "B2B SaaS startup's successful CTV campaign reaching decision-makers through premium business content.",
    challenge: "Break through B2B clutter and reach C-level executives with complex SaaS product messaging on streaming platforms.",
    solution: "Strategic placement on business news channels and premium streaming services, with personalized creative based on company size and industry verticals.",
    metrics: {
      roi: "380%",
      adSpend: "$300K",
      impressions: "15M",
      primaryMetric: "Conversion Rate",
      primaryMetricValue: "12%"
    },
    results: [
      "380% return on ad spend",
      "12% conversion rate (3x industry average)",
      "8,900 qualified demo requests",
      "$4.5M pipeline generated"
    ]
  },
  {
    id: "autodealer",
    client: "AutoDealer Network",
    industry: "Automotive",
    title: "520% ROI: Multi-Location Dealer Campaign",
    description: "Regional auto dealer network's CTV campaign driving showroom traffic and test drives across 15 locations.",
    challenge: "Drive qualified foot traffic to 15 dealership locations while competing with national automotive brands' massive ad budgets.",
    solution: "Hyper-local CTV targeting with dealership-specific creative, retargeting website visitors, and integration with automotive shopping platforms.",
    metrics: {
      roi: "520%",
      adSpend: "$800K",
      impressions: "35M",
      primaryMetric: "Test Drives Booked",
      primaryMetricValue: "2,300"
    },
    results: [
      "520% return on ad spend",
      "2,300 test drives scheduled",
      "890 vehicles sold (38% close rate)",
      "45% lower cost per acquisition vs. traditional TV"
    ],
    featured: true
  },
  {
    id: "streamingapp",
    client: "StreamingApp",
    industry: "Entertainment",
    title: "290% ROI: Streaming Service Growth",
    description: "New streaming platform's subscriber acquisition campaign across competitive CTV landscape.",
    challenge: "Acquire subscribers for new streaming service in oversaturated market dominated by Netflix, Disney+, and HBO Max.",
    solution: "Strategic CTV placements during premium content, lookalike audience targeting of competitors' subscribers, and free trial optimization.",
    metrics: {
      roi: "290%",
      adSpend: "$1.2M",
      impressions: "50M",
      primaryMetric: "New Subscribers",
      primaryMetricValue: "180K"
    },
    results: [
      "290% return on ad spend",
      "180,000 new paying subscribers",
      "72% trial-to-paid conversion",
      "$8.5M in subscription revenue"
    ]
  },
  {
    id: "healthcareco",
    client: "HealthcareCo",
    industry: "Healthcare",
    title: "410% ROI: Telehealth Service Launch",
    description: "Telehealth provider's CTV campaign targeting health-conscious consumers during wellness content.",
    challenge: "Build awareness and trust for new telehealth service while navigating strict healthcare advertising regulations.",
    solution: "Compliant CTV creative strategy with physician testimonials, strategic placement during health/wellness programming, and ZIP-code level targeting.",
    metrics: {
      roi: "410%",
      adSpend: "$400K",
      impressions: "18M",
      primaryMetric: "Appointments Booked",
      primaryMetricValue: "5,400"
    },
    results: [
      "410% return on ad spend",
      "5,400 appointments scheduled",
      "3,200 ongoing patients acquired",
      "28% lower CAC than digital channels"
    ]
  },
  {
    id: "financeapp",
    client: "FinanceApp",
    industry: "Finance",
    title: "560% ROI: Fintech App Acquisition",
    description: "Mobile-first fintech app's CTV campaign driving app installs and account openings.",
    challenge: "Drive mobile app installs from living room TV viewing, overcoming the attribution challenge of CTV to mobile conversions.",
    solution: "QR code integration in CTV creative, cross-device targeting strategy, and partnership with smart TV platforms for seamless app download.",
    metrics: {
      roi: "560%",
      adSpend: "$350K",
      impressions: "22M",
      primaryMetric: "App Signups",
      primaryMetricValue: "8,900"
    },
    results: [
      "560% return on ad spend",
      "8,900 funded accounts",
      "42% signup-to-funded conversion",
      "$12M in customer lifetime value"
    ]
  }
];

// Aggregate metrics across all case studies
export const aggregateMetrics = {
  totalAdSpend: "$3.8M",
  totalImpressions: "210M",
  averageROI: "445%",
  totalClients: "230+",
  totalRevenue: "$500M+"
};

export const industries = [
  "All",
  "Automotive",
  "Retail",
  "Technology",
  "Entertainment",
  "Healthcare",
  "Finance"
];
