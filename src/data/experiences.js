import stealth from "../assets/images/stealth.jpeg";

import { blue } from "../utils";

export const experiences = [
  {
    logo: stealth, // Add the path to the company logo
    name: "Aspirify Enterprises",
    joined: "Jan'21",
    end: "Present",
    title: "Full Stack Engineer",
    bio: `
    Launched and maintained full-stack applications using Node.js, ReactJS, Express, and MongoDB, delivering 3+ high-quality apps used by over 1,000 users.
    Enhanced performance and scalability with RESTful APIs, reducing load times by 30%.
    Created responsive UIs with ReactJS, Material UI, and Semantic UI, achieving a 95% user satisfaction rate.
    Integrated MySQL and PostgreSQL, improving data processing speed by 40%.
    Streamlined deployment with Docker and CI/CD pipelines, reducing release times.
    Increased throughput by 50% with RabbitMQ and Redis.
    Managed version control with Git, enhancing team productivity.
    Deployed apps on AWS, reducing infrastructure costs by 25%.
    Optimized query performance with Neo4j for graph-based solutions.
    Secured applications with robust authentication and authorization mechanisms.
    Reduced development time by 30% using Java and Python for backend services and scripting.
    Ensured cross-browser compatibility with HTML and CSS, achieving 99% compatibility.
    Designed and implemented UIs for messenger apps and data tools.
    Resolved critical software bugs, reducing error rates by 40%.
    `,
    color: "gray", // Add the desired color
  },
  {
    logo: stealth,
    name: "Mu-Zero Technologies",
    joined: "Aug'20",
    end: "Sep'20",
    title: "Full Stack Developer",
    bio: "Utilized ExpressJS for backend authentication and rate limitation. The frontend ReactJS code was optimized, eliminating re-renders to enhance performance and user experience. A ReactJS and ExpressJS-based admin panel was developed for data visualization and transaction management.",
    color: blue,
  },
];
