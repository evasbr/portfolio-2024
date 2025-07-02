import { IconType } from "react-icons";
import { BiLogoPostgresql, BiLogoSpringBoot } from "react-icons/bi";
import {
  FaCode,
  FaDocker,
  FaGitAlt,
  FaGolang,
  FaJava,
  FaPython,
  FaReact,
} from "react-icons/fa6";
import { FiFigma } from "react-icons/fi";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiGooglegemini,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiRabbitmq,
  SiStreamlit,
  SiSwagger,
  SiVercel,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";

export type Role = "Backend" | "Frontend" | "UI/UX Designer" | "Data Science";

export type Tech = {
  id: number;
  name: string;
  icon: IconType;
  type: "proglang" | "tools" | "frameworks";
};

export type Project = {
  slug: string;
  title: string;
  year: number;
  synopsis: string;
  cover?: string;
  description: string;
  technologies: number[];
  features: string[];
  images: string[];
  urlToProject?: string;
  urlToCode?: string;
  problem: string;
  role: Role[];
};

export const techData: Tech[] = [
  {
    id: 1,
    name: "Typescript",
    icon: SiTypescript,
    type: "proglang",
  },
  {
    id: 2,
    name: "Express.js",
    icon: TbBrandNodejs,
    type: "frameworks",
  },
  {
    id: 3,
    name: "Golang",
    icon: FaGolang,
    type: "proglang",
  },
  {
    id: 4,
    name: "Java",
    icon: FaJava,
    type: "proglang",
  },
  {
    id: 5,
    name: "Vercel",
    icon: SiVercel,
    type: "tools",
  },
  {
    id: 6,
    name: "React",
    icon: FaReact,
    type: "frameworks",
  },
  {
    id: 7,
    name: "NextJS",
    icon: RiNextjsFill,
    type: "frameworks",
  },
  {
    id: 8,
    name: "Spring boot",
    icon: BiLogoSpringBoot,
    type: "frameworks",
  },
  {
    id: 9,
    name: "Docker",
    icon: FaDocker,
    type: "tools",
  },
  {
    id: 10,
    name: "Git",
    icon: FaGitAlt,
    type: "tools",
  },
  {
    id: 11,
    name: "Postman",
    icon: SiPostman,
    type: "tools",
  },
  {
    id: 12,
    name: "Swagger",
    icon: SiSwagger,
    type: "tools",
  },
  {
    id: 13,
    name: "GeminiAI",
    icon: SiGooglegemini,
    type: "tools",
  },
  {
    id: 14,
    name: "PostgreSQL",
    icon: BiLogoPostgresql,
    type: "tools",
  },
  {
    id: 15,
    name: "MongoDB",
    icon: SiMongodb,
    type: "tools",
  },
  {
    id: 16,
    name: "Python",
    icon: FaPython,
    type: "tools",
  },
  {
    id: 17,
    name: "Streamlit",
    icon: SiStreamlit,
    type: "tools",
  },
  {
    id: 18,
    name: "Figma",
    icon: FiFigma,
    type: "tools",
  },
  {
    id: 19,
    name: "MySQL",
    icon: SiMysql,
    type: "tools",
  },
  {
    id: 20,
    name: "Kubernetes",
    icon: SiKubernetes,
    type: "tools",
  },
  {
    id: 21,
    name: "RabbitMQ",
    icon: SiRabbitmq,
    type: "tools",
  },
  {
    id: 22,
    name: "JavaFX",
    icon: FaCode,
    type: "tools",
  },
];

export const projectsData: Project[] = [
  {
    slug: "tanya-digi",
    title: "Tanya Digi",
    year: 2024,
    synopsis:
      "Interactive chatbot that answers everything about digital safety.",
    description:
      "Tanya Digi is a web-based chatbot platform built to educate users about digital safety topics. It offers dynamic responses with GeminiAI. This project win as one of the best project in IDCamp Challenge: Accelerating Digital Innovation through AI from Dicoding Indonesia.",
    cover:
      "https://res.cloudinary.com/dx85szvao/image/upload/v1750517241/Tanya_Digi_gayd8y.webp",
    technologies: [1, 2, 7, 13],
    features: [
      "Custom chatbot to answer question about digital safety",
      "A story template to help user voice their concern",
      "A quiz mode to test user's knowledge about their recent topics",
      "Deployed with responsive design.",
    ],
    images: [
      "https://res.cloudinary.com/dx85szvao/image/upload/v1751376055/tanya-digi-1_k7f3ow.webp",
      "https://res.cloudinary.com/dx85szvao/image/upload/v1751376055/tanya-digi-3_jc2yz5.webp",
      "https://res.cloudinary.com/dx85szvao/image/upload/v1751379233/tanya-digi-4_fdgsxn.webp",
      "https://res.cloudinary.com/dx85szvao/image/upload/v1751379236/tanya-digi-5_kxr5sa.webp",
    ],
    urlToProject: "https://tanya-digi-evas-projects-5b1f3060.vercel.app/",
    problem: "",
    role: ["Backend", "Frontend"],
  },
  {
    slug: "tipme",
    title: "Tipme!",
    year: 2025,
    synopsis:
      "A Food and Drink Delivery around campus as a Technopreneurship project",
    description:
      "Tipme! is a campus-based food and beverage delivery platform at UPNVJ. It helps students avoid queues by allowing them to order from available food stalls through the platform. The system involves three roles: users (students), couriers (who manage and deliver orders), and admins (who register partner vendors). The service ran effectively for two months and served 15 customers.",
    technologies: [1, 2, 7, 14],
    features: [
      "Users can browse and order from stores",
      "Easy payment with QRIS",
      "Responsive layout optimized for mobile",
      "Courier page to manage Titipan(delivery) and transaction",
      "Admin page to manage partner store and their products",
    ],
    cover:
      "https://res.cloudinary.com/dx85szvao/image/upload/v1750766578/tipme_gvdagz.webp",
    images: [
      "https://res.cloudinary.com/dx85szvao/image/upload/v1751376054/tipme-1_bn6u4r.webp",
      "https://res.cloudinary.com/dx85szvao/image/upload/v1751376055/tipme-2_qlrxdf.webp",
      "https://res.cloudinary.com/dx85szvao/image/upload/v1751376054/tipme-3_ztngt2.webp",
    ],
    urlToProject: "https://tipme.site/",
    problem: "",
    role: ["Backend", "Frontend", "UI/UX Designer"],
  },
  {
    slug: "manchingu",
    title: "ManChingu",
    year: 2025,
    synopsis: "A reading tracker app for manhwa lovers with social features.",
    description:
      "ManChingu is a mobile app that helps users manage their manhwa reading list. It also allows interaction through community reviews and ratings.",
    technologies: [4, 1, 2, 14],
    features: [
      "Track reading progress across multiple manhwa.",
      "Add titles to personal reading lists.",
      "Leave reviews and ratings for each title.",
      "Filter by genre, status, or popularity.",
    ],
    cover:
      "https://res.cloudinary.com/dx85szvao/image/upload/v1750578966/manchingu_nkwkuv.webp",
    images: [
      "https://res.cloudinary.com/dx85szvao/image/upload/v1751376054/manchingu-1_wc6zzo.webp",
      "https://res.cloudinary.com/dx85szvao/image/upload/v1751376054/manchingu-2_f4cgbc.webp",
    ],
    urlToCode: "https://github.com/evasbr/ManChingu-backend",
    urlToProject: "",
    problem: "",
    role: ["Backend"],
  },
  {
    slug: "cinema-ticket-vending-machine",
    title: "Cinema ticket vending machine",
    year: 2024,
    synopsis: "Desktop app to simulate automated cinema ticketing system.",
    description:
      "A JavaFX-based desktop simulation of a cinema ticket vending machine. Created as a final project for OOP course to demonstrate real-world UI interaction and data logic.",
    technologies: [4, 19, 22],
    features: [
      "Simulates ticket purchasing flow with MySQL Database",
      "User can browse available movies, seat, and schedule",
      "Payment input simulation with barcode",
    ],
    images: [
      "https://res.cloudinary.com/dx85szvao/image/upload/v1751376054/cinema-1_jgszye.webp",
      "https://res.cloudinary.com/dx85szvao/image/upload/v1751376054/cinema-2_z0deba.webp",
    ],
    urlToCode: "https://github.com/evasbr/movie-ticket-vendingma-chine.git",
    urlToProject: "",
    problem: "",
    cover:
      "https://res.cloudinary.com/dx85szvao/image/upload/v1750766578/cinema_hudzq3.webp",
    role: ["Frontend", "UI/UX Designer"],
  },
  {
    slug: "moona",
    title: "MoonA",
    year: 2024,
    synopsis: "Baby monitoring app UI/UX concept to support parents.",
    description:
      "MoonA is a mobile UI/UX design concept that focuses on baby monitoring and parental assistance. Designed to reduce parent's stress and increase infant safety awareness by providing 24 hours monitoring with AI.",
    technologies: [18],
    features: [
      "Provides daily monitoring overview",
      "Includes emergency alert options",
      "AI Chatbot where parents can gain insight with their baby's histories",
      "User friendly diagrams and reports",
    ],
    images: [
      "https://res.cloudinary.com/dx85szvao/image/upload/v1751376059/moona-1_cnldct.webp",
      "https://res.cloudinary.com/dx85szvao/image/upload/v1751376059/moona-2_rjitrw.webp",
      "https://res.cloudinary.com/dx85szvao/image/upload/v1751376057/moona-3_nkhkev.webp",
    ],
    urlToCode: "",
    urlToProject: "",
    problem: "",
    cover:
      "https://res.cloudinary.com/dx85szvao/image/upload/v1750578972/moona_yqq8u6.webp",
    role: ["UI/UX Designer"],
  },
  {
    slug: "motorizz",
    title: "MotoRizz",
    year: 2024,
    synopsis: "A sleek UI/UX design for motorcycle maintenance tracking.",
    description:
      "MotoRizz is a conceptual mobile app design that helps users manage their motorcycle maintenance schedule. Includes features like part ordering and nearby workshop lookup.",
    technologies: [18],
    features: [
      "Lets users track service schedules.",
      "Enables ordering of spare parts.",
      "Finds nearest trusted workshops.",
      "Provides maintenance history log.",
    ],
    images: [
      "https://res.cloudinary.com/dx85szvao/image/upload/v1751376059/motorizz-1_q814qv.webp",
      "https://res.cloudinary.com/dx85szvao/image/upload/v1751376055/motorizz-2_op9xv2.webp",
    ],
    urlToProject:
      "https://www.figma.com/proto/DBR9mmEyB34m8xhykObzMv/DESIGN-UI-UX?page-id=1%3A3&node-id=40-236&node-type=frame&viewport=1467%2C-145%2C0.16&t=z7e34WLfHuQLCBw3-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=129%3A1824",
    problem: "",
    role: ["UI/UX Designer"],
    cover:
      "https://res.cloudinary.com/dx85szvao/image/upload/v1750578973/motorizz_on0f8n.webp",
  },
  {
    slug: "gpa-prediction",
    title: "GPA Prediction",
    year: 2025,
    synopsis: "GPA prediction using Random Forest based on student data.",
    description:
      "A machine learning project that predicts students' GPA using the Random Forest algorithm. It processes academic and non-academic data to generate predictions.",
    technologies: [16, 17],
    features: [
      "Predicts GPA using machine learning.",
      "Uses Random Forest classification model.",
      "Visualizes data distributions and results.",
      "Processes multiple student input factors.",
    ],
    images: [
      "https://res.cloudinary.com/dx85szvao/image/upload/v1751376689/streamlit-1_iup6gm.webp",
      "https://res.cloudinary.com/dx85szvao/image/upload/v1751376689/streamlit-2_u97ft8.webp",
    ],
    urlToCode: "https://github.com/evasbr/gpa-prediction",
    urlToProject: "https://gpa-prediction-2025.streamlit.app/",
    problem: "",
    role: ["Data Science"],
    cover:
      "https://res.cloudinary.com/dx85szvao/image/upload/v1750578803/gpa_prediction_jirwuc.webp",
  },
  {
    slug: "recipedia",
    title: "Recipedia (Microservices)",
    year: 2025,
    synopsis: "A conceptual recipe service platform using microservices.",
    description:
      "Recipedia is a design concept of a distributed system that handles recipe submissions, ratings, and search, built using microservices architecture.",
    technologies: [1, 2, 9, 10, 11, 15, 20, 21],
    features: [
      "Designed with microservice architecture with docker for containerizations and kubernetes for auto recovery and auto scale",
      "Separated service for user/auth, recipe, and review",
      "Implements service-to-service communication with internal HTTP and RabbitMQ",
    ],
    images: [
      "https://res.cloudinary.com/dx85szvao/image/upload/v1751360048/recipedia-2_x0bnx2.webp",
      "https://res.cloudinary.com/dx85szvao/image/upload/v1751360048/recipedia-3_szpysn.webp",
      "https://res.cloudinary.com/dx85szvao/image/upload/v1751360048/recipedia-4_bcp1vz.webp",
    ],
    urlToCode: "https://github.com/alyand/Recipedia",
    urlToProject:
      "https://www.canva.com/design/DAGrLa4-YkU/g_tVjqK_rz__7JNSAderBg/edit?utm_content=DAGrLa4-YkU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    problem: "",
    role: ["Backend"],
    cover:
      "https://res.cloudinary.com/dx85szvao/image/upload/v1751357650/recipedia-cover_t2oca8.webp",
  },
];
