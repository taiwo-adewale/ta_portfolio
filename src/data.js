import { images } from "./constants";

export const works = [
  {
    title: "Modern UI/UX Website",
    description: "A beautiful website designed by the awesome Wale",
    projectLink: "https://wale-portfolio.netlify.app",
    codeLink: "https://github.com/taiwo-adewale",
    imageUrl: images.about01,
    tags: ["Next JS", "Tailwind", "All"],
  },
  {
    title: "Modern React Website",
    description: "A beautiful website designed by the awesome Wale",
    projectLink: "https://wale-portfolio.netlify.app",
    codeLink: "https://github.com/taiwo-adewale",
    imageUrl: images.about03,
    tags: ["React JS", "All"],
  },
  {
    title: "Modern Laravel Website",
    description: "A beautiful website designed by the awesome Wale",
    projectLink: "https://wale-portfolio.netlify.app",
    codeLink: "https://github.com/taiwo-adewale",
    imageUrl: images.about04,
    tags: ["React JS", "Tailwind", "All"],
  },
];

export const testimonials = [
  {
    name: "Sarah",
    company: "Netflix",
    imgUrl: images.css,
    feedback:
      "Wale is an awesome developer. He is a humble guy and he finishes all tasks ahead of time. He is a role model to his junior colleagues.",
  },
  {
    name: "Michael",
    company: "Google",
    imgUrl: images.html,
    feedback:
      "Good job, would recommend! He is a humble guy and he finishes all tasks ahead of time. He is a role model to his junior colleagues.",
  },
];

export const brands = [
  { _id: "brand-1", imgUrl: images.nb, name: "New Balance" },
  { _id: "brand-2", imgUrl: images.skype, name: "Skype" },
  { _id: "brand-3", imgUrl: images.spotify, name: "Spotify" },
  { _id: "brand-4", imgUrl: images.bolt, name: "Bolt" },
];

export const experiences = [
  {
    works: [
      {
        name: "Backend Developer",
        company: "Meta",
        desc: "I worked as a backend developer at Meta",
      },
      {
        name: "Blockchain Developer",
        company: "OpenSea",
        desc: "I developed in Solidity",
      },
    ],
    year: 2021,
  },
  {
    works: [
      {
        name: "Frontend Developer",
        company: "Google",
        desc: "I worked as a frontend developer at Google",
      },
    ],
    year: 2022,
  },
];

export const skills = [
  { name: "React", icon: images.react },
  { name: "Figma", icon: images.figma },
  { name: "Flutter", icon: images.flutter },
  { name: "Git", icon: images.git },
  { name: "Node JS", icon: images.node },
];
