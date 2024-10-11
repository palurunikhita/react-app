import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Welcome to My Website</h1>
      </header>

      <main style={styles.main}>
        <section style={styles.section}>
          <h2>Hello world</h2>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>© 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center' as 'center',
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: '20px',
    color: 'white',
  },
  main: {
    padding: '20px',
  },
  section: {
    margin: '20px 0',
  },
  footer: {
    backgroundColor: '#f1f1f1',
    padding: '10px',
    marginTop: '20px',
  },
};

export default HomePage;
