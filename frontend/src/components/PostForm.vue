<template>
  <form>
    <div class="form-group">
      <label htmlFor="title">Title</label>
      <input
        type="text"
        class="form-control"
        id="title"
        v-on:keyup="updatePost"
        v-model="mutablPost.title"
      />
    </div>
    <div class="form-group">
      <label htmlFor="description">Description</label>
      <input
        type="text"
        class="form-control"
        id="description"
        v-on:keyup="updatePost"
        v-model="mutablPost.description"
      />
    </div>

    <div class="form-group">
      <label><strong>Status:</strong></label>
      {{ mutablPost.published ? "Published" : "Pending" }}
    </div>
  </form>
</template>
<script>
export default {
  name: "post-form",
  props: {
    post: Object,
  },
  data: function () {
    return {
      mutablPost: this.post,
    };
  },
  methods: {
    updatePost() {
      this.$emit("setCurrentPost", JSON.stringify(this.mutablPost));
    },
  },
};
</script>
