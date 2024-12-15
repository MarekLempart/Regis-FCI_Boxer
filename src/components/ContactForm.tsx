// src/components/ContactForm.tsx

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { FormContainer, SectionTitle, Input, TextArea, SubmitButton, ErrorText, Select } from "../styles/ContactFormStyles";

emailjs.init("xtkeKbpRdN9dos4sU");

const ContactForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      countryCode: "+48",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Imię jest wymagane"),
      lastName: Yup.string().required("Nazwisko jest wymagane"),
      email: Yup.string().email("Nieprawidłowy email").required("Email jest wymagany"),
      phone: Yup.string().required("Numer telefonu jest wymagany"),
      message: Yup.string().required("Treść zapytania jest wymagana"),
    }),
    onSubmit: (values, { resetForm }) => {
      emailjs
        .send("service_id", "template_id", values, "xtkeKbpRdN9dos4sU")
        .then(() => {
          alert("Wiadomość wysłana!");
          resetForm();
        })
        .catch(() => alert("Wystąpił błąd. Spróbuj ponownie."));
    },
  });

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
        <SectionTitle>Kontakt</SectionTitle>
      <Input
        name="firstName"
        placeholder="Imię"
        value={formik.values.firstName}
        onChange={formik.handleChange}
      />
      {formik.errors.firstName && <ErrorText>{formik.errors.firstName}</ErrorText>}
      <Input
        name="lastName"
        placeholder="Nazwisko"
        value={formik.values.lastName}
        onChange={formik.handleChange}
      />
      {formik.errors.lastName && <ErrorText>{formik.errors.lastName}</ErrorText>}
      <Input
        name="email"
        placeholder="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      {formik.errors.email && <ErrorText>{formik.errors.email}</ErrorText>}
      <Select
        name="countryCode"
        value={formik.values.countryCode}
        onChange={formik.handleChange}
      >
        <option value="+48">Polska (+48)</option>
        <option value="+44">Wielka Brytania (+44)</option>
        <option value="+49">Niemcy (+49)</option>
        <option value="+1">USA (+1)</option>
      </Select>
      <Input
        name="phone"
        placeholder="Numer telefonu"
        value={formik.values.phone}
        onChange={formik.handleChange}
      />
      {formik.errors.phone && <ErrorText>{formik.errors.phone}</ErrorText>}
      <TextArea
        name="message"
        placeholder="Treść zapytania"
        value={formik.values.message}
        onChange={formik.handleChange}
      />
      {formik.errors.message && <ErrorText>{formik.errors.message}</ErrorText>}
      <SubmitButton type="submit">Wyślij</SubmitButton>
    </FormContainer>
  );
};

export default ContactForm;



// // src/components/ContactForm.tsx

// import React from "react";
// import PhoneInput from "react-phone-input-2"; // Poprawny import
// import emailjs from "emailjs-com";
// import { FormContainer, Input, TextArea, SubmitButton, ErrorText, SectionTitle } from "../styles/ContactFormStyles";
// import { useFormik } from "formik";
// import * as Yup from "yup";

// emailjs.init("xtkeKbpRdN9dos4sU");

// const ContactForm: React.FC = () => {
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       surname: "",
//       email: "",
//       phone: "",
//       message: "",
//     },
//     validationSchema: Yup.object({
//       name: Yup.string().required("Imię jest wymagane"),
//       surname: Yup.string().required("Nazwisko jest wymagane"),
//       email: Yup.string().email("Nieprawidłowy adres email").required("Email jest wymagany"),
//       phone: Yup.string().required("Numer telefonu jest wymagany"),
//       message: Yup.string().required("Treść wiadomości jest wymagana"),
//     }),
//     onSubmit: (values) => {
//       emailjs
//         .sendForm(
//           "service_id",
//           "template_id",
//           "#contactForm", // ID formularza
//           "user_id"
//         )
//         .then((result) => {
//           console.log(result.text);
//         })
//         .catch((error) => {
//           console.error(error.text);
//         });
//     },
//   });

//   // Typowanie parametrów w onChange
//   const handlePhoneChange = (
//     value: string,
//     countryData: CountryData,
//     event: React.ChangeEvent<HTMLInputElement>,
//     formattedValue: string
//   ) => {
//     formik.setFieldValue("phone", value);
//   };

//   return (
//     <FormContainer id="contactForm" onSubmit={formik.handleSubmit}>
//       <SectionTitle>Kontakt</SectionTitle>

//       <div>
//         <Input
//           type="text"
//           name="name"
//           placeholder="Imię"
//           value={formik.values.name}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />
//         {formik.touched.name && formik.errors.name && <ErrorText>{formik.errors.name}</ErrorText>}
//       </div>

//       <div>
//         <Input
//           type="text"
//           name="surname"
//           placeholder="Nazwisko"
//           value={formik.values.surname}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />
//         {formik.touched.surname && formik.errors.surname && <ErrorText>{formik.errors.surname}</ErrorText>}
//       </div>

//       <div>
//         <Input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formik.values.email}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />
//         {formik.touched.email && formik.errors.email && <ErrorText>{formik.errors.email}</ErrorText>}
//       </div>

//       <div>
//         <PhoneInput
//           country="pl"
//           value={formik.values.phone}
//           onChange={handlePhoneChange}
//           preferredCountries={["gb", "de", "us"]}
//         />
//         {formik.touched.phone && formik.errors.phone && <ErrorText>{formik.errors.phone}</ErrorText>}
//       </div>

//       <div>
//         <TextArea
//           name="message"
//           placeholder="Treść zapytania"
//           value={formik.values.message}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />
//         {formik.touched.message && formik.errors.message && <ErrorText>{formik.errors.message}</ErrorText>}
//       </div>

//       <SubmitButton type="submit">Wyślij</SubmitButton>
//     </FormContainer>
//   );
// };

// export default ContactForm;
