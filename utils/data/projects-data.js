import qtripDynamic from "/public/image/qtripDynamic.png";
import shoeEsy from "/public/image/shoeEsy.png";
import sortingVisualiser from "/public/image/sortingVisualiser.png";

export const projectsData = [
  {
    id: 1,
    name: "ConnectU",
    tag: "Microservices",
    description: [
      "Social networking platform on a Spring Boot microservices backend with 7 independently deployable services: API Gateway, Config Server, Service Discovery, User, Post, Connections, and Notification",
      "Centralized configuration via Spring Cloud Config Server and an API Gateway for routing across distributed services",
      "Clear service boundaries and data ownership for scalable, independently deployable components",
    ],
    code: null,
    demo: null,
    image: null,
    stack: ["Spring Boot", "Spring Cloud", "API Gateway", "Microservices"],
  },
  {
    id: 2,
    name: "ShoeEsy",
    tag: "Full-stack",
    description: [
      "E-commerce platform with React, Redux, and Tailwind - faster loads, carousels, filters, and debounced search suggestions",
      "Pagination and sidebar filters for product discovery",
      "Client-side search UX tuned for snappy navigation",
    ],
    code: "https://github.com/RahulGupta77/ShoeEsy",
    demo: "https://shoe-esy.vercel.app/",
    image: shoeEsy,
    stack: ["React", "Redux", "Tailwind"],
  },
  {
    id: 3,
    name: "QTrip Dynamic",
    tag: "Frontend",
    description: [
      "Travel experiences site with dynamic city pages and client-side preference persistence via localStorage",
      "Built with HTML, CSS, Bootstrap, and JavaScript for a responsive adventure-booking feel",
    ],
    code: "https://github.com/RahulGupta77/QTrip-Dynamic.git",
    demo: "https://q-trip-dynamic-rho.vercel.app/",
    image: qtripDynamic,
    stack: ["JavaScript", "Bootstrap"],
  },
  {
    id: 4,
    name: "Sorting Visualiser",
    tag: "Algorithms",
    description: [
      "Interactive visualizer for Merge, Quick, Bubble, Selection, and Insertion sort - with speed and size controls",
      "Built with React hooks for smooth step-by-step animations",
    ],
    code: "https://github.com/RahulGupta77/Sorting-Visualizer",
    demo: "https://rahuls-sorting-visualizer.netlify.app/",
    image: sortingVisualiser,
    stack: ["React", "Algorithms"],
  },
];
