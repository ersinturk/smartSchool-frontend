import React from "react";
import Spacer from "@/components/common/spacer";
import Events from "@/components/events/events";
import PageHeader from "@/components/common/page-header";

const EventsPage = () => {
  return (
    <>
      <PageHeader>Events</PageHeader>
      <Spacer height={70} />
      <Events />
    </>
  );
};

export default EventsPage;
