<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const newName = ref('');
const newEmail = ref('');
const router = useRouter();

function goToCreateCon() {
  router.push({ name: 'createcon', query: { newName: newName.value, newEmail: newEmail.value } });
}
</script>

<template>
    <body class = "container">
      <h1 class="waku2">研修生 新規登録</h1>
      <main class="waku3"> 
        <tr class="tr1">
          名前:
          <input v-model="newName" type="text">
        </tr>
        <tr class="tr1">
            メールアドレス:
            <input v-model="newEmail" type="email">
        </tr>
        <tr class="button3">
        <router-link to="/createcon">
                  <button class="button2" @click="goToCreateCon">確認</button>
        </router-link>

                <RouterLink to="/users">
                <button class="button2">キャンセル</button>
              </RouterLink>
            </tr>
      </main>
    </body>
  </template>
  <style>
  body{
      background-color: aliceblue;
      color: black;
  }
  .tr1{
    display: block;
    font-size: 24px;
    margin-top: 50px;
  }
  input{
    font-size: 24px;
  }
  .button2{
    background-color: gray;
      color:aliceblue;
  width: 200px;
  height: 80px;
  font-size: 24px;
  border-radius: 50px;
  margin-top:200px ;
  margin: 40px;


  }
  .button3{
    display: block;
    text-align: center;
  }
  main{
      text-align: center;
  }
  table{
      margin: auto;
      border-spacing: 1px;
  }
      h1{
         text-align: center;
         margin-right:auto ;
         margin-left: auto;
         margin-top: top;
      }
      .waku2{
          padding: 10px;
         margin-bottom: 3px;
         border: 1px solid #333333;
         border-radius: 3px;
      }
      .waku3{
         margin-bottom: 10px;
         border: 1px solid #333333;
         border-radius: 3px;
      }

      .midasi div{
          display: inline-block;
          text-align: center;
          margin-right:auto ;
         margin-left: auto;
      }
      .create{
          background-color: blue;
          color:aliceblue;
          width: 50px;
          height: 50px;
          font-size: 28px;
          border-radius: 50px;
          display: block;
          margin-left:auto ;
      }
      
  </style>