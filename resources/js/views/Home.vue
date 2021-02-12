<template>
  <div class="home">
        <h2>Home View</h2>
        <div v-for="status in statuses">
            <p><strong>Posted on:</strong> {{ postedOn(status) }}, <strong>by: </strong> {{ status.user.name }}</p>
            <p>{{ status.body }}</p>
            <hr>
        </div>
  </div>
</template>

<script>
import moment from 'moment';
import Status from '../models/Status.js';

export default {
    name: "Home",

    data(){
        return {
            statuses: []
        }
    },

    created(){
        // axios.get('/statuses').then(response => this.statuses = response.data); // or
        Status.all().then(({data}) => this.statuses = data);
    },

    methods: {
        postedOn(status){
            return moment(status.created_at).fromNow();
        }
    }
};
</script>
