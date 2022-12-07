import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'

export default function Home() {

  const emailRef = useRef();

  const validateEmail = async (email) => {
    const url = process.env.NEXT_PUBLIC_EMAIL_VALIDATION_URL;
    const key = process.env.NEXT_PUBLIC_EMAIL_VALIDATION_API_KEY
    const response = await fetch(`${url}?api_key=${key}&email=${email}`);
    const data = await response.json();
    return data.is_valid_format.value;
  }

  const handleSubmit = async () => {
    
    const email = emailRef.current.value;
    const validity = await validateEmail(email)
    if(validity) {
      console.log("Email is valid: " + email);
    } else alert("Kindly enter valid email address");
    
  }

  return (
    <div className={styles.container}>

      <nav className={styles.navbar}>
        <a href='http://localhost:3000'><Image src="/site-logo.png" alt="OneStopScholar" className="nav-logo" width={150} height={50}></Image></a>
        <div className={styles.centerNav}>
          <Link href='/scholarship' legacyBehavior><a>Scholarships</a></Link>
          <Link href='#' legacyBehavior><a>Countries</a></Link>
          <Link href='#' legacyBehavior><a>Degrees</a></Link>
          <Link href='#' legacyBehavior><a>Contact Us</a></Link>
        </div>
        <div className='login-container'>
          <Link href='/signin' legacyBehavior><a>Sign In</a></Link>
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
