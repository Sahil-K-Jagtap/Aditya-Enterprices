import { Metadata } from "next";
import { ClientsContent } from "./clients-content";

export const metadata: Metadata = {
  title: "Our International Clients | Aditya Enterprises Pune",
  description: "We are honored to serve our esteemed customers from various countries around the world.",
};

export default function ClientsPage() {
  return <ClientsContent />;
}
