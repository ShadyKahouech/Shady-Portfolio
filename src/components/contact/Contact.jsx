import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Box, TextField, Button, Typography } from "@mui/material";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./Contact.css";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_heuhxo6", // Ton service ID EmailJS
        "template_63sctfg", // Ton template ID EmailJS
        form.current,
        "_DeAMKJ9IUWwVWueb" // Ton public key (User ID)
      )
      .then(
        (result) => {
          alert("Message envoyé avec succès !");
          form.current.reset();
        },
        (error) => {
          alert("Erreur lors de l'envoi. Veuillez réessayer.");
        }
      );
  };

  return (
    <div>
      <Header />
      <Box
        className="contact__box"
        component="form"
        ref={form}
        onSubmit={sendEmail}
        sx={{ maxWidth: 500, mx: "auto", mt: 5, mb: 5 }}
      >
        <Typography variant="h5" mb={2}>
          Contactez-moi
        </Typography>
        <TextField
          name="contact_name"
          label="Nom"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          name="contact_email"
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          name="message"
          label="Message"
          multiline
          rows={4}
          fullWidth
          margin="normal"
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Envoyer
        </Button>
      </Box>
      <Footer />
    </div>
  );
}
// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import { Box, TextField, Button, Typography } from "@mui/material";
// import Header from "../header/Header";
// import Footer from "../footer/Footer";

// export default function ContactForm() {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_heuhxo6", // Ton service ID EmailJS
//         "template_nsbk5gp", // Ton template ID EmailJS
//         form.current,
//         "_DeAMKJ9IUWwVWueb" // Ton public key EmailJS
//       )
//       .then(
//         (result) => {
//           alert("Message envoyé avec succès !");
//           form.current.reset();
//         },
//         (error) => {
//           alert("Erreur lors de l'envoi. Veuillez réessayer.");
//         }
//       );
//   };

//   return (
//     <div>
//       <Header />
//       <Box
//         component="form"
//         ref={form}
//         onSubmit={sendEmail}
//         sx={{ maxWidth: 500, mx: "auto", mt: 4 }}
//       >
//         <Typography variant="h5" mb={2}>
//           Contactez-moi
//         </Typography>
//         <TextField
//           name="contact_name"
//           label="Nom"
//           fullWidth
//           margin="normal"
//           required
//         />
//         <TextField
//           name="contact_email"
//           label="Email"
//           type="email"
//           fullWidth
//           margin="normal"
//           required
//         />
//         <TextField
//           name="contact_address"
//           label="Adresse"
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           name="contact_phone"
//           label="Téléphone"
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           name="message"
//           label="Message"
//           multiline
//           rows={4}
//           fullWidth
//           margin="normal"
//           required
//         />
//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           sx={{ mt: 2 }}
//         >
//           Envoyer
//         </Button>
//       </Box>
//       <Footer />
//     </div>
//   );
// }
