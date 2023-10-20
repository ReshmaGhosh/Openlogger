
export default defineNuxtRouteMiddleware(() => {
  const auth = useAuth();
  return auth.value.isAuthenticated;
});

// export default defineNuxtRouteMiddleware((to) => {
//     return navigateTo('/');
//     const user = useSupabaseUser();

//   if (!user.value && to.path === "/adminAccount") {
//     //return navigateTo("/login");
//   } else if (user.value && to.path === "/login") {
//     //return navigateTo("adminAccount");
//   }
// });


