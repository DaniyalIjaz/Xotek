import React, { useState } from "react";
import "./Contact.css";
import {motion} from  'framer-motion'
import { fadeIn } from '../../variants'
import { rotateSlideIn } from '../../variants'

const Contact = () => {
  const [selectedBudget, setSelectedBudget] = useState(null);

  const handleBudgetChange = (budget) => {
    setSelectedBudget(budget);
  };

  return (
    <div className="contact-container">
      <div className="contactPara">
        <motion.p
        variants={rotateSlideIn('down', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}>Our</motion.p>
        <motion.p
        variants={rotateSlideIn('down', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}>team</motion.p>
        <motion.p
        variants={rotateSlideIn('down', 0.4)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}>will</motion.p>
        <motion.p
        variants={rotateSlideIn('down', 0.5)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}>follow</motion.p>
        <motion.p
        variants={rotateSlideIn('down', 0.6)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}>up</motion.p>
        <motion.p
        variants={rotateSlideIn('down', 0.7)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}>within</motion.p>
        <motion.p
        variants={rotateSlideIn('down', 0.8)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}>24</motion.p>
        <motion.p
        variants={rotateSlideIn('down', 0.9)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}>hrs</motion.p>
      </div>

      {/* second heading  */}
      <div className="contactPara2">
        <motion.p
        variants={fadeIn('up',0.1)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}>Last</motion.p>
        <motion.p
        variants={fadeIn('up',0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }} style={{ fontWeight: 'bold', color: '#054a80' }} >2</motion.p>
        <motion.p
        variants={fadeIn('up',0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}>slots</motion.p>
        <motion.p
        variants={fadeIn('up',0.4)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}>-</motion.p>
        <motion.p
        variants={fadeIn('up',0.5)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}>grab</motion.p>
        <motion.p
        variants={fadeIn('up',0.6)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}>yours!</motion.p>
        
      </div>
      <form className="contact-form">
        <motion.p className="contact-form-h4"
        variants={fadeIn('up',0.7)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}>Contact Us</motion.p>

        {/* Name */}
        <div className="form-control">
          <input type="text" required />
          <label>
            <span style={{ transitionDelay: "0ms" }}>N</span>
            <span style={{ transitionDelay: "50ms" }}>a</span>
            <span style={{ transitionDelay: "100ms" }}>m</span>
            <span style={{ transitionDelay: "150ms" }}>e</span>
            <span style={{ transitionDelay: "200ms" }}> </span>
            <span style={{ transitionDelay: "250ms" }}>&</span>
            <span style={{ transitionDelay: "300ms" }}> </span>
            <span style={{ transitionDelay: "350ms" }}>C</span>
            <span style={{ transitionDelay: "400ms" }}>o</span>
            <span style={{ transitionDelay: "450ms" }}>m</span>
            <span style={{ transitionDelay: "500ms" }}>p</span>
            <span style={{ transitionDelay: "550ms" }}>a</span>
            <span style={{ transitionDelay: "600ms" }}>n</span>
            <span style={{ transitionDelay: "650ms" }}>y</span>
          </label>
        </div>

        {/* Email */}
        <div className="form-control">
          <input type="mail" required />
          <label>
            <span style={{ transitionDelay: "0ms" }}>E</span>
            <span style={{ transitionDelay: "50ms" }}>m</span>
            <span style={{ transitionDelay: "100ms" }}>a</span>
            <span style={{ transitionDelay: "150ms" }}>i</span>
            <span style={{ transitionDelay: "200ms" }}>l</span>
          </label>
        </div>

        {/* Phone */}
        <div className="form-control">
          <input type="tel" required />
          <label>
            <span style={{ transitionDelay: "0ms" }}>P</span>
            <span style={{ transitionDelay: "50ms" }}>h</span>
            <span style={{ transitionDelay: "100ms" }}>o</span>
            <span style={{ transitionDelay: "150ms" }}>n</span>
            <span style={{ transitionDelay: "200ms" }}>e</span>
            <span style={{ transitionDelay: "250ms" }}> </span>
            <span style={{ transitionDelay: "300ms" }}>N</span>
            <span style={{ transitionDelay: "350ms" }}>u</span>
            <span style={{ transitionDelay: "400ms" }}>m</span>
            <span style={{ transitionDelay: "450ms" }}>b</span>
            <span style={{ transitionDelay: "500ms" }}>e</span>
            <span style={{ transitionDelay: "550ms" }}>r</span>
          </label>
        </div>

        {/* Project Description */}
        <div className="form-control">
          <input type="text" required />
          <label>
            <span style={{ transitionDelay: "0ms" }}>P</span>
            <span style={{ transitionDelay: "50ms" }}>r</span>
            <span style={{ transitionDelay: "100ms" }}>o</span>
            <span style={{ transitionDelay: "150ms" }}>j</span>
            <span style={{ transitionDelay: "200ms" }}>e</span>
            <span style={{ transitionDelay: "250ms" }}>c</span>
            <span style={{ transitionDelay: "300ms" }}>t</span>
            <span style={{ transitionDelay: "350ms" }}> </span>
            <span style={{ transitionDelay: "400ms" }}>D</span>
            <span style={{ transitionDelay: "450ms" }}>e</span>
            <span style={{ transitionDelay: "500ms" }}>s</span>
            <span style={{ transitionDelay: "550ms" }}>c</span>
            <span style={{ transitionDelay: "600ms" }}>r</span>
            <span style={{ transitionDelay: "650ms" }}>i</span>
            <span style={{ transitionDelay: "700ms" }}>p</span>
            <span style={{ transitionDelay: "750ms" }}>t</span>
            <span style={{ transitionDelay: "800ms" }}>i</span>
            <span style={{ transitionDelay: "850ms" }}>o</span>
            <span style={{ transitionDelay: "900ms" }}>n</span>
          </label>
        </div>

        {/* Project Budget */}
        <div className="input-group">
          <label htmlFor="budget">Project Budget</label>
          <div className="customCheckBoxHolder">
            {["Budget 1", "Budget 2", "Budget 3", "Budget 4"].map((budget, idx) => (
              <React.Fragment key={idx}>
                <input
                  type="radio"
                  id={budget}
                  name="budget"
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
        <button className="contact-submit-btn">GET STARTED</button>
      </form>
    </div>
  );
};

export default Contact;
