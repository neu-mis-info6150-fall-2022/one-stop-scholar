import styles from '../styles/Footer.module.css'
import Link from 'next/link'

function Footer() {
    return(
        <div className={styles.footer}>
        <p className={styles.copyrightText}>NEU Students Scholarship Portal <img src='/copyright-white.png' alt='Copyright-Logo' className={styles.copyrightLogo} /></p>
        
        <div className={styles.links}>
            <Link href='#' legacyBehavior><a>Terms & Conditions</a></Link>
            <Link href='#' legacyBehavior><a>Privacy Statement</a></Link>
            <Link href='#' legacyBehavior><a>Disclaimer</a></Link>
        </div>
        </div>
    )
}

export default Footer;