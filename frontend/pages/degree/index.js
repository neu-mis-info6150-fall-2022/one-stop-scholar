import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Router from 'next/router'

function scholarshipList({ scholarships }) {

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <a href="http://localhost:3000" ><Image src="/site-logo.png" alt="OneStopScholar" className="nav-logo" width={150} height={50}></Image></a>
        <div className={styles.centerNav}>
          <Link href='/scholarship' legacyBehavior><a>Scholarships</a></Link>
          <Link href='#' legacyBehavior><a>Countries</a></Link>
          <Link href='/degree' legacyBehavior><a>Degrees</a></Link>
          <Link href='#' legacyBehavior><a>Contact Us</a></Link>
        </div>
        <div className='login-container'>
          <Link href='/signin' legacyBehavior><a>Sign In</a></Link>
          {/* <Link href='#' legacyBehavior><a>Sign Out</a></Link> */}
        </div>
      </nav>

     {/* <div className={styles.banner}>
        <h3 className={styles.quote}>Originality is the essence of true scholarship. <br />Creativity is the soul of the true scholar</h3>
  </div> */}

      <div className={styles.banner}>
        <Image src="/site-logo.png" alt="OneStopScholar" className="nav-logo" width={300} height={100} />
      </div>

      <a className={styles.degree}>Degrees</a>

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
  )
}

export default scholarshipList;

export async function getStaticProps() {
  const response = await fetch('http://localhost:8080/scholarships/')
  const data = await response.json();
  return {
    props: {
      scholarships: data
    }
  }
}

