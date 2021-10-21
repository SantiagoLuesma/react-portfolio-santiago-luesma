import React, { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="name">
            Tu nombre
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Tu email
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Tu mensaje
            <input
              type="text"
              id="message"
              name="message"
              value={email}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <button type="button">Enviar</button>
      </form>
    </div>
  );
}
