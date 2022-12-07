import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'

export default function ContactUs() {

    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <a href='http://localhost:3000'><Image src="/site-logo.png" alt="OneStopScholar" className="nav-logo" width={150} height={50}></Image></a>
                <div className={styles.centerNav}>
                    <Link href='/scholarship' legacyBehavior><a>Scholarships</a></Link>
                    <Link href='/countries' legacyBehavior><a>Destinations</a></Link>
                    <Link href='/degree' legacyBehavior><a>Degrees</a></Link>
                    <Link href='/contactus' legacyBehavior><a className={styles.selectedBold}>Contact Us</a></Link>
                </div>
                <div className='login-container'>
                    <Link href='/signin' legacyBehavior><a>Sign In</a></Link>
                    {/* <Link href='#' legacyBehavior><a>Sign Out</a></Link> */}
                </div>
            </nav>

            <div className={styles.banner}>
                <Image src="/site-logo.png" alt="OneStopScholar" className="nav-logo" width={300} height={100} />
            </div>
            
            <div className={styles.contactContainer}>
                <div className={styles.contactCard}>
                    <div class={styles.contactCardHeader}>
                        <h3>For Scholarship related queries</h3>
                    </div>
                    <div class='grid'>
                        <div class='image'>

                        </div>
                        <div>
                            <p>Contact: Riya Rajesh Patil</p>
                            <p>Email ID: riya.patil@northeastern.edu</p>
                        </div>
                    </div>
                    
                </div>
                <div className={styles.contactCard}>
                    <div class={styles.contactCardHeader}>
                        <h3>For Scholarship related queries</h3>
                    </div>
                    <div class='grid'>
                        <div class='image'>

                        </div>
                        <div>
                            <p>Contact: Ritvik Saxena</p>
                            <p>Email ID: ritvik.saxena@northeastern.edu</p>
                        </div>
                    </div>
                </div>
                <div className={styles.contactCard}>
                    <div class={styles.contactCardHeader}>
                        <h3>For Technical related queries</h3>
                    </div>
                    <div class='grid'>
                        <div class='image'>

                        </div>
                        <div>
                            <p>Contact: Souvik Dinda</p>
                            <p>Email ID: souvik.dinda@northeastern.edu</p>
                        </div>
                    </div>
                </div>
                <div className={styles.contactCard}>
                    <div class={styles.contactCardHeader}>
                        <h3>For Business related queries</h3>
                    </div>
                    <div class='grid'>
                        <div class='image'>

                        </div>
                        <div>
                            <p>Contact: Vinay Kumar Gudooru</p>
                            <p>Email ID: vinay.gudooru@northeastern.edu</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}