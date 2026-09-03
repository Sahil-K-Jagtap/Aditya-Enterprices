import { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About Aditya Enterprises — Anodizing Specialists in Pune",
  description: "20 years of precision anodizing and metal finishing from our Pune facility.",
};

export default function AboutPage() {
  return <AboutContent />;
}
