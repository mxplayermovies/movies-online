import React from 'react'
import Head from 'next/head'
import Script from 'next/script';



const Privacy = () => {


  const rankMathSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://gravatar.com/drtrailer2022',
        name: 'Dr Trailer',
        url: 'https://gravatar.com/drtrailer2022',
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
        '@id': 'https://soap2dayhd.vercel.app/#organization',
        name: 'Soap2Day HD™ - Online. Stream. Download.',
        url: 'https://soap2dayhd.vercel.app'
      },
      {
        '@type': 'WebSite',
        '@id': 'https://soap2dayhd.vercel.app/#website',
        url: 'https://soap2dayhd.vercel.app',
        name: 'Soap2Day HD™ - Online. Stream. Download.',
        publisher: {
          '@type': 'Organization',
          '@id': 'https://soap2dayhd.vercel.app/#organization'
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://soap2dayhd.vercel.app/?s={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'WebPage',
        '@id': 'https://soap2dayhd.vercel.app/#webpage',
        url: 'https://soap2dayhd.vercel.app/',
        name: 'Movie',
        datePublished: '2024-01-13T13:00:00+00:00',
        dateModified: '2024-01-13T13:13:00+00:00',
        about: {
          '@type': 'Person',
          '@id': 'https://gravatar.com/drtrailer2022',
          name: 'Dr Trailer',
          url: 'https://gravatar.com/drtrailer2022',
          image: {
            '@type': 'ImageObject',
            '@id': 'https://gravatar.com/drtrailer2022',
            url: 'https://gravatar.com/drtrailer2022',
            caption: 'Dr Trailer',
            inLanguage: 'en-US'
          }
        },
        isPartOf: {
          '@id': 'https://soap2dayhd.vercel.app/#website'
        },
        inLanguage: 'en-US',
        mainEntity: [
          {
            '@type': 'Article',
            '@id': 'https://soap2dayhd.vercel.app/',
            url: 'https://soap2dayhd.vercel.app/',
            headline: 'Movie',
            datePublished: '2024-01-13T13:00:00+00:00',
            dateModified: '2024-01-13T13:13:00+00:00',
            author: {
              '@type': 'Person',
              '@id': 'https://gravatar.com/drtrailer2022',
              name: 'Dr Trailer',
              url: 'https://gravatar.com/drtrailer2022',
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
              '@id': 'https://soap2dayhd.vercel.app/#organization',
              name: 'Soap2Day HD™ - Online. Stream. Download.',
              url: 'https://soap2dayhd.vercel.app'
            }
          },
          {
            '@type': 'Article',
            '@id': 'https://soap2dayhd.vercel.app/',
            url: 'https://soap2dayhd.vercel.app/',
            headline: 'Tvshow',
            datePublished: '2024-01-13T13:00:00+00:00',
            dateModified: '2024-01-13T13:13:00+00:00',
            author: {
              '@type': 'Person',
              '@id': 'https://gravatar.com/drtrailer2022',
              name: 'Dr Trailer',
              url: 'https://gravatar.com/drtrailer2022',
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
              '@id': 'https://soap2dayhd.vercel.app/#organization',
              name: 'Soap2Day HD™ - Online. Stream. Download.',
              url: 'https://soap2dayhd.vercel.app'
            }
          },
          {
            '@type': 'Article',
            '@id': 'https://soap2dayhd.vercel.app/',
            url: 'https://soap2dayhd.vercel.app/',
            headline: 'Adult',
            datePublished: '2024-01-13T13:00:00+00:00',
            dateModified: '2024-01-13T13:13:00+00:00',
            author: {
              '@type': 'Person',
              '@id': 'https://gravatar.com/drtrailer2022',
              name: 'Dr Trailer',
              url: 'https://gravatar.com/drtrailer2022',
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
              '@id': 'https://soap2dayhd.vercel.app/#organization',
              name: 'Soap2Day HD™ - Online. Stream. Download.',
              url: 'https://soap2dayhd.vercel.app'
            }
          }
        ]
      }
    ]
  })
  


  return (
    <div>
       <Head>
        <title>Soap2Day HD™ | Privacy Policy</title>
      
        <link
            rel='sitemap'
            type='application/xml'
            title='Sitemap'
            href='https://soap2dayhd.vercel.app/sitemap.xml'
          />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <link
            rel='icon'
            type='image/x-icon'
            href='/favicon.ico'
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
           content="soap2day, soap2dayto, soap2days, soap2day apk, soap2day hd, soap2day id, soap2day rs, soap2day movies, official soap2day, soap2day free, Soap2Day HD, movies online, watch movies online, watch movies free, 123movies, gomovies, putlocker, putlockers, hdtoday"
          />
          <meta
          property='description'
          content='Soap2Day HD™ - Stream HD movies and TV series for free on Soap2Day HD Online. Online. Stream. Download. full-length movies and shows in HD quality without registration.'
        />

          <link rel='canonical' href='https://soap2dayhd.vercel.app/intro/privacy' />
          <meta property='og:locale' content='en_US' />
          <meta property='og:type' content='website' />
          <meta
            property='og:title'
            content='Soap2Day HD™ '
          />
          <meta
            property='og:description'
            content='Soap2Day HD™ - Stream HD movies and TV series for free on Soap2Day HD Online. Online. Stream. Download. full-length movies and shows in HD quality without registration.'
          />
          <meta property='og:url' content='https://soap2dayhd.vercel.app/intro/privacy/' />
          <meta
            property='og:site_name'
            content='Soap2Day HD™ '
          />
          <meta
            property='og:image'
            content='https://soap2dayhd.vercel.app/og_image.jpg'
          />
          <meta property='og:image:width' content='1280' />
          <meta property='og:image:height' content='720' />
          <meta property='og:image:type' content='image/jpg' />
          <meta
            name='application-name'
            content='Soap2Day HD™ '
          />
          <meta
            property='article:modified_time'
            content='2024-01-01T13:13:13+00:00'
          />
          <link
            rel='sitemap'
            type='application/xml'
            title='Sitemap'
            href='https://soap2dayhd.vercel.app/sitemap.xml'
          />
          <meta name='twitter:card' content='summary_large_image' />
          <meta
            name='google-site-verification'
            content=''
          />
          <meta
            name='facebook-domain-verification'
            content='du918bycikmo1jw78wcl9ih6ziphd7'
          />
          <meta
            name='dailymotion-domain-verification'
            content='dmdzuqt3p027t2adn'
          />
          <meta name='monetag' content='35a75bbdeae678c82776e64fb78cdac5' />
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: rankMathSchema }}
          />
       
        </Head>
       
   
   
         <div className="container my-24 px-6 mx-auto">
         <a
            href='https://t.me/watchmovietvshow/'
            target='_blank'
            rel='noopener noreferrer'
            className='telegram-link'
          >
            <h3>
              For Request or Demand Movies & TV Series Join Telegram
              <i className='fab fa-telegram telegram-icon'></i>
            </h3>
          </a>

<section className="mb-32 text-gray-800">
  <div className="flex flex-wrap">
    <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full  px-3 lg:px-6">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="font-bold mb-2">Soap2Day HD™ </p>
      <p className="text-gray-500 mb-6">
      Soap2Day HD™ International(Soap2Day HD™) is committed to protecting your privacy. This Privacy Policy applies only to the Web Sites and applications published by Soap2Day HD™ International.
      </p>
      <p className="font-bold mb-2">Note: Use of Information</p>
      <p className="text-gray-500 mb-6">
      Information that we collect  </p>
      <p className="text-gray-500 mb-6">
      Soap2Day HD™ may collect information from its users in three different ways: directly from the user, from traffic references of hostingservers and from cookies.
      </p>
      <p className="font-bold mb-2">We use the information we collect to:</p>
      <p className="text-gray-500 mb-6">
     1. Provide the services you request. </p>
      <p className="text-gray-500 mb-6">
     2. As otherwise described to you at the point of collection or with your consent.  
      </p>
      <p className="font-bold mb-2">
      Changes to This Privacy Policy
      </p>
      <p className="text-gray-500 mb-6">
      We may update this Privacy Policy to reflect changes in our practices and service offerings. If we modify our Privacy Policy, we will update the "Effective Date" and such changes will be effective upon posting.
      </p>

     
      <p className="text-gray-500">
      We do not make warranties that this site will operate error free. If you see an error, please contact the <a className="font-bold text-blue-500 mb-6" href="mailto:drtrailer2022@gmail.com ">webmaster</a>. By entering this site you agree to hold the owners, employees, advertisers of Soap2Day HD™  free from any and all liability.This site (Soap2Day HD™ ) do not offer any membership.If you have any questions please feel free to <a className="font-bold text-blue-500 mb-6" href="mailto:drtrailer2022@gmail.com.com">contact us</a>.
      </p>
    </div>

  </div>
</section>

      </div>
    </div>
  )
}

export default Privacy