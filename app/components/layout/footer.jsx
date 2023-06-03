import Link from 'next/link.js'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerbar}>
        <h5 >iTech CO.</h5>
        <p >
          &copy; {new Date().getFullYear()} iTech Co.
        </p>
        <div >
          Developed by{' '}
          <Link
            className={styles.linkbar}
            href='https://horacio-abitu.vercel.app/'
            rel='noreferrer'
            target='_blank'
          >
            Horacio Abitú
          </Link>{' '}
          using{' '}
          <Link
            className={styles.linkbar}
            href='https://www.clerk.com/'
            rel='noreferrer'
            target='_blank'
          >
            Clerk/Next.js
          </Link>
          .
        </div>
      </div>
    </footer>
  )
}

export default Footer
