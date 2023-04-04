import {Box} from '@mui/material'
import Footer from './footer'
import Navbar from './navbar'

const Layout = ({children}) => {
  return (
    <Box>
        <Navbar />
        {children}
        <Footer />
    </Box>
  )
}

export default Layout