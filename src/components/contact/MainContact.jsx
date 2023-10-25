import React from "react";
import ContactHeader from "../../pages/home/Contact/ContactHeader/ContactHeader";
import FormContact from "../../pages/home/Contact/FormContact/FromContact";
import MapContainer from "../../pages/home/Contact/MapContainer/MapContainer";

const MainContact = () => {
  return (
    <div>
      <ContactHeader />
      <FormContact />
      <MapContainer />
    </div>
  );
};

export default MainContact;
