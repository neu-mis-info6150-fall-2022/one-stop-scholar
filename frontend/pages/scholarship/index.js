import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {

  return (
    <div className={styles.container}>

<nav className={styles.navbar}>
        <a href="http://localhost:3000" ><Image src="/site-logo.png" alt="OneStopScholar" className="nav-logo" width={150} height={50}></Image></a>
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
        <h3 className={styles.quote}>Originality is the essence of true scholarship. <br />Creativity is the soul of the true scholar</h3>
      </div>

      {/*Popular Destination*/}      
      <div className={styles.scholarships}>
        <h2 className={styles.popScholarships}>Input something</h2>
        <div className={styles.schcardContainer}>
          <div className={styles.schcard}>
          {/*  <div className={[styles.image1, styles.cardImage].join(" ")}></div> */}
          <Link href='www.google.com' legacyBehavior className={styles.countries}><a>Elie Wiesel Prize in Ethics Essay</a></Link>
            <p className={styles.details}>Building Services Supervisor - Evening R111084   |   Posting Date: 12/05/2022   |   Boston, MA (Main Campus)</p>
          </div>

          <div className={styles.schcard}>
          {/*  <div className={[styles.image1, styles.cardImage].join(" ")}></div> */}
            <p className={styles.countries}>Harry S. Truman Scholarships</p>
            <p className={styles.details}>Building Services Supervisor - Evening R111084   |   Posting Date: 12/05/2022   |   Boston, MA (Main Campus)</p>
            
          </div>

          <div className={styles.schcard}>
          {/*  <div className={[styles.image1, styles.cardImage].join(" ")}></div> */}
            <p className={styles.countries}>Luce Scholars Program</p>
            <p className={styles.details}>Building Services Supervisor - Evening R111084   |   Posting Date: 12/05/2022   |   Boston, MA (Main Campus)</p>
           
          </div>

          <div className={styles.schcard}>
          {/*  <div className={[styles.image1, styles.cardImage].join(" ")}></div> */}
            <p className={styles.countries}>Marshall Scholarships</p>
            <p className={styles.details}>Building Services Supervisor - Evening R111084   |   Posting Date: 12/05/2022   |   Boston, MA (Main Campus)</p>
            
          </div>

        </div>
      
      </div>
    </div>
  )
}
