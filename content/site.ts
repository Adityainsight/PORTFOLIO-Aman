export type Link = { label: string; href: string };
export type Block = { heading: string; body: string[] };
export type Project = {
  slug: string;
  name: string;
  tagline: string;
  role?: string;
  draft?: boolean;
  missing?: string[];
  summary: { problem?: string; product?: string; engineering?: string; impact?: string };
  blocks: Block[];
  links: Link[];
  color?: string; // brutalist card color
};

export const site = {
  name: "Aman Sharma",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  eyebrow: "Product Manager & Agile Leader",
  statement:
    "Product Management professional with nearly 5 years of experience in end-to-end delivery across Mobility (D2C) and Motor Insurance domains.",
  target: "Open to Product Manager and Agile Leadership roles.",
  location: "Gurugram, India",
  email: "asaman94@gmail.com",
  linkedin: "https://linkedin.com/in/aman-sharma-365914136",
  github: "https://github.com/asaman94",
};

export const projects: Project[] = [
  {
    slug: "maruti-suzuki-crm",
    name: "Enterprise CRM",
    tagline: "End-to-end implementation and lifecycle management of the enterprise CRM project at Maruti Suzuki.",
    color: "bg-primary",
    summary: {
      problem: "High operational costs and need for robust customer relationship management.",
      product: "Enterprise CRM with a migrated PostgreSQL database.",
      impact: "Achieved a 30% reduction in operational costs through MSSQL to PostgreSQL migration.",
    },
    blocks: [
      {
        heading: "Context",
        body: ["Spearheaded the enterprise CRM project at Maruti Suzuki India Ltd."],
      },
      {
        heading: "Database Migration",
        body: ["Migrated the CRM database from MSSQL to PostgreSQL, significantly reducing licensing and operational costs."],
      }
    ],
    links: [],
  },
  {
    slug: "ondc-mobility",
    name: "ONDC Mobility App",
    tagline: "Direct-to-Consumer (D2C) ride-hailing application utilizing the ONDC network.",
    color: "bg-secondary",
    summary: {
      problem: "Need for decentralized ride-hailing services.",
      product: "D2C application integrated with ONDC for decentralized services.",
    },
    blocks: [
      {
        heading: "Product",
        body: ["Driving the development of a Direct-to-Consumer (D2C) ride-hailing application on the ONDC network."],
      }
    ],
    links: [],
  },
  {
    slug: "motor-insurance",
    name: "Motor Insurance Broking",
    tagline: "Managed a high-traffic Motor Insurance Broking application.",
    color: "bg-accent",
    summary: {
      problem: "Managing high-traffic insurance applications securely.",
      product: "Motor Insurance Broking application with high project hygiene and compliance.",
    },
    blocks: [
      {
        heading: "Role",
        body: ["Ensured compliance and high project hygiene for a major insurance broking application."],
      }
    ],
    links: [],
  },
];

export const visibleProjects = () =>
  projects.filter((p) => !p.draft || process.env.NODE_ENV !== "production");

export const services = [
  { name: "PRODUCT MANAGEMENT", color: "bg-secondary" },
  { name: "AGILE DELIVERY", color: "bg-accent" },
  { name: "DATABASE MIGRATION", color: "bg-primary" },
  { name: "CRM LEADERSHIP", color: "bg-secondary" },
  { name: "ONDC MOBILITY", color: "bg-pink" },
  { name: "SYSTEM ARCHITECTURE", color: "bg-cream" },
];

export const tools = [
  "PostgreSQL", "Java", "Angular", "AWS", "Jira", "Jenkins"
];

export const experience = [
  {
    year: "2023 - Present",
    role: "Product Manager",
    org: "Maruti Suzuki India Ltd.",
    points: [
      "Successfully spearheaded the end-to-end implementation and lifecycle management of the enterprise CRM project.",
      "Migrated the CRM database from MSSQL to PostgreSQL, achieving a 30% reduction in operational costs.",
      "Driving the development of a Direct-to-Consumer (D2C) ride-hailing application utilizing the ONDC network.",
      "Managed a high-traffic Motor Insurance Broking application.",
      "Own and manage project budgets, forecasting, and variance analysis.",
      "Lead CI/CD implementation and Agile sprints."
    ],
  },
  {
    year: "2021 - 2023",
    role: "Assistant System Engineer",
    org: "Tata Consultancy Services",
    points: [
      "Delivered enterprise applications within structured governance and compliance frameworks.",
      "Supported project documentation, reporting, and deployment coordination.",
      "Collaborated with cross-functional technical teams in Agile environments."
    ],
  }
];
