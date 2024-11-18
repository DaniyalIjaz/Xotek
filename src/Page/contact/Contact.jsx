import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  const [captchaVerified, setCaptchaVerified] = useState(false);

  return (
    <div className="contact-container">
      {/* Background Animation */}
      <div className="background"></div>

      <motion.div
        className="contact-form"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Contact Us</h2>
        <form>
          {/* Name Input */}
          <div className="input-group">
            <label>Name</label>
            <motion.input
              type="text"
              placeholder="Full Name"
              required
              whileFocus={{ scale: 1.05 }}
            />
          </div>

          {/* Email Input */}
          <div className="input-group">
            <label>Email</label>
            <motion.input
              type="email"
              placeholder="Email Address"
              required
              whileFocus={{ scale: 1.05 }}
            />
          </div>

          {/* Phone Input */}
          <div className="input-group">
            <label>Phone Number</label>
            <motion.input
              type="tel"
              placeholder="(XXX) XXX-XXXX"
              required
              whileFocus={{ scale: 1.05 }}
            />
          </div>

          {/* Project Description */}
          <div className="input-group">
            <label>Project Description</label>
            <motion.textarea
              placeholder="Tell us about your project..."
              required
              whileFocus={{ scale: 1.05 }}
            />
          </div>

          {/* Project Budget with Animated Style */}
          <div className="budget-group">
            <label>Project Budget</label>
            <motion.div
              className="budget-options"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.label>
                <input type="radio" name="budget" value="$5K-$25K" /> $5K - $25K
              </motion.label>
              <motion.label>
                <input type="radio" name="budget" value="$25K-$50K" /> $25K - $50K
              </motion.label>
              <motion.label>
                <input type="radio" name="budget" value="$50K-$100K" /> $50K - $100K
              </motion.label>
              <motion.label>
                <input type="radio" name="budget" value="$100K+" /> $100K+
              </motion.label>
            </motion.div>
          </div>
          

          {/* Submit Button */}
          <div className="submitButtonMain">
          <motion.button className="submitButton"
            type="submit"
            disabled={!captchaVerified}
            whileHover={{ scale: 1.05 }}
            >
            Submit
          </motion.button>
            </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
