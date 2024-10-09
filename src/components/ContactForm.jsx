import React from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    fetch('https://formspree.io/f/mpwzanop', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) => {
      if (response.ok) {
        alert('Thanks for your message! I’ll get back to you soon.');
        form.reset();
      } else {
        alert('Something went wrong, please try again.');
      }
    })
    .catch(() => alert('Something went wrong, please try again.'));
  };

  return (
    <Form onSubmit={handleSubmit} className="p-4 border-dark rounded bg-dark mx-auto col-10 col-md-8 col-lg-6">
      <Form.Group controlId="formName" className="mb-3 text-start ">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" className="form-field" name="name" required />
      </Form.Group>

      <Form.Group controlId="formEmail" className="mb-3 text-start">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" className="form-field" name="email" required />
      </Form.Group>

      <Form.Group controlId="formMessage" className="mb-3 text-start">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" className="form-field" name="message" rows={3} required />
      </Form.Group>

      <Button variant="success" type="submit">
        Send Message
      </Button>
    </Form>
  );
};

export default ContactForm;

