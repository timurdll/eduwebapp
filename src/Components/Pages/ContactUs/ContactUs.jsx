import { useState } from "react";
import { TextField, Button, Typography, Container, Box } from "@mui/material";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook

const ContactForm = () => {
  const { t } = useTranslation(); // Initialize the t function for translations

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState(""); // State for response/error messages

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log form data to verify it's being captured correctly
    console.log("Form data:", {
      name,
      email,
      message,
    });

    emailjs
      .sendForm(
        "service_r1yscmq",
        "template_32h0udk",
        e.target, // Use the form element directly
        "FudthHlPiD9XVeYrD"
      )
      .then(
        (result) => {
          // Handle success
          console.log("Email sent:", result.text);
          setResponseMessage(t("emailSentSuccessfully"));
        },
        (error) => {
          // Handle error
          console.error("Email sending failed:", error.text);
          setResponseMessage(t("emailFailedToSend"));
        }
      );
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        {t("contact_us")}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <TextField
            label={t("name")}
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            name="name"
          />
          <TextField
            label={t("email")}
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            name="reply_to"
          />
          <TextField
            label={t("message")}
            variant="outlined"
            fullWidth
            margin="normal"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            multiline
            rows={4}
            required
            name="message"
          />
          <Button type="submit" variant="contained" color="primary">
            {t("submit")}
          </Button>
          {responseMessage && (
            <Typography
              variant="body1"
              style={{
                color: responseMessage.includes("Failed") ? "red" : "green",
                textAlign: "center",
                marginTop: "16px",
              }}
            >
              {responseMessage}
            </Typography>
          )}
        </Box>
      </form>
    </Container>
  );
};

export default ContactForm;
