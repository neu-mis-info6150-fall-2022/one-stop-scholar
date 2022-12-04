import { getSession } from 'next-auth/react';

export default function({data}) {
    return(
        <p>This is student dashboard page {data.email}</p>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    const email = session.user.email;
    const url = `http://localhost:8080/nextAuthDb/users/${email}`;
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userType: "student"})
    };
    await fetch(url, requestOptions);

    return{
        props: {
            data: session.user
        }
    }
}