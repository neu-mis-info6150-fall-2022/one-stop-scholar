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
          <Link href='/countries' legacyBehavior><a class={styles.selectedBold}>Destinations</a></Link>
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
              <p className={styles.hide}>Harvard University | Massachusetts Institute of Technology | Stanford University</p>
          </div>

          <div className={styles.card}>
            <div className={[styles.image14, styles.cardImage].join(" ")}></div>
            <p>Scholarships in</p>
            <h3>United Kingdom</h3>
            <p className={styles.hide}>University of Oxford | University of Cambridge | University College London</p>
          </div>

          <div className={styles.card}>
            <div className={[styles.image3, styles.cardImage].join(" ")}></div>
            <p>Scholarships in</p>
            <h3>Australia</h3>
            <p className={styles.hide}>University of Melbourne | University of Sydney | University of Queensland</p>
          </div>
        </div>

        <div className={styles.cardContainer}>
        <div className={styles.card}>
            <div className={[styles.image4, styles.cardImage].join(" ")}></div>
            <p>Scholarships in</p>
            <h3>Germany</h3>
            <p className={styles.hide}>University of Munich | Ruprecht Karls University Heidelberg | Humboldt University of Berlin</p>
        </div>
        <div className={styles.card}>
            <div className={[styles.image9, styles.cardImage].join(" ")}></div>
            <p>Scholarships in</p>
            <h3>Ireland</h3>
            <p className={styles.hide}>Trinity College Dublin | University College Dublin | University College Cork</p>
          </div>

          <div className={styles.card}>
            <div className={[styles.image10, styles.cardImage].join(" ")}></div>
            <p>Scholarships in</p>
            <h3>United Arab Emirates</h3>
            <p className={styles.hide}>United Arab Emirates University | American University of Sharjah | Khalifa University</p>
          </div>
        </div>
        
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={[styles.image11, styles.cardImage].join(" ")}></div>
            <p>Scholarships in</p>
            <h3>New Zealand</h3>
            <p className={styles.hide}>University of Auckland | University of Otago | University of Canterbury</p>
          </div>

          <div className={styles.card}>
            <div className={[styles.image12, styles.cardImage].join(" ")}></div>
            <p>Scholarships in</p>
            <h3>Japan</h3>
            <p className={styles.hide}>University of Tokyo | Kyoto University | Osaka University</p>
          </div>

          <div className={styles.card}>
            <div className={[styles.image13, styles.cardImage].join(" ")}></div>
            <p>Scholarships in</p>
            <h3>Singapore</h3>
            <p className={styles.hide}>INSEAD Singapore | National University of Singapore | Nanyang Technological University</p>
          </div>
        </div>

        </div>

        

      </div>
  )
}