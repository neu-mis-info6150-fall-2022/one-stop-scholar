import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'


export default function() {
    // const {data: session} = useSession();
    // const [studentLogin, setstudentLogin] = useState(false);
    // const [sponsorLogin, setsponsorLogin] = useState(false);

    const router = useRouter();

    // useEffect(() => {
    //     if(session && studentLogin) {
    //         console.log(session, studentLogin);
    //     }
    // });

    const handleStudentClick = () => {
        // setstudentLogin(true);
        console.log("Student function");
        signIn('github',{callbackUrl: 'http://localhost:3000/student'});
        
    }

    const handleSponsorClick = () => {
        // router.push('/sponsor/signIn')
        // signIn({callbackUrl: 'http://localhost:3000/student'});
        console.log("Sponsor function");
        signIn('github',{callbackUrl: 'http://localhost:3000/sponsor'});
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