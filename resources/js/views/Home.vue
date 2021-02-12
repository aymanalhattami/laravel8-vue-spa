<template>
  <div class="home">
        <h2>Home View</h2>
        <div v-for="status in statuses">
            <p>{{ status.user.name }}</p>
            <p>{{ status.body }}</p>
        </div>
  </div>
</template>

<script>
export default {
    name: "Home",

    data(){
        return {
            statuses: []
        }
    },

    created(){
        axios.get('http://127.0.0.1:8000/statuses').then(response => this.statuses = response.data);
    }
};
</script>
