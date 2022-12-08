import { getSession, signOut } from 'next-auth/react';
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function StudentApplications({ session, applications, scholarshipData, studentData }) {

    console.log("studentData",studentData);

    const handleSignOut = () => {
        signOut({ callbackUrl: 'http://localhost:3000' });
    }

    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <a href='http://localhost:3000/student'><Image src="/site-logo.png" alt="OneStopScholar" className="nav-logo" width={150} height={50}></Image></a>
                <div className={styles.centerNav}>
                    <Link href='/sponsor' legacyBehavior><a>Dashboard</a></Link>
                    <Link href='/sponsor/applications' legacyBehavior><a className={styles.selectedBold}>Applications</a></Link>
                </div>
                <div className='login-container'>
                    {/* <Link href='/sponsor/profile' legacyBehavior><a>{user.email}</a></Link> */}
                    <button onClick={handleSignOut} className={styles.signOutButton}>Sign Out</button>
                </div>
            </nav>

            <div className={styles.sprApplications}>
                <div className={styles.sprContainer}>
                    {
                        scholarshipData.length === 0 ? <p>No Applications here</p> : (scholarshipData.map((scholarship, idx) => {

                            return (
                                <div className={styles.schcard}>
                                    <Link href={`/student/${scholarship._id}`} legacyBehavior>
                                        <a>{scholarship.scholarshipName}</a>
                                    </Link>
                                    <ul className={styles.appliedScholarshipContainer}>
                                        <li><span>Student Name:</span><p className={styles.details}>{studentData[idx].firstName+" "+studentData[idx].lastName}</p></li>
                                        <li><span>Amount:</span><p className={styles.details}>{scholarship.scholarshipAmt}</p></li>
                                        <li><span>Status:</span><p className={styles.details}>{applications[idx].status}</p></li>
                                    </ul>
                                </div>
                            )
                        }))
                    }
                </div>
            </div>
        </div>
    )
}



export async function getServerSideProps(context) {
    const session = await getSession(context);

    if (!session) {
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

        if (userData[0].userType === 'student') {
            return {
                redirect: {
                    destination: '/signin',
                    permanent: false,
                },
            }
        }

        // const profileDataURL = `http://localhost:8080/sponsorDb/profile/${email}`;
        // const profileResponse = await fetch(profileDataURL);
        // const profileData = await profileResponse.json();

        const applicationURL = `http://localhost:8080/applications/v1/search?email=${email}`;
        const applicationsResponse = await fetch(applicationURL);
        const applications = await applicationsResponse.json();

        const scholarshipData = await Promise.all(applications.map(async (application) => {
            const id = application.scholarshipId;
            const res = await fetch(`http://localhost:8080/scholarships/${id}`);
            const scholarshipData = await res.json();
            return scholarshipData;
        }))

        const studentData = await Promise.all(applications.map(async (application) => {
            const id = application.studentId;
            const res = await fetch(`http://localhost:8080/studentDb/profile/v1/search?_id=${id}`);
            const studentData = await res.json();
            return studentData[0];
        }))

        return {
            props: {
                session,
                applications,
                scholarshipData,
                studentData
            }
        }
    }
}