import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        
        <Head>
          
          <link
            rel='sitemap'
            type='application/xml'
            title='Sitemap'
            href='https://watchonlinemovies.vercel.app/sitemap.xml'
          />
        
          <link
            rel='icon'
            type='image/x-icon'
            href='wp-content/uploads/2023/05/favicon.ico'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />
          <link rel='manifest' href='/site.webmanifest' />
          <meta name='googlebot' content='index,follow' />
          <meta name='revisit-after' content='1 days' />
          <meta
            name='robots'
            content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
          />
          <meta
            name='keywords'
            content='movies, watch movie online, free movies, free movies online, free movie streaming, watch movies online free streaming, download free'
          />
          <meta
            name='description'
            content='Watch free movies and TV shows online in HD on any device. We offer streaming movies in genres like Action, Horror, Sci-Fi, Crime and Comedy. Watch now !!!'
          />
          <link rel='canonical' href='https://watchonlinemovies.vercel.app/' />
          <meta property='og:locale' content='en_US' />
          <meta property='og:type' content='website' />
          <meta
            property='og:title'
            content='Watch Movies Online™ - Free Download Movies HD Platform'
          />
          <meta
            property='og:description'
            content='Watch free movies and TV shows online in HD on any device. We offer streaming movies in genres like Action, Horror, Sci-Fi, Crime and Comedy. Watch now !!!'
          />
          <meta
            property='og:url'
            content='https://watchonlinemovies.vercel.app/'
          />
          <meta
            property='og:site_name'
            content='Watch Movies Online™ - Free Download Movies HD Platform'
          />
          <meta
            property='og:image'
            content='https://watchonlinemovies.vercel.app/og_image.jpg'
            style={{ borderRadius: '10%' }}
          />
          <meta property='og:image:width' content='1280' />
          <meta property='og:image:height' content='720' />
          <meta property='og:image:type' content='image/webp' />
          <meta name='application-name' content='Watch Movies Online™ - Free Download Movies HD Platform' />
          <meta property="article:publisher" content="https://www.facebook.com/watchonlinemovies.vercel.app" />
          <meta
            property='article:modified_time'
            content='2024-01-01T13:13:13+00:00'
          />
          <link
            rel='sitemap'
            type='application/xml'
            title='Sitemap'
            href='https://watchonlinemovies.vercel.app/sitemap.xml'
          />
          <meta name='twitter:card' content='summary_large_image' />
          <meta
            name='google-site-verification'
            content='4dFu4PUk1pc1IYqU6Brt84akCwNxaoUpKSO3gDW0kJ0'
          />
          <meta
            name='facebook-domain-verification'
            content='du918bycikmo1jw78wcl9ih6ziphd7'
          />
          <meta
            name='dailymotion-domain-verification'
            content='dm0zffs8dj8pcb3gd'
          />
          <meta name='monetag' content='d37258c385441961edc42bec3fb9b7e8' />
       
        </Head>
       
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
