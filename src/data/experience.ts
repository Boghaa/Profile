export type Role = {
  company: string;
  title: string;
  period: string;
  themes: string[];
};

export const experience: Role[] = [
  {
    company: "BraceDev",
    title: "Technical Lead · Senior Odoo Developer & System Administrator",
    period: "2024 — Present",
    themes: [
      "Backend architecture",
      "Odoo 17/18",
      "REST APIs",
      "Authentication",
      "Communication platforms",
      "WhatsApp automation",
      "Ubuntu · Proxmox · Nginx",
      "Technical leadership",
      "Code reviews",
      "Frontend integration",
    ],
  },
  {
    company: "HalaKommers",
    title: "Senior Backend Developer",
    period: "2025",
    themes: [
      "CRM backend",
      "Seller onboarding",
      "Lead workflows",
      "APIs",
      "Inventory · Purchase · HR · Accounting integrations",
      "Frontend coordination",
    ],
  },
  {
    company: "Parmja Tech",
    title: "Senior Odoo Developer — Project Based",
    period: "2025",
    themes: [
      "Logistics platform",
      "Odoo backend",
      "React / Next.js frontend",
      "JWT APIs",
      "Vehicles · Trips · Rentals · Wallets · Commissions",
      "API documentation",
      "Role-based dashboards",
    ],
  },
  {
    company: "Egyptian Air Force",
    title: "System Administrator & DevOps — Military Service",
    period: "2023/06 — 2024/06",
    themes: [
      "Infrastructure",
      "Server security",
      "Patching · Backups",
      "System stability",
      "Deployment processes",
      "LMS platform",
      "Internal documentation",
    ],
  },
  {
    company: "AlAcademia",
    title: "Programming Instructor — Part Time",
    period: "2021 — 2022",
    themes: ["Python", "Web development", "Student projects", "Software design guidance"],
  },
];