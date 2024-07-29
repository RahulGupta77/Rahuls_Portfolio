import qtripDynamic from "/public/image/qtripDynamic.png";
import shoeEsy from "/public/image/shoeEsy.png";
import sortingVisualiser from "/public/image/sortingVisualiser.png";
import weatherApp from "/public/image/weatherApp.png";

export const projectsData = [
  {
    id: 1,
    name: "ShoeEsy",
    description: [
      "Utilized React, Redux, and Tailwind CSS to develop a dynamic E-commerce platform, achieving a 40% improvement in load time",
      "Implemented carousels, pagination, and sidebar filters for products, boosting user navigation and engagement by 35%",
      "Integrated search suggestions with debouncing, enhancing search efficiency and increasing user satisfaction by 25%",
    ],
    code: "https://github.com/RahulGupta77/ShoeEsy",
    demo: "https://shoe-esy.vercel.app/",
    image: shoeEsy,
  },

  {
    id: 2,
    name: "Qtrip Dynamic",
    description: [
      "QTrip is a travel website designed for adventurers seeking diverse experiences across various cities",
      "Created engaging web pages using HTML and CSS, and enhanced their functionality with JavaScript to provide a dynamic user experience",
      "Utilized localStorage to save user preferences on the client side, providing a seamless and personalized experience for returning user",
    ],
    code: "https://github.com/RahulGupta77/QTrip-Dynamic.git",
    demo: "https://q-trip-dynamic-rho.vercel.app/",
    image: qtripDynamic,
  },
  {
    id: 3,
    name: "Sorting Visualiser",
    description: [
      "Sorting Visualizer is an interactive website designed to demonstrate the working mechanisms of various sorting algorithms",
      "Leveraged React.js hooks to create engaging animations and effects, enhancing the learning experience",
      "Enabled users to adjust sorting speed, array size, randomize arrays, and select from five different sorting algorithms: Merge Sort, Quick Sort, Bubble Sort, Selection Sort, and Insertion Sort",
    ],
    code: "https://github.com/RahulGupta77/Sorting-Visualizer",
    demo: "https://rahuls-sorting-visualizer.netlify.app/",
    image: sortingVisualiser,
  },
  {
    id: 4,
    name: "Weather App",
    description: [
      "Weather Web App provides real-time weather information with an intuitive and dynamic interface",
      "Allows users to fetch weather data for thousands of cities using the OpenWeather API",
      "Built a single page application with JavaScript DOM manipulation, HTML5, and CSS3, featuring two tabs for a seamless user experience",
    ],
    code: "https://github.com/RahulGupta77/Weather-app",
    demo: "https://weather-app-rahul-gupta.netlify.app/",
    image: weatherApp,
  },
];
