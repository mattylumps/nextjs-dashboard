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
    
    
    providers: [], // Add providers with an empty array for now
    };
    




    
 