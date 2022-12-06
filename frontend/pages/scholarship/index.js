import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Router from 'next/router'

export default function Home() {

  const handleApplyClick = (id) => {
    console.log("Apply function");
    Router.push(`/scholarships/${id}`);
}

  return (
    <div className={styles.container}>

      <nav className={styles.navbar}>
        <Image src="/site-logo.png" alt="OneStopScholar" className="nav-logo" width={150} height={50}></Image>
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
        <h2 className={styles.popScholarships}>Most Popular Scholarship Countries</h2>
        <div className={styles.schcardContainer}>
          <div className={styles.schcard}>
            <div className={[styles.image1, styles.cardImage].join(" ")}>
            <button onClick={handleApplyClick(1)} className={styles.applyButton}>Apply</button>
            </div>
            <p>Scholarships in</p>
            <h4>United States</h4>
            
          </div>

          <div className={styles.schcard}>
            <div className={[styles.image2, styles.cardImage].join(" ")}></div>
            <p>Scholarships in</p>
            <h4>United Kingdom</h4>
          </div>

          <div className={styles.schcard}>
            <div className={[styles.image3, styles.cardImage].join(" ")}></div>
            <p>Scholarships in</p>
            <h4>Australia</h4>
          </div>

          <div className={styles.schcard}>
            <div className={[styles.image4, styles.cardImage].join(" ")}></div>
            <p>Scholarships in</p>
            <h4>Germany</h4>
          </div>

        </div>
      </div>

      {/*Most Popular Scholarships */}

      <div className={styles.scholarships}>
        <h2 className={styles.popScholarshipsDes}>Most Popular Scholarship</h2>
        <div className={styles.schcardContainer}>
          <div className={styles.schcard}>
            <div className={[styles.image1, styles.cardImage].join(" ")}></div>
            <p>Elie Wiesel Prize in Ethics Essay</p>
            <h4>$5,000</h4>
          </div>

          <div className={styles.schcard}>
            <div className={[styles.image2, styles.cardImage].join(" ")}></div>
            <p>Harry S. Truman Scholarships</p>
            <h4>$30,000</h4>
          </div>

          <div className={styles.schcard}>
            <div className={[styles.image3, styles.cardImage].join(" ")}></div>
            <p>Luce Scholars Program</p>
            <h4>All Expenses</h4>
          </div>

          <div className={styles.schcard}>
            <div className={[styles.image4, styles.cardImage].join(" ")}></div>
            <p>Marshall Scholarships</p>
            <h4><b>All Expenses</b></h4>
          </div>
        </div>
      </div>
    </div>
  )
}
