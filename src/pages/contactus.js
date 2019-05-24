import React, { useState } from 'react';
import { Link } from 'gatsby';
// import Layout from '../components/layout';
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const ContactUs = () => {
  const [state, setState] = useState({
    isValidated: false,
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  return (
    <div>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <div>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={state.name}
            onChange={handleChange}
          />
        </div>
        <div>
          Email:
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={handleChange}
          />
        </div>
        <div>
          Phone:
          <input
            type="text"
            name="phone"
            placeholder="phone number"
            value={state.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          Message Us:
          <textarea
            name="message"
            placeholder="Message"
            type="text"
            value={state.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Send</button>
      </form>
      <Link to="/">&larr; back to home</Link>
    </div>
  );
};
export default ContactUs;
