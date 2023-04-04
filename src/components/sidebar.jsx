import { Box, Button, Typography, Avatar, Divider } from "@mui/material"
import Image from "next/image";
import { useRouter } from 'next/router';
import { formatTimeAgo, readingTime } from '../constants/constant';



const Sidebar = ({latestBlogs, categories}) => {
	const router = useRouter()

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: { xs: '100%', md: '40%' } }}>
            <Box sx={{position: 'sticky', top: '80px'}}>
                <Box sx={{ display: 'flex', flexDirection: 'column', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px', padding: '20px', borderRadius: '10px' }}>
                    <Typography sx={{ fontSize: '22px', fontWeight: '700' }}>Latest Blogs</Typography>
                    {latestBlogs?.map((latestBlog, idx) => (
                        <Box key={idx} sx={{ display: 'flex', gap: '10px', marginTop: '20px', borderRadius: '8px', padding: '8px', boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px'}}>
                            <Box sx={{position: 'relative', width: '100px', height: '100px', cursor: 'pointer'}} onClick={()=> router.push(`/blog/${latestBlog.slug}`)}>
                                <Image fill alt={latestBlog.title} src={latestBlog.image.url} style={{objectFit: 'cover'}}/>
                            </Box>
                            <Box sx={{padding: '15px 0 5px 0',display: 'flex', flexDirection: 'column', justifyContent: 'space-between',}}>
                                <Typography sx={{fontWeight: 600, cursor: 'pointer'}} onClick={()=> router.push(`/blog/${latestBlog.slug}`)}>{latestBlog.title.slice(0, 30)}</Typography>
                                <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'row', cursor: 'pointer'}} onClick={()=> router.push(`/author/${latestBlog.author.slug}`)}>
                                    <Avatar alt={latestBlog.author.name} src={latestBlog.author.avatar.url} />
                                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                        <Typography sx={{fontWeight: 600}}>{latestBlog.author.name}</Typography>
                                        <Typography>{formatTimeAgo(new Date(latestBlog.createdAt))}</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px', marginTop: '15px', padding: '20px', borderRadius: '10px' }}>
                    <Typography sx={{ fontSize: '22px', fontWeight: '700' }}>Categories</Typography>
                    {categories?.map((category, idx) => (
                        <Button key={idx} sx={{justifyContent: 'flex-start'}} onClick={()=> router.push(`/category/${category.slug}`)}>{category.label}</Button>
                    ))}
                </Box>
            </Box>
        </Box >
    )
}

export default Sidebar