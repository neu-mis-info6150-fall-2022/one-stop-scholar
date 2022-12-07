import { getSession, signOut } from 'next-auth/react';
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function SponsorProfile({session, profileData}) {

    const handleSignOut = () => {
        signOut({callbackUrl: 'http://localhost:3000'});
    }

    const [successMessage, setsuccessMessage] = useState(false);
    const [inputs, setInputs] = useState();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const profileURL = `http://localhost:8080/sponsorDb/profile/${profileData.email}`;
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputs)
        };
        const res = await fetch(profileURL,requestOptions);
        if(res.ok) setsuccessMessage(true);

    }

    return(
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <a href='http://localhost:3000/sponsor'><Image src="/site-logo.png" alt="OneStopScholar" className="nav-logo" width={150} height={50}></Image></a>
                <div className={styles.centerNav}>
                    <Link href='/sponsor' legacyBehavior><a>Dashboard</a></Link>
                    <Link href='/sponsor/applications' legacyBehavior><a>Applications</a></Link>
                </div>
                <div className='login-container'>
                    <Link href='/sponsor/profile' legacyBehavior><a>{profileData.email}</a></Link>
                    <button onClick={handleSignOut} className={styles.signOutButton}>Sign Out</button>
                </div>
            </nav>
            
            <form className={styles.studentProfileForm} onSubmit={handleSubmit}>
                
                
                <div className={styles.saveButton}>
                    <input type="submit" value="Save" />
                </div>
                {
                    successMessage ? <div className={styles.successMessage}>Data saved successfully!</div> : null
                }
            </form>
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

        }

        const profileTableURL = `http://localhost:8080/sponsorDb/profile/${email}`;
        const profileResponse = await fetch(profileTableURL);
        const profileData = await profileResponse.json();

        return{
            props: {
                session,
                profileData
            }
        }
    } 
}