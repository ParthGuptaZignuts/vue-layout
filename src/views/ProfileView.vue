<script lang="ts" setup>

</script>

<template>
    <component :is="$route.meta.layout || 'section'">
        <v-container class="text-center">
            <h1>Hello, this my profile page</h1>
            <v-btn to="/">Go To Home</v-btn>
        </v-container>
    </component>
    
</template>
