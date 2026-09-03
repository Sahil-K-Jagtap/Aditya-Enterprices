import { Metadata } from "next";
import { ContactContent } from "./contact-content";

export const metadata: Metadata = {
  title: "Contact Aditya Enterprises — Anodizing Facility in Pune",
  description: "Reach the Aditya Enterprises team in Pune. Phone, email and facility address for anodizing enquiries.",
};

export default function ContactPage() {
  return <ContactContent />;
}
