
const Home = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Welcome to My Learning Project</h1>
        <p style={styles.subtitle}>Built with Next.js 15 by Muhammed Magid</p>
      </header>

      <main style={styles.mainContent}>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>About the Project</h2>
          <p style={styles.sectionDescription}>
            This website was created to practice and learn Next.js 15. It displays articles fetched from the <a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noopener noreferrer" style={styles.link}>JSONPlaceholder API</a>.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Technologies Used</h2>
          <ul style={styles.techList}>
            <li>Next.js 15</li>
            <li>React</li>
            <li>CSS Modules</li>
            <li>JSONPlaceholder API</li>
          </ul>
        </section>

    
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
    backgroundColor: '#005fa3',
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
  section: {
    marginBottom: '2rem',
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  sectionDescription: {
    fontSize: '1.1rem',
    marginBottom: '1rem',
  },
  techList: {
    fontSize: '1.1rem',
    listStyleType: 'disc',
    paddingLeft: '20px',
  },
  link: {
    color: '#007acc',
    textDecoration: 'none',
  },
};

export default Home;
