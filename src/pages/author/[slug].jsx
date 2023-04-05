import { BlogsService } from "../../services/blog.service"
import { Content, Layout } from "../../components"
import { Box, Typography } from "@mui/material"
import SEO from '../../seo/seo';


const Author = ({authorBlogs}) => {
  console.log(authorBlogs)


  return (
    <SEO title={`${authorBlogs[0]?.author?.name}'s blogs`} description={authorBlogs.description} author={authorBlogs[0]?.author?.name}>
      <Layout>
        <Box sx={{
              display: 'flex',
              gap: '20px',
              flexDirection: 'column',
              padding: '20px',
              justifyContent: 'center',
              alignItems: 'center'
        }}>
          <Typography sx={{fontSize: '48px', fontWeight: 700}}>{authorBlogs[0]?.author?.name}'s blogs</Typography>
          <Content blogs={authorBlogs}/>
        </Box>
      </Layout>
    </SEO>

  )
}

export default Author

export const getServerSideProps = async ({query}) => {
  const authorBlogs = await BlogsService.getAllBlogsByAuthor(query.slug)

  return {
    props: {
      authorBlogs
    }
  }
}
