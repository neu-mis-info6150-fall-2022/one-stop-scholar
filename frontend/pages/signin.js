import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from 'next/router'

export default function() {

    const router = useRouter();

    const handleStudentClick = (e) => {
        e.preventDefault();
        router.push('/student/signIn')
    }

    const handleSponsorClick = (e) => {
        e.preventDefault();
        router.push('/sponsor/signIn')
    }

    return(
        <div className={styles.container}>

            <nav className={styles.navbar}>
                <Image href="/" src="/site-logo.png" alt="OneStopScholar" className="nav-logo" width={150} height={50}></Image>
                <div className={styles.centerNav}>
                <Link href='#' legacyBehavior><a>About</a></Link>
                <Link href='#' legacyBehavior><a>Destinations</a></Link>
                <Link href='#' legacyBehavior><a>Degrees</a></Link>
                <Link href='#' legacyBehavior><a>Contact Us</a></Link>
                </div>
                <div className='login-container'>
                <Link href='/signin' legacyBehavior><a>Sign In</a></Link>
                </div>
            </nav>

            <div className={styles.signInContainer}>
                <button onClick={handleStudentClick} className={styles.signInButton}>I am Student</button>
                <button onClick={handleSponsorClick} className={styles.signInButton}>I am Sponsor</button>
            </div>
        </div>
    )
}