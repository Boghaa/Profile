export type Capability = {
  number: string;
  title: string;
  description: string;
  themes: string[];
};

export const capabilities: Capability[] = [
  {
    number: "01",
    title: "Backend Platforms",
    description:
      "API-first applications, complex business workflows, domain modeling, authentication systems, integrations, and maintainable backend architecture.",
    themes: ["REST APIs", "Domain Modeling", "Business Logic", "JWT", "Integrations"],
  },
  {
    number: "02",
    title: "SaaS Architecture",
    description:
      "Multi-tenant platforms, multi-database environments, tenant isolation, subscription architecture, authentication scopes, and tenant-bound data access.",
    themes: ["Multi-Tenant", "Multi-Database", "Tenant Isolation", "Platform Access", "Subscriptions"],
  },
  {
    number: "03",
    title: "Real-Time Systems",
    description:
      "Messaging platforms, meeting workflows, event-driven integrations, WebSockets, notifications, and LiveKit-powered audio and video systems.",
    themes: ["Messaging", "Meetings", "LiveKit", "WebSockets", "Events"],
  },
  {
    number: "04",
    title: "Production Infrastructure",
    description:
      "Linux production environments, PostgreSQL, Nginx, deployments, backups, monitoring, troubleshooting, security hardening, and reliability.",
    themes: ["Linux", "PostgreSQL", "Nginx", "Deployment", "Security"],
  },
];

export const capabilityGroups = [
  {
    title: "Backend Engineering",
    items: ["Python", "Odoo 14–18", "REST APIs", "JWT", "Domain Modeling", "Business Logic", "API Integration"],
  },
  {
    title: "Data Systems",
    items: ["PostgreSQL", "Database Design", "Transactions", "Multi-Database Architecture", "Data Isolation", "Query Analysis"],
  },
  {
    title: "Infrastructure",
    items: ["Linux", "Ubuntu", "Nginx", "Proxmox", "VMware", "Backups", "Firewall", "Fail2ban", "Log Analysis"],
  },
  {
    title: "Integration",
    items: ["React", "Next.js", "Mobile Backend APIs", "WhatsApp APIs", "LiveKit", "WebSockets", "Supplier APIs", "Shopify"],
  },
  {
    title: "Security",
    items: ["Authentication", "Authorization", "RBAC", "JWT Lifecycle", "Token Revocation", "Tenant Isolation", "API Security", "Server Hardening"],
  },
];