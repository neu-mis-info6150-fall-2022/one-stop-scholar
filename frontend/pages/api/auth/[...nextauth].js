import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github'

export default NextAuth({
    providers: [
        GoogleProvider({
            cliendId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
    ],
    secret: process.env.JWT_SECRET,
    // callbacks: {
    //     async redirect({url, baseUrl}) {
    //         return '/student'
    //     }
    // }
});