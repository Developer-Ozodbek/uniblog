import Link from 'next/link';
import Layout from "../components/layout"
import { Box, Button, Typography } from "@mui/material"
import SEO from "../seo/seo"

const NotFoundPage = () => {
    return (
    <SEO title={'404 page not found'}>
        <Layout>
            <Box sx={{width: '100%', height: '85.7vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Typography sx={{fontWeight: 800, fontSize: '48px', textAlign: 'center'}}>404 - Page Not Found</Typography>
            </Box>
        </Layout>
    </SEO>
  );
};

export default NotFoundPage;