import { useSession, signOut } from 'next-auth/react';
import styles from '../../styles/Home.module.css'
import Scholarship from "../../components/Scholarship";
import Link from 'next/link'
import Image from 'next/image'
import { signIn } from 'next-auth/react'

function getScholarshipDetails({ scholarship}) {

    const {data:session} = useSession();
    console.log("session",session);
    
    const handleSubmit = async () => {

        console.log("button pressed");
        //check user data is filled or no
        //submit application
    }

    const handleSignOut = () => {
        signOut({ callbackUrl: 'http://localhost:3000' });
    }

    var date = scholarship.scholarshipDeadline;
    date = date.split('T')[0];

    
    if(session){
        return (
            <div className={styles.container}>
    
                <nav className={styles.navbar}>
                    <a href='http://localhost:3000/student'><Image src="/site-logo.png" alt="OneStopScholar" className="nav-logo" width={150} height={50}></Image></a>
                    <div className={styles.centerNav}>
                        <Link href='/student' legacyBehavior><a>Dashboard</a></Link>
                        <Link href='/student/applications' legacyBehavior><a>Applications</a></Link>
                    </div>
                    <div className='login-container'>
                        <Link href='/student/profile' legacyBehavior><a>riapatil</a></Link>
                        <button onClick={handleSignOut} className={styles.signOutButton}>Sign Out</button>
                    </div>
                </nav>
    
                <Scholarship id={scholarship._id} name={scholarship.scholarshipName} sponsor={scholarship.scholarshipSponsor} description={scholarship.scholarshipDescription} deadline={date} amount={scholarship.scholarshipAmt} criteria={scholarship.scholarshipCriteria} applicants={scholarship.scholarshipApplicants}></Scholarship>
                <button onClick={handleSubmit}>Apply</button>
            </div>
        ) 
    }
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
    // const session = await useSession(context);
    const { params } = context;
    const response = await fetch(`http://localhost:8080/scholarships/${params.scholarshipId}`);
    const data = await response.json();

    return {
        props: {
            scholarship: data
        }
    }
}
