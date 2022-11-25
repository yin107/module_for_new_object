<template>
  <div>
    dfdf{{ $store.state.a.name }}{{ $store.state.b.age }}
    <button @click="upname">修改名字</button
    ><t-button @click="login">确定</t-button>
  </div>
</template>

<script>
import User from "../api/user";
export default {
  name: "HomeView",
  methods: {
    upname() {
      this.$store.commit("updata", "lkkk")
    },
    async login() {
      const res = await User.login(this.username, this.password);
      console.log(res);
    },
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
};
</script>

<style></style>
