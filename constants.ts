import { FileText, Users, Calendar, Video, Layout, Star, Globe, TrendingUp, Shield, HelpCircle, MapPin } from 'lucide-react';

export interface PageData {
  path: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  outline: string[];
  category?: string;
  icon?: any;
}

export const SITEMAP: PageData[] = [
  // Homepage
  {
    path: "/",
    title: "Digital Clinic Software for Solo Doctors",
    metaDescription: "Manage appointments, patients & grow your clinic with Clinexy. Reduce no-shows, save time & own your patients.",
    keywords: ["digital clinic software", "appointment system for doctors", "clinic management software", "solo doctor software"],
    outline: ["Hero (Pain + Promise)", "How it Works", "Key Benefits", "Social Proof", "CTA"],
    category: "Main"
  },
  // Solutions
  {
    path: "/solutions/solo-doctors",
    title: "Software for Solo Doctors to Manage & Grow Clinics",
    metaDescription: "All-in-one digital clinic platform for independent doctors. Appointments, branding, reminders & growth.",
    keywords: ["software for solo doctors", "clinic management for doctors", "practice management"],
    outline: ["Pain Points Analysis", "Before/After Scenario", "Features by Outcome", "ROI Calculator", "Pricing CTA"],
    category: "Solutions",
    icon: Users
  },
  // Features
  {
    path: "/features/appointments-reminders",
    title: "Appointment Booking & Reminders for Doctors",
    metaDescription: "Online booking, WhatsApp reminders & no-show reduction for solo doctors.",
    keywords: ["appointment booking for doctors", "patient reminders", "no-show reduction"],
    outline: ["Booking Workflow", "Approval System", "WhatsApp Reminders", "No-show Reduction Stats"],
    category: "Features",
    icon: Calendar
  },
  {
    path: "/features/teleconsultation-prescriptions",
    title: "Teleconsultation & Digital Prescriptions for Doctors",
    metaDescription: "Consult online, issue digital prescriptions & manage patient records easily.",
    keywords: ["teleconsultation software", "digital prescriptions", "telehealth"],
    outline: ["Video Consultation", "Digital Rx Builder", "PDF Generation", "Compliance & Security"],
    category: "Features",
    icon: Video
  },
  {
    path: "/features/patient-management",
    title: "Patient Management System for Solo Doctors",
    metaDescription: "Manage patients, records, reports & appointment history securely.",
    keywords: ["patient management system", "electronic medical records", "EMR"],
    outline: ["Patient Login Portal", "Digital Health Records", "Reports Dashboard", "History Tracking"],
    category: "Features",
    icon: Users
  },
  {
    path: "/features/doctor-branding-growth",
    title: "Doctor Personal Branding & Clinic Growth Software",
    metaDescription: "Build your personal doctor brand, website, reviews & patient growth automatically.",
    keywords: ["doctor personal website", "doctor marketing software", "clinic growth"],
    outline: ["Personal Website Builder", "Review Collection", "Google Visibility", "Patient Recall Campaigns"],
    category: "Features",
    icon: TrendingUp
  },
  {
    path: "/features/doctor-website",
    title: "Personal Website for Doctors",
    metaDescription: "Your own doctor website with bookings, patient login & trust signals.",
    keywords: ["doctor personal website", "clinic website builder", "SEO for doctors"],
    outline: ["Why you need a website", "What’s included", "SEO Benefits", "Live Examples"],
    category: "Features",
    icon: Layout
  },
  {
    path: "/features/reviews-reputation",
    title: "Doctor Reviews & Reputation Management",
    metaDescription: "Get more 5-star reviews & build patient trust automatically.",
    keywords: ["doctor reviews software", "clinic reputation management", "google reviews"],
    outline: ["Review Automation", "Google Integration", "Trust Impact Analysis", "Handling Negative Feedback"],
    category: "Features",
    icon: Star
  },
  // Pricing
  {
    path: "/pricing/solo-doctors",
    title: "Pricing for Solo Doctors",
    metaDescription: "Simple, affordable pricing for independent doctors. No commissions. No lock-in.",
    keywords: ["doctor software pricing", "clinic software cost"],
    outline: ["Pricing Plan", "What’s included", "ROI Math", "FAQs"],
    category: "Pricing",
    icon: HelpCircle
  },
  {
    path: "/pricing/solo-doctors/india",
    title: "Clinic Software for Doctors at ₹999/month",
    metaDescription: "Affordable digital clinic software for Indian doctors.",
    keywords: ["clinic software ₹999", "india doctor software"],
    outline: ["Local Pain Points", "Indian Pricing Plan", "Comparison with Local Competitors"],
    category: "Pricing",
    icon: MapPin
  },
  {
    path: "/pricing/solo-doctors/global",
    title: "Global Pricing for Solo Doctors",
    metaDescription: "Region-wise pricing for doctors worldwide.",
    keywords: ["clinic software worldwide", "global doctor software"],
    outline: ["Region Pricing Table", "Compliance by Region", "Global CTA"],
    category: "Pricing",
    icon: Globe
  },
  // Comparisons
  {
    path: "/compare/clinexy-vs-practo",
    title: "Clinexy vs Practo for Doctors",
    metaDescription: "Why solo doctors switch from Practo to Clinexy.",
    keywords: ["practo alternative", "clinexy vs practo"],
    outline: ["Fees & Commission", "Data Ownership", "Growth Potential"],
    category: "Compare",
    icon: TrendingUp
  },
  {
    path: "/compare/clinexy-vs-simplepractice",
    title: "Clinexy vs SimplePractice",
    metaDescription: "A simpler, growth-focused alternative to SimplePractice.",
    keywords: ["simplepractice alternative", "clinexy vs simplepractice"],
    outline: ["Complexity Analysis", "Cost Comparison", "Branding Capabilities"],
    category: "Compare",
    icon: TrendingUp
  },
  {
    path: "/compare/clinexy-vs-cliniko",
    title: "Clinexy vs Cliniko",
    metaDescription: "Why Clinexy is better for growth-focused solo doctors.",
    keywords: ["cliniko alternative", "clinexy vs cliniko"],
    outline: ["PMS Features vs Growth Tools", "User Experience", "Support"],
    category: "Compare",
    icon: TrendingUp
  },
  {
    path: "/compare/clinexy-vs-mocdoc",
    title: "Clinexy vs MocDoc",
    metaDescription: "Clinic software comparison for solo doctors.",
    keywords: ["mocdoc alternative", "clinexy vs mocdoc"],
    outline: ["Feature Comparison", "UX/UI Design", "Growth Automation"],
    category: "Compare",
    icon: TrendingUp
  },
  // Locations
  {
    path: "/in",
    title: "Clinic Software for Indian Doctors",
    metaDescription: "Reduce no-shows & grow your clinic in India with Clinexy.",
    keywords: ["clinic software india", "doctor software india"],
    outline: ["India Specific Pain Points", "Pricing in INR", "WhatsApp Integration Importance"],
    category: "Locations",
    icon: MapPin
  },
  {
    path: "/id",
    title: "Software for Doctors in Indonesia",
    metaDescription: "Mobile-first clinic software for Indonesian doctors.",
    keywords: ["clinic software indonesia", "dokter software"],
    outline: ["Local Market Adoption", "Pricing in IDR", "Mobile Features"],
    category: "Locations",
    icon: MapPin
  },
  {
    path: "/ph",
    title: "Clinic Management Software – Philippines",
    metaDescription: "Simple clinic software for solo doctors in Philippines.",
    keywords: ["clinic software philippines", "doctor app ph"],
    outline: ["Pain Points", "Solution for PH Doctors", "Connectivity Solutions"],
    category: "Locations",
    icon: MapPin
  },
  {
    path: "/my",
    title: "Clinic Software for Malaysian Doctors",
    metaDescription: "Grow your clinic with reminders & branding in Malaysia.",
    keywords: ["clinic software malaysia", "doctor software my"],
    outline: ["Features for MY", "Pricing in MYR", "Compliance"],
    category: "Locations",
    icon: MapPin
  },
  {
    path: "/sg",
    title: "Doctor Software for Singapore Clinics",
    metaDescription: "Premium clinic software with analytics & branding for Singapore.",
    keywords: ["clinic software singapore", "sg doctor tools"],
    outline: ["Compliance (PDPA)", "ROI for High Cost Market", "Premium Features"],
    category: "Locations",
    icon: MapPin
  },
  // Resources
  {
    path: "/resources/for-doctors",
    title: "Resources for Solo Doctors",
    metaDescription: "Guides, tools & insights to grow your clinic.",
    keywords: ["practice management tips", "doctor resources"],
    outline: ["Comprehensive Guides", "Free Tools", "Case Studies Library"],
    category: "Resources",
    icon: FileText
  },
  {
    path: "/resources/reduce-no-shows",
    title: "How to Reduce Patient No-Shows",
    metaDescription: "Proven ways doctors reduce no-shows by 40%.",
    keywords: ["reduce no-shows", "patient attendance"],
    outline: ["The No-Show Problem", "Proven Solutions", "CTA to Software"],
    category: "Resources",
    icon: FileText
  },
  {
    path: "/case-studies/solo-doctors",
    title: "Solo Doctor Success Stories",
    metaDescription: "How doctors grow clinics using Clinexy.",
    keywords: ["doctor success stories", "clinic case studies"],
    outline: ["Before Implementation", "The Transformation", "Key Metrics & Results"],
    category: "Resources",
    icon: Users
  },
  // Utility
  {
    path: "/free-trial",
    title: "Free Trial – Clinic Software for Doctors",
    metaDescription: "Start a free trial. No credit card required.",
    keywords: ["free clinic software", "doctor software trial"],
    outline: ["Benefits Summary", "Signup Form", "Onboarding Steps"],
    category: "Utility",
    icon: Star
  },
  {
    path: "/demo",
    title: "Book a Demo – Clinexy",
    metaDescription: "See how Clinexy works for solo doctors.",
    keywords: ["clinic software demo", "book demo"],
    outline: ["Demo Request Form", "What to Expect", "Key Benefits Recap"],
    category: "Utility",
    icon: Video
  },
  {
    path: "/security",
    title: "Data Security & Privacy",
    metaDescription: "Your patient data is secure & owned by you.",
    keywords: ["healthcare data security", "hipaa compliant software"],
    outline: ["Security Infrastructure", "Compliance Certifications", "Data Ownership Policy"],
    category: "Utility",
    icon: Shield
  },
  {
    path: "/terms",
    title: "Terms of Service",
    metaDescription: "Clinexy terms of service.",
    keywords: ["terms of service"],
    outline: ["User Agreements", "Liability", "Service Usage"],
    category: "Legal",
    icon: FileText
  },
  {
    path: "/privacy",
    title: "Privacy Policy",
    metaDescription: "Patient data protection explained.",
    keywords: ["privacy policy", "data protection"],
    outline: ["Data Collection", "Usage Policies", "User Rights"],
    category: "Legal",
    icon: Shield
  }
];

export const NAV_ITEMS = [
  {
    label: "Product",
    sections: {
      "Core Features": SITEMAP.filter(p => p.category === "Features"),
      "Solutions": SITEMAP.filter(p => p.category === "Solutions"),
    }
  },
  {
    label: "Pricing",
    path: "/pricing/solo-doctors"
  },
  {
    label: "Compare",
    sections: {
      "Alternatives": SITEMAP.filter(p => p.category === "Compare"),
    }
  }
];