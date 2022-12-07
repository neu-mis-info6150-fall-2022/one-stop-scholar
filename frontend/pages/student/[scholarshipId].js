import { getSession, signOut } from 'next-auth/react';
import styles from '../../styles/Home.module.css'
import Scholarship from "../../components/Scholarship";
import Link from 'next/link'
import Image from 'next/image'

function getScholarshipDetails({scholarship, user}) {

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

    return (
        <div className={styles.container}>

            <nav className={styles.navbar}>
                <a href='http://localhost:3000/student'><Image src="/site-logo.png" alt="OneStopScholar" className="nav-logo" width={150} height={50}></Image></a>
                <div className={styles.centerNav}>
                    <Link href='/student' legacyBehavior><a>Dashboard</a></Link>
                    <Link href='/student/applications' legacyBehavior><a>Applications</a></Link>
                </div>
                <div className='login-container'>
                    <Link href='/student/profile' legacyBehavior><a>{user.email}</a></Link>
                    <button onClick={handleSignOut} className={styles.signOutButton}>Sign Out</button>
                </div>
            </nav>

            <Scholarship id={scholarship._id} name={scholarship.scholarshipName} sponsor={scholarship.scholarshipSponsor} description={scholarship.scholarshipDescription} deadline={date} amount={scholarship.scholarshipAmt} criteria={scholarship.scholarshipCriteria} applicants={scholarship.scholarshipApplicants}></Scholarship>
            <button onClick={handleSubmit}>Apply</button>
        </div>
    ) 
}
export default getScholarshipDetails;


export async function getServerSideProps(context) {
    const session = await getSession(context);

    if(!session) {
        return {
            redirect: {
                destination: '/signin',
                permanent: false,
            },
        }
    } else {
        const email = session.user.email;
        const url = `http://localhost:8080/nextAuthDb/users/${email}`;
        const response = await fetch(url);
        const userData = await response.json();

        if (userData[0].userType === 'sponsor') {
            return {
                redirect: {
                    destination: '/signin',
                    permanent: false,
                },
            }

        }

        const { params } = context;
        const scholarshipResponse = await fetch(`http://localhost:8080/scholarships/${params.scholarshipId}`);
        const data = await scholarshipResponse.json();

        return{
            props: {
                session,
                user: session.user,
                scholarship: data
            }
        }

    }

}
