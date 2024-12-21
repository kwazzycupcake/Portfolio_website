// import React, { useState } from 'react';
// import "./contact.css";
// import cake from './cake.png';

// const Contact = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [textarea, setTextarea] = useState(""); // Add state for textarea

//   const handleChange = (e) => {
//     setTextarea(e.target.value); // Update textarea state on change
//   };

//   return (
//     <div className='contact-parent'>
//       <div className='box contact-title-form'>
//         <h2>Reach out to me!</h2>
//         {/* <form>
//           <label>
//             Name:
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </label>
//           <label>
//             Email:
//             <input
//               type="text"
//               value={email}  // Use the correct state for email
//               onChange={(e) => setEmail(e.target.value)} // Update email state
//             />
//           </label>
//           <label htmlFor="message">Your message</label>
//           <textarea
//             value={textarea}
//             placeholder="What brings you here?"
//             onChange={handleChange} // Call handleChange for textarea
//           />
//           <input type="submit" />
//         </form> */}
//         <form>
//             <label for="lastname" class="form-label">Your name</label>
//             <input type="text" name="lastname" required id="lastname" placeholder="Ivy" class="form-field"></input>

//             <label for="email" class="form-label">Your email</label>
//             <input type="email" name="email" required id="email" placeholder="name@example.com" class="form-field"></input>

//             <label for="message"class="form-label">Your message</label>
//             <textarea name="message" id="message" placeholder="Tell me what brings you here..." class="form-field is-area"></textarea>

//             <button type="submit" className="submit-button">Send</button>
//         </form>
//       </div>

//       <div className='box photo'>
//         <img src={cake} alt="cake" />
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "./contact.css";
// import cake from './cupcake.png';
import cake from './cake.png';

const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_0msie7k', // Replace with your Email.js service ID
        'template_utk3bxv', // Replace with your Email.js template ID
        formDetails,
        '6FCAW8n3Y5RsghDUI' // Replace with your Email.js public key
      )
      .then(
        (response) => {
          alert('Message sent successfully!');
          setFormDetails({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('Failed to send message:', error);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <div className='contact-parent'>
      <div className='box contact-title-form'>
        <h2>Reach out to me!</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="form-label">Your name</label>
          <input
            type="text"
            name="name"
            required
            id="name"
            placeholder="Ivy"
            className="form-field"
            value={formDetails.name}
            onChange={handleChange}
          />

          <label htmlFor="email" className="form-label">Your email</label>
          <input
            type="email"
            name="email"
            required
            id="email"
            placeholder="name@example.com"
            className="form-field"
            value={formDetails.email}
            onChange={handleChange}
          />

          <label htmlFor="message" className="form-label">Your message</label>
          <textarea
            name="message"
            required
            id="message"
            placeholder="Tell me what brings you here..."
            className="form-field is-area"
            value={formDetails.message}
            onChange={handleChange}
          />

          <button type="submit" className="submit-button">Send</button>
        </form>
      </div>

      <div className='box photo'>
        <img src={cake} alt="cake" />
      </div>
    </div>
  );
};

export default Contact;
