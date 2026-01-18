export const PRODUCTS = [
    {
        id: 'agentic-ai',
        name: 'Boomering Agentic AI',
        tagline: 'The Future of Autonomous Business',
        overview:
            'Next-generation digital tools that don’t just respond — they act. We deploy intelligent agents that autonomously execute complex workflows, reducing operational overhead by 70%.',
        image: '/agentic AI.png',

        features: [
            'Autonomous Sales & Negotiation',
            'Intelligent Workflow Automation',
            'Ecosystem Integration',
            'Enterprise-Grade Security & Insights',
            'Voice Intelligence'
        ],

        howItWorks: [
            'Deploy AI agents based on business workflows',
            'Agents observe inputs from CRM, calls, emails, and systems',
            'AI autonomously executes decisions and actions',
            'Human oversight via admin dashboard',
            'Real-time analytics and optimization'
        ],

        useCases: [
            'Enterprise sales automation',
            'Customer support escalation',
            'Internal process automation',
            'AI-powered decision making'
        ],

        industries: [
            'Enterprise',
            'Call Centers',
            'FinTech',
            'E-commerce'
        ],

        whiteLabel: {
            logo: true,
            customColors: true,
            customDomain: true,
            emailBranding: true,
            multiTenant: true
        },

        security: [
            'End-to-end encryption',
            'Role-based access control',
            'Audit logs',
            'Cloud-native security'
        ],

        pricingModel: 'Subscription / Enterprise Custom',
        cta: 'Request Demo'
    },

    {
        id: 'tolkora-ai',
        name: 'Tolkora AI',
        tagline: 'AI-Powered Incoming Call Handling',
        overview:
            'AI-powered call management system for 300+ enterprises with virtual numbers, smart routing, AI receptionist, and call summaries.',
        image: '/mailer.png',

        features: [
            'Virtual Numbers',
            'Smart Call Handling',
            'AI Receptionist',
            'Call Summaries',
            'SMS Support'
        ],

        howItWorks: [
            'Assign virtual numbers',
            'Route calls using AI logic',
            'AI receptionist handles inquiries',
            'Generate call summaries',
            'Send follow-up SMS automatically'
        ],

        useCases: [
            'Customer support centers',
            'Sales inbound calls',
            'Appointment scheduling'
        ],

        industries: [
            'Call Centers',
            'Healthcare',
            'Enterprises'
        ],

        whiteLabel: {
            logo: true,
            customColors: true,
            customDomain: true
        },

        security: [
            'Encrypted call data',
            'Secure call storage',
            'Admin-level permissions'
        ],

        pricingModel: 'Per Agent / Monthly Subscription',
        cta: 'Talk to Sales'
    },

    {
        id: 'smart-ivr',
        name: 'Smart IVR',
        tagline: 'Automated Operations Center',
        overview: 'IVR-based communication system that handles inbound calls, qualifies leads, and schedules meetings automatically — available 24/7 with a centralized dashboard for complete administrative control.',
        image: '/ivr.png',
        features: [
            'Automated Operations',
            'Centralized Live Dashboard',
            'Role-Based Access Control',
            'Encrypted Data Handling'
        ],
        howItWorks: [
            'Inbound calls land on Smart IVR system',
            'NLP analyzes caller intent in real-time',
            'System routes call or handles query autonomously',
            'Dashboard updates with live call analytics'
        ],
        useCases: [
            'High-volume call centers',
            'Automated appointment bookings',
            'FAQ resolution'
        ],
        industries: [
            'Telecommunications',
            'Banking',
            'Retail'
        ],
        whiteLabel: {
            logo: true,
            customAudioBranding: true,
            customDomain: true
        },
        security: [
            'Voice biometrics ready',
            'Secure recording storage',
            'GDPR compliant'
        ],
        pricingModel: 'Usage-based / Monthly',
        cta: 'Get Started'
    },

    {
        id: 'business-24x7',
        name: 'Boomering Business 24x7',
        tagline: 'Automation Sales ERP',
        overview: 'A fully modular enterprise management suite that simplifies and automates key business processes. From supplier management to HR and financial modules, it serves as the backbone for modern business operations.',
        image: '/business 247 erp.png',
        features: [
            'Supplier Management',
            'Manufacturing Modules',
            'HR & Financial Modules',
            'Service and Productivity Modules',
            'Marketing Modules'
        ],
        howItWorks: [
            'Integrate disparate business units into one hub',
            'Automate data flow between departments',
            'Generate real-time financial and operational reports',
            'Monitor KPIs from a central dashboard'
        ],
        useCases: [
            'Manufacturing resource planning',
            'Supply chain management',
            'Workforce optimization'
        ],
        industries: [
            'Manufacturing',
            'Logistics',
            'Corporate Enterprise'
        ],
        whiteLabel: {
            logo: true,
            customReports: true,
            portalBranding: true
        },
        security: [
            'Role-based data access',
            'Audit trails',
            'On-premise deployment options'
        ],
        pricingModel: 'Per User / Enterprise License',
        cta: 'Request ERP Demo'
    },

    {
        id: 'edu-os',
        name: 'Boomering EduOS',
        tagline: 'Digital Operating System for Universities',
        overview:
            'Unified ERP platform for modern universities covering admissions, academics, finance, HR, certification, and alumni management.',
        image: '/mailer.png',

        features: [
            'Admissions & Curriculum Planning',
            'LMS Integration',
            'Blockchain-Secured Certification',
            'Finance & HR Allocation',
            'Multi-User Portals'
        ],

        howItWorks: [
            'Configure institution structure',
            'Enable student lifecycle management',
            'Automate academic and admin workflows',
            'Secure digital certification',
            'Access analytics dashboard'
        ],

        useCases: [
            'Universities',
            'Colleges',
            'Training Institutes'
        ],

        industries: [
            'Education'
        ],

        whiteLabel: {
            logo: true,
            customColors: true,
            institutionBranding: true,
            customDomain: true
        },

        security: [
            'Blockchain records',
            'Data encryption',
            'Role-based access'
        ],

        pricingModel: 'Per Student / Institution License',
        cta: 'Request Institution Demo'
    },

    {
        id: 'care-os',
        name: 'Boomering CareOS',
        tagline: 'Future of Integrated Hospital Management',
        overview:
            'End-to-end hospital management system unifying OPD/IPD, EMR, billing, insurance, diagnostics, and telemedicine.',
        image: '/ivr.png',

        features: [
            'OPD/IPD Management',
            'EMR & Billing',
            'Insurance Processing',
            'Patient CRM',
            'Telemedicine'
        ],

        howItWorks: [
            'Digitize patient registration',
            'Manage clinical workflows',
            'Automate billing & insurance',
            'Enable telemedicine services'
        ],

        useCases: [
            'Hospitals',
            'Clinics',
            'Diagnostic Centers'
        ],

        industries: [
            'Healthcare'
        ],

        whiteLabel: {
            logo: true,
            customColors: true,
            hospitalBranding: true
        },

        security: [
            'HIPAA-ready architecture',
            'Encrypted patient data',
            'Audit trails'
        ],

        pricingModel: 'Per Facility / Monthly',
        cta: 'Book Healthcare Demo'
    },

    {
        id: 'boomering-lms',
        name: 'Boomering LMS',
        tagline: 'Bridging Education and Industry',
        overview: 'A future-ready LMS designed for enterprise and educational workforce development. Features AI-powered control & analytics, multi-device learning access, and a comprehensive course builder.',
        image: '/eduerp.png',
        features: [
            'AI-Powered Control & Analytics',
            'Multi-Device Learning Access',
            'Comprehensive Course Builder',
            'Bulk Licensing'
        ],
        howItWorks: [
            'Create interactive course content',
            'Assign learning paths to users',
            'Evaluate progress via AI analytics',
            'Issue digital certifications'
        ],
        useCases: [
            'Corporate training',
            'Online course marketplaces',
            'Employee onboarding'
        ],
        industries: [
            'EdTech',
            'Corporate',
            'Government'
        ],
        whiteLabel: {
            customDomain: true,
            brandedCertificates: true,
            uiCustomization: true
        },
        pricingModel: 'Per User / Monthly',
        security: [
            'Secure exam environments',
            'Data privacy compliance',
            'IP protection'
        ],
        cta: 'Start Free Trial'
    },

    {
        id: 'virtual-gate',
        name: 'Virtual Gate',
        tagline: 'Avatar and Interaction Features',
        overview: 'Immersive platform capabilities with 3D Interactive Avatars, customizable venues, and real-time networking lounges. Supports multi-language interaction and cross-platform compatibility for global events.',
        image: '/vritual gate.png',
        features: [
            'Avatar Creation and Customization',
            'Interactive Networking',
            '3D Interactive Venues',
            'Live Streaming & VR Integration',
            'Real-Time Analytics'
        ],
        howItWorks: [
            'Select virtual venue template',
            'Customize branding and layout',
            'Invite attendees to create avatars',
            'Host immersive live events'
        ],
        useCases: [
            'Virtual conferences',
            'Digital trade shows',
            'Remote team building'
        ],
        industries: [
            'Events',
            'Marketing',
            'Entertainment'
        ],
        whiteLabel: {
            venueBranding: true,
            customDomain: true
        },
        security: [
            'Ticket verification',
            'Secure streaming protocols',
            'Participant moderation'
        ],
        pricingModel: 'Per Event / Annual License',
        cta: 'Host Virtual Event'
    },

    {
        id: 'smart-class',
        name: 'Boomering SmartClass',
        tagline: 'All-in-one Interactive Flat Panel',
        overview: 'Transforms traditional classrooms and meeting rooms into fully digital interactive environments. Includes built-in Android OS, multi-touch capabilities, and seamless cloud compatibility.',
        image: '/smart class_1.png',
        features: [
            'Multi-Touch Capabilities',
            'Built-in Android System',
            'Cloud Compatibility',
            'Plug & Play Functionality'
        ],
        howItWorks: [
            'Install SmartClass panel',
            'Connect via cloud or local device',
            'Interact via touch and digital pen',
            'Save and share sessions instantly'
        ],
        useCases: [
            'Smart classrooms',
            'Interactive boardrooms',
            'Remote collaboration'
        ],
        industries: [
            'Education',
            'Corporate Offices'
        ],
        whiteLabel: {
            hardwareBranding: true,
            bootLogo: true
        },
        security: [
            'Device management lock',
            'Secure cloud sync',
            'User profiles'
        ],
        pricingModel: 'Per Unit / Bulk Orders',
        cta: 'Request Quote'
    },

    {
        id: 'boomering-stitch',
        name: 'Boomering Stitch',
        tagline: 'Precision Operational Workflow',
        overview: 'Streamline your operational workflow with an integrated ecosystem designed for precision. Features advanced machine tracking, movement signals, and a comprehensive operational reporting suite.',
        image: '/rmg.png',
        features: [
            'Machine Tracking System',
            'Signal & Alarm for Movement',
            'Inventory EPC',
            'Offline Machine Scanning',
            'Operational Reporting Suite'
        ],
        howItWorks: [
            'Install IoT sensors on machinery',
            'Connect to Stitch cloud platform',
            'Monitor real-time status and efficiency',
            'Receive predictive maintenance alerts'
        ],
        useCases: [
            'Factory automation',
            'Fleet management',
            'Warehouse operations'
        ],
        industries: [
            'Manufacturing',
            'Logistics',
            'Textiles'
        ],
        whiteLabel: {
            dashboardBranding: true,
            customAlerts: true
        },
        security: [
            'Encrypted sensor data',
            'Industrial network security',
            'Access logs'
        ],
        pricingModel: 'Per Device / Subscription',
        cta: 'Stitch Your Operations'
    },

    {
        id: 'mail-campaign',
        name: 'Boomering Mail Campaign',
        tagline: 'Enterprise-grade Email Marketing',
        overview: 'Platform for scalable, data-driven outreach offering an intelligence dashboard, audience management, and deep email analytics to optimize your communication strategy.',
        image: '/mailer.png',
        features: [
            'Intelligence Dashboard',
            'Audience Management',
            'Email Analytics',
            'Scalable Outreach'
        ],
        howItWorks: [
            'Import audience lists',
            'Design dynamic email templates',
            'Schedule high-volume campaigns',
            'Analyze open rates and conversions'
        ],
        useCases: [
            'Marketing newsletters',
            'Transactional emails',
            'Cold outreach'
        ],
        industries: [
            'Marketing Agencies',
            'SaaS',
            'E-commerce'
        ],
        whiteLabel: {
            agencyDomain: true,
            clientPortals: true
        },
        security: [
            'DKIM/SPF signing',
            'GDPR compliance processes',
            'Data encryption'
        ],
        pricingModel: 'Per Email / Monthly Tier',
        cta: 'Start Campaign'
    },

    {
        id: 'count-trust',
        name: 'Boomering Count Trust',
        tagline: 'Integrated Digital Governance Platform',
        overview: 'The BAG Member System is a secure digital platform for member management, financial tracking, and transparent online voting. Ensures absolute integrity with administrative control.',
        image: '/vote.png',
        features: [
            'Secure Voting',
            'Administrative Control',
            'Member Management',
            'Financial Tracking'
        ],
        howItWorks: [
            'Register members with identity verification',
            'Securely manage dues and finances',
            'Conduct tamper-proof elections',
            'Audit results in real-time'
        ],
        useCases: [
            'Association management',
            'Corporate board voting',
            'Union administration'
        ],
        industries: [
            'Non-Profits',
            'Corporate Governance',
            'Associations'
        ],
        whiteLabel: {
            organizationBranding: true,
            customDomain: true
        },
        security: [
            'Immutable audit trails',
            'Multi-factor authentication',
            'E2E encryption'
        ],
        pricingModel: 'Per Member / Annual',
        cta: 'Secure Your Governance'
    },

    {
        id: 'cloud-managed-services',
        name: 'Cloud Managed Services',
        tagline: 'Empower Your Business',
        overview: 'We manage your infrastructure so you can focus on innovation and growth. Offering cloud hosting, migration strategies, and continuous monitoring for disaster recovery.',
        image: '/mailer.png',
        features: [
            'Cloud Hosting',
            'Cloud Migration',
            'Hybrid Development Strategies',
            'Continuous Monitoring',
            'Disaster Recovery'
        ],
        howItWorks: [
            'Assess current infrastructure',
            'Develop migration or optimization plan',
            'Execute cloud deployment',
            'Monitor 24/7 for health and security'
        ],
        useCases: [
            'Scalable web hosting',
            'Legacy system migration',
            'Disaster recovery planning'
        ],
        industries: [
            'Technology',
            'Finance',
            'Retail'
        ],
        whiteLabel: {
            portalBranding: true,
            supportBranding: true
        },
        security: [
            'ISO 27001 compliance',
            'DDoS protection',
            'Automated patching'
        ],
        pricingModel: 'Custom / Monthly Retainer',
        cta: 'Optimize Cloud'
    }
];
