import styles from '../../styles/Home.module.css'
import Scholarship from "../../components/Scholarship";
import Link from 'next/link'
import Image from 'next/image'
import { signIn } from 'next-auth/react'

function getScholarshipDetails({ scholarship }) {

    const handleSubmit = async () => {

        console.log("button pressed");

        //check whether the user is signed in or no

        //if yes then redirect to application page

        //else then redirect to signin page
        signIn('', { callbackUrl: 'http://localhost:3000/student/signin' });
    }

    var date = scholarship.scholarshipDeadline;
    date = date.split('T')[0];
    return (
        <div className={styles.container}>

            <nav className={styles.navbar}>
                <Image href="/" src="/site-logo.png" alt="OneStopScholar" className="nav-logo" width={150} height={50}></Image>
                <div className={styles.centerNav}>
                    <Link href='#' legacyBehavior><a>Scholarships</a></Link>
                    <Link href='#' legacyBehavior><a>Destinations</a></Link>
                    <Link href='#' legacyBehavior><a>Degrees</a></Link>
                    <Link href='#' legacyBehavior><a>Contact Us</a></Link>
                </div>
                <div className='login-container'>
                    <Link href='/signin' legacyBehavior><a>Sign In</a></Link>
                </div>
            </nav>

            <Scholarship id={scholarship._id} name={scholarship.scholarshipName} sponsor={scholarship.scholarshipSponsor} description={scholarship.scholarshipDescription} deadline={date} amount={scholarship.scholarshipAmt} criteria={scholarship.scholarshipCriteria} applicants={scholarship.scholarshipApplicants}></Scholarship>
            <button onClick={handleSubmit}>Apply</button>
        </div>
    )
}
export default getScholarshipDetails


export async function getStaticPaths() {
    const response = await fetch('http://localhost:8080/scholarships/');
    const data = await response.json();
    const paths = data.map(scholarship => {
        return {
            params: {
                scholarshipId: `${scholarship.id}`
            }
        }
    })

    return {
        paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    const { params } = context;
    const response = await fetch(`http://localhost:8080/scholarships/${params.scholarshipId}`);
    const data = await response.json();

    return {
        props: {
            scholarship: data
        }
    }
}