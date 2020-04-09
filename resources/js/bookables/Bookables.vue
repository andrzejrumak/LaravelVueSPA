<template>
  <div>
    <div v-if="loading">Data is loading.....</div>
    <div if-else>
      <div class="row" v-for="row in rows" :key="'row' + row">
        <div class="col" v-for="(bookable, column) in bookablesInRow(row)" :key="'row'+row+column">
          <bookable-list-item
            :item-title="bookable.title"
            :item-content="bookable.content"
            :price="bookable.price"
          ></bookable-list-item>
        </div>
        <div class="col" v-for="p in plInRow(row)" :key="'pl' + row + p"></div>
      </div>
    </div>
  </div>
</template>

<script>
import BookableListItem from "./BookableListItem";
export default {
  components: {
    BookableListItem
  },
  data() {
    return {
      bookables: null,
      loading: false,
      columns: 3
    };
  },
  computed: {
    rows() {
      return this.bookables === null
        ? 0
        : Math.ceil(this.bookables.length / this.columns);
    }
  },
  methods: {
    bookablesInRow(row) {
      return this.bookables.slice((row - 1) * this.columns, row * this.columns);
    },
    plInRow(row) {
      return this.columns - this.bookablesInRow(row).length;
    }
  },
  created() {
    this.loading = true;
    setTimeout(() => {
      this.bookables = [
        {
          title: "Hotel",
          content: "This is awesome hotels room",
          price: 15
        },
        {
          title: "Exclusive Villa",
          content: "Very expensive Villa",
          price: 20
        },
        {
          title: "Cheap Room",
          content: "The cheapest place ever",
          price: 1
        },
        {
          title: "Nice apartment",
          content: "Nice and clean apartment in the country",
          price: 9
        },
        {
          title: "Hotel",
          content: "This is awesome hotels room",
          price: 15
        },
        {
          title: "Exclusive Villa",
          content: "Very expensive Villa",
          price: 20
        },
        {
          title: "Cheap Room",
          content: "The cheapest place ever",
          price: 1
        },
        {
          title: "Nice apartment",
          content: "Nice and clean apartment in the country",
          price: 9
        },
        {
          title: "Exclusive Villa",
          content: "Very expensive Villa",
          price: 20
        },
        {
          title: "Cheap Room",
          content: "The cheapest place ever",
          price: 1
        }
      ];
      this.loading = false;
    }, 2000);
  },

  mounted() {
    console.log("Home  mounted.");
  }
};
</script>