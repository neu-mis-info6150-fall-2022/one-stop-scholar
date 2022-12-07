import { getSession, signOut } from 'next-auth/react';
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function({user}) {

    const handleSignOut = () => {
        signOut({callbackUrl: 'http://localhost:3000'});
    }


    return(
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <Image src="/site-logo.png" alt="OneStopScholar" className="nav-logo" width={150} height={50}></Image>
                <div className={styles.centerNav}>
                    <Link href='#' legacyBehavior><a>Dashboard</a></Link>
                    <Link href='/sponsor/applications' legacyBehavior><a>Applications</a></Link>
                </div>
                <div className='login-container'>
                    <Link href='/sponsor/profile' legacyBehavior><a>{user.email}</a></Link>
                    <button onClick={handleSignOut} className={styles.signOutButton}>Sign Out</button>
                </div>
            </nav>

            <div className={styles.dashboardContainer}>
                

                
            </div>
        </div>
    )
}

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

        if (userData[0].userType === 'student') {
            return {
                redirect: {
                    destination: '/signin',
                    permanent: false,
                },
            }

        } else if(typeof userData[0].userType === 'undefined') {
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

        return{
            props: {
                session,
                user: session.user
            }
        }
    }
}