import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Router from 'next/router'

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
          <Link href='/scholarship/scholarshipDetails' legacyBehavior><a>Elie Wiesel Prize in Ethics Essay</a></Link>
            <p className={styles.details}>Building Services Supervisor - Evening R111084   |   Posting Date: 12/05/2022   |   Boston, MA (Main Campus)</p>
          </div>

          <div className={styles.schcard}>
            {/*  <div className={[styles.image1, styles.cardImage].join(" ")}></div> */}
            <a href="">Harry S. Truman Scholarships</a>
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

// export async function getStaticPaths() {
//   const response = await fetch('http://localhost:8080/scholarships/:id')
//   const data = await response.json();
//   console.log("datagetStaticPaths",data);
//   // console.log("scholarshipId",scholarshipId)
//   const paths = [data].map(scholarship => {
//     return {
//       params: {
//         scholarshipId: `${scholarship.id}`
//       }
//     }
//   })
  
//   return {
//     paths,
//     fallback: 'blocking'
//   }
// }

// export async function getStaticProps(context) {
//   const {params} = context;
//   const response = await fetch(`http://localhost:8080/scholarships/${params.scholarshipId}`)
//   console.log("response",response);
//   const data = await response.json();
//   console.log("data",data);
//   return {
//       props: {
//         scholarship: data[0]
//       }
//   }
// }

// function getScholarshipDetails({scholarship}) {
//   return(
//       <>
//           <Head>
//               <title>scholarship List</title>
//               <meta name="description" content="To Do App on Next" />
//               <link rel="icon" href="/list.png" />
//           </Head>
//           <TaskItem id={scholarship.id} name={task.name} description={task.description} submissionDate={task.submissionDate} status={task.status}></TaskItem>
//       </>
//   )
// }
