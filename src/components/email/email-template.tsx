import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  text: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, email, text }) => (
  <div>
    <h2>New Contact Request</h2>
    <p>
      <strong>Name:</strong> {name}
    </p>
    <p>
      <strong>Email:</strong> {email}
    </p>
    <p>
      <strong>Message:</strong>
    </p>
    <p>{text}</p>
    <hr />
    <p>This message was sent from Alpha Janitorial Services website contact form.</p>
  </div>
);
