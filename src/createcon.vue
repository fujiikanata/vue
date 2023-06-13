<script setup>

import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const newName = ref('');
const newEmail = ref('');

const route = useRoute();

onMounted(() => {
  newName.value = route.query.newName;
  newEmail.value = route.query.newEmail;
});
(() => {
const newUser = {
  name: newName.value,
  email: newEmail.value,
};

// POSTリクエストを送信
fetch('http://localhost:8080/kadai/up', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newUser),
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network error. Failed to insert user data.');
    }
    return response.json();
  })
  .then(data => {
    console.log('User created:', data);
  })
  .catch(error => {
    console.error('Error creating user:', error);
  });
});

</script>
<template>
    <body>
      <h1 class="waku2">研修生 新規登録 確認</h1>
      <main class="waku3"> 
        <tr class="tr1">
            名前{{ newName }}
        </tr>
        <tr class="tr1">
            メールアドレス{{ newEmail }}
        </tr>
        <tr class="button3">
        <router-link to="/">
                  <button class="button2" @click="Incet">確認</button>
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