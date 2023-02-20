import React from "react";
import { useState } from "react";
import swal from "sweetalert";

import { contact } from "../data";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [message, setMessage] = useState("");

  let navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setAsunto("");
    setMessage("");
    emailjs
      .sendForm(
        "service_smh25nx",
        "template_iwz86tb",
        e.target,
        "0b14kTu47GTyYXzZ4"
      )
      .then(
        (res) => console.log(res),
        swal({
          title: "Exito!",
          text: "Se envió formulario de manera exitosa!",
          icon: "success",
          allowOutsideClick: false,
        })
          .then((res) => {
            if (res) {
              navigate("/");
            }
          })
          .catch((error) => console.log(error))
      );
  };
  return (
    <section className="section bg-primary" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2
            className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block"
            style={{ fontFamily: "Ubuntu, sans-serif" }}
          >
            Contactame
          </h2>
          <p className="subtitle" style={{ fontFamily: "Ubuntu, sans-serif" }}>
            Si te interesa realizar un proyecto hazmelo saber
          </p>
        </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                  <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                    {icon}
                  </div>
                  <div>
                    <h4
                      className="font-body text-xl mb-1"
                      style={{ fontFamily: "Ubuntu, sans-serif" }}
                    >
                      {title}
                    </h4>
                    <p
                      className="mb-1 text-paragraph"
                      style={{ fontFamily: "Ubuntu, sans-serif" }}
                    >
                      {subtitle}
                    </p>
                    <p
                      className="text-accent font-normal"
                      style={{ fontFamily: "Ubuntu, sans-serif" }}
                    >
                      {description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <form className="space-y-8 w-full max-w-[780px]" onSubmit={sendEmail}>
            <div className="flex gap-8">
              <input
                className="input"
                type="text"
                placeholder="Nombre"
                name="user_name"
                onChange={(e) => setName(e.target.value)}
                required
                value={name}
                style={{ fontFamily: "Ubuntu, sans-serif" }}
              />
              <input
                className="input"
                type="email"
                placeholder="E-mail"
                name="user_email"
                onChange={(e) => setEmail(e.target.value)}
                required
                value={email}
                style={{ fontFamily: "Ubuntu, sans-serif" }}
              />
            </div>
            <input
              className="input"
              type="text"
              placeholder="Asunto"
              name="user_asunto"
              onChange={(e) => setAsunto(e.target.value)}
              required
              value={asunto}
              style={{ fontFamily: "Ubuntu, sans-serif" }}
            />
            <textarea
              className="textarea"
              type="text"
              placeholder="Mensaje"
              name="user_message"
              onChange={(e) => setMessage(e.target.value)}
              required
              value={message}
              style={{ fontFamily: "Ubuntu, sans-serif" }}
            ></textarea>
            <button
              className="btn btn-lg bg-accent hover:bg-secondary-hover"
              style={{ fontFamily: "Ubuntu, sans-serif" }}
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
