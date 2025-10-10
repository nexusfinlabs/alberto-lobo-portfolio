// Imports company logos
import meta from "../assets/company/meta.png";
import shopify from "../assets/company/shopify.png";
import starbucks from "../assets/company/starbucks.png";
import tesla from "../assets/company/tesla.png";
import sap from "../assets/company/sap.png";
import vw from "../assets/company/vw.png";
import openai from "../assets/company/openai.png";
import bmw from "../assets/company/bmw.png";
import gm from "../assets/company/gm.png";
import movildrive from "../assets/company/movildrive.png";
import visteon from "../assets/company/visteon.png";
import magna from "../assets/company/magna.png";
import continental from "../assets/company/continental.png";
import airbus from "../assets/company/airbus.png";
import esa from "../assets/company/esa.png";
import indra from "../assets/company/indra.png";

// Imports services
import service1 from "../assets/services/service1.jpg";
import service2 from "../assets/services/service2.jpg";
import service3 from "../assets/services/service3.jpg";
import service4 from "../assets/services/service4.jpg";
import service5 from "../assets/services/service5.jpg";
import service6 from "../assets/services/service6.jpg";
import service7 from "../assets/services/service7.jpg";
import service8 from "../assets/services/service8.jpg";

// Import socials
import github from "../assets/socials/github.svg";
import linkedin from "../assets/socials/linkedin.svg";
import twitter from "../assets/socials/twitter.svg";
import youtube from "../assets/socials/youtube.svg";

import { fadeIn } from "../utils/motion";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
} from "../assets";

export const SERVICES = [
  {
    title: "Engineering Projects",
    backgroundImage: service1,
    link: "https://www.eurofighter.com/"
  },
  {
    title: "Business Strategy",
    backgroundImage: service2,
    link: "https://news.sap.com/2024/10/sap-s4hana-migration-guide-it-executives/",
  },
  {
    title: "Agile Implementation",
    backgroundImage: service3,
    link: "https://www.atlassian.com/agile",
  },
  {
    title: "Process Transformation",
    backgroundImage: service4,
    link: "https://cariad.technology/",
  },
  {
    title: "Start-up Founder",
    backgroundImage: service5,
    link: "https://nexusfinlabs.com",
  },
  {
    title: "AI & ML Automation",
    backgroundImage: service6,
    link: "https://iagrowth.io",
  },
  {
    title: "Cloud & DevOps",
    backgroundImage: service7,
    link: "https://aws.amazon.com/devops",
  },
  {
    title: "Full-Stack Development",
    backgroundImage: service8,
    link: "https://nexusfinlabs.io",
  }
] as const;


// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "Overview",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    title: "AboutMe",
    link: null,
    link: "http://www.github.com/nexusfinlabs",
  },
  {
    id: "source-code",
    title: "GitHub",
    link: "http://www.github.com/nexusfinlabs",
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// -----------------------------------------------------------
// 💼 Experiences
// -----------------------------------------------------------
export const EXPERIENCES = [
  {
    title: "SAP FICO Consultant",
    company_name: "Freelancer",
    icon: sap,
    company_link: "https://www.sap.com",
    iconBg: "#trasparent",
    date: "Oct 2025 - now",
    points: [
      "SAP FI/CO Consultant experienced in end-to-end implementation, integration, and optimization of financial & controlling processes across global environments (GL, AP, AR, AA, COPA, PCA).",
      "Strategy implementation for SAP BTP extensions using CAP, Fiori Elements, and CDS Views, integrating with S/4HANA Cloud and external APIs to automate workflows and analytics.",
      "Strong focus on process automation, financial reporting, and data migration (Central Finance, IRPA, BRF+, Migration Cockpit) ensuring compliance and operational efficiency.",
    ],
  },
  {
    title: "AI & Web3 Tech Lead",
    company_name: "Freelancer",
    icon: openai,
    company_link: "https://iagrowth.io/automation.html",
    iconBg: "#383E56",
    date: "Jan 2024 - now",
    points: [
      "Launched several automation projects to develop LLM AI-driven solutions like n8n and zapier for customer projecs and Multi Agentic-IA Systems for Marketing, Sales and ERP Software",
      "Leveraged ML algorithms & Voice Agents using ElevenLabs to analyze customer trends and evaluate automated customer services.",
      "Designed and implemented autonomous, cloud-based multi-agent systems to enhance data workflows between BI, CRMs and ERPs.",
    ],
  },
  {
    title: "Program Manager",
    company_name: "Cariad (VW Group)",
    icon: vw,
    company_link: "https://cariad.technology/de/en/solutions/infotainment-digital-experiences.html",
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Dec 2023",
    points: [
      "Coordinated integration of the HCP3 Infotainment System for Audi Q5, Q6, and Porsche Taycan programs.",
      "Led validation and verification across 20 cross-functional teams, managing 3 onsite testing units and ensuring full alignment with OEM requirements.",
      "Defined and executed the program test strategy, including vehicle allocation, WBS planning, and SOP roadmap, using Jira, Confluence, and Codebeamer for release control.",
    ],
  },
  {
    title: "Project Manager",
    company_name: "BMW",
    icon: bmw,
    company_link: "https://www.bmw.co.uk/en/digital-services/bmw-idrive.html#bmw-idrive",
    iconBg: "#383E56",
    date: "Jan 2022 - Dec 2022",
    points: [
      "Managed the BMW JC14 Engineering Group for ADAS Software Testing and Vehicle Dynamics Model-Based Development.",
      "Planned and coordinated global teams between Spain, Germany, and India supplier headquarters.",
      "Defined project milestones and release strategy planning for Tier-1 supplier Nippon Seiki including team coordination and external stakeholder management.",
      "Stacks: Matlab, Polyspace, Jira, Confluence, SVN, PowerBI, ASPICE, Agile, Scrum, Kanban, Python, GitHub, SAFe, ISO 26262, MS Project.",
    ],
  },
  {
    title: "Solutions Architect",
    company_name: "GM Cruise",
    icon: gm,
    company_link: "https://www.gm.com/innovation/av-safe-deployment",
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Dec 2021",
    points: [
      "Directed GM's supplier Tech Teams (Idneo) for the development of an ADAS FPGA-based processor for autonomous Robo-taxi PCB series production.",
      "Coordinated cross-functional efforts between teams, suppliers, and stakeholders in USA/BCN.",
      "Defined and coordinated project activities for HW, SW, Validation, and led supplier communication.",
      "Assessed risks and drove mitigation strategies for lead-time, workflows, compliance, and QA control.",
      "Stacks: Altium, DFMEA, PFMEA, Control Plan, V-Model, FuSa, ISO-26262, DOORS, APQP, PPAP, Jira, Confluence, PowerBI, Six Sigma, Lean Manufacturing, MS Project.",
    ],
  },
  {
    title: "Founder",
    company_name: "Movildrive",
    icon: movildrive,
    company_link: "https://movildrive.com",
    iconBg: "#E6DEDD",
    date: "Jan 2018 - Dec 2020",
    points: [
      "Founded & Launched a pioneering B2B e-Mobility SaaS for the Spanish market.",
      "Managed and planned the full lifecycle from platform and product (App Design) to AppStore deployment and first services sales.",
      "Developed the operations & GTM Strategy for the MVP launch, defining the Front-End & Back-End Software Specification.",
      "Partnered with energy suppliers and third-party software vendors to ensure charging endpoint seamless integration.",
      "Stacks: Lean Startup, OKRs, iOS, Objective-C/Swift, Android, Kotlin, Fundraising, HTML, JS, CSS, Marketing, Firebase, GCP, Stripe, Figma, SEO/SEM, Analytics, Pitch-Deck, MVP, Ads, Legal.",
    ],
  },
  {
    title: "Software DevOps Manager",
    company_name: "Visteon",
    company_link: "https://visteon.com",
    icon: visteon,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Dec 2021",
    points: [
      "Directed & Led the design of a software automation testing framework for Mercedes-Benz IVI Series A-D and Daimler Trucks.",
      "Automated Software Integration activities for Combi Displays, while coordinating European and Indian SW teams.",
      "Defined Core DevOps for nightly test deployments ensuring Agile methodology and high-quality software standards.",
      "Stacks: DevOps, Jenkins, QNX, Linux, Python, CANoe, AUTOSAR, IoT, SIL/HIL, CI/CD, DOORS, IVI, HUD, Agile, Scrum.",
    ],
  },
  {
    title: "Systems Integration Lead",
    company_name: "Magna",
    company_link: "https://www.magna.com",
    icon: magna,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - Dec 2020",
    points: [
      "Coordinated the FQT for Maserati Levante & Mazda 3 prototypes.",
      "Developed ADAS Lane Keeping Assist Test on-road and Lane Detection Warning functional validation.",
      "Ensured compliance with performance requirements while managing EU and US engineering team synchronization.",
      "Stacks: DOORS, MKS, DFMEA, PFMEA, Control Plan, V-Model, FuSa, ISO-26262, APQP, PPAP, Jira, Confluence, SVN, PowerBI, Six Sigma, Lean Manufacturing, MS Project.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Continental",
    company_link: "https://www.continental.com/en-us/",
    icon: continental,
    iconBg: "#E6DEDD",
    date: "Jan 2017 - Dec 2018",
    points: [
      "Validated and Qualified SW Code for ADAS forward sensing camera for Toyota and BMW.",
      "Test strategy specification to achieve ~99% test coverage on ASIL-B/D algorithms.",
      "Led integration strategy and qualification testing against ISO-26262 standards across EU, US, and India.",
      "Stacks: C++, Python, WhiteBox, QAC Cantata, BlackBox Test, QAC Static Code, V-Model, FuSa, ISO-26262, Jira, Confluence, SVN, Git, MS Project.",
    ],
  },
  {
    title: "Systems Engineer",
    company_name: "Airbus",
    company_link: "https://www.airbus.com",
    icon: airbus,
    iconBg: "#E6DEDD",
    date: "Jan 2015 - Dec 2016",
    points: [
      "Led NATO SECRET Systems qualification for Eurofighter Tranche 3 series program.",
      "Integrated architecture, RF/Audio/Video systems for MRTT, FSTA & Military Drone Programs.",
      "Coordinated flight test activities with pilots and ground stations in Madrid and Sevilla.",
      "Stacks: NATO Secret, NATO Crypto, DOORS, Control Plan, V-Model, FAT, ISO-26262, Jira, PowerBI, Lean Manufacturing, MS Project.",
    ],
  },
  {
    title: "Systems Engineer",
    company_name: "ESA",
    company_link: "https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Columbus/Columbus_Control_Centre_Oberpfaffenhofen_Germany",
    icon: esa,
    iconBg: "#E6DEDD",
    date: "Jan 2013 - Dec 2014",
    points: [
      "Qualified two Galileo ESA TTC S-Band stations at Kiruna and Kourou.",
      "Designed RF specification for S-Band antenna tracking and satellite optimization.",
      "Coordinated ISS Columbus module communications between astronauts, NASA, IATV, and JAXA control centers.",
      "Stacks: NATO Crypto, Human Spaceflight, RF Systems, PowerBI, MS Project.",
    ],
  },
  {
    title: "Systems Engineer",
    company_name: "Indra",
    company_link: "https://www.indracompany.com/en/satellite-control-tracking-centers-0",
    icon: indra,
    iconBg: "#E6DEDD",
    date: "Jan 2011 - Dec 2012",
    points: [
      "Supported Galileo integration activities with GPS/GLONASS during internship with INECO.",
      "Coordinated ESA stakeholders and partners for Horizon 2020 project planning.",
      "Stacks: DOORS, PowerBI, PMBOK, FTA, FMEA, Hazard Analysis, Safety Case, PRA, RAMS, Isograph, MS Project.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: user1,
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: user2,
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: user3,
  // },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "n8n & Zapier Automations",
    description:
      "Digital Marketing & Automation Agency to enhance Sales Automation Projects for B2B/B2C companies and Industry/Tech (SaaS) partners. I develop complete strategies to help to any industry and vertical that has a product online, E-Commerce and Social Media and any CRMs or database.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/",
    live_site_link: "hLps://iagrowth.io",
  },
  {
    name: "Nexus FinLabs",
    description:
      "Fintech App for M&A and Finance services offering specialized transacEon support, valuaEon experEse, and strategic advisory for Corporate Finance operations and Private Equity legal bouEques. - Include comprehensive services with own SaaS Virtual Data Room and strategic guidance for Cross-border transacEons across both buy-side and sell-side operations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://app.nexusfinlabs.com/",
    live_site_link: "https://nexusfinlabs.com/",
  },
  {
    name: "Nexus Growth Labs",
    description:
      "Growth Partner & MarkeEng Agency for innovaEve companies seeking strategic expansion through data-driven campaigns and comprehensive brand development. We support the strategy for small-mid size companies as growth partner. Consulting for base and sustainable growth to 5,6,7-figures.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "syncfusion",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/",
    live_site_link: "http://nexusgrowthhackinglabs.com/",
  },
  {
    name: "Global Trading Exports",
    description:
      "A specialized trading plaeorm that facilitates seamless energy and agricultural commodiEes transactions through advanced market analysis and strategic positioning. We provide end-to-end intermediaEon services for energy and agro-product trading, optimizing procurement strategies and managing price valability through our extensive global network.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/",
    live_site_link: "https://vercel.app/",
  },
  {
    name: "Cryptoverse",
    description:
      "A new Cryptocurrency web application that allows users to view price, market cap and daily change in realtime for almost every cryptocurrency in the world. This App is meant for bussiness and individuals that own any crypto, property or financial asset, and want to tokenize it either for transferring the property or exchange for any other financial asset.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/",
    live_site_link: "https://vercel.app/",
  },
  {
    name: "Movildrive",
    description:
      "A Mobility SaaS solution that delivers comprehensive fleet management intelligence with predictive analytics, opmizing electric vehicle operations and charging infrastructure deployment. The electric mobility project integrates cutting edge battery technology with smart grid connectivity, providing sustainable transportation solutions for urban environments and commercial fleets.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/",
    live_site_link: "https://www.movildrive.com/",
  },
] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "https://www.youtube.com/watch?v=_HPRQPJejeg",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/ajleblob",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://x.com/ALB_MOV",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/nexusfinlabs",
  },
] as const;
