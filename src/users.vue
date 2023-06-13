<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const jsonData = ref([]);

const router = useRouter();

onMounted(() => {
  fetch("http://localhost:8080/kadai")
    .then(res => {
      if (!res.ok) {
        throw new Error("Network error. We couldn't call the API.");
      }
      return res.json();
    })
    .then(data => {
      jsonData.value = data;
    })
    .catch(err => console.error(err));
});
</script>

<template>
  <body>
    <h1 class="waku">研修生一覧</h1>
    <main class="waku"> 
      <router-link to="/create">
        <button class="create" type="button">+</button>
      </router-link>
      <div class="midasi">
        <div class="id">ID</div>
        <div class="name">名前</div>
        <div class="email">メールアドレス</div>
        <div class="del">消去</div>
        <div class="update">編集</div>
      </div>
      <table>
        <tbody>
          <tr v-for="data in jsonData" :key="data.id">
            <div class="utiwaku">
              <td class="id">{{ data.id }}</td>
              <td class="name">{{ data.name }}</td>
              <td class="email">{{ data.email }}</td>
            </div>
            <td>
              <router-link to="/delete">
                <img src="./icon/gomibako.jpeg">
              </router-link>
            </td>
            <td>
              <RouterLink to="/update">
              <img src="./icon/pen.jpeg">
            </RouterLink>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  </body>
</template>
<style>
img{
  width: 80%;
}
body{
    background-color: aliceblue;
    color: black;
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
    .waku{
        padding: 10px;
       margin-bottom: 3px;
       border: 1px solid #333333;
       border-radius: 3px;
    }
    .utiwaku{
        padding: 3px;
       margin-bottom: 3px;
       border: 1px solid #333333;
       border-radius: 10px;
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
