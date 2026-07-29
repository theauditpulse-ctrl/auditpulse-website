import {
  BookOpen,
  Receipt,
  Landmark,
  Calculator,
  Briefcase,
} from "lucide-react";

export const resourceCategories = [
  {
    icon: Receipt,
    title: "Income Tax",
    desc: "Guides, tax planning and return filing.",
  },
  {
    icon: Calculator,
    title: "GST",
    desc: "Registration, returns and compliance.",
  },
  {
    icon: BookOpen,
    title: "Accounting",
    desc: "Bookkeeping and financial reporting.",
  },
  {
    icon: Landmark,
    title: "Company Law",
    desc: "ROC and corporate compliance.",
  },
  {
    icon: Briefcase,
    title: "Business Advisory",
    desc: "Practical growth and finance advice.",
  },
];

export const featuredArticles = [
  "Income Tax Return Filing Guide",
  "GST Registration Process",
  "Tax Saving Checklist",
  "ROC Annual Filing Guide",
  "Startup Compliance Checklist",
  "Accounting Basics for Small Businesses",
];

export const resourcesIntro = {
  title: "Resources & Insights",
  description:
    "Useful guides, compliance updates and practical articles to help individuals and businesses stay informed.",
};

export const downloadCenter = {
  title: "Download Centre",
  description:
    "Tax checklists, compliance calendars and useful templates will be available here soon.",
  ctaLabel: "Request Professional Assistance",
};
