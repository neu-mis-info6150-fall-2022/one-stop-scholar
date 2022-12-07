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
          <Link href='#' legacyBehavior><a>Countries</a></Link>
          <Link href='/degree' legacyBehavior><a>Degrees</a></Link>
          <Link href='/contactus' legacyBehavior><a>Contact Us</a></Link>
        </div>
        <div className='login-container'>
          <Link href='/signin' legacyBehavior><a>Sign In</a></Link>
          {/* <Link href='#' legacyBehavior><a>Sign Out</a></Link> */}
        </div>
      </nav>

      <div className={styles.banner}>
        <Image src="/quote.png" alt="OneStopScholar" width={1300} height={300} />
      </div>

      

      <div className={styles.degree}>
        <h2 className={styles.header}>Most Popular Degrees</h2>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={[styles.image1, styles.cardImage].join(" ")}></div>
            <p>Professional Certificate</p>
          </div>

          <div className={styles.card}>
            <div className={[styles.image2, styles.cardImage].join(" ")}></div>
            <p>Undergraduate Degrees</p>
          </div>

          <div className={styles.card}>
            <div className={[styles.image3, styles.cardImage].join(" ")}></div>
            <p>Transfer Degree</p>
          </div>

          <div className={styles.card}>
            <div className={[styles.image4, styles.cardImage].join(" ")}></div>
            <p>Associate Degree</p>
          </div>
        </div>

        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={[styles.image4, styles.cardImage].join(" ")}></div>
            <p>Bachelor Degree</p>
          </div>

          <div className={styles.card}>
            <div className={[styles.image3, styles.cardImage].join(" ")}></div>
            <p>Graduate Degrees</p>
          </div>

          <div className={styles.card}>
            <div className={[styles.image1, styles.cardImage].join(" ")}></div>
            <p>Master Degree</p>
          </div>

          <div className={styles.card}>
            <div className={[styles.image2, styles.cardImage].join(" ")}></div>
            <p>Doctoral Degree</p>
          </div>
        </div>
      </div>

    </div>
  )
}
