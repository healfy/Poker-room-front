<template>
  <div class="container">
    <table class="table" id="table1">
      <tr>
        <th>Name</th>
        <th>Seats</th>
        <th></th>
        <th></th>

      </tr>
      <tr>
        <td>{{ name }}</td>
        <td>{{ seats }}</td>
        <td>
          <button type="submit"  id="login_button">
            Play
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";
const  client = new WebSocket("ws://localhost:8001/ws/tables")
const name = ref("")
const seats = ref(0)
const beforeRouteLeave = (to, from, next) => { client.close() }
client.onmessage = on_message

function on_message(event){
  let data = JSON.parse(event.data)
  name.value = data.name
  seats.value = data.free_seats
}

</script>

<style scoped>

</style>
