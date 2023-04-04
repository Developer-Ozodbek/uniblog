import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT

export const BlogsService = {
  async getAllBlogs() {
    const query = gql`
      query GetBlogs {
        blogs {
          author {
            avatar {
              url
            }
            name
            slug
          }
          category {
            label
            slug
          }
          content {
            html
            text
          }
          image {
            url
          }
          slug
          tag
          title
          description
          createdAt
          id
        }
      }
    `;

    const result = await request(graphqlAPI, query)
    return result.blogs
  },
  async getAllAuthors(){
    const query = gql`
    query getAllAuthors {
      authors {
        avatar {
          url
        }
        name
        slug
        blogs {
          title
        }
      }
    }    
    `
    const result = await request(graphqlAPI, query)
    return result.authors
  },
  async getLatestBlogs() {
    const query = gql`
      query getLatestBlogs{
        blogs(last: 3) {
          author {
            avatar {
              url
            }
            name
            slug
          }
          category {
            label
            slug
          }
          content {
            html
            text
          }
          image {
            url
          }
          slug
          tag
          title
          description
          createdAt
          id
        }
      }
    `;

    const result = await request(graphqlAPI, query)
    return result.blogs
  },
  async getCategories() {
    const query = gql`
      query getCategories {
        categories {
          label
          slug
        }
      }
    `;

    const result = await request(graphqlAPI, query)
    return result.categories
  },
  async getDetailedBlog(slug){
    const query = gql`
    query GetDetailedBlog($slug: String!) {
      blog(where: {slug: $slug}) {
        author {
          avatar {
            url
          }
          name
          slug
        }
        category {
          label
          slug
        }
        content {
          html
          text
        }
        image {
          url
        }
        slug
        tag
        title
        description
        createdAt
        id
      }
    }    
    `
    const result = await request(graphqlAPI, query, { slug })
    return result.blog
  },
  async getAllBlogsByCategory(slug){
    const query = gql`
    query GetAllBlogsByCategory($slug: String!) {
      blogs(where: {category: {slug: $slug}}) {
        author {
          avatar {
            url
          }
          name
          slug
        }
        category {
          label
          slug
        }
        content {
          html
          text
        }
        image {
          url
        }
        slug
        tag
        title
        description
        createdAt
      }
    }    
    `
    const result = await request(graphqlAPI, query, { slug })
    return result.blogs
  },
  async getAllBlogsByAuthor(slug){
    const query = gql`
    query getAllBlogsByAuthor($slug: String!) {
      blogs(where: {author: {slug: $slug}}) {
        author {
          avatar {
            url
          }
          name
          slug
        }
        category {
          label
          slug
        }
        content {
          html
          text
        }
        image {
          url
        }
        slug
        tag
        title
        description
        createdAt
        id
      }
    }
    `
    const result = await request(graphqlAPI, query, { slug })
    return result.blogs
  },
  async getAllBlogsByTag(slug){
    const query = gql`
    query getAllBlogsByAuthor($slug: String!) {
      blogs(where: {tag_contains: $slug}) {
        author {
          avatar {
            url
          }
          name
          slug
        }
        category {
          label
          slug
        }
        content {
          html
          text
        }
        image {
          url
        }
        slug
        tag
        title
        description
        createdAt
        id
      }
    }
    `
    const result = await request(graphqlAPI, query, { slug })
    return result.blogs
  },
};
