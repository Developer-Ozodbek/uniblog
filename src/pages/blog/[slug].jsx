import { Layout } from '../../components'
import { BlogsService } from '../../services/blog.service'
import Image from 'next/image';
import { Avatar, Box, Button, Typography } from '@mui/material';
import { Sidebar } from "../../components"
import { formatTimeAgo, readingTime } from '../../constants/constant';
import { useRouter } from 'next/router';
import SEO from '../../seo/seo';

const DetailedPage = ({ blog, latestBlogs, categories }) => {
  const router = useRouter()

  return (
    <SEO title={blog.title} description={blog.description} author={blog.author.name}>
      <Layout>
        <Box sx={{ display: 'flex', padding: '30px 10px', gap: '10px', flexDirection: { xs: 'column-reverse', md: 'row' } }}>
          <Sidebar latestBlogs={latestBlogs} categories={categories} />
          <Box sx={{ padding: { xs: '0', lg: '0 70px' }, width: '100%' }}>
            <Box sx={{ width: '100%', borderRadius: '10px' }}>
              <Box sx={{ position: 'relative', width: '100%', height: { xs: '30vh', md: '50vh' } }}>
                <Image fill alt={blog?.title} src={blog?.image?.url} style={{ objectFit: 'cover', borderRadius: '10px', borderBottomLeftRadius: '0', borderBottomRightRadius: '0' }} />
              </Box>
              <Box>
							<Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
								{blog.tag.split(", ").slice(0, 3).map((tagItem, idx) => (
									<Button key={idx} className={'tag'} sx={{fontSize: { xs: '12px', sm: '14px', md: '16px' }}} onClick={() => router.push(`/tag/${tagItem}`)}>#{tagItem}</Button>
								))}
							</Box>
                <Box sx={{ display: 'flex', padding: '8px', borderRadius: '8px', gap: '10px', alignItems: 'center', cursor: 'pointer', marginBottom: '8px', boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px' }} onClick={() => router.push(`/author/${blog.author.slug}`)}>
                  <Avatar alt={blog.author.name} src={blog.author.avatar.url} />
                  <Box>
                    <Typography sx={{ fontWeight: 600 }}>{blog.author.name}</Typography>
                    <Typography>{formatTimeAgo(new Date(blog.createdAt))} • {readingTime(blog.content.text)} min read</Typography>
                  </Box>
                </Box>
              </Box>
              <Typography>{blog.description}</Typography>
              <Typography sx={{ fontSize: { xs: '34px', sm: '38px', md: '44px', lg: '48px' }, fontWeight: 700 }}>{blog.title}</Typography>
              <div dangerouslySetInnerHTML={{ __html: blog.content.html }} />
            </Box>
          </Box>
        </Box>
      </Layout>
    </SEO>
  )
}

export default DetailedPage

export const getServerSideProps = async ({ query }) => {
  const blog = await BlogsService.getDetailedBlog(query.slug)
  const latestBlogs = await BlogsService.getLatestBlogs()
  const categories = await BlogsService.getCategories()

  return {
    props: {
      blog,
      latestBlogs,
      categories,
    }
  }
}