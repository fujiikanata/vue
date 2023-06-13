<!----<script>
export default {
  methods: {
    goToUsers() {
      $router.push('/users');
    },
  },
};
</script>--->
<template>
  <body>
    <div class="center">
    <div class="B1">
      <h1>研修生コミュニティ</h1>
      <router-link to="/users">
      <button type="button" class="button1">一覧</button>
    </router-link>
  </div>
        </div>
  </body>
  </template>
  <style scoped>
  body{
    background-color: aliceblue;
  }
  .center{
    text-align: center;
  }
  h1{
      text-align:center;
      font-size: 50px;
      margin-right:auto ;
      margin-left: auto;
      color: black;
      margin-top:auto ;
  }
  .button1{
      background-color: blue;
      color:aliceblue;
  width: 180px;
  height: 80px;
  font-size: 24px;
  border-radius: 50px;
  margin-top:200px ;
  }
  .B1{
  text-align: center;
  margin-top:auto ;
  margin-right:auto ;
  margin-left: auto;
  }
  </style>