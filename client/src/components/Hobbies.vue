<template>
  <div style="width: 50%; margin:auto" class="container">
    <h1>My Hobbies</h1>
    <hr>
    <br>
    <p class="error" v-if="error">{{error}}</p>

    <table>
      <tr>
        <td><b>ID</b></td>
        <td><b>Hobbies</b></td>
      </tr>
      <tr v-for="hobby in hobbies" :key="hobby">
        <td>
          {{hobby["id"]}}
        </td>
        <td>
          {{hobby["hobby"]}}
        </td>
      </tr>
    </table>

    <select id="reqtype" v-model="selectedReq">
      <option value="add">Add</option>
      <option value="delete">Delete</option>
    </select>

    <input id="whichHobby" type="text" v-model="hobby2change">
    <button id="submit" v-on:click="changeHobby">Submit</button>

  </div>
</template>

<script>
import HobbyService from '../HobbyService';
export default {
  name: 'Hobbies',
  data() {
    return {
      hobbies: [],
      error: '',
      hobby2change: '',
      selectedReq: ''
    } 
  },
  async created() {
    try {
      this.hobbies = await HobbyService.getHobbies();
    } catch (err) {
      this.error = err.message
    }
  },
  methods: {
    changeHobby: async function () {
      if (this.hobby2change) {
        try {
          if (this.selectedReq == 'add') {
            console.log(`add ${this.hobby2change}`)
            await HobbyService.addHobby(this.hobby2change)
          }
          else if(this.selectedReq == 'delete') {
            console.log(`delete ${this.hobby2change}`)
            await HobbyService.delHobby(this.hobby2change)
          }
          else {
            console.log('no request selected')
          }
          this.hobbies = await HobbyService.getHobbies();
        } catch (err) {
          this.error = err.message
        }
      }
      else {
        console.log('no hobby')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin: auto;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

#reqtype {
  margin-top: 2%;
}
#whichHobby, #submit {
  margin-left: 1%;
}
</style>
