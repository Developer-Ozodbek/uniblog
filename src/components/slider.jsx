import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Avatar, Box, Button, Typography } from '@mui/material';
import { formatTimeAgo, readingTime } from '../constants/constant';
import { useRouter } from 'next/router';

const Slider = ({ latestBlogs }) => {
	const responsive = {
		mobile: {
			breakpoint: { max: 3000, min: 0 },
			items: 1
		}
	};

	const router = useRouter()

	return (
		<Carousel responsive={responsive}>
			{latestBlogs.map(blog => (
				<Box key={blog.id} onClick={() => router.push(`/blog/${blog.slug}`)} sx={{ cursor: 'pointer' }}>
					<Box sx={{ position: 'relative', width: '100%', height: {sx: '45vh', md: '70vh'} }}>
						<Image src={blog.image.url} fill alt={blog.title} style={{ objectFit: 'cover' }} />
					</Box>
					<Box className='slider'>
						<Box
							sx={{ paddingLeft: { xs: '10px', md: '50px' }, width: ' xs: 100%', position: 'relative', color: '#fff' }}
							zIndex={999}
						>
							<Typography sx={{ fontSize: { xs: '36px', sm: '40px', md: '48px' }, fontWeight: 600 }}>{blog.title.slice(0, 50)}..</Typography>
							<Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
								{blog.tag.split(", ").slice(0, 3).map((tagItem, idx) => (
									<Button key={idx} className={'tag'} sx={{fontSize: { xs: '12px', sm: '14px', md: '16px' }}} onClick={() => router.push(`/tag/${tagItem}`)}>#{tagItem}</Button>
								))}
							</Box>
							<Box sx={{ display: 'flex', padding: '8px', gap: '10px', alignItems: 'center', borderTop: '2px solid #ffffffaa' }} onClick={() => router.push(`/author/${blog.author.slug}`)}>
								<Avatar alt={blog.author.name} src={blog.author.avatar.url} />
								<Box>
									<Typography sx={{ fontWeight: 600 }}>{blog.author.name}</Typography>
									<Typography>{formatTimeAgo(new Date(blog.createdAt))} • {readingTime(blog.content.text)} min read</Typography>
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
			))}
		</Carousel>
	)
}

export default Slider