import Layout from "../../components/layout"
import { BlogsService } from "../../services/blog.service"
import { Content} from "../../components"
import { Box, Typography} from "@mui/material"
import SEO from '../../seo/seo';

const Category = ({blogs, query}) => {
  return (
    <SEO title={`${query.slug} - category`}>
      <Layout>
          <Box sx={{
              display: 'flex',
              gap: '20px',
              flexDirection: 'column',
              padding: '20px',
              justifyContent: 'center',
              alignItems: 'center',
          }}>
              <Typography sx={{fontSize: '48px', fontWeight: 700}}>{query.slug}</Typography>
              <Content blogs={blogs}/>
          </Box>
      </Layout>
    </SEO>
  )
}

export default Category

export const getServerSideProps = async ({ query }) => {
    const blogs = await BlogsService.getAllBlogsByCategory(query.slug)
  
    return {
      props: {
        blogs,
        query
      }
    }
  }