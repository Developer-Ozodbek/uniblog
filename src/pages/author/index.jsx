import { BlogsService } from "../../services/blog.service"
import { Layout } from "../../components"
import { Avatar, Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import SEO from '../../seo/seo';

const Index = ({authors}) => {
  const router = useRouter()

  return (
    <SEO title={'All Authors'}>
      <Layout>
        <Box sx={{display: 'flex', padding: '25px 30px', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
          <Typography sx={{ fontWeight: 600, fontSize: '48px' }}>All Authors</Typography>
          <Box sx={{display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center'}}>
            {authors.map(author => (
              <Box key={author.name} sx={{ display: 'flex', flexFlow: 'column wrap', padding: '25px 30px', borderRadius: '8px', gap: '10px', alignItems: 'center', boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px', cursor: 'pointer' }} onClick={()=> router.push(`/author/${author.slug}`)}>
                <Avatar alt={author?.name} src={author?.avatar?.url} sx={{width: '200px', height: '200px'}} />
                <Box>
                  <Typography sx={{ fontWeight: 600, textAlign: 'center' }}>{author?.name} • {author?.blogs.length} blogs</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Layout>
    </SEO>
  )
}

export default Index

export const getServerSideProps = async () => {
  const authors = await BlogsService.getAllAuthors()

  return {
    props: {
      authors
    }
  }
}