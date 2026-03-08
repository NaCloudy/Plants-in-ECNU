<template>
    <div class="container">
        <div class="wordCloud">
            <wordCloud />
        </div>
        <div class="emotionMessage">
            <Emotionmessage />
        </div>
    </div>
</template>

<script setup lang="ts">
import Emotionmessage from './message.vue'
import wordCloud from './wordcloud.vue'
import emitter from "../bus";

</script>

<style lang="scss" scoped>
.container {
    display: flex;
}

.wordCloud {
    flex: 1;
    margin-right: 20px;
    /* Adjust margin as needed */
}

.emotionMessage {
    flex: 1;
}
</style>
