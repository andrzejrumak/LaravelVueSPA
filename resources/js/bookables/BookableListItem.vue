<template>
  <div>
    <div class="card m-2">
      <div class="card-body">
        <div class="card-header">
          <h1>{{itemTitle}}</h1>
        </div>
        <div class="card-text">
          <p>{{itemContent}}</p>
        </div>
        <div class="card-text">
          <h4>Price: {{ price }} $</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: { itemTitle: String, itemContent: String, price: Number }
};
</script>
