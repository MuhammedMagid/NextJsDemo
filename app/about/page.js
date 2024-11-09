
const  HomePage =  ()=>{
    return( 
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>About Me</h2>
          <p style={styles.sectionDescription}>
            Hi! I'm Muhammed Magid, a web developer learning and building projects using modern web technologies. This site is part of my learning journey.
          </p>
        </section>
    );
}

const styles = {
    
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
  };
  

export default HomePage;