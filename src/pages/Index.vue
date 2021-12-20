<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <Author :show-title="true" />

    <!-- List posts -->
    <div class="posts">
      <PostCard
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </div>
    <Pager :info="$page.posts.pageInfo" class="pager" linkClass="pager__link" />
  </Layout>
</template>

<page-query>
query ($page: Int) {
  posts: allPost(filter: { published: { eq: true }},perPage: 1, page: $page) @paginate {
        pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
        tags {
          id
          title
          path
        }
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        coverImage (width: 770, height: 380, blur: 10)
        ...on Post {
            id
            title
            path
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";
import Author from "~/components/Author.vue";
import PostCard from "~/components/PostCard.vue";

export default {
  components: {
    Author,
    PostCard,
    Pager,
  },
  metaInfo: {
    title: "Home",
  },
};
</script>

<style scoped lang="scss">
.pager {
  display: inline-block;
  width: 100%;
  text-align: center;

  &__link {
    color: var(--link-color);
    text-align: center;
    text-decoration: none;
    padding: 0.5rem 1rem;

    &:hover:not(.active) {
      background-color: var(--bg-content-color);
      border-radius: 5px;
      color: var(--link-color);
    }
  }
}

.active {
  background-color: var(--bg-content-color);
  border-radius: 5px;
}
</style>

