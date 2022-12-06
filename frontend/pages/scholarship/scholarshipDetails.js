import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function ScholarshipDetails() {

    const handleApply = () => {
        console.log("apply function");
        // signIn('',{callbackUrl: 'http://localhost:3000/student'});
        
    }

    return (
        <div>
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

            <div className={styles.heading}>Name of the scholarship : #name</div>
            <div className={styles.description}>Description of the scholarship :Childhood cancer, diabetes and a heart transplant couldn’t stop Mitch Peterson from chasing his dreams. With his “third lease on life,” he started his higher education career at a California community college. Now, with help from the Dream Award, he’s pursuing a Stanford engineering degree and a career in medical device development.</div>
            <button onClick={handleApply} className={styles.applyButton}>Apply</button>
        </div>
    )
}
