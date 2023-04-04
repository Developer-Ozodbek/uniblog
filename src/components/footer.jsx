import { Box, Typography } from '@mui/material';
import Telegram from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <Box sx={{flexDirection: {xs: 'column', sm: 'row'}}} className='footer'>
        <Typography sx={{color: '#fff', textAlign: 'center'}}>© 2023 UniBlog. Barcha huquqlar himoyalangan</Typography>
      <Box sx={{display: 'flex', gap: '20px'}}>
        <Telegram sx={{color: '#fff'}}/>
        <YouTubeIcon sx={{color: '#fff'}}/>
        <GitHubIcon sx={{color: '#fff'}}/>
      </Box>
    </Box>
  )
}

export default Footer