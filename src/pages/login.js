// import { useSession, signIn, signOut } from "next-auth/react"

// export default function Component() {
//   const { data: session } = useSession()
//   if (session) {
//     return (
//       <>
//         Signed in as {session?.user?.email} <br />
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     )
//   }
//   return (
//     <>
//       Not signed in <br />
//       <button onClick={() => signIn()}>Sign in</button>
//     </>
//   )
// }

//////////

// import { useRouter } from 'next/router';
// import { getSession } from 'next-auth/react';
// import { useEffect, useState } from 'react';
// import AuthForm from '../../components/AuthForm';

// function AuthPage() {
//   const [isLoading, setIsLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     getSession().then((session) => {
//       if (session) {
//         router.replace('/');
//       } else {
//         setIsLoading(false);
//       }
//     });
//   }, [router]);

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   return <AuthForm />;
// }

// export default AuthPage;