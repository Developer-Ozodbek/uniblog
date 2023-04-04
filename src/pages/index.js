import { Box } from "@mui/material"
import { Content, Sidebar, Slider } from "../components"
import Layout from "../components/layout"
import { BlogsService } from "../services/blog.service"
import SEO from "../seo/seo"

const Home = ({blogs, categories, latestBlogs}) => {
  return (
    <SEO>
      <Layout>
        <Slider latestBlogs={latestBlogs}/>
        <Box sx={{display: 'flex', padding: '30px 10px', gap: '10px', flexDirection: {xs: 'column-reverse', md: 'row'}}}>
          <Sidebar latestBlogs={latestBlogs} categories={categories}/>
          <Content blogs={blogs}/>
        </Box>
      </Layout>
    </SEO>
  )
}

export default Home

export const getServerSideProps = async () => {
  const blogs = await BlogsService.getAllBlogs()
  const categories = await BlogsService.getCategories()
  const latestBlogs = await BlogsService.getLatestBlogs()

  return {
    props: {
      blogs,
      categories,
      latestBlogs,
    }
  }
}