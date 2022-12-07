import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Degree() {
  return (
    <div className={styles.container}>

      <nav className={styles.navbar}>
        <a href='http://localhost:3000'><Image src="/site-logo.png" alt="OneStopScholar" className="nav-logo" width={150} height={50}></Image></a>
        <div className={styles.centerNav}>
          <Link href='/scholarship' legacyBehavior><a>Scholarships</a></Link>
          <Link href='/countries' legacyBehavior><a>Countries</a></Link>
          <Link href='/degree' legacyBehavior><a>Degrees</a></Link>
          <Link href='/contactus' legacyBehavior><a>Contact Us</a></Link>
        </div>
        <div className='login-container'>
          <Link href='/signin' legacyBehavior><a>Sign In</a></Link>
          {/* <Link href='#' legacyBehavior><a>Sign Out</a></Link> */}
        </div>
      </nav>

      <div className={styles.banner}>
        <Image src="/countryquote.jpg" alt="OneStopScholar" width={1300} height={300} />
      </div>

      

      <div className={styles.countries}>
        <h2 className={styles.header}>Most Popular Destinations</h2>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={[styles.image1, styles.cardImage].join(" ")}></div>
            <p>Scholarships in</p>
            <h3>United States of America</h3>
          </div>

          <div className={styles.card}>
            <div className={[styles.image14, styles.cardImage].join(" ")}></div>
            <p>Scholarships in</p>
            <h3>United Kingdom</h3>
          </div>

          <div className={styles.card}>
            <div className={[styles.image3, styles.cardImage].join(" ")}></div>
            <p>Scholarships in</p>
            <h3>Australia</h3>
          </div>
        </div>

        <div className={styles.cardContainer}>
        <div className={styles.card}>
            <div className={[styles.image4, styles.cardImage].join(" ")}></div>
            <p>Scholarships in</p>
            <h3>Germany</h3>
        </div>
        <div className={styles.card}>
            <div className={[styles.image9, styles.cardImage].join(" ")}></div>
            <p>Scholarships in</p>
            <h3>Ireland</h3>
          </div>

          <div className={styles.card}>
            <div className={[styles.image10, styles.cardImage].join(" ")}></div>
            <p>Scholarships in</p>
            <h3>United Arab Emirates</h3>
          </div>
        </div>
        
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={[styles.image11, styles.cardImage].join(" ")}></div>
            <p>Scholarships in</p>
            <h3>New Zealand</h3>
          </div>

          <div className={styles.card}>
            <div className={[styles.image12, styles.cardImage].join(" ")}></div>
            <p>Scholarships in</p>
            <h3>Japan</h3>
          </div>

          <div className={styles.card}>
            <div className={[styles.image13, styles.cardImage].join(" ")}></div>
            <p>Scholarships in</p>
            <h3>Singapore</h3>
          </div>
        </div>

        </div>

        

      </div>
  )
}