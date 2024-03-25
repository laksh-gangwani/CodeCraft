import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import fitlifepic from "@/public/FitLifePic.png";
import awsimage from "@/public/AWSImage.webp";
import ImageCaption from "@/public/ImageCaption.webp"
import mernapp from "@/public/mernapp.webp";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Timeline",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "SDET Intern",
    location: "Rocket Lawyer",
    description:
      "I gained proficiency in automated scripting with Playwright and deepened my understanding of testing methodologies, contributing to a more efficient testing process.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Present",
  },
  {
    title: "Computer Science Tutor",
    location: "Arizona State University",
    description:
      "I empowered students by leading tutoring sessions for key computer science courses, fostering a deeper understanding and practical application of programming principles.",
    icon: React.createElement(CgWorkAlt),
    date: "2023-2024",
  },
  {
    title: "Masters in Computer Science",
    location: "Arizona State University",
    description:
      "Achieving academic excellence with a GPA of 3.96/4.0, specializing in Cloud Computing, Data Mining, Data Visualization, Distributed Database Systems, and Mobile Computing, graduating in May 2024.",
    icon: React.createElement(LuGraduationCap),
    date: "2022-2024",
  },
  {
    title: "Software Developer Intern",
    location: "Samsung SDS",
    description:
      "I acquired hands-on experience with React, Spring Boot, and AWS, contributing to backend development and data visualization improvements.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Research Intern",
    location: "IMD",
    description:
      "I focused on advancing prediction accuracy by developing Neural Networks for long-term rainfall patterns analysis.",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "Bachelors in Computer Science",
    location: "Indian Institute of Information Technology",
    description:
      "Graduated with a GPA of 8.93/10, focusing on Data Structures & Algorithms, Software Engineering, Object-Oriented Programming, Machine Learning, Artificial Intelligence, and Database Management.",
    icon: React.createElement(LuGraduationCap),
    date: "2018-2022",
  },
] as const;

export const projectsData = [
  {
    title: "FitLife",
    description:
      "A personalized workout suggestion app with a unique fuzzy logic rating system, utilizing smartphone sensors for health metric analysis.",
    tags: ["Kotlin", "Android Studio", "SQLite", "XML"],
    imageUrl: fitlifepic
  },
  {
    title: "AWS:PAAS",
    description:
      "An AWS-powered elastic application for real-time student identification, achieving a 25% efficiency boost by handling 100 concurrent requests within 60 seconds.",
    tags: ["Lambda", "Python", "S3", "DynamoDB", "Docker", "EC2"],
    imageUrl: awsimage,
  },
  {
    title: "VisionSpeak",
    description:
      "A CNN-RNN architecture to develop an intuitive image captioning system, significantly enhancing descriptive accuracy with attention mechanisms.",
    tags: ["Python", "TensorFlow", "Git", "Keras", "CNN/RNN"],
    imageUrl: ImageCaption,
  },
  {
    title: "MarketPlace",
    description:
      "A dynamic MERN-based eCommerce platform that streamlines online shopping with a seamless user experience from cart to checkout.",
    tags: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    imageUrl: mernapp,
  },
] as const;

export const skillsData = [
  "C/C++",
  "Python",
  "Java",
  "JavaScript",
  "TypeScript",
  "Playwright",
  "TestRail",
  "AWS",
  "HTML/CSS",
  "Agile",
  "CI/CD",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Spring Boot",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Docker"
] as const;