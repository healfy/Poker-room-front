<template>
  <div class="container">
    <form @submit.prevent="post">
      <h2>Register</h2>
      <div class="input">
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
      <div class="input">
        <label for="confirm_password">Confirm Password</label>
        <input
          class="form-control"
          type="password"
          name="confirm_password"
          placeholder="password123"
        />
        <p style="color:ivory">{{ message }}</p>
      </div>
      <button type="submit" class="mt-4 btn-pers" id="login_button">
        Register
      </button>
    </form>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
const message = ref("");


function show(error) {
  console.log(error)
}

function post(submitEvent) {
  let data = {
    "email": submitEvent.target.elements.email.value,
    "password": submitEvent.target.elements.password.value,
    "confirm_password": submitEvent.target.elements.confirm_password.value,
  }
  axios.post('http://0.0.0.0:8001/v1/users/register', data)
    .then((res) => {

    })
    .catch((error) => {
      message.value = 'werded'
      for (const errorKey in error.response.data.detail) {
        let elem = error.response.data.detail[errorKey];
        console.log(elem.loc[1], elem.msg)
      }

      // alert(error.response.data.detail[0])
    });
}
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
  color: hsla(160, 100%, 37%, 1);
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
/*  */
.alternative-option {
  text-align: center;
}
.alternative-option > span {
  color: #0d6efd;
  cursor: pointer;
}
.label {
  color: white;
}
#sign_out {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
</style>