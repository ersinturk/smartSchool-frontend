import React from "react";
import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import Contact from "@/components/contact/contact";

const ContactPage = () => {
  return (
    <>
      <PageHeader>Contact</PageHeader>
      <Spacer height={70} />
      <Contact />
    </>
  );
};

export default ContactPage;
