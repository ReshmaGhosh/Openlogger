
<template>
  <div class="container">
    <h2>Register</h2>
    <form @submit.prevent="register">
      <input class="form-control" v-model="email" placeholder="Email" />
      <input class="form-control" type="password" v-model="password" placeholder="Password" />
      <button class="button" type="submit">Register</button>
    </form>
    <p class="error" v-if="error">{{ error }}</p>
    <NuxtLink class="link" to="/login">Already have an account? Login</NuxtLink>
  </div>
</template>


<script setup>


const email = ref("");
const password = ref("");
const error = ref("");

const register = async () => {
  try {
    await auth.createUserWithEmailAndPassword(email.value, password.value);
    // Redirect after successful registration, or do other tasks.
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
