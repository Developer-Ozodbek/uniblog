import { Box, Typography } from "@mui/material"
import { Content, Layout } from "../../components"
import { BlogsService } from "../../services/blog.service"


const BlogPage = ({blogs}) => {
  console.log(blogs)
  return (
    <Layout>
      <Box sx={{
						display: 'flex',
						gap: '20px',
						flexDirection: 'column',
						padding: '20px',
						justifyContent: 'center',
						alignItems: 'center',
      }}>
        <Typography sx={{fontSize: '48px', fontWeight: 700}}>All Blogs</Typography>
        <Content blogs={blogs}/>
      </Box>
    </Layout>
  )
}

export default BlogPage

export const getServerSideProps = async () => {
  const blogs = await BlogsService.getAllBlogs()

  return {
    props: {
      blogs
    }
  }
}