import GoogleProvider from 'next-auth/providers/google';
export const authConfig = {
    pages: {
      signIn: '/login',
      signOut: '/login'
    },
    callbacks: {
      async authorized({ auth, request: { nextUrl } }) {
        const isLoggedIn = !!auth?.user;
        const isOnDashboard = nextUrl.pathname.startsWith('/ui');
    
        if (!isLoggedIn && isOnDashboard) {
          return false; // Redirect unauthenticated users to the login page
        }
    
        if (isLoggedIn && !isOnDashboard) {
          return new URL('/ui/dashboard', nextUrl);
        }
    
        return true;
      },
    },
    
    
    providers: [GoogleProvider({
         clientId: process.env.GOOGLE_CLIENT_ID,
       }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
  };
    




    
 