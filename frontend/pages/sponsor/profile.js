import { getSession, signOut } from 'next-auth/react';
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function SponsorProfile({session, user}) {

    const handleSignOut = () => {
        signOut({callbackUrl: 'http://localhost:3000'});
    }

    return(
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <Image src="/site-logo.png" alt="OneStopScholar" className="nav-logo" width={150} height={50}></Image>
                <div className={styles.centerNav}>
                    <Link href='/sponsor' legacyBehavior><a>Dashboard</a></Link>
                    <Link href='/sponsor/applications' legacyBehavior><a>Applications</a></Link>
                </div>
                <div className='login-container'>
                    <Link href='/sponsor/profile' legacyBehavior><a>{user.email}</a></Link>
                    <button onClick={handleSignOut} className={styles.signOutButton}>Sign Out</button>
                </div>
            </nav>
            <div id="sponsor-profile">
                <h2>Sponsor Profile Section</h2>
                <form onSubmit={this.addToDoFromUI}>
                    <div>
                        <label>
                            Name:
                        <input 
                            type="text" 
                            name="name" 
                            value ={this.state.title} 
                            onChange={this.handleChange} 
                            required
                        />
                        </label>
                    </div>
                    <div>
                        <label>
                            Postal Address:
                        <input 
                            type="text" 
                            name="address" 
                            value ={this.state.title} 
                            onChange={this.handleChange} 
                            required
                        />
                        </label>
                    </div>
                    <div>
                        <label>
                            Contact Number:
                        <input 
                            type="text" 
                            name="contactnumber" 
                            value ={this.state.title} 
                            onChange={this.handleChange} 
                            required
                        />
                        </label>
                    </div>
                    <div>
                        <label>
                            Email ID:
                        <input 
                            type="text" 
                            name="emailID" 
                            value ={this.state.title} 
                            onChange={this.handleChange} 
                            required
                        />
                        </label>
                    </div>
                    <div>
                        <label>
                            Incorporation Date:
                        <input 
                            type="text" 
                            name="incorporationdate" 
                            value ={this.state.title} 
                            onChange={this.handleChange} 
                            required
                        />
                        </label>
                    </div>
                    <div>
                        <label>
                            Registeration Number:
                        <input 
                            type="text" 
                            name="registrationnumber" 
                            value ={this.state.title} 
                            onChange={this.handleChange} 
                            required
                        />
                        </label>
                    </div>
                    <div >
                        <input className="button" type="submit" value="Submit" />
                    </div>
                </form>
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

        if (userData[0].userType === 'sponsor') {
            return {
                redirect: {
                    destination: '/signin',
                    permanent: false,
                },
            }

        }

        return{
            props: {
                session,
                user: session.user
            }
        }
    } 
}