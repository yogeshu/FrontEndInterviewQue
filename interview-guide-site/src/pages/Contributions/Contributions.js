import React, { useState } from 'react';
import styles from './Contributions.module.css';
import DOMPurify from 'dompurify';

const Contributions = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contribution, setContribution] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sanitize input values
    const sanitizedName = DOMPurify.sanitize(name);
    const sanitizedEmail = DOMPurify.sanitize(email);
    const sanitizedContribution = DOMPurify.sanitize(contribution);

    // Here, you can add logic to send the sanitized contribution data to a server or handle it in some other way
    console.log('Name:', sanitizedName);
    console.log('Email:', sanitizedEmail);
    console.log('Contribution:', sanitizedContribution);

    setFormSubmitted(true);
    setName('');
    setEmail('');
    setContribution('');
  };

  const handleInputChange = (e, setFunction) => {
    const sanitizedValue = DOMPurify.sanitize(e.target.value);
    setFunction(sanitizedValue);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contribute to Our Learning Platform</h1>
      <p className={styles.description}>
        We welcome contributions from developers and educators who share our passion for teaching and learning. Whether
        you have a new exercise idea, want to share your knowledge through written content, or have any other
        suggestions, we'd love to hear from you.
      </p>
      {formSubmitted ? (
        <div className={styles.successMessage}>
          <p>Thank you for your contribution! We'll review it and get back to you soon.</p>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              type="text"
              id="name"
              className={styles.input}
              value={name}
              onChange={(e) => handleInputChange(e, setName)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              className={styles.input}
              value={email}
              onChange={(e) => handleInputChange(e, setEmail)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="contribution" className={styles.label}>
              Your Contribution
            </label>
            <textarea
              id="contribution"
              className={styles.textarea}
              value={contribution}
              onChange={(e) => handleInputChange(e, setContribution)}
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Contributions;