import styles from './page.module.css';
import Link from 'next/link';
import "../public/globals.css"


export const metadata = {
  title: "Home",
  description: "Welcome to our website's homepage.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <header className={styles.header}>
          <nav>
            <ul className={styles.navList}>
              <li><Link href="/" className={styles.navLink}>Home</Link></li>
              <li><Link href="/about" className={styles.navLink}>About</Link></li>
              <li><Link href="/posts" className={styles.navLink}>Posts</Link></li>
              <li><Link href="/contactme" className={styles.navLink}>Contact</Link></li>
            </ul>
          </nav>
        </header>
        
        <main className={styles.mainContent}>{children}</main>
        
        <footer className={styles.footer}>
          <p>&copy; {new Date().getFullYear()} My Website | Muhammed Magid. All rights reserved.</p>
        </footer>

        
      </body>
    </html>
  );
}
