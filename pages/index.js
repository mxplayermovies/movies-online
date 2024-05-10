import liveData from '../public/live.json'
import movieData from '../public/movie.json'
import tvshowData from '../public/tvshow.json'
import adultData from '../public/adult.json'
import Head from 'next/head'
import ShareButtons from '@components/ShareButtons'
// import ExtensionInstallation from '@components/ExtensionInstallation';
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Script from 'next/script'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
// For example, in styles/globals.css
// import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  const [live, setlive] = useState(liveData)
  const [movie, setmovie] = useState(movieData)
  const [tvshow, settvshow] = useState(tvshowData)
  const [adult, setadult] = useState(adultData)
  const [flashing, setFlashing] = useState(true)

  const shareMessage =
    'Watch Now !!! Uwatchfree Online™ - For movie, TV Show & Sports!'

  useEffect(() => {
    // Flashing effect interval (toggle flashing state every 500ms)
    const interval = setInterval(() => {
      setFlashing(prevFlashing => !prevFlashing)
    }, 500)

    return () => {
      clearInterval(interval) // Clean up interval on component unmount
    }
  }, [])

  const uwatchfreeSchema = JSON.stringify([
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Uwatchfree Online',
      url: 'https://uwatchfreeonline.vercel.app/',
      image: [
        'https://uwatchfreeonline.vercel.app/wp-content/uploads/2023/05/favicon.ico'
      ],
      logo: {
        '@type': 'ImageObject',
        url: 'https://uwatchfreeonline.vercel.app/logo.png',
        width: 280,
        height: 80
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      url: 'https://uwatchfreeonline.vercel.app/',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate:
            'https://uwatchfreeonline.vercel.app/search?q={search_term_string}'
        },
        'query-input': 'required name=search_term_string'
      }
    }
  ])

  const rankMathSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://uwatchfreeonline.vercel.app/author/watchnewsonline/',
        name: 'Dr Trailer',
        url: 'https://uwatchfreeonline.vercel.app/author/watchnewsonline/',
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
        '@id': 'https://uwatchfreeonline.vercel.app/#organization',
        name: 'Uwatchfree Online™',
        url: 'https://uwatchfreeonline.vercel.app/'
      },
      {
        '@type': 'WebSite',
        '@id': 'https://uwatchfreeonline.vercel.app/#website',
        url: 'https://uwatchfreeonline.vercel.app/',
        name: 'Uwatchfree Online™',
        publisher: {
          '@type': 'Organization',
          '@id': 'https://uwatchfreeonline.vercel.app/#organization'
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://uwatchfreeonline.vercel.app/?s={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'WebPage',
        '@id': 'https://uwatchfreeonline.vercel.app/#webpage',
        url: 'https://uwatchfreeonline.vercel.app/',
        name: 'Movie',
        datePublished: '2024-01-13T13:00:00+00:00',
        dateModified: '2024-01-13T13:13:00+00:00',
        about: {
          '@type': 'Person',
          '@id': 'https://uwatchfreeonline.vercel.app/author/uwatchfreeonline/',
          name: 'Dr Trailer',
          url: 'https://uwatchfreeonline.vercel.app/author/uwatchfreeonline/',
          image: {
            '@type': 'ImageObject',
            '@id': 'https://gravatar.com/drtrailer2022',
            url: 'https://gravatar.com/drtrailer2022',
            caption: 'Dr Trailer',
            inLanguage: 'en-US'
          }
        },
        isPartOf: {
          '@id': 'https://uwatchfreeonline.vercel.app/#website'
        },
        inLanguage: 'en-US',
        mainEntity: [
          {
            '@type': 'Article',
            '@id': 'https://uwatchfreeonline.vercel.app/',
            url: 'https://uwatchfreeonline.vercel.app/',
            headline: 'Movie',
            datePublished: '2024-01-13T13:00:00+00:00',
            dateModified: '2024-01-13T13:13:00+00:00',
            author: {
              '@type': 'Person',
              '@id':
                'https://uwatchfreeonline.vercel.app/author/watchnewsonline/',
              name: 'Dr Trailer',
              url: 'https://uwatchfreeonline.vercel.app/author/watchnewsonline/',
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
              '@id': 'https://uwatchfreeonline.vercel.app/#organization',
              name: 'Uwatchfree Online™',
              url: 'https://uwatchfreeonline.vercel.app/'
            }
          }
        ]
        // "sameAs": ["https://www.your-social-media-profile1.com", "https://www.your-social-media-profile2.com"]
      }
    ]
  })

  return (
    <div className='w-full bg-black'>
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

      <div className='container mx-auto'>
        <Head>
          <title>
            {' '}
            Uwatchfree Online™ - For Movie, TV Show & Sports Live.{' '}
          </title>
          <link
            rel='sitemap'
            type='application/xml'
            title='Sitemap'
            href='https://uwatchfreeonline.vercel.app/sitemap.xml'
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
            content='uwatchfree, uwatchfree latest movie, free movie, films, free movie online, free movie online, online movie, watch online movie free sites, watch free movie online free, free online movie, watch movie online, watch online movie, watch movie free online, online watch movie, free new movie online, watch movie online free, movie 2 watch, free full movie, online movie watch, movie online watch, online movie for free, online watch movie, 2024 Latest movie, 2024 Latest movie online'
          />
          <meta
            name='description'
            content='Watch free movie, TV shows & Sports online on any device. We offer streaming on any Platform. Watch now !!!'
          />
          <link rel='canonical' href='https://uwatchfreeonline.vercel.app/' />
          <meta property='og:locale' content='en_US' />
          <meta property='og:type' content='website' />
          <meta
            property='og:title'
            content='Uwatchfree Online™ - For movie, TV Show & Sports Live.'
          />
          <meta
            property='og:description'
            content='Watch free movie, TV shows & Sports online on any device. We offer streaming on any Platform. Watch now !!!'
          />
          <meta
            property='og:url'
            content='https://uwatchfreeonline.vercel.app/'
          />
          <meta
            property='og:site_name'
            content='Uwatchfree Online™ - For movie, TV Show & Sports Live.'
          />
          <meta
            property='og:image'
            content='https://uwatchfreeonline.vercel.app/og_image.jpg'
          />
          <meta property='og:image:width' content='1280' />
          <meta property='og:image:height' content='720' />
          <meta property='og:image:type' content='image/webp' />
          <meta
            name='application-name'
            content='Uwatchfree Online™ - For movie, TV Show & Sports Live.'
          />
          <meta
            property='article:modified_time'
            content='2024-01-01T13:13:13+00:00'
          />
          <link
            rel='sitemap'
            type='application/xml'
            title='Sitemap'
            href='https://uwatchfreeonline.vercel.app/sitemap.xml'
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
          <meta name='monetag' content='5c1338da4436ca30815b74198d2dfe20' />
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: uwatchfreeSchema }}
          />
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: rankMathSchema }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            (function (w, d, s, id) {
              if (typeof (w.webpushr) !== 'undefined') return;
              w.webpushr = w.webpushr || function () { (w.webpushr.q = w.webpushr.q || []).push(arguments) };
              var js, fjs = d.getElementsByTagName(s)[0];
              js = d.createElement(s); js.id = id; js.async = 1;
              js.src = "https://cdn.webpushr.com/app.min.js";
              fjs.parentNode.appendChild(js);
            }(window, document, 'script', 'webpushr-jssdk'));

            webpushr('setup', { 'key': 'BE7nJtBNDdnHROheP35JwxbD_bYWc6Bl61DGE66CggOuCevUvW4LyjGVbUQAwj7ZKlYupLJAf13_G0OBQ_Ne7Eg' });
          `
            }}
          />
        </Head>
        {/* <ExtensionInstallation /> */}
        <ShareButtons
          title='Uwatchfree Online™'
          description='For movie, TV Show & Sports social platform'
          shareMessage={shareMessage}
        />
        <main className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          <h1
            className='text-center py-5 font-bold text-3xl'
            style={{ color: '#40D7BC', textShadow: '5px 5px 2px #000' }}
          >
             Uwatchfree Online™ - For Movie, TV Show & Sports Live.
          </h1>

          {/* <p
            className='text-center font-bold text-lg'
            style={{ color: '#40D7BC', textShadow: '5px 5px 2px #000' }}
          >
            " Uwatchfree Online™ - For Movie, TV Show & Sports Live." is a
            platform that provides access to a wide range of high-definition
            movie, TV shows & live streaming online. With this platform, users
            can enjoy a diverse selection of content spanning various genres,
            including action, drama, comedy, thriller, romance, and more.
          </p> */}

          <p
            className='text-center font-bold text-lg'
            style={{
              color: '#FF0000',
              textShadow: '5px 5px 2px #000',
              marginTop: '20px'
            }}
          >
            To enhance your experience on our website, please install the
            SquareX - Be Secure & Anonymous Chrome extension from the Chrome Web
            Store:
            <br />
            <a
              href='https://chrome.google.com/webstore/detail/squarex-be-secure-anonymo/kapjaoifikajdcdehfdlmojlepfpkpoe'
              className='text-center font-bold text-lg'
              style={{
                color: '#40D7BC',
                textShadow: '5px 5px 2px #000',
                marginTop: '20px'
              }}
              target='_blank'
              rel='noopener noreferrer'
            >
              Install SquareX
            </a>
          </p>

          <h3
            className='text-center font-bold text-3xl mt-8'
            style={{
              color: '#40D7BC',
              fontSize: '30px',
              textShadow: '5px 5px 2px #000'
            }}
          >
            LATEST MOVIES
          </h3>

          <div className='category-container'>
            <div className='card-container'>
              {movie.map(movieItem => (
                <div key={movieItem.id} className='card'>
                  <a href={`/movie/${movieItem.id}`}>
                    <div className='relative'>
                      <Image
                        src={movieItem.backimage}
                        alt={movieItem.title}
                        width={1280}
                        height={720}
                        layout='responsive'
                        objectFit='cover'
                        loading='lazy'
                        className='rounded-lg'
                        style={{
                          filter:
                            'contrast(1.2) saturate(1.5) brightness(1.4) hue-rotate(0deg)'
                        }}
                      />
                      {/* <div className='badge'>{movieItem.badge}</div> */}
                    </div>
                    <h2
                      className='text-lg font-semibold mt-2'
                      style={{ color: '#40D7BC' }}
                    >
                      {movieItem.name}
                    </h2>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <h3
            className='text-center font-bold text-3xl mt-8'
            style={{
              color: '#40D7BC',
              fontSize: '30px',
              textShadow: '5px 5px 2px #000'
            }}
          >
            LATEST TV SHOW
          </h3>

          <div className='category-container'>
            <div className='card-container'>
              {tvshow.map(tvshowItem => (
                <div key={tvshowItem.id} className='card'>
                  <a href={`/tvshow/${tvshowItem.id}`}>
                    <div className='relative'>
                      <Image
                        src={tvshowItem.backimage}
                        alt={tvshowItem.title}
                        width={1280}
                        height={720}
                        layout='responsive'
                        objectFit='cover'
                        loading='lazy'
                        className='rounded-lg'
                        style={{
                          filter:
                            'contrast(1.2) saturate(1.5) brightness(1.4) hue-rotate(0deg)'
                        }}
                      />
                      {/* <div className='badge'>{tvshowItem.badge}</div> */}
                    </div>
                    <h2
                      className='text-lg font-semibold mt-2'
                      style={{ color: '#40D7BC' }}
                    >
                      {tvshowItem.name}
                    </h2>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <h3
            className='text-center font-bold text-3xl mt-8'
            style={{
              color: '#40D7BC',
              fontSize: '30px',
              textShadow: '5px 5px 2px #000'
            }}
          >
            LATEST LIVE SHOWS
          </h3>
          <h3
            className='text-center font-bold text-3xl mt-8'
            style={{
              color: '#40D7BC',
              fontSize: '20px',
              textShadow: '5px 5px 2px #000'
            }}
          >
            Wednesday 08th May 2024 - Schedule Time UK GMT+5
          </h3>
          <div className='category-container'>
            <div className='card-container'>
              {live.map(liveItem => (
                <div key={liveItem.id} className='card'>
                  <a href={`/live/${liveItem.id}`}>
                    <div className='relative'>
                      <Image
                        src={liveItem.backimage}
                        alt={liveItem.title}
                        width={1280}
                        height={720}
                        layout='responsive'
                        objectFit='cover'
                        loading='lazy'
                        className='rounded-lg'
                        style={{
                          filter:
                            'contrast(1.2) saturate(1.5) brightness(1.4) hue-rotate(0deg)'
                        }}
                      />
                      {/* <div className='badge'>{liveItem.badge}</div> */}
                    </div>
                    <h2
                      className='text-lg font-semibold mt-2'
                      style={{ color: '#40D7BC' }}
                    >
                      {liveItem.name}
                    </h2>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <h3
            className='text-center font-bold text-3xl mt-8'
            style={{
              color: '#40D7BC',
              fontSize: '30px',
              textShadow: '5px 5px 2px #000'
            }}
          >
            LATEST ADULT MOVIE
          </h3>

          <div className='category-container'>
            <div className='card-container'>
              {adult.map(adultItem => (
                <div key={adultItem.id} className='card'>
                  <a href={`/adult/${adultItem.id}`}>
                    <div className='relative'>
                      <Image
                        src={adultItem.backimage}
                        alt={adultItem.title}
                        width={1280}
                        height={720}
                        layout='responsive'
                        objectFit='cover'
                        loading='lazy'
                        className='rounded-lg'
                        style={{
                          filter:
                            'contrast(1.2) saturate(1.5) brightness(1.4) hue-rotate(0deg)'
                        }}
                      />
                      {/* <div className='badge'>{adultItem.badge}</div> */}
                    </div>
                    <h2
                      className='text-lg font-semibold mt-2'
                      style={{ color: '#40D7BC' }}
                    >
                      {adultItem.name}
                    </h2>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <style jsx>{`
            /* Global styles */
            body {
              font-family: 'Poppins', sans-serif;
              font-weight: 400;
              margin: 0;
              padding: 0;
              background-color: #f8f9fa;
            }

            .max-w-screen-xl {
              max-width: 1280px;
            }

            .py-8 {
              padding-top: 2rem;
              padding-bottom: 2rem;
            }

            .text-center {
              text-align: center;
            }

            .font-bold {
              font-weight: bold;
            }

            .text-3xl {
              font-size: 1.875rem; /* 30px */
            }

            .text-lg {
              font-size: 1.125rem; /* 18px */
            }

            .text-white {
              color: #fff;
            }

            .rounded-lg {
              border-radius: 0.5rem;
            }

            .category-container {
              margin-top: 2.5rem;
            }

            .card-container {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              gap: 1.25rem; /* 20px */
            }

            .card {
              width: 100%; /* Card width will automatically adapt */
              max-width: 300px; /* Limit max width for larger screens */
              border: 1px solid #ccc;
              border-radius: 0.5rem;
              overflow: hidden;
            }

            .relative {
              position: relative;
            }

            .badge {
              position: absolute;
              top: 0.625rem; /* 10px */
              right: 0.625rem; /* 10px */
              background-color: rgba(0, 0, 0, 0.4);
              color: #40d7bc;
              padding: 0.3125rem 0.625rem; /* 5px 10px */
              border-radius: 0.3125rem; /* 5px */
              font-weight: bold;
            }
          `}</style>
        </main>
      </div>
    </div>
  )
}

export default HomePage
