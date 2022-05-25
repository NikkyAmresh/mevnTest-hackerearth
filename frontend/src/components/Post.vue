<template>
  <div v-if="currentPost" class="edit-form">
    <h4>Post</h4>
    <PostForm @setCurrentPost="setCurrentPost" :post="currentPost" />

    <button
      class="badge badge-primary mr-2"
      v-if="currentPost.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button
      v-else
      class="badge badge-primary mr-2"
      @click="updatePublished(true)"
    >
      Publish
    </button>

    <button class="badge badge-danger mr-2" @click="deletePost">Delete</button>

    <button type="submit" class="badge badge-success" @click="updatePost">
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Post...</p>
  </div>
</template>

<script>
import PostDataService from "../services/PostDataService";
import PostForm from "./PostForm.vue";

export default {
  name: "post",
  components: {
    PostForm,
  },
  data() {
    return {
      currentPost: null,
      message: "",
    };
  },
  methods: {
    setCurrentPost(post) {
      this.currentPost = JSON.parse(post);
    },
    getPost(id) {
      PostDataService.get(id)
        .then((response) => {
          this.currentPost = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updatePublished(status) {
      var data = {
        id: this.currentPost.id,
        title: this.currentPost.title,
        description: this.currentPost.description,
        published: status,
      };

      PostDataService.update(this.currentPost.id, data)
        .then((response) => {
          console.log(response.data);
          this.currentPost.published = status;
          this.message = "The status was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updatePost() {
      PostDataService.update(this.currentPost.id, this.currentPost)
        .then((response) => {
          console.log(response.data);
          this.message = "The post was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deletePost() {
      PostDataService.delete(this.currentPost.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "posts" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getPost(this.$route.params.id);
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
