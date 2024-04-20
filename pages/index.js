import moviesData from '../public/movies.json';
import Head from 'next/head';
import ShareButtons from '@components/ShareButtons';
import { useState } from 'react';
import Script from 'next/script';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const HomePage = () => {
  const [movies, setMovies] = useState(moviesData);

  const rankMathSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://watchonlinemovies.vercel.app/author/watchmoviesonline/',
        name: 'Dr Trailer',
        url: 'https://watchonlinemovies.vercel.app/author/watchmoviesonline/',
        image: {
          '@type': 'ImageObject',
          '@id': 'https://gravatar.com/drtrailer2022',
          url: 'https://gravatar.com/drtrailer2022',
          caption: 'Dr Trailer',
          inLanguage: 'en-US'
        }
      },
      {
        '@type': 'Organization',
        '@id': 'https://watchonlinemovies.vercel.app/#organization',
        name: 'Watch Movies Online™',
        url: 'https://watchonlinemovies.vercel.app'
      },
      {
        '@type': 'WebSite',
        '@id': 'https://watchonlinemovies.vercel.app/#website',
        url: 'https://watchonlinemovies.vercel.app',
        name: 'Watch Movies Online™',
        publisher: {
          '@type': 'Organization',
          '@id': 'https://watchonlinemovies.vercel.app/#organization'
        },
        potentialAction: {
          '@type': 'SearchAction',
          target:
            'https://watchonlinemovies.vercel.app/?s={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'WebPage',
        '@id': 'https://watchonlinemovies.vercel.app/#webpage',
        url: 'https://watchonlinemovies.vercel.app/',
        name: 'Movie',
        datePublished: '2024-01-13T13:00:00+00:00',
        dateModified: '2024-01-13T13:13:00+00:00',
        about: {
          '@type': 'Person',
          '@id':
            'https://watchonlinemovies.vercel.app/author/watchmoviesonline/',
          name: 'Dr Trailer',
          url: 'https://watchonlinemovies.vercel.app/author/watchmoviesonline/',
          image: {
            '@type': 'ImageObject',
            '@id': 'https://gravatar.com/drtrailer2022',
            url: 'https://gravatar.com/drtrailer2022',
            caption: 'Dr Trailer',
            inLanguage: 'en-US'
          }
        },
        isPartOf: {
          '@id': 'https://watchonlinemovies.vercel.app/#website'
        },
        inLanguage: 'en-US',
        mainEntity: [
          {
            '@type': 'Article',
            '@id': 'https://watchonlinemovies.vercel.app/',
            url: 'https://watchonlinemovies.vercel.app/',
            headline: 'Movie',
            datePublished: '2024-01-13T13:00:00+00:00',
            dateModified: '2024-01-13T13:13:00+00:00',
            author: {
              '@type': 'Person',
              '@id':
                'https://watchonlinemovies.vercel.app/author/watchmoviesonline/',
              name: 'Dr Trailer',
              url: 'https://watchonlinemovies.vercel.app/author/watchmoviesonline/',
              image: {
                '@type': 'ImageObject',
                '@id': 'https://gravatar.com/drtrailer2022',
                url: 'https://gravatar.com/drtrailer2022',
                caption: 'Dr Trailer',
                inLanguage: 'en-US'
              }
            },
            publisher: {
              '@type': 'Organization',
              '@id': 'https://watchonlinemovies.vercel.app/#organization',
              name: 'Watch Movies Online™',
              url: 'https://watchonlinemovies.vercel.app'
            }
          }
        ]
        // "sameAs": ["https://www.your-social-media-profile1.com", "https://www.your-social-media-profile2.com"]
      }
    ]
  });
 

  return (
    <div className="w-full bg-gray-600 shadow">
      <Script
        src='https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js'
        strategy='beforeInteractive'
      />
      <Script
        src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js'
        strategy='beforeInteractive'
      />
      <Script
        src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js'
        strategy='beforeInteractive'
      />

      <div className="container mx-auto">
      <Head>
          <title>
            {' '}
            Watch Movies Online™ - Top Movie & TV Show Platform HD{' '}
          </title>
          <link
            rel='sitemap'
            type='application/xml'
            title='Sitemap'
            href='https://watchonlinemovies.vercel.app/sitemap.xml'
          />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
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
            content='Watch Movies Online™ - Top Movie & TV Show Platform HD'
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
            content='Watch Movies Online™ - Top Movie & TV Show Platform HD'
          />
          <meta
            property='og:image'
            content='https://watchonlinemovies.vercel.app/og_image.jpg'
            style={{ borderRadius: '10%' }}
          />
          <meta property='og:image:width' content='1280' />
          <meta property='og:image:height' content='720' />
          <meta property='og:image:type' content='image/webp' />
          <meta name='application-name' content='Watch Movies Online™ - Top Movie & TV Show Platform HD' />
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
       <meta name="monetag" content="5c1338da4436ca30815b74198d2dfe20" />
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: rankMathSchema }}
          />
        </Head>


        <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="py-8">
            <ShareButtons
              url='https://watchonlinemovies.vercel.app'
              title='The Best Movies Platform HD Movies'
              image='https://watchonlinemovies.vercel.app/og_image.jpg'
              style={{ marginBottom: '20px' }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Display images in a grid */}
            {movies.map((movie) => (
              <div key={movie.id} className="flex flex-col justify-between">
                <a href={`/movie/${movie.id}`}>
                  <div className="relative">
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="w-full h-auto rounded-md filter contrast-110 saturate-120 brightness-130 hue-rotate-0"
                      loading='lazy'
                    />
                     <div
                            style={{
                              position: 'absolute',
                              top: '10px',
                              right: '10px',
                              backgroundColor: 'rgba(0, 0, 0, 0.5)',
                              fontWeight: 'bold',
                              color: '#fff',
                              padding: '5px',
                              borderRadius: '5px'
                            }}
                          >
                            {movie.badge}
                          </div>
                          <div
                              style={{
                                position: 'absolute',
                                bottom: '10px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                fontWeight: 'bold',
                                color: '#fff',
                                padding: '5px',
                                borderRadius: '5px',
                                fontSize: '16px',
                                textShadow: '3px 3px 3px #40D7BC'
                              }}
                            >
                              {movie.genre}
                            </div>
                  </div>
                </a>
                {/* <h2 className="text-center text-xl mt-2">{movie.title}</h2> */}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
