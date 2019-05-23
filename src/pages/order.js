import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const Order = () => (
  <div>
    <form>
      <div>
        Name:
        <input type="text" name="name" placeholder="Name" />
      </div>
      <div>
        Qty:
        <input type="number" name="number" min="0" max="100" />
      </div>
      <div>
        Phone:
        <input type="text" name="phone" placeholder="phone number" />
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

export default Order;
