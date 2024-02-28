<script setup lang="ts">

</script>

<template>
  <component :is="$route.meta.layout  || 'section' " >
    <v-container class="text-center">
      <h1>Home</h1>
      <v-btn class="pa-3" to="/about">Go To About</v-btn>
      <br />
      <v-btn color="primary" class="ma-3" to="/profile">Go To Profile</v-btn>
    </v-container>
  </component>
</template>
