import React from "react";
import "./Contact.css";
import { Mail, MapPin, Phone } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // To'g'ri API kalitini kiritganingizni tekshirib chiqing
    formData.append("access_key", "26e7f5f8-0bd4-49ab-a9ac-1e462f0a44e1");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message); // Xatolikni ko'rsatish
      }
    } catch (error) {
      // Agar tarmoq xatoliklari bo'lsa
      console.error("Error while sending form:", error);
      setResult("Failed to send. Please try again later.");
    }
  };

  console.log(result);

  return (
    <div id="contact" className="contact">
      <div className="contact_title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact_section">
        <div className="contact_left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send a message about anything you want me to work on. You can
            contact me anytime.
          </p>
          <div className="contact_details">
            <div className="contact_detail">
              <Mail />
              <p>javohirabdusharipov676@gmail.com</p>
            </div>
            <div className="contact_detail">
              <Phone />
              <p>+998-88-728-08-20</p>
            </div>
            <div className="contact_detail">
              <MapPin />
              <p>Khorezm region of Uzbekistan</p>
            </div>
          </div>
        </div>
        <form className="contact_right" onSubmit={onSubmit}>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
          />

          <label htmlFor="email">Your email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            required
          />

          <label htmlFor="message">Write your message</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            required
          ></textarea>

          <button type="submit" className="contact_submit">
            Submit now
          </button>
        </form>
      </div>
      <Toaster />
      {result && toast.success(result)}
    </div>
  );
}

export default Contact;
