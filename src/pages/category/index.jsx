import Layout from "../../components/layout"
import { Box, Button, Typography } from "@mui/material"
import { BlogsService } from "../../services/blog.service"
import { useRouter } from 'next/router';
import SEO from '../../seo/seo';

const CategoryPage = ({categories}) => {
  const router = useRouter()

  return (
    <SEO title={'All Category'}>
      <Layout>
        <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 0'}}>
          <Typography sx={{fontSize: '48px', fontWeight: 500}}>All Category</Typography>
          <Box>
            {categories.map(category => (
              <Button onClick={()=> router.push(`/category/${category.slug}`)} key={category.slug}>{category.label}</Button>
            ))}
          </Box>
        </Box>
      </Layout>
    </SEO>

  )
}

export default CategoryPage

export const getServerSideProps = async () => {
  const categories = await BlogsService.getCategories()

  return {
    props: {
      categories
    }
  }
}