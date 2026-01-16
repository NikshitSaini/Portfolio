import React, { useState, useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS configuration - credentials stored in .env file
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(serviceID, templateID, form.current, publicKey)
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          toast.success("Message sent successfully! I'll get back to you soon.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          // Reset form
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          setIsSubmitting(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send message. Please try again or email me directly.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <Container fluid className="contact-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={7} style={{ paddingTop: "30px", paddingBottom: "50px" }}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Get In <strong className="purple">Touch</strong>
            </h1>
            <p style={{ color: "#414141", paddingBottom: "30px" }}>
              Feel free to reach out to me for any inquiries, collaborations, or
              opportunities. I'm always excited to connect with like-minded
              individuals and explore new projects!
            </p>

            <Form ref={form} onSubmit={handleSubmit}>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="contact-input"
                    />
                  </Form.Group>
                </Col>

                <Col md={6} className="mb-3">
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="contact-input"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={12} className="mb-3">
                  <Form.Group controlId="formSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="contact-input"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={12} className="mb-3">
                  <Form.Group controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="contact-input"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={12}>
                  <Button
                    variant="primary"
                    type="submit"
                    className="download-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>

          <Col md={5} className="contact-info" style={{ paddingTop: "30px" }}>
            <h2 style={{ fontSize: "1.8em", paddingBottom: "20px" }}>
              <strong className="purple">Contact Information</strong>
            </h2>
            
            <div style={{ paddingBottom: "20px" }}>
              <h5>📧 Email</h5>
              <p>
                <a
                  href="mailto:nikshithansi@gmail.com"
                  style={{ color: "#c770f0" }}
                >
                  nikshithansi@gmail.com
                </a>
              </p>
            </div>

            <div style={{ paddingBottom: "20px" }}>
              <h5>📱 Phone</h5>
              <p>
                <a href="tel:+919817255915" style={{ color: "#c770f0" }}>
                  +91 9817255915
                </a>
              </p>
            </div>

            <div style={{ paddingBottom: "20px" }}>
              <h5>📍 Location</h5>
              <p>Pune, India</p>
            </div>

            <div style={{ paddingBottom: "20px" }}>
              <h5>🌐 Social Links</h5>
              <p>Connect with me on social media!</p>
              <div style={{ marginTop: "10px" }}>
                {/* Reuse SocialMedia component or add links */}
                <a
                  href="https://github.com/NikshitSaini"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginRight: "15px", fontSize: "1.5em" }}
                >
                  <i className="fab fa-github" style={{ color: "#c770f0" }}></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/nikshit12saini/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginRight: "15px", fontSize: "1.5em" }}
                >
                  <i className="fab fa-linkedin" style={{ color: "#c770f0" }}></i>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </Container>
  );
}

export default Contact;
