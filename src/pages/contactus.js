import React from 'react';
import { Link } from 'gatsby';
// import Layout from '../components/layout';

const ContactUs = () => (
  <div>
    <form>
      <div>
        Name:
        <input type="text" name="name" placeholder="Name" />
      </div>
      <div>
        Email:
        <input type="email" name="email" placeholder="Email" />
      </div>
      <div>
        Phone:
        <input type="number" name="phone" placeholder="phone number" />
      </div>
      <div>
        Message Us:
        <textarea placeholder="Message" />
      </div>
      <button>Send</button>
    </form>
    <Link to="/">&larr; back to home</Link>
  </div>
);

export default ContactUs;
