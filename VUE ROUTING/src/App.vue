<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
 <router-link style ="color:white" to="/Home"></router-link>
 <router-link style="color:purple" to="/info"></router-link>
 <router-link to="/PageNotFound"></router-link>
  </nav>
  <RouterView/>
</template>

<script setup>
import { RouterView } from "vue-router";
</script>