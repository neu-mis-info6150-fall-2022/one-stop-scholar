import { getSession, signOut } from 'next-auth/react';
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import ScholarshipForm from '../../components/ScholarshipForm.js';
import Scholarship from '../../components/Scholarship';

export default function({user, scholarships}) {

    // States to manage add scholarship button text and status
    const [formButtonText, setFormButtonText] = useState("Add Scholarship");
    const [showForm, setShowForm] = useState(false);
    const [successMessage, setsuccessMessage] = useState(false);

    // SignOut call from nextauth
    const handleSignOut = () => {
        signOut({callbackUrl: 'http://localhost:3000'});
    }

    // To manage button and form states
    const handleFormButton = (formSubmit) => {
        setShowForm(!showForm);
        if(formButtonText === "Add Scholarship") {
            setFormButtonText("Close")
        } else setFormButtonText("Add Scholarship");

        if(formSubmit) {
            setsuccessMessage(true);
            setTimeout(() => {
                setsuccessMessage(false);
                window.location.reload();
            }, 1000);
        }
    }

    // delete scholarships posted by sponsor
    const handleDeleteButton = async (id) => {
        const scholarshipDeleteURL = `http://localhost:8080/scholarships/${id}`;
        const relatedApplicationDeleteURL = `http://localhost:8080/applications/v1/search?scholarshipId=${id}`;
        const deleteScholarship = await fetch(scholarshipDeleteURL, {method: 'DELETE'});
        await fetch(relatedApplicationDeleteURL, {method: 'DELETE'});
        if(deleteScholarship.ok) {
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
    } 


    return(
        <div className={styles.container}>
            {/* Sponsor Nav Bar */}
            <nav className={styles.navbar}>
                <Image src="/Scholar.gif" alt="OneStopScholar" className="nav-logo" width={120} height={120}></Image>
                <div className={styles.centerNav}>
                    <Link href='#' legacyBehavior><a className={styles.selectedBold}>Dashboard</a></Link>
                    <Link href='/sponsor/applications' legacyBehavior><a>Applications</a></Link>
                </div>
                <div className='login-container'>
                    <Link href='/sponsor/profile' legacyBehavior><a>{user.email}</a></Link>
                    <button onClick={handleSignOut} className={styles.signOutButton}>Sign Out</button>
                </div>
            </nav>

            
            {/* For each scholarship posted by sponsor display list */}
            <div className={styles.dashboardContainer}>
                {
                    scholarships.length === 0 ? <p>No Scholarships Posted Yet</p> :
                    (scholarships.map((scholarship,index) => {
                        return <div className={styles.scholarshipCardSponsorAccount}>
                        <Scholarship id={scholarship._id} name={scholarship.scholarshipName} sponsor={scholarship.scholarshipSponsor} description={scholarship.scholarshipDescription} deadline={scholarship.scholarshipDeadline} amount={scholarship.scholarshipAmt} criteria={scholarship.scholarshipCriteria} applicants={scholarship.scholarshipApplicants}></Scholarship>
                        <button onClick={()=> handleDeleteButton(scholarship._id)} className={styles.scholarshipDelete}>Delete</button>
                        </div>
                    })
                    )
                }
                
                {showForm && <ScholarshipForm handleFormButton={handleFormButton} email={user.email}></ScholarshipForm>}
                <div className={styles.showScholarshipFormButtonContainer}>
                    <button onClick={() => handleFormButton(false)}>{formButtonText}</button>
                    {/* Once scholarship added success message is displayed */}
                    {
                        successMessage ? <div className={styles.submitSuccessMessage}>Data saved successfully!</div> : null
                    }
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    // Check for server side validation
    if(!session) {
        return {
            redirect: {
                destination: '/signin',
                permanent: false,
            },
        }
    } else {
        // If student tries to login then redirect to signin since this is sponsor login
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

        } else if(typeof userData[0].userType === 'undefined') {
            // if user sign up for first time then add userType field to users table
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userType: "sponsor"})
            };
            await fetch(url, requestOptions);

            const profileTableURL = `http://localhost:8080/sponsorDb/profile/`;
            const profileRequestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email})
            };
            await fetch(profileTableURL,profileRequestOptions);
        }


        const fetchScholarship = await fetch(`http://localhost:8080/scholarships/v1/search?sponsorEmail=${session.user.email}`);
        const scholarships = await fetchScholarship.json();

        return{
            props: {
                session,
                user: session.user,
                scholarships
            }
        }
    }
}