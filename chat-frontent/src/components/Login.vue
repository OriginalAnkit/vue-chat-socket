<template>
  <div class="row">
    <div class="col s10 m4 push-s1 push-m4 outer">
      <div class="card">
        <div class="card-content">
          <h3 class="center-align orange-text">Strangers</h3>
          <div class="row">
            <div class="input-field col s12">
              <input id="first_name2" type="text" class="validate" v-model="username">
              <label class="active orange-text" for="first_name2">Your Name</label>
              <div class="center-align">
                <a class="waves-effect waves-light btn orange darken-4" @click="getName">button</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import socketService from "../services/socket.service";
export default {
  name: "Login",
  data() {
    return {
      username: null
    };
  },
  methods: {
    getName() {
      if (this.username) {
        socketService.joinChat(this.username);
        this.$router.push({ name: "Chatroom" ,params:{'name':this.username}});
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.outer {
  margin-top: 100px;
}

h3 {
  font-family: "Akronim", cursive;
}
input:focus {
  border-bottom: 1px solid #e65100 !important;
  box-shadow: 0 1px 0 0 #e65100 !important;
}
input.valid[type="text"]:not(.browser-default) {
  border-bottom: 1px solid #e65100 !important;
  box-shadow: 0 1px 0 0 #e65100 !important;
}
</style>
