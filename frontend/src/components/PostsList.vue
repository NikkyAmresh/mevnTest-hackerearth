<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search by title"
          v-model="title"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Posts List</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex, published: post.published }"
          v-for="(post, index) in posts"
          :key="index"
          @click="setActivePost(post, index)"
        >
          {{ post.title }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllPosts">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentPost">
        <PostDetails :post="currentPost" />
        <router-link
          :to="'/posts/' + currentPost.id"
          class="badge badge-warning"
          >Edit</router-link
        >
      </div>
      <div v-else>
        <br />
        <p>Please click on a Post...</p>
      </div>
    </div>
  </div>
</template>

<script>
import PostDataService from "../services/PostDataService";
import PostDetails from "./PostDetails.vue";
export default {
  name: "posts-list",
  components: {
    PostDetails,
  },
  data() {
    return {
      posts: [],
      currentPost: null,
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
    retrievePosts() {
      PostDataService.getAll()
        .then((response) => {
          this.posts = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrievePosts();
      this.currentPost = null;
      this.currentIndex = -1;
    },

    setActivePost(post, index) {
      this.currentPost = post;
      this.currentIndex = post ? index : -1;
    },

    removeAllPosts() {
      PostDataService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchTitle() {
      PostDataService.findByTitle(this.title)
        .then((response) => {
          this.posts = response.data;
          this.setActivePost(null);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrievePosts();
  },
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
.published::after {
  content: "\2713";
  color: #1c80a6;
  margin-left: 20px;
}
.published.active::after {
  content: "\2713";
  color: #c5e0eb;
  margin-left: 20px;
}
</style>
