import { AboutPage } from "@/screens/AboutPage/AboutPage";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "about",
};

const About = () => {
  return <AboutPage />;
};

export default About;
