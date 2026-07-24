export const aboutHome = {
  tagline:
    "Welcome to my digital space where I build software, explore ideas, document my learning, and share moments beyond code",
  paragraphs: [
    {
      id: "now",
      parts: [
        { type: "text", value: "I am a Software Engineer at " },
        {
          type: "link",
          value: "Atlas AI",
          href: "https://helloatlas.in",
        },
        {
          type: "text",
          value:
            " in Bangalore, where I own production microservices (OCR & Address) handling document ingestion for NBFC clients. I build IAM platforms, WebSocket real-time messaging, and move systems from monoliths to distributed async architectures.",
        },
      ],
    },
    {
      id: "build",
      parts: [
        { type: "text", value: "I care about clear service boundaries, reliability, and " },
        { type: "em", value: "system design" },
        {
          type: "text",
          value:
            ". Outside work I’m usually exploring Kafka, sharpening backend fundamentals, or shipping personal experiments — including ConnectU, a Spring Boot microservices social platform.",
        },
      ],
    },
    {
      id: "life",
      parts: [
        {
          type: "text",
          value:
            "Originally from Mumbai, currently in Bangalore. When I’m offline you’ll find me on a badminton court, out for a run, with a book, or lost in a good shows.",
        },
      ],
    },
  ],
  interests: {
    title: "Beyond the keyboard",
    items: [  
      {
        label: "Badminton",
        icon: "badminton",
        detail: "Always up for a rally",
      },
      {
        label: "Running",
        icon: "running",
        detail: "Clears the head every time",
      },
      {
        label: "Hiking",
        icon: "hiking",
        detail: "Weekends outdoors when I can",
      },
      {
        label: "Shows",
        icon: "shows",
        detail: "Binge Watch! Binge Watch!",
      },
      {
        label: "Swimming",
        icon: "swimming",
        detail: "Laps to reset the brain",
      },
      {
        label: "Coffee",
        icon: "coffee",
        detail: "Keeps me awake",
      },
    ],
  },
};
