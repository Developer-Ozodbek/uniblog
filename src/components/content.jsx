import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Button, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { formatTimeAgo, readingTime } from '../constants/constant';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Content = ({ blogs }) => {
  const router = useRouter()
  return (
    <Box sx={{ width: { xs: '100%', md: '70%' }, padding: { xs: '0', lg: '0 50px' } }}>
      {blogs.map(blog => (
        <Box key={blog.id} sx={{ padding: '15px', marginBottom: '15px', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px', borderRadius: '10px' }}>
          <Box sx={{ position: 'relative', width: '100%', height: { xs: '30vh', md: '50vh' }, cursor: 'pointer' }} onClick={() => router.push(`/blog/${blog.slug}`)}>
            <Image fill alt={blog.title} src={blog.image.url} style={{ objectFit: 'cover' }} />
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {blog.tag.split(", ").slice(0, 3).map((tagItem, idx) => (
              <Button key={idx} className={'tag'} sx={{ fontSize: { xs: '12px', sm: '14px', md: '16px' } }} onClick={() => router.push(`/tag/${tagItem}`)}>#{tagItem}</Button>
            ))}
          </Box>
          <Typography sx={{ fontWeight: 700, fontSize: { xs: '18px', sm: '20px', md: '24px' }, cursor: 'pointer' }} onClick={() => router.push(`/blog/${blog.slug}`)}>{blog.title.slice(0, 80)}</Typography>
          <Accordion sx={{ '&:before': { display: 'none', }, borderRadius: '10px', boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px', marginBottom: '10px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Description</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {blog.description ? <Typography>{blog.description}</Typography> : <Typography>there is no description</Typography>}
            </AccordionDetails>
          </Accordion>
          <Box sx={{ display: 'flex', padding: '8px', borderRadius: '8px', gap: '10px', alignItems: 'center', boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px', cursor: 'pointer' }} onClick={() => router.push(`/author/${blog.author.slug}`)}>
            <Avatar alt={blog.author.name} src={blog.author.avatar.url} />
            <Box>
              <Typography sx={{ fontWeight: 600 }}>{blog.author.name}</Typography>
              <Typography>{formatTimeAgo(new Date(blog.createdAt))} • {readingTime(blog.content.text)} min read</Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default Content