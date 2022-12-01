import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'

export default function Home() {

  const emailRef = useRef();

  const handleSubmit = () => {
    const email = emailRef.current.value;
  }

  return (
    <div className={styles.container}>

      <nav className={styles.navbar}>
        <Image src="/site-logo.png" alt="OneStopScholar" className="nav-logo" width={150} height={50}></Image>
        <div className={styles.centerNav}>
          <Link href='#' legacyBehavior><a>About</a></Link>
          <Link href='#' legacyBehavior><a>Destinations</a></Link>
          <Link href='#' legacyBehavior><a>Degrees</a></Link>
          <Link href='#' legacyBehavior><a>Contact Us</a></Link>
        </div>
        <div className='login-container'>
          <Link href='#' legacyBehavior><a>Sign In</a></Link>
          {/* <Link href='#' legacyBehavior><a>Sign Out</a></Link> */}
        </div>
      </nav>

      <div className={styles.banner}>
        <Image src="/site-logo.png" alt="OneStopScholar" className="nav-logo" width={300} height={100} />
      </div>

      <div className={styles.imageBannerContainer}>
        <h2>Find your scholarship to finance your study</h2>
        <br/>
        <div className={styles.form}>
          <input type='email' placeholder='Enter Your Email' ref={emailRef} />
          <button onClick={handleSubmit}>Know More</button>
        </div>
      </div>

      <div className={styles.destinations}>
        <h2 className={styles.header}>Most Popular Countries</h2>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={[styles.image1, styles.cardImage].join(" ")}></div>
            <p>Scholarships in</p>
            <h4>United States</h4>
          </div>

          <div className={styles.card}>
            <div className={[styles.image2, styles.cardImage].join(" ")}></div>
            <p>Scholarships in</p>
            <h4>United Kingdom</h4>
          </div>

          <div className={styles.card}>
            <div className={[styles.image3, styles.cardImage].join(" ")}></div>
            <p>Scholarships in</p>
            <h4>Australia</h4>
          </div>

          <div className={styles.card}>
            <div className={[styles.image4, styles.cardImage].join(" ")}></div>
            <p>Scholarships in</p>
            <h4>Germany</h4>
          </div>

        </div>
      </div>
    

    </div>
  )
}
