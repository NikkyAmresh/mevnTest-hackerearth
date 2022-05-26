/* *** Post Title: This is the sample Title Description: This is the sample
Description Status: Published | Pending */
<template>
  <div v-if="post">
    <h4>Post</h4>
    <div>
      <label><strong>Title: </strong></label>
      // Title here
    </div>
    <div>
      <label><strong>Description:</strong></label>
      // Description here
    </div>
    <div>
      <label><strong>Status:</strong></label>
      // Status here -> Pending/Published
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
