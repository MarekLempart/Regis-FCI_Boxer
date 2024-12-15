// src/components/ContactDetails.tsx

import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { DetailsContainer, DetailItem, DetailIcon, DetailText, SectionTitle } from "../styles/ContactDetailsStyles";

const ContactDetails: React.FC = () => (
  <DetailsContainer>
    <SectionTitle>Dane kontaktowe</SectionTitle>
    <DetailItem>
      <DetailIcon><FaUser /></DetailIcon>
      <DetailText>Marek Lempart</DetailText>
    </DetailItem>
    <DetailItem>
      <DetailIcon><FaMapMarkerAlt /></DetailIcon>
      <DetailText>ul. Obornicka 78/29, 51-114 Wrocław, Polska</DetailText>
    </DetailItem>
    <DetailItem>
      <DetailIcon><FaPhoneAlt /></DetailIcon>
      <DetailText><a href="tel:+48664174400">(+48) 664-174-400</a></DetailText>
    </DetailItem>
    <DetailItem>
      <DetailIcon><FaEnvelope /></DetailIcon>
      <DetailText><a href="mailto:eppum.ml@gmail.com">eppum.ml@gmail.com</a></DetailText>
    </DetailItem>
  </DetailsContainer>
);

export default ContactDetails;
