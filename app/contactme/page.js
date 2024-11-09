import Link from 'next/link';

const ContactPage = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Contact Me</h1>
        <p style={styles.subtitle}>I'd love to hear from you! Please reach out with any questions or comments.</p>
      </header>

      <main style={styles.mainContent}>
        <form action="/api/contact" method="POST" style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="name" style={styles.label}>Your Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>Your Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="message" style={styles.label}>Your Message:</label>
            <textarea
              id="message"
              name="message"
              style={styles.textarea}
              required
            />
          </div>

          <button type="submit" style={styles.submitButton}>Send Message</button>
        </form>
      </main>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    color: '#333',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  header: {
    backgroundColor: '#006bb3',  // Muted blue color
    padding: '2rem',
    textAlign: 'center',
    color: '#fff',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginTop: '0',
  },
  mainContent: {
    flex: 1,
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    fontSize: '1.1rem',
    color: '#333',
  },
  input: {
    padding: '0.75rem',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    width: '100%',
  },
  textarea: {
    padding: '0.75rem',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    width: '100%',
    height: '150px',
    resize: 'vertical',
  },
  submitButton: {
    padding: '1rem',
    fontSize: '1.1rem',
    backgroundColor: '#007acc',  // Blue color
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  submitButtonHover: {
    backgroundColor: '#006bb3',
  },
};

export default ContactPage;
