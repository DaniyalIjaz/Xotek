import React, { useState, useRef } from "react";
import "./index.css";
import { motion } from "framer-motion";
import { fadeIn, rotateSlideIn } from "../../variants";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [selectedBudget, setSelectedBudget] = useState(null);

  // EmailJS send function
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "Daniyal Ijaz", // Replace with your EmailJS service ID
        "template_7m9gatn", // Replace with your EmailJS template ID
        form.current,
        "ycE9btg8rQQ7gfj4o" // Replace with your public key
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Your message has been sent successfully!");
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("Failed to send your message. Please try again.");
        }
      );
  };

  // Update selected budget
  const handleBudgetChange = (budget) => {
    setSelectedBudget(budget);
  };

  return (
    <div className="contact-container">
      {/* Animated Heading */}
      <div className="contactPara">
        {["Our", "team", "will", "follow", "up", "within", "24", "hrs"].map((word, idx) => (
          <motion.p
            key={idx}
            variants={rotateSlideIn("down", 0.2 * (idx + 1))}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            {word}
          </motion.p>
        ))}
      </div>

      {/* Secondary Heading */}
      <div className="contactPara2">
        {["Last", "2", "slots", "-", "grab", "yours!"].map((word, idx) => (
          <motion.p
            key={idx}
            variants={fadeIn("up", 0.1 * (idx + 1))}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            style={word === "2" ? { fontWeight: "bold", color: "#054a80" } : {}}
          >
            {word}
          </motion.p>
        ))}
      </div>

      {/* Contact Form */}
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <motion.h4
          className="contact-form-h4"
          variants={fadeIn("up", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          Contact Us
        </motion.h4>

        {/* Input Fields */}
        {[
          { name: "user_name", label: "Name & Company", type: "text" },
          { name: "user_email", label: "Email", type: "email" },
          { name: "user_phone", label: "Phone Number", type: "tel" },
          { name: "message", label: "Project Description", type: "text" },
        ].map((field, idx) => (
          <div className="form-control" key={idx}>
            <input type={field.type} name={field.name} required />
            <label>
              {field.label.split("").map((char, i) => (
                <span key={i} style={{ transitionDelay: `${i * 50}ms` }}>
                  {char}
                </span>
              ))}
            </label>
          </div>
        ))}

        {/* Budget Selection */}
        <div className="input-group">
          <label htmlFor="budget">Project Budget</label>
          <div className="customCheckBoxHolder">
            {["Budget 1", "Budget 2", "Budget 3", "Budget 4"].map((budget, idx) => (
              <React.Fragment key={idx}>
                <input
                  type="radio"
                  id={budget}
                  name="budget"
                  value={budget}
                  checked={selectedBudget === budget}
                  onChange={() => handleBudgetChange(budget)}
                  className="customCheckBoxInput"
                />
                <label htmlFor={budget} className="customCheckBoxWrapper">
                  <div className={`customCheckBox ${selectedBudget === budget ? "active" : ""}`}>
                    <div className="inner">
                      {idx === 0
                        ? "$5K - $25K"
                        : idx === 1
                        ? "$25K - $50K"
                        : idx === 2
                        ? "$50K - $100K"
                        : "$100K+"}
                    </div>
                  </div>
                </label>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button className="contact-submit-btn" type="submit">
          GET STARTED
        </button>
      </form>
    </div>
  );
};

export default Contact;
