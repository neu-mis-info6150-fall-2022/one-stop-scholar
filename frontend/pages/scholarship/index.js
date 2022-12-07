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
          <Link href='#' legacyBehavior><a>Degrees</a></Link>
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

      <a className={styles.popScholarships}>Available Scholarships</a>

      <div className={styles.scholarships}>
        <div className={styles.schcardContainer}>
          {
            scholarships.length === 0 ? <p>No scholarships Yet...</p> : (scholarships.map((scholarship, idx) => {
              var date = scholarship.scholarshipDeadline;
              date = date.split('T')[0];
              return (
                <div key={idx}>
                  <div className={styles.schcard}>
                    <Link href={`scholarships/${scholarship.id}`} legacyBehavior>
                      <a className={styles.schName}>{scholarship.scholarshipName}</a>
                    </Link>
                    <p className={styles.schAmt}>{scholarship.scholarshipAmt}</p>
                    <p className={styles.details}>Desc: {scholarship.scholarshipDescription}</p>
                    <p className={styles.details}>Sponser: {scholarship.scholarshipSponsor}</p>
                    <p className={styles.details}>Date Posted: {date}</p>
                    <p className={styles.details}>Criteria: {scholarship.scholarshipCriteria}</p>
                    <p className={styles.details}>Number of Applicants: {scholarship.scholarshipApplicants}</p>
                  </div>
                </div>
              )
            }
            ))
          }
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

