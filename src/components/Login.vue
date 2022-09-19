<template>
  <div class="container">
    <form @submit.prevent="login">
      <h2 class="mb-3">Login</h2>
      <div class="input ">
        <label for="email">Email address</label>
        <input
          class="form-control"
          type="text"
          name="email"
          placeholder="email@adress.com"
        />
      </div>
      <div class="input">
        <label for="password">Password</label>
        <input
          class="form-control"
          type="password"
          name="password"
          placeholder="password123"
        />
      </div>
      <button type="submit" class="mt-4 btn-pers" id="login_button">
        Login
      </button>
    </form>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore()
const login = (submitEvent) => store.dispatch('auth/login', submitEvent)
</script>



<style>
/* CUSTOM STYLE */

.container {
  width: 400px;
  max-width: 95%;
}
.input {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}
.input > label {
  text-align: start;
  color: #198754;
}
.input > input {
  margin-top: 6px;
  height: 38px !important;
}
/* From uiverse.io */
.btn-pers {
  position: relative;
  left: 50%;
  padding: 1em 2.5em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 700;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  transform: translateX(-50%);
}
.btn-pers:hover {
  background-color: #198754;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translate(-50%, -7px);
}
.btn-pers:active {
  transform: translate(-50%, -1px);
}
</style>