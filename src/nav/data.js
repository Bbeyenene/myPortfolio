import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";

export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 4,
    url: "/projects",
    text: "projects",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/contact",
    text: "contact",
  },
];

export const social = [
  {
    id: 1,
    url: "/",
    icon: "",
  },
  {
    id: 2,
    url: "https://github.com/Bbeyenene",
    icon: <GoMarkGithub />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com/in/berhane-beyene/",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
];
