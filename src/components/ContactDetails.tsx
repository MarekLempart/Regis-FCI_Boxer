// src/components/ContactDetails.tsx

import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { DetailsContainer, DetailItem, DetailIcon, DetailText, SectionTitle } from "../styles/ContactDetailsStyles";
import Map from "./Map";

const ContactDetails: React.FC = () => {
  const [showMap, setShowMap] = useState(false);

  const toggleMap = () => setShowMap(!showMap);

  return (
    <DetailsContainer>
      <SectionTitle>Dane kontaktowe</SectionTitle>
      <DetailItem>
        <DetailIcon><FaUser /></DetailIcon>
        <DetailText>Marek Lempart</DetailText>
      </DetailItem>
      <DetailItem>
        <DetailIcon><FaMapMarkerAlt /></DetailIcon>
        <DetailText>
          <button onClick={toggleMap}>ul. Obornicka 78/29, 51-114 Wrocław, Polska</button>
        </DetailText>
      </DetailItem>
      <DetailItem>
        <DetailIcon><FaPhoneAlt /></DetailIcon>
        <DetailText><a href="tel:+48664174400">(+48) 664-174-400</a></DetailText>
      </DetailItem>
      <DetailItem>
        <DetailIcon><FaEnvelope /></DetailIcon>
        <DetailText><a href="mailto:eppum.ml@gmail.com">eppum.ml@gmail.com</a></DetailText>
      </DetailItem>

      {showMap && (
        <Map
          latitude={51.14015}
          longitude={17.02654}
          address="ul. Obornicka 78/29, 51-114 Wrocław, Polska"
          onClose={toggleMap}
        />
      )}
    </DetailsContainer>
  );
};

export default ContactDetails;



// latitude={51.14015}
// longitude={17.02654}

// const ContactDetails: React.FC = () => (
//   <DetailsContainer>
//     <SectionTitle>Dane kontaktowe</SectionTitle>
//     <DetailItem>
//       <DetailIcon><FaUser /></DetailIcon>
//       <DetailText>Marek Lempart</DetailText>
//     </DetailItem>
//     <DetailItem>
//       <DetailIcon><FaMapMarkerAlt /></DetailIcon>
//       <DetailText>ul. Obornicka 78/29, 51-114 Wrocław, Polska</DetailText>
//     </DetailItem>
//     <DetailItem>
//       <DetailIcon><FaPhoneAlt /></DetailIcon>
//       <DetailText><a href="tel:+48664174400">(+48) 664-174-400</a></DetailText>
//     </DetailItem>
//     <DetailItem>
//       <DetailIcon><FaEnvelope /></DetailIcon>
//       <DetailText><a href="mailto:eppum.ml@gmail.com">eppum.ml@gmail.com</a></DetailText>
//     </DetailItem>
//   </DetailsContainer>
// );

// export default ContactDetails;
