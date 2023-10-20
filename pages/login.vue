<!-- <script setup>
definePageMeta({
  middleware: ["auth"],
});

const email = ref("");
const password = ref("");
const isSignUp = ref(false);
const client = useSupabaseClient();
const signUp = async () => {
  const { user, error } = await client.auth.signUp({
    email: email.value,
    password: password.value,
  });
  console.log("user", user);
  console.log("error", error);
};

const login = async () => {
  const { user, error } = await client.auth.signIn({
    email: email.value,
    password: password.value,
  });
  console.log("user", user);
  console.log("error", error);
};

const user = useSupabaseUser();
onMounted(() => {
  watchEffect(() => {
    if (user.value) {
      navigateTo("/adminAccount");
    }
  });
});
</script>

<template>
  <div class="max-w-lg mx-auto mt-8">
    <h1 class="text-3xl font-black text-white">OpenLoggger</h1>

    <form
      @submit.prevent="() => (isSignUp ? signUp() : login())"
      class="flex flex-col gap-2 mt-16"
    >
      <input
        type="email"
        placeholder="Email"
        v-model="email"
        class="p-2 text-white rounded bg-charcoal-600"
      />
      <input
        type="password"
        placeholder="Password"
        v-model="password"
        class="p-2 text-white rounded bg-charcoal-600"
      />
      <button
        type="submit"
        class="p-2 font-medium text-white bg-green-500 rounded hover:bg-green-400"
      >
        <span v-if="isSignUp"> Sign up </span>
        <span v-else> Log in </span>
      </button>
    </form>
    <button
      @click="isSignUp = !isSignUp"
      class="w-full mt-8 text-sm text-center underline text-slate-300"
    >
      <span v-if="isSignUp"> Have an account? Log in instead </span>
      <span v-else> Create a new account </span>
    </button>
  </div>
</template> -->



<template>
  <div class="container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input class="form-control" v-model="email" placeholder="Email" />
      <input class="form-control" type="password" v-model="password"  placeholder="*************"
            autocomplete="false" />
      <button class="button" type="submit">Login</button>
    </form>
    <p class="error" v-if="error">{{ error }}</p>
    <NuxtLink class="link" to="/register">Don't have an account? Register</NuxtLink>
  </div>
</template>


<script setup>


const email = ref("");
const password = ref("");
const error = ref("");

const login = async () => {
  try {
    await auth.signInWithEmailAndPassword(email.value, password.value);
    // Redirect after successful login, or do other tasks.
  } catch (err) {
    error.value = err.message;
  }
};
</script>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
}

.form-control {
  margin: 10px 0;
  width: 300px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 16px;
}

.button {
  padding: 10px 15px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  margin: 10px 0;
}

.link {
  margin-top: 10px;
  color: #007bff;
  cursor: pointer;
}

.link:hover {
  text-decoration: underline;
}
</style>



