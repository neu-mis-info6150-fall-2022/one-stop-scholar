import styles from '../styles/Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

function Footer() {
    return(
        <div className={styles.footer}>
            <p className={styles.copyrightText}>NEU Students Scholarship Portal <img src='/copyright-white.png' alt='Copyright-Logo' className={styles.copyrightLogo} /></p>
        
            <div className={styles.links}>
                <Link href='/tnc' legacyBehavior><a>Terms & Conditions</a></Link>
                <Link href='#' legacyBehavior><a>Privacy Statement</a></Link>
                <Link href='#' legacyBehavior><a>Disclaimer</a></Link>
            </div>
            <div className={styles.social}>
            <Image src="/facebook.png" alt="" className={styles.socialIcons} width={50} height={50}/>
            <Image src="/twitter.png" alt="" className={styles.socialIcons} width={50} height={50}/>
            <Image src="/linkedin.png" alt="" className={styles.socialIcons} width={50} height={50}/>
            </div>
        </div>
    )
}

export default Footer;