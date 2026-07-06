export type ArchitectureNode = string;
export type ArchitectureDiagram = {
  title?: string;
  /** Each layer is a row (top-to-bottom). Multiple nodes in a row branch horizontally. */
  layers: ArchitectureNode[][];
  caption?: string;
};

export type CaseSection = {
  title: string;
  body?: string;
  list?: string[];
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  titleAr?: string;
  subtitleAr?: string;
  summaryAr?: string;
  category: string;
  categories: string[];
  role: string[];
  domain: string;
  platform: string;
  cover?: string;
  gallery: string[];
  summary: string;
  sections: CaseSection[];
  architecture: ArchitectureDiagram[];
  techStack: string[];
  takeaways: string[];
};

export const projects: Project[] = [
  {
    slug: "sama",
    number: "01",
    title: "Sama Al Rawsha",
    subtitle: "Travel Platform · Smart Planning & Supplier Integration Architecture",
    titleAr: "سما الروشة",
    subtitleAr: "منصة سفر · معمارية تخطيط ذكي وتكامل موردين",
    summaryAr: "منصة رقمية للسفر والسياحة مبنية حول Backend مركزي على Odoo 18 ومعمارية REST API تخدم تجارب الويب والموبايل — منظّمة عبر مجالات المحتوى والتجارة والتخصيص وتحليلات النمو وتكامل الموردين.",
    category: "Travel",
    categories: ["Travel", "Business Operations"],
    role: ["Backend Architecture", "API Design", "Domain Modeling", "Integration Design"],
    domain: "Travel & Tourism",
    platform: "Odoo 18 · REST API · React & Mobile clients",
    cover: "/projects/sama/Capture.PNG",
    gallery: ["/projects/sama/Capture.PNG", "/projects/sama/2.PNG", "/projects/sama/3e.PNG"],
    summary:
      "A digital travel and tourism platform built around a centralized Odoo 18 backend and REST API architecture serving both web and mobile experiences — organized across content, commerce, personalization, growth analytics and supplier integration domains.",
    sections: [
      {
        title: "Overview",
        body:
          "Sama Al Rawsha is not a simple CRUD application. The backend is organized as several business domains that together power a public travel platform and its mobile companion.",
      },
      {
        title: "Travel Content Domain",
        list: ["Destinations", "Areas", "Hotels", "Activities", "Videos"],
      },
      {
        title: "Travel Commerce Domain",
        list: [
          "Packages",
          "Daily plans",
          "Alternative hotels",
          "Activities",
          "Features & upgrades",
          "Pricing",
        ],
      },
      {
        title: "Personalization",
        body:
          "Smart planning composes recommendations from preferences and travel context. The recommendation architecture is designed as a composable rule layer above the content and commerce domains.",
      },
      {
        title: "Growth & Analytics",
        list: [
          "Event tracking",
          "Package views",
          "Hotel views",
          "Video views",
          "WhatsApp conversion tracking",
        ],
      },
      {
        title: "Supplier Integration Abstraction",
        body:
          "External inventory is unified behind a supplier integration layer. Hotel and room mapping, availability, pricing and scheduled sync are expressed as a common connector interface, with eBooking as the first concrete adapter and room to plug in future suppliers.",
      },
      {
        title: "Engineering Decisions",
        list: [
          "Domains modeled as separate, composable modules rather than one monolithic feature set",
          "REST API as the only integration point for web and mobile",
          "Supplier operations abstracted through a connector interface",
          "Analytics events treated as first-class business signals",
        ],
      },
    ],
    architecture: [
      {
        title: "Platform Topology",
        layers: [
          ["Web Frontend", "Mobile App"],
          ["REST API Layer"],
          ["Odoo 18 Backend"],
          ["Content", "Commerce", "Analytics"],
          ["Supplier Integration Layer"],
          ["eBooking", "Supplier B", "Supplier C (future)"],
        ],
      },
    ],
    techStack: [
      "Python",
      "Odoo 18",
      "PostgreSQL",
      "REST API",
      "JWT",
      "Nginx",
      "Linux",
      "React / Mobile clients",
    ],
    takeaways: [
      "Domain-oriented backend structure keeps travel content, commerce, personalization and integrations independently evolvable.",
      "A supplier abstraction turns inventory partners into pluggable adapters instead of one-off integrations.",
      "Event-based analytics make WhatsApp conversion visible as part of the product loop.",
    ],
  },
  {
    slug: "braces",
    number: "02",
    title: "Braces",
    subtitle: "Multi-Tenant Real-Time Collaboration Platform",
    titleAr: "Braces",
    subtitleAr: "منصة تعاون Multi-Tenant في الوقت الحقيقي",
    category: "Real-Time",
    categories: ["Real-Time", "SaaS"],
    role: [
      "Backend Architecture",
      "Authentication Design",
      "Real-Time Systems",
      "LiveKit Integration",
    ],
    domain: "Team communication",
    platform: "Odoo REST platform · LiveKit · Multi-tenant direction",
    cover: "/projects/braces/34.PNG",
    gallery: ["/projects/braces/34.PNG", "/projects/braces/Capture.PNG", "/projects/braces/C2apture.PNG"],
    summary:
      "An architecture-led real-time collaboration platform: identity, messaging and meeting metadata live in an Odoo REST backend, while LiveKit is delegated the responsibility of transporting audio and video media.",
    sections: [
      {
        title: "Overview",
        body:
          "Braces is engineered around a clear separation between the business backend and the media plane. The Odoo platform owns identity, permissions, messaging and meeting metadata; LiveKit owns the media transport.",
      },
      {
        title: "Authentication Model",
        list: [
          "JWT signup and login",
          "Token lifecycle management",
          "Role-based access",
          "User approval",
          "Online / Away / Offline presence",
        ],
      },
      {
        title: "Real-Time Messaging",
        list: [
          "Projects & direct messages",
          "Text, emoji, images, GIFs",
          "Voice messages",
          "Read receipts",
          "Typing indicator",
        ],
      },
      {
        title: "Meeting Workflow",
        list: [
          "Meeting creation",
          "Join requests & host approval",
          "Membership, mute, camera, deafen state",
          "Meeting chat",
          "Leave / End meeting",
          "LiveKit token generation",
          "Audio & video conferencing",
        ],
      },
      {
        title: "Why LiveKit Handles Media",
        body:
          "Business logic and media transport have different failure modes and scaling profiles. Odoo remains the source of truth for identity, membership and permissions; LiveKit is issued short-lived tokens per meeting and handles participants, audio and video.",
      },
      {
        title: "Multi-Tenant Direction",
        body:
          "The platform is evolving toward multi-database SaaS with tenant-aware database access, so tenants share nothing at the data layer.",
      },
    ],
    architecture: [
      {
        title: "System Architecture",
        layers: [
          ["Frontend Applications"],
          ["Nginx"],
          ["Odoo REST API Platform"],
          ["Auth", "Chat", "Meetings"],
          ["Tenant Context", "LiveKit"],
          ["Tenant Database"],
        ],
      },
    ],
    techStack: ["Python", "Odoo", "PostgreSQL", "JWT", "LiveKit", "WebSockets", "Nginx", "Linux"],
    takeaways: [
      "Separate business backend from media transport for a cleaner failure and scaling story.",
      "Meeting membership and permissions belong in the business backend, not the media SDK.",
      "Design toward multi-database tenancy from the start — retrofitting is costly.",
    ],
  },
  {
    slug: "hr-platform",
    number: "03",
    title: "Mobile Workforce & Geo-Fenced Attendance",
    subtitle: "HR Platform · Attendance Security · Payroll Flow",
    titleAr: "قوى عاملة متنقلة وحضور Geo-Fenced",
    subtitleAr: "منصة موارد بشرية · أمان الحضور · تدفق الرواتب",
    category: "Business Operations",
    categories: ["Business Operations", "SaaS"],
    role: [
      "Backend Architecture",
      "Attendance Security",
      "Authorization",
      "Domain Modeling",
    ],
    domain: "HR & Workforce",
    platform: "Odoo backend · Mobile client · Socket events",
    cover: "/projects/hr/Capture.PNG",
    gallery: [
      "/projects/hr/Capture.PNG",
      "/projects/hr/Capture1.PNG",
      "/projects/hr/3.PNG",
      "/projects/hr/4.PNG",
    ],
    summary:
      "An HR backend for admin, department managers and employees, combining geo-fenced attendance, device and biometric policy, shift architecture and payroll into a single coherent domain.",
    sections: [
      {
        title: "Roles & Access Model",
        list: ["Admin / HR", "Department Managers", "Employees"],
      },
      {
        title: "Attendance Security Architecture",
        list: [
          "JWT authentication",
          "Mobile device management",
          "Face template architecture",
          "Biometric security policies",
          "Face match & liveness",
          "GPS accuracy",
          "Root / jailbreak policy concepts",
        ],
      },
      {
        title: "Geo-Fence Workflow",
        body:
          "Each check-in passes through device verification, biometric verification, GPS resolution and geo-fence validation before it becomes a raw attendance event. Approved events flow directly; ambiguous ones move to correction review.",
      },
      {
        title: "Shift Architecture",
        list: [
          "Shifts",
          "Late grace periods",
          "Early leave rules",
          "Deduction rules",
          "Leave management",
        ],
      },
      {
        title: "Payroll Flow",
        body:
          "Salary profiles, payroll cycles and payroll lines aggregate approved attendance, leaves and deductions. Payroll integration is a work in progress and is described honestly as an evolving surface, not a completed feature.",
      },
      {
        title: "Real-Time Events",
        body:
          "Socket events push attendance state changes to relevant dashboards for near-real-time visibility.",
      },
    ],
    architecture: [
      {
        title: "Attendance Flow",
        layers: [
          ["Mobile App"],
          ["Device / Biometric Verification"],
          ["GPS Location"],
          ["Geo-Fence Validation"],
          ["Raw Attendance Event"],
          ["Approved", "Pending Review"],
          ["hr.attendance"],
          ["Shifts", "Leaves", "Deductions"],
          ["Payroll"],
        ],
      },
    ],
    techStack: ["Python", "Odoo", "PostgreSQL", "JWT", "WebSockets", "Mobile SDK", "Linux"],
    takeaways: [
      "Attendance security is a chain — one weak link (device, biometric, GPS, geofence) invalidates the whole event.",
      "Corrections deserve their own workflow, not silent overrides.",
      "Payroll should be treated as an evolving surface with explicit integration boundaries.",
    ],
  },
  {
    slug: "healthcare-saas",
    number: "04",
    title: "Healthcare Multi-Tenant SaaS",
    subtitle: "Multi-Database Clinic Platform · Tenant-Aware API Architecture",
    titleAr: "منصة رعاية صحية Multi-Tenant SaaS",
    subtitleAr: "منصة عيادات متعددة قواعد البيانات · معمارية API مرتبطة بالمستأجر",
    category: "Healthcare",
    categories: ["Healthcare", "SaaS"],
    role: [
      "Backend Architecture",
      "Multi-Tenant Design",
      "Authentication Architecture",
      "SaaS Control Plane",
    ],
    domain: "Healthcare",
    platform: "Odoo 18 Enterprise · Multi-Database SaaS",
    gallery: [],
    summary:
      "A clinic platform evolving into a multi-database SaaS: authentication identity and tenant data context are treated as separate concerns, enforced by a token-bound Odoo environment resolved per request.",
    sections: [
      {
        title: "From Clinic System to SaaS Platform",
        body:
          "The platform started as a clinic operations system and is being turned into a true multi-tenant SaaS where each clinic lives in its own database.",
      },
      {
        title: "The Multi-Database Challenge",
        body:
          "In a naive setup, authentication can succeed while the HTTP request environment is still connected to the public database instead of the tenant database. That mismatch is a data isolation risk, not a bug.",
      },
      {
        title: "Authentication vs Data Context",
        body:
          "Authentication identity and tenant data context are separate concerns. A valid JWT does not automatically mean that request.env is connected to the correct tenant database.",
      },
      {
        title: "Token-Bound Environment",
        body:
          "After JWT verification, the trusted tenant database is resolved from the token and the Odoo environment is rebuilt against that database before any domain code runs. Tenant boundaries are enforced at the data access level, not by convention.",
      },
      {
        title: "Transaction Boundaries",
        body:
          "Write operations on independent cursors require explicit transaction management: open tenant cursor → execute → commit on success, rollback on failure, close cursor.",
      },
      {
        title: "SaaS Control Plane",
        list: [
          "Plans & plan features",
          "Add-ons",
          "Tenants",
          "Subscriptions & subscription requests",
          "Change requests",
          "Provision jobs",
          "Token scopes (saas_admin, tenant_access)",
        ],
      },
      {
        title: "Business Domains",
        list: [
          "Patients · Doctors · Specialists",
          "Services · Booking packages · Session generation",
          "Availability · Medical devices",
          "Billing · Invoices · Payments · Cashboxes · Credit notes · Wallet",
          "Ratings · Accounting integrations",
        ],
      },
      {
        title: "Platform Evolution",
        body:
          "Not every provisioning step is fully automated yet. The foundation — token-bound environment, tenant isolation, control plane models — is in place; automation and self-service continue to evolve.",
      },
    ],
    architecture: [
      {
        title: "Token-Bound Environment",
        layers: [
          ["Frontend / Mobile"],
          ["Nginx"],
          ["Public API Instance"],
          ["JWT Authentication"],
          ["Trusted Tenant DB Resolution"],
          ["Token-Bound Odoo Environment"],
          ["Tenant A", "Tenant B"],
        ],
      },
      {
        title: "Transaction Model",
        layers: [
          ["Open Tenant Cursor"],
          ["Execute Operation"],
          ["Success", "Failure"],
          ["Commit", "Rollback"],
          ["Close Cursor"],
        ],
      },
    ],
    techStack: [
      "Python",
      "Odoo 18 Enterprise",
      "PostgreSQL (multi-database)",
      "JWT",
      "REST API",
      "Nginx",
      "Linux",
    ],
    takeaways: [
      "Authentication is not authorization; authorization is not tenant context.",
      "Tenant boundaries must be enforced at the data-access layer, not by application convention.",
      "A control plane (plans, subscriptions, provisioning) is a first-class part of any real SaaS.",
    ],
  },
  {
    slug: "rayan-pos",
    number: "05",
    title: "Rayan POS",
    subtitle: "Multi-Warehouse Retail & Financial Operations Platform",
    titleAr: "Rayan POS",
    subtitleAr: "منصة تجزئة متعددة المخازن وعمليات مالية",
    category: "Business Operations",
    categories: ["Business Operations"],
    role: [
      "Backend Architecture",
      "Domain Modeling",
      "Authorization",
      "API Design",
    ],
    domain: "Retail & POS",
    platform: "Odoo backend · Custom POS · WhatsApp / OTP",
    cover: "/projects/pos/2.PNG",
    gallery: [
      "/projects/pos/2.PNG",
      "/projects/pos/3.PNG",
      "/projects/pos/4.PNG",
      "/projects/pos/Capture.PNG",
    ],
    summary:
      "A retail platform covering multi-warehouse inventory, product variants and units, cashbox and financial operations, all served by a consistent JSON API with JWT and OTP authentication.",
    sections: [
      {
        title: "Domain Architecture",
        list: [
          "Sales · Purchasing",
          "Warehouses · Inventory · Stock balances",
          "Product variants · Attributes · Barcodes",
          "Separate purchase and sales units with conversion rates",
          "Stock transfers with validation",
        ],
      },
      {
        title: "Multi-Warehouse Flow",
        body:
          "Stock increases from purchases and decreases from sales are attributed to specific warehouses. Transfers move stock between warehouses under explicit validation rules and audit trails.",
      },
      {
        title: "Authorization",
        list: [
          "Admin and Cashier roles",
          "Warehouse visibility",
          "Cashbox visibility",
        ],
      },
      {
        title: "Cashbox Architecture",
        list: [
          "Receipts · Payments",
          "Revenue · Expenses",
          "Employee & supplier transactions",
          "Cashbox transfers",
        ],
      },
      {
        title: "Authentication",
        list: [
          "JWT with token validation, expiration and revocation",
          "OTP via WhatsApp",
          "Rate limiting concepts · message logs",
        ],
      },
      {
        title: "API Design",
        list: [
          "Pagination · filtering · search · sorting",
          "Standard JSON responses",
          "Validation rules",
          "Sequences · audit information · soft-delete behavior",
        ],
      },
    ],
    architecture: [
      {
        title: "Retail Platform Topology",
        layers: [
          ["POS Clients", "Admin UI"],
          ["REST API (JWT / OTP)"],
          ["Sales", "Purchasing", "Inventory", "Cashboxes"],
          ["PostgreSQL · Audit & Sequences"],
        ],
      },
    ],
    techStack: ["Python", "Odoo", "PostgreSQL", "JWT", "WhatsApp API", "Nginx", "Linux"],
    takeaways: [
      "Purchase and sales units belong to different mental models — model them separately.",
      "Cashbox visibility is authorization, not UI polish.",
      "Uniform JSON responses reduce coupling between backend and clients.",
    ],
  },
  {
    slug: "driver-platform",
    number: "06",
    title: "Dynamic B2B Service Workflow",
    subtitle: "Driver & Financial Operations Platform for Travel Companies",
    titleAr: "سير عمل خدمات B2B ديناميكي",
    subtitleAr: "منصة سائقين وعمليات مالية لشركات السفر",
    category: "Business Operations",
    categories: ["Business Operations"],
    role: [
      "Backend Architecture",
      "Dynamic Model Design",
      "Authorization",
      "Accounting Integration",
    ],
    domain: "Travel B2B services",
    platform: "Odoo backend · Accounting · WhatsApp / OTP",
    cover: "/projects/driver/Capture.PNG",
    gallery: [
      "/projects/driver/Capture.PNG",
      "/projects/driver/2.PNG",
      "/projects/driver/3.PNG",
      "/projects/driver/4.PNG",
    ],
    summary:
      "A B2B services platform where each service defines its own dynamic requirements — text, number, date, selection, files — with company-specific pricing, a full request lifecycle and integrated B2B/B2C accounting.",
    sections: [
      {
        title: "Dynamic Service Model",
        body:
          "Each service is defined by a dynamic set of requirements (text, number, date, selection, files/images) and validation rules (required vs optional). New service types are configuration, not code.",
      },
      {
        title: "Company-Specific Pricing",
        list: [
          "Fixed pricing",
          "Company-specific pricing overrides",
          "Price calculation, paid amount, residual, payment states",
        ],
      },
      {
        title: "Request Workflow",
        list: [
          "Passenger information · passport data",
          "States: New · Received · In Progress · Draft · Rejected · Deleted · Issued · Delivered",
        ],
      },
      {
        title: "B2B and B2C Accounting Context",
        list: [
          "B2B and B2C accounting customers",
          "Cashboxes · cash movements",
          "Receipts · payments · expenses · revenue · transfers",
          "Journal entries · Odoo accounting entries",
          "Invoices · payments",
        ],
      },
      {
        title: "Authentication & Communication",
        list: ["JWT authentication", "OTP · WhatsApp messaging", "Role boundaries"],
      },
      {
        title: "Authorization Challenges",
        body:
          "Travel company users can only see their own requests, prices and financials. Admins see the whole picture. This boundary is enforced at the query layer, not the presentation layer.",
      },
    ],
    architecture: [
      {
        title: "Request Lifecycle",
        layers: [
          ["Travel Company", "Admin"],
          ["REST API · JWT · OTP"],
          ["Dynamic Service Definitions"],
          ["Request States"],
          ["Cashbox", "Invoices", "Journal Entries"],
        ],
      },
    ],
    techStack: ["Python", "Odoo", "PostgreSQL", "JWT", "WhatsApp API", "Nginx", "Linux"],
    takeaways: [
      "Dynamic requirement schemas turn one service model into many product configurations.",
      "Financial context (B2B vs B2C) must be modeled explicitly.",
      "Authorization on shared-multitenant data has to live at the query layer.",
    ],
  },
  {
    slug: "edn",
    number: "07",
    title: "EDN Real Estate Platform",
    subtitle: "Headless Content & Business Platform Integration",
    titleAr: "منصة EDN العقارية",
    subtitleAr: "تكامل منصة محتوى وأعمال Headless",
    category: "Business Operations",
    categories: ["Business Operations"],
    role: [
      "Backend Architecture",
      "Headless Integration",
      "Forms & Automation",
    ],
    domain: "Real estate",
    platform: "Odoo backend · Public frontend",
    cover: "/projects/edn/Capture.PNG",
    gallery: [
      "/projects/edn/Capture.PNG",
      "/projects/edn/1.PNG",
      "/projects/edn/3.PNG",
      "/projects/edn/4.PNG",
    ],
    summary:
      "A public real estate experience powered by a headless Odoo backend: content, projects, banners and forms are managed and automated in the backend while the public frontend renders a fast, multilingual site.",
    sections: [
      {
        title: "Headless Architecture",
        body:
          "The public frontend is decoupled from backend business and content management. The frontend consumes structured data via APIs; the backend owns editorial workflow, forms and automation.",
      },
      {
        title: "Content Flow",
        list: [
          "Dynamic content management",
          "Projects · banners",
          "Multi-language public experience",
          "Backend-controlled content",
        ],
      },
      {
        title: "Forms & Automation",
        list: ["Forms", "Automated emails", "Lead capture into backend workflows"],
      },
      {
        title: "Frontend Integration",
        body:
          "Content shapes are contract-first so the public frontend and marketing teams can iterate independently from backend release cycles.",
      },
    ],
    architecture: [
      {
        title: "Content & Business Platform",
        layers: [
          ["Public Website"],
          ["Frontend Experience"],
          ["Backend APIs / Integration"],
          ["Odoo Backend"],
          ["Content", "Projects", "Forms"],
          ["Automated Communication"],
        ],
      },
    ],
    techStack: ["Python", "Odoo", "PostgreSQL", "REST API", "Nginx", "Linux"],
    takeaways: [
      "Public sites are best served by a headless backend when editorial workflow matters.",
      "Contract-first content shapes let frontend and backend release on different clocks.",
      "Automation lives with the domain model, not the presentation layer.",
    ],
  },
];

export const additionalSystems = [
  {
    title: "Aredo Salon ERP",
    kind: "ERP",
    summary:
      "Salon and beauty center ERP: bookings, employees, attendance, HR, rewards and penalties, cashboxes, accounting, invoices, customers, vendors, expenses, revenue, JWT, WhatsApp, OTP.",
    tags: ["ERP", "HR", "Accounting", "WhatsApp"],
  },
  {
    title: "HALA CRM",
    kind: "CRM",
    summary:
      "Dropshipping management and CRM: seller signup, onboarding, lead assignment, multi-role approval, inventory & purchase & HR & accounting integration, lead duplication detection and scoring, Shopify and EasyOrders integrations, WhatsApp communication.",
    tags: ["CRM", "Shopify", "Automation"],
  },
  {
    title: "Hotel Booking Platform",
    kind: "Booking",
    summary:
      "Hotels and rooms, booking lifecycle, financial settlement, OTP authentication, WhatsApp messaging, search tracking, cron jobs, automatic cancellations, reminder workflows, WebSocket updates, PDF financial reports.",
    tags: ["Booking", "Realtime", "OTP"],
  },
  {
    title: "Logistics Management Platform",
    kind: "Logistics",
    summary:
      "Users, trips, vehicle rentals, vehicles, suppliers, invoices, wallets, commissions, complaints, coupons, role-based dashboards, JWT APIs, React/Next.js frontend integration.",
    tags: ["Logistics", "JWT", "Next.js"],
  },
  {
    title: "WhatsApp Automation Engine",
    kind: "Infrastructure",
    summary:
      "OTP messages, reminders, confirmations, message logs, queue architecture, sender rotation, scheduled reports, bulk messaging flows, failure handling.",
    tags: ["WhatsApp", "Queues", "Reliability"],
  },
  {
    title: "B2B/B2C Tourism Platform",
    kind: "Tourism",
    summary:
      "Hotels, visa services, packages, travel agencies, customers, booking APIs, payments, confirmations, cancellations, external travel integrations, role-based workflows.",
    tags: ["Travel", "Integrations", "Role-based"],
  },
  {
    title: "Almaviva Visa Automation",
    kind: "Automation",
    summary:
      "Python + Selenium headless browser automation for visa portals, with environment configuration, logging, Task Scheduler, Windows scripts and documentation.",
    tags: ["Automation", "Python"],
  },
  {
    title: "Clinic Management Systems",
    kind: "Healthcare",
    summary:
      "Clinic operations, appointments, patients, billing and accounting integration.",
    tags: ["Healthcare", "Operations"],
  },
];