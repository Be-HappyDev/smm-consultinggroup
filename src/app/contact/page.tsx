import { ContactPage } from "@/screens/ContactPage/ContactPage";

import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'contact',
}

const Contact = () => {
  return <ContactPage />;
};

export default Contact;
