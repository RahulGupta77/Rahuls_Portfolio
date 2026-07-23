export const aboutHome = {
  tagline: "Software Engineer · System design, microservices & distributed systems",
  paragraphs: [
    {
      id: "now",
      parts: [
        { type: "text", value: "I am a Software Engineer at " },
        {
          type: "link",
          value: "Atlas AI",
          href: "https://www.linkedin.com/company/atlas-ai",
        },
        {
          type: "text",
          value:
            " in Bangalore, where I own production microservices (OCR & Address) handling TB-scale document ingestion for NBFC clients. I build IAM platforms, WebSocket real-time messaging, and move systems from monoliths to distributed async architectures.",
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
            "Originally from Mumbai, now based in Bangalore. When I’m offline you’ll find me playing badminton, out for a run, reading, or deep into shows & anime.",
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
        label: "Shows & Anime",
        icon: "shows",
        detail: "The One Piece is real",
      },
      {
        label: "Swimming",
        icon: "swimming",
        detail: "Laps to reset the brain",
      },
      {
        label: "Reading",
        icon: "reading",
        detail: "Fiction on rotation",
      },
    ],
  },
};
