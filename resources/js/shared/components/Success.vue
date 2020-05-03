<template>
  <div>
    <div class="text-center success">
      <i class="fa fa-thumbs-up" aria-hidden="true"></i>
      <h1 class="mt-4">Success!!!</h1>
      <h2>
        <slot></slot>
      </h2>
    </div>
  </div>
</template>
<style scoped>
.success {
  color: grey;
  font-size: 10rem;
}
</style>>