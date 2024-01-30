import React, { useState } from "react";

const Contact = ({ data }) => {
  const [message, setMessage] = useState("");

  if (data) {
    var contactName = data.name;
    var city = data.location.city;
    var phone = data.phone;
    var contactEmail = data.email;
    var subject = data.subject;
    var contactMessage = data.contactMessage;
  }

  const submitForm = () => {
    window.open(
        `mailto:${contactEmail}?subject=${subject}&body=${message}`
    );
  };

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">{contactMessage}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form onSubmit={submitForm}>
            <fieldset>
              <div>
                <label htmlFor="contactMessage">
                  Message
                </label>
                <textarea
                  cols="50"
                  rows="15"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id="contactMessage"
                  name="contactMessage"
                ></textarea>
              </div>

              <div>
                <button onClick={submitForm} type="submit" className="submit">
                  Submit
                </button>
              </div>
            </fieldset>
          </form>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Contact details</h4>
            <p className="location">
              {contactName}
              <br />
              {contactEmail}
              <br />
              {city}
              <br />
              <span>{phone}</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
