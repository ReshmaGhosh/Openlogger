
// export const useAuth = () =>
//   useState(() => ({
//     isAuthenticated: true,
//   }));


export const useFirebaseUser = () => useState("firebaseUser", () => null);