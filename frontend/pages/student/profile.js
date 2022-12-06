import { getSession, signOut } from 'next-auth/react';
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function StudentProfile({session, user}) {

    const handleSignOut = () => {
        signOut({callbackUrl: 'http://localhost:3000'});
    }

    

    return(
        <div className={styles.container}>
            <div><nav className={styles.navbar}>
                <Image src="/site-logo.png" alt="OneStopScholar" className="nav-logo" width={150} height={50}></Image>
                <div className={styles.centerNav}>
                    <Link href='/student' legacyBehavior><a>Dashboard</a></Link>
                    <Link href='/student/applications' legacyBehavior><a>Applications</a></Link>
                </div>
                <div className='login-container'>
                    <Link href='/student/profile' legacyBehavior><a>{user.email}</a></Link>
                    <button onClick={handleSignOut} className={styles.signOutButton}>Sign Out</button>
                </div>
            </nav>
            </div>
            {/* <br></br>
            <br></br> */}
            <div class="student-profile">
                <h2>Student Profile Section</h2>
                {/* <form onSubmit={this.addToDoFromUI}> */}
                    <h3>Personal Information</h3>
                    <div>
                        <label>
                            Name:
                        <input 
                            type="text" 
                            name="name" 
                            // value ={this.state.title} 
                            // onChange={this.handleChange} 
                            required
                        />
                        </label>
                    </div>
                    <div>
                        <label>
                            Date of Birth:
                        <input 
                            type="text" 
                            name="dob" 
                            // value ={this.state.title} 
                            // onChange={this.handleChange} 
                            required
                        />
                        </label>
                    </div>
                    <div>
                        <label>
                            Email:
                        <input 
                            type="text" 
                            name="email" 
                            // value ={this.state.title} 
                            // onChange={this.handleChange} 
                            required
                        />
                        </label>
                    </div>
                    <div>
                        <label>
                            Gender:
                        <input 
                            type="text" 
                            name="gender" 
                            // value ={this.state.title} 
                            // onChange={this.handleChange} 
                            required
                        />
                        </label>
                    </div>
                    <h3>Northeastern Details</h3>
                    <div>
                        <label>
                            NUID:
                        <input 
                            type="text" 
                            name="nuid" 
                            // value ={this.state.title} 
                            // onChange={this.handleChange} 
                            required
                        />
                        </label>
                    </div>
                    <div>
                        <label>
                            College:
                        <input 
                            type="text" 
                            name="college" 
                            // value ={this.state.title} 
                            // onChange={this.handleChange} 
                            required
                        />
                        </label>
                    </div>
                    <div>
                        <label>
                            Location:
                        <input 
                            type="text" 
                            name="colege" 
                            // value ={this.state.title} 
                            // onChange={this.handleChange} 
                            required
                        />
                        </label>
                    </div>
                    <div>
                        <label>
                            Program:
                        <input 
                            type="text" 
                            name="program" 
                            // value ={this.state.title} 
                            // onChange={this.handleChange} 
                            required
                        />
                        </label>
                    </div>
                    <div>
                        <label>
                            Majors:
                        <input 
                            type="text" 
                            name="majors" 
                            // value ={this.state.title} 
                            // onChange={this.handleChange} 
                            required
                        />
                        </label>
                    </div>
                    <div>
                        <label>
                            Grade:
                        <input 
                            type="text" 
                            name="grade" 
                            // value ={this.state.title} 
                            // onChange={this.handleChange} 
                            required
                        />
                        </label>
                    </div>
                    <h3>Work Experience</h3>
                    <div>
                        <label>
                            Position:
                        <input 
                            type="text" 
                            name="position" 
                            // value ={this.state.title} 
                            // onChange={this.handleChange} 
                            required
                        />
                        </label>
                    </div>
                    <div>
                        <label>
                            Duration (months):
                        <input 
                            type="text" 
                            name="duration" 
                            // value ={this.state.title} 
                            // onChange={this.handleChange} 
                            required
                        />
                        </label>
                    </div>
                    <div>
                        <label>
                            Company:
                        <input 
                            type="text" 
                            name="company" 
                            // value ={this.state.title} 
                            // onChange={this.handleChange} 
                            required
                        />
                        </label>
                    </div>
                    <div>
                        <label>
                            Location:
                        <input 
                            type="text" 
                            name="companylocation" 
                            // value ={this.state.title} 
                            // onChange={this.handleChange} 
                            required
                        />
                        </label>
                    </div>
                    <div>
                        <label>
                            Location:
                        <input 
                            type="text" 
                            name="companylocation" 
                            // value ={this.state.title} 
                            // onChange={this.handleChange} 
                            required
                        />
                        </label>
                    </div>
                    <h3>Educational Details</h3>
                    <div>
                        <label>
                            Undergrad:
                        <input 
                            type="text" 
                            name="undergradclg" 
                            // value ={this.state.title} 
                            // onChange={this.handleChange} 
                            required
                        />
                        </label>
                    </div>
                    <div>
                        <label>
                            Location:
                        <input 
                            type="text" 
                            name="undergradloc" 
                            // value ={this.state.title} 
                            // onChange={this.handleChange} 
                            required
                        />
                        </label>
                    </div>
                    <div>
                        <label>
                            Grade:
                        <input 
                            type="text" 
                            name="undergradgrade" 
                            // value ={this.state.title} 
                            // onChange={this.handleChange} 
                            required
                        />
                        </label>
                    </div>
                    <div>
                        <label>
                            12th:
                        <input 
                            type="text" 
                            name="12th" 
                            // value ={this.state.title} 
                            // onChange={this.handleChange} 
                            required
                        />
                        </label>
                    </div>
                    <div>
                        <label>
                            12th Location:
                        <input 
                            type="text" 
                            name="12thloc" 
                            // value ={this.state.title} 
                            // onChange={this.handleChange} 
                            required
                        />
                        </label>
                    </div>
                    <div>
                        <label>
                            12th Grade:
                        <input 
                            type="text" 
                            name="12thgrade" 
                            // value ={this.state.title} 
                            // onChange={this.handleChange} 
                            required
                        />
                        </label>
                    </div>
                    <div>
                        <label>
                            10th:
                        <input 
                            type="text" 
                            name="10th" 
                            // value ={this.state.title} 
                            // onChange={this.handleChange} 
                            required
                        />
                        </label>
                    </div>
                    <div>
                        <label>
                            10th Location:
                        <input 
                            type="text" 
                            name="10thloc" 
                            // value ={this.state.title} 
                            // onChange={this.handleChange} 
                            required
                        />
                        </label>
                    </div>
                    <div>
                        <label>
                            10th Grade:
                        <input 
                            type="text" 
                            name="10thgrade" 
                            // value ={this.state.title} 
                            // onChange={this.handleChange} 
                            required
                        />
                        </label>
                    </div>
                    <h3>Certifications</h3>
                    <div>
                        <label>
                            Certifications:
                        <input 
                            type="text" 
                            name="centrifications" 
                            // value ={this.state.title} 
                            // onChange={this.handleChange} 
                            required
                        />
                        </label>
                    </div>
                    <div >
                        <input className="button" type="submit" value="Submit" />
                    </div>
                {/* </form> */}
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