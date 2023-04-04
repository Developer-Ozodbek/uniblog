import Head from 'next/head'
import {defaultSEO} from '../constants/constant'

const SEO = ({title = defaultSEO.title, description = defaultSEO.description, keywords = defaultSEO.keywords, author = defaultSEO.author, favicon = "/unicorn.png", children}) => {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <link rel="shortcut icon" href={favicon} type="image/x-icon" />
        </Head>
        {children}
    </>
  );
};

export default SEO;