import stonks from "../assets/images/stonks.png";
import sendfrom from "../assets/images/sendform.jpg";
import semicolon from "../assets/images/semicolon.png";
import scroll from "../assets/images/scroll.jpg";
import getv from "../assets/images/get-v.jpg";
import image2 from "../assets/images/image2.png";
import stealth from "../assets/images/stealth.jpeg";

export const projects = [
  {
    title: "Cyber Forensics",
    image: image2, // Add the path to the project image
    link: "https://your-link-to-cyberforensics", // Add the project link if available
    description: `
      🔍 Data Extraction & Parsing: Built advanced tools to extract data from mobile devices, parse it using .NET, and organize it into a comprehensive database. This foundational work is crucial for uncovering evidence in digital investigations.
      📊 Visualization & Analysis: Leveraging Node.js, React, SQLite, and Electron, we craft intuitive visualizers and analyzers that turn complex data into actionable insights, making it easier for professionals to interpret and act on extracted data.
    `,
  },
  {
    title: "Infiltrator",
    image: getv, // Add the path to the project image
    link: "https://your-link-to-infiltrator", // Add the project link if available
    description: `
      🛠️ Developed a web application using the MERN stack, integrating MySQL and MongoDB for optimized data management.
      🎧 Real-time Audio & Location Streaming: Implemented features for real-time audio and location streaming.
      🔄 Efficient Data Chunking: Ensured smooth data handling with efficient data chunking.
      🔗 WebSocket-based Communication: Established robust bidirectional communication using WebSockets.
      🔒 Data Encryption: Incorporated strong data encryption for secure transfer.
      📑 Binary Data Parser: Developed a binary data parser for effective processing.
    `,
  },
  {
    title: "Entire Search",
    image: stealth, // Add the path to the project image
    link: "https://your-link-to-entiresearch", // Add the project link if available
    description: `
      🔎 Developed a multi-stack OCR and text extraction tool supporting diverse file formats.
      🔍 Comprehensive Data Search: Enabled extensive data search capabilities.
      Utilized Python, Redis, RabbitMQ, Node.js, TensorFlow, Tesseract, PDFBox, and Java libraries for efficient extraction and OCR processes.
    `,
  },
  {
    title: "Aer Chat",
    image: scroll, // Add the path to the project image
    link: "https://your-link-to-aerchat", // Add the project link if available
    description: `
      💬 Developed an advanced web application utilizing Mediasoup, Redux, Saga, and WebSocket technologies for real-time communication.
      📹 High-Quality Video Conferencing: Integrated functionalities for seamless video conferencing.
      🔄 Instant Communication: Implemented instant communication capabilities.
      📤 Multimedia Sharing: Facilitated easy sharing of various content types.
      💬 Real-time Messaging: Integrated a comprehensive chatting system to support real-time messaging, enhancing user interaction and collaboration.
    `,
  },
  {
    title: "Collaborative Drawing Board",
    image: sendfrom, // Add the path to the project image
    link: "https://your-link-to-collaborativedrawingboard", // Add the project link if available
    description: `
      🎨 This is the real-time collaborative drawing board in which you and your friends make some awesome memories. This project is built with Node.js, Socket.io, and HTML, CSS, and JS.
      Skills: Css · Redux.js · Node js · JavaScript · Issue Identification · Software Projects · Node.js · Socket.io · Git · GitHub · Databases · Webpack · React.js · HTML
    `,
  },
  {
    title: "Jarvis",
    image: semicolon, // Add the path to the project image
    link: "https://your-link-to-jarvis", // Add the project link if available
    description: `
      Welcome to Jarvis, your very own assistant inspired by the legendary J.A.R.V.I.S. from the Avengers! Jarvis is here to make your life easier and more exciting. This project is your chance to bring a piece of the Marvel universe into your world.
      Features:
      - Voice Recognition: Communicate with Jarvis using your voice commands.
      - Web Browsing: Ask Jarvis to open websites or search the internet for you.
      - Entertainment: Play music, open your favorite YouTube videos, and remove YouTube ads with a snap of your fingers.
      - Productivity: Set alarms, send emails, and even remember important messages.
      - Information: Get answers to your questions from Wikipedia and Wolfram Alpha.
      - Fun: Jarvis can tell you jokes, and you can interact with it just like Tony Stark!
    `,
  },
];
