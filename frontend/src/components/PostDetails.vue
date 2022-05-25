<template>
  <div v-if="post">
    <h4>Post</h4>
    <div>
      <label><strong>Title:</strong></label> {{ post.title }}
    </div>
    <div>
      <label><strong>Description:</strong></label>
      {{ post.description }}
    </div>
    <div>
      <label><strong>Status:</strong></label>
      {{ post.published ? "Published" : "Pending" }}
    </div>
  </div>
</template>
<script>
export default {
  name: "post-details",
  props: {
    post: Object,
  },
};
</script>
