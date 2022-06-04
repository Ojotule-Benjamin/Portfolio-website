import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="contactContainer">
        <h2>Contact us</h2>
        <p>
          I am always available for a chat. Kindly contact me on any of these
          platforms and get a swift response.
        </p>
        <ul className="contactList">
          <li>
            <a href="mailto:ochumamary@gmail.com" target={"_blank}"}>
              Email
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ojochoko-mary-ochuma-a13865209/"
              target={"_blank}"}
            >
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://twitter.com/iam_choko21" target={"_blank}"}>
              Twitter
            </a>
          </li>
          <li>
            <a href="www.behance.com/ochumamary" target={"_blank}"}>
              Behance
            </a>
          </li>
        </ul>
      </div>

      <div className="contactFooter">
        <footer>
          <p>&copy; 2022. All rights reserved to Ojochoko Mary Ochuma</p>
        </footer>
      </div>
    </>
  );
};
export default Contact;
