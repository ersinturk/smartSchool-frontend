"use client";
import React, { useRef } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import {
  TfiUser,
  TfiEmail,
  TfiTag,
  TfiComment,
  TfiLocationArrow,
} from "react-icons/tfi";
import "./contact-form.scss";
import { createContactMessageAction } from "@/actions/contact-action";
import { initialResponse } from "@/helpers/form-validateion";
import { useFormState } from "react-dom";
import { swAlert } from "@/helpers/swal";

const ContactForm = () => {
  const [state, dispatch] = useFormState(
    //Dispatch fonksiyonu sayesinde form state'i ile state durumunu değiştirebiliriz. Bu durumda state durumunu kullanarak form'un doldurulması gereken alanları doldurabiliriz.
    createContactMessageAction,
    initialResponse
  );

  const formRef = useRef();

  if (state.message) {
    if (state.ok) {
      formRef.current.reset(); // Formu temizler
      swAlert(state.message, "success");
  
    } else {
      swAlert(state.message, "error");
    }
  }
  // ref={formRef} ile formun doldurulması gereken alanları doldururuz.
  return (
    <div className="contact-form">
      <h2>Send Me Message</h2>
      <Form action={dispatch} ref={formRef}> 
        <Col md={6}>
          <InputGroup className="mb-3" size="lg">
            <InputGroup.Text id="name">
              <TfiUser />
            </InputGroup.Text>
            <Form.Control
              name="name"
              placeholder="Your name"
              aria-label="Your name"
              aria-describedby="name"
              isInvalid={!!state.errors?.name} // Form validation durumunu kontrol eder.
              //Form validation durumunda hata mesajını gösterir. state.errors?.name ile hata mesajını kontrol edebiliriz.
            />
            
            <Form.Control.Feedback type="invalid">
              {state.errors?.name}
            </Form.Control.Feedback>
          </InputGroup>
        </Col>
        <Col md={6}>
          <InputGroup className="mb-3" size="lg">
            <InputGroup.Text id="email">
              <TfiEmail />
            </InputGroup.Text>
            <Form.Control
              name="email"
              placeholder="Email"
              aria-label="Email"
              aria-describedby="email"
              isInvalid={!!state.errors?.email}
            />
            <Form.Control.Feedback type="invalid">
              {state.errors?.email}
            </Form.Control.Feedback>
          </InputGroup>
        </Col>
        <Col xs={12}>
          <InputGroup className="mb-3" size="lg">
            <InputGroup.Text id="subject">
              <TfiTag />
            </InputGroup.Text>
            <Form.Control
              name="subject"
              placeholder="Subject"
              aria-label="subject"
              aria-describedby="subject"
              isInvalid={!!state.errors?.subject}
            />
            <Form.Control.Feedback type="invalid">
              {state.errors?.subject}
            </Form.Control.Feedback>
          </InputGroup>
        </Col>
        <Col xs={12}>
          <InputGroup className="mb-3" size="lg">
            <InputGroup.Text id="message">
              <TfiComment />
            </InputGroup.Text>
            <Form.Control
              name="message"
              as="textarea"
              placeholder="Your message"
              aria-label="Your message"
              aria-describedby="message"
              isInvalid={!!state.errors?.message}
            />
            <Form.Control.Feedback type="invalid">
              {state.errors?.message}
            </Form.Control.Feedback>
          </InputGroup>
        </Col>

        <Button type="submit" variant="outline-primary" size="lg">
          {" "}
          <TfiLocationArrow /> Send
        </Button>
      </Form>
    </div>
  );
};
export default ContactForm;
