<script setup lang="ts">

</script>

<template>
    <v-layout>
        <v-app-bar color="grey-lighten-2"></v-app-bar>
        <v-navigation-drawer color="grey-darken-2" permanent></v-navigation-drawer>
        <v-main>
            <h1>this is the dashboard Layout</h1>
            <slot></slot>
        </v-main>
    </v-layout>
</template>