<template>
  <div>
    <nav>
      <div class="nav-wrapper orange darken-4">
        <a class="logo">Strangers</a>
        <ul id="nav-mobile" class="right">
          <li>
            <i class="material-icons">perm_identity</i>
          </li>
          <li style="min-width:100px">{{name}}</li>
        </ul>
      </div>
    </nav>
    <div class="row">
      <dir class="col s4">
          {{num}}
      </dir>
      <div class="col s8">caht</div>
    </div>
  </div>
</template>

<script>
import socketService from "../services/socket.service";
export default {
  name: "Chatroom",
  data() {
    return {
        num:0
    };
  },
  props: ["name"],
  methods: {},
  created(){
      setTimeout(() => {
          this.num=this.socketService.numUser();
      }, 2000);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  font-family: "Akronim", cursive;
  font-size: 26px;
  margin-left: 10px;
}
</style>
