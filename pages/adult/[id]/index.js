import { useRouter } from 'next/router'
import adultsData from '../../../public/adult.json'
import { useEffect, useState, useRef } from 'react'
import Styles from '@styles/video-player.module.css'
import Head from 'next/head'
import Image from 'next/image'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import HomeStyles from '@styles/styles.module.css'
import ShareButtons from '@components/ShareButtons'
import Rating from '@components/Rating'
import TrendingMovies from '@components/TrendingMovies'
import AdultSkipAds from '@components/AdultSkipAds'
import Max from '@components/Max'
import Script from 'next/script'

const adultDetail = ({ adult }) => {
  const router = useRouter()
  const { id } = router.query

  const [showPopup, setShowPopup] = useState(false)
  const [messageShown, setMessageShown] = useState(false) // Define messageShown state
  const [showPopup1, setShowPopup1] = useState(false)
  const [showPopup2, setShowPopup2] = useState(false)
  const [showPopup3, setShowPopup3] = useState(false)
  const [showPopupTrailer, setShowPopupTrailer] = useState(false)

  const shareMessage = 'Watch Now !!! Uwatchfree Online™ - For Movies, TV Show & Sports!';
  
  const togglePopup = () => {
    setShowPopup(!showPopup)
  }

  const togglePopup1 = () => {
    setShowPopup1(!showPopup1)
  }

  const togglePopup2 = () => {
    setShowPopup2(!showPopup2)
  }

  const togglePopup3 = () => {
    setShowPopup3(!showPopup3)
  }

  const togglePopupTrailer = () => {
    setShowPopupTrailer(!showPopupTrailer)
  }

  const [adultadults, setAdultadults] = useState([])

  useEffect(() => {
    // Filter adult adults from the adultsData
    const filteredadults = adultsData.filter(adult => adult.group === 'adult')
    setAdultadults(filteredadults)
  }, [])

  const audioIframeRef = useRef(null)
  const predefinedEqualizationValue = 70
  const predefinedNoiseReductionValue = 40
  const audioSourceQuality = 'high'
  const enableNoiseCancellation = true

  useEffect(() => {
    const autoAdjustSoundEnhancements = () => {
      const iframeWindow = audioIframeRef.current.contentWindow

      if (iframeWindow && iframeWindow.postMessage) {
        iframeWindow.postMessage(
          {
            command: 'autoAdjustSoundEnhancements',
            equalizationValue: predefinedEqualizationValue,
            noiseReductionValue: predefinedNoiseReductionValue,
            audioSourceQuality: audioSourceQuality
          },
          '*'
        )
      }
    }

    const loadAudioProcessing = () => {
      autoAdjustSoundEnhancements()

      const iframeAudioElement =
        audioIframeRef.current.contentDocument.getElementById('audioPlayer')

      const iframeAudioContext = new (window.AudioContext ||
        window.webkitAudioContext)()
      const sourceNode =
        iframeAudioContext.createMediaElementSource(iframeAudioElement)

      // Noise cancellation processing
      if (enableNoiseCancellation) {
        const noiseCancellationNode = iframeAudioContext.createBiquadFilter()
        noiseCancellationNode.type = 'highpass' // Using high-pass filter for noise cancellation
        noiseCancellationNode.frequency.value = 2000 // Adjust the cutoff frequency as needed (example: 2000 Hz)
        sourceNode.connect(noiseCancellationNode)
        noiseCancellationNode.connect(iframeAudioContext.destination)
      }

      // Load and apply the impulse response (Mills Greek Theater)
      fetch(
        '../wp-content/themes/website/assets/274600-Future-Wave-Rise-01.wav'
      ) // Update with the actual file path
        .then(response => response.arrayBuffer())
        .then(buffer => iframeAudioContext.decodeAudioData(buffer))
        .then(audioBuffer => {
          const convolverNode = iframeAudioContext.createConvolver()
          convolverNode.buffer = audioBuffer
          sourceNode.connect(convolverNode)
          convolverNode.connect(iframeAudioContext.destination)
        })
        .catch(error => console.error('Error loading impulse response:', error))
    }

    if (audioIframeRef.current) {
      audioIframeRef.current.addEventListener('load', loadAudioProcessing)
    }

    return () => {
      if (audioIframeRef.current) {
        audioIframeRef.current.removeEventListener('load', loadAudioProcessing)
      }
    }
  }, [adult, enableNoiseCancellation])

  const loadVideo = (videoPage, contentType, server) => {
    const videoIframe = document.getElementById('videoIframe')

    const userResponse = confirm(
      `Do you want to load ${
        contentType === 'adult' ? 'TV Show Episode' : 'adult'
      } from Server ${server}?`
    )

    if (userResponse) {
      // If the user clicks "OK"
      if (!messageShown) {
        // Display a message (only if it hasn't been shown before)
        alert(
          `Loading ${
            contentType === 'adult' ? 'TV Show Episode' : 'adult'
          } - Selected Server ${server}`
        )
        setMessageShown(true) // Update messageShown state
      }

      // Set the new source after a short delay
      setTimeout(() => {
        videoIframe.src = videoPage
      }, 30) // Adjust the delay as needed
    } else {
      // If the user clicks "Cancel"
      alert('Video loading canceled.')
    }
  }

  const uwatchfreeSchema = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Watch Online Movies",
      "url": "https://watchonlinemovies.vercel.app/",
      "image": ["https://watchonlinemovies.vercel.app/wp-content/uploads/2023/05/favicon.ico"],
      "logo": {
        "@type": "ImageObject",
        "url": "https://watchonlinemovies.vercel.app/logo.png",
        "width": 280,
        "height": 80
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://uwatchfreeonline.vercel.app/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://uwatchfreeonline.vercel.app/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    }
  ]);

  const rankMathSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Person', 'Organization'],
        '@id': 'https://gravatar.com/drtrailer2022/#person',
        name: 'Dr Trailer'
      },
      {
        '@type': 'WebSite',
        '@id': 'https://watchonlineadults.vercel.app/#website',
        url: 'https://watchonlineadults.vercel.app/',
        name: 'Uwatchfree Online™',
        publisher: {
          '@id': 'https://gravatar.com/drtrailer2022/#person'
        },
        inLanguage: 'en-US'
      },
      {
        '@type': 'WebPage',
        '@id': `/${adult['adult.watch']}#webpage`,
        url: `/${adult['adult.watch']}`,
        name: `${adult.title} | Uwatchfree Online™`,
        datePublished: '2024-01-13T13:00:00+00:00',
        dateModified: '2024-01-13T13:13:00+00:00',
        isPartOf: {
          '@id': 'https://watchonlineadults.vercel.app/#website'
        },
        inLanguage: 'en-US'
      },
      {
        '@type': 'Person',
        '@id': 'https://watchonlineadults.vercel.app/author/watchadultsonline/',
        name: 'Dr Trailer',
        url: 'https://watchonlineadults.vercel.app/author/watchadultsonline/',
        image: {
          '@type': 'ImageObject',
          '@id': 'https://gravatar.com/drtrailer2022',
          url: 'https://gravatar.com/drtrailer2022',
          caption: 'Dr Trailer',
          inLanguage: 'en-US'
        },
        sameAs: ['https://watchonlineadults.vercel.app/']
      },
      {
        '@type': 'Article',
        '@id': `/${adult['adult.watch']}#article`,
        headline: `Watch ${adult.title} | Uwatchfree Online™`,
        datePublished: '2024-01-13T13:00:00+00:00',
        dateModified: '2024-01-13T13:13:00+00:00',
        articleSection: 'Adult',
        author: {
          '@id': 'https://watchonlineadults.vercel.app/author/watchadultsonline/'
        },
        publisher: {
          '@id': 'https://gravatar.com/drtrailer2022/#person'
        },
        description: `Watch free Movies, TV shows & Sports online on any device. We offer streaming on any Platform. Watch now !!!`,
        image: adult.image,
        name: `Watch ${adult.title} | Uwatchfree Online™`,
        isPartOf: {
          '@id': `/${adult['adult.watch']}#webpage`
        },
        inLanguage: 'en-US',
        mainEntityOfPage: {
          '@id': `/${adult['adult.watch']}#webpage`
        }
      },
      {
        '@type': 'BlogPosting',
        '@id': `/${adult['adult.watch']}#blogPost`,
        headline: `Watch ${adult.title} | Uwatchfree Online™`,
        datePublished: '2024-01-13T13:00:00+00:00',
        dateModified: '2024-01-13T13:13:00+00:00',
        articleSection: 'Adult',
        author: {
          '@id': 'https://watchonlineadults.vercel.app/author/watchadultsonline/'
        },
        publisher: {
          '@id': 'https://gravatar.com/drtrailer2022/#person'
        },
        description: `Watch free Movies, TV shows & Sports online on any device. We offer streaming on any Platform. Watch now !!!`,
        image: adult.image,
        name: `Watch ${adult.title} | Uwatchfree Online™`,
        '@id': `/${adult['adult.watch']}#richSnippet`,
        isPartOf: {
          '@id': `/${adult['adult.watch']}#webpage`
        },
        inLanguage: 'en-US',
        mainEntityOfPage: {
          '@id': `/${adult['adult.watch']}#webpage`
        }
      }
    ]
  });
  
  const ldJsonData = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Movie',
    '@id': `${adult['adult.url']}`,
    name: adult.title,
    url: `/${adult['adult.watch']}`,
    description: adult.synopsis,
    image: adult.poster,
    genre: adult.genre,
    datePublished: adult.startDate,
    director: {
      '@type': 'Person',
      name: adult.directorname
    },
    actor: [
      {
        '@type': 'Person',
        name: adult.actor1
      },
      {
        '@type': 'Person',
        name: adult.actor2
      },
      {
        '@type': 'Person',
        name: adult.actor3
      },
      {
        '@type': 'Person',
        name: adult.actor4
      },
      {
        '@type': 'Person',
        name: adult.actor5
      }
    ],
    potentialAction: {
      '@type': 'WatchAction',
      target: [
        {
          '@type': 'EntryPoint',
          name: adult.title,
          urlTemplate: `${adult['adult.url']}`
        }
      ]
    },
    locationCreated: {
      '@type': 'Place',
      name: adult.country
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: adult.aggregateRating.ratingValue,
      bestRating: adult.aggregateRating.bestRating,
      worstRating: adult.aggregateRating.worstRating,
      ratingCount: adult.aggregateRating.ratingCount
    },
    author: {
      '@type': 'Person',
      name: 'DrTrailer',
      url: 'https://gravatar.com/drtrailer2022'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Uwatchfree Online™',
      logo: {
        '@type': 'ImageObject',
        url: 'https://uwatchfreeonline.vercel.appog_image.jpg'
      }
    },
    additionalProperty: {
      '@type': 'PropertyValue',
      name: 'Action Platform',
      value: ['Desktop Web Platform', 'iOS Platform', 'Android Platform']
    }
  });
  
  const trailerSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: `${adult.name} | Uwatchfree Online™`,
    description: adult.trailer.description,
    uploadDate: adult.trailer.uploadDate,
    thumbnailUrl: adult.trailer.thumbnail.contentUrl,
    duration: adult.trailer.duration,
    embedUrl: adult.trailer.embedUrl
  })

  return (
    <div>
      <Head>
        <meta
          name='robots'
          content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        />
        <title> Watch {adult && adult.name} | Uwatchfree Online™</title>
        <link rel='canonical' href={adult && adult.url} />
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content='index,follow' />
        <meta name='revisit-after' content='1 days' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content={`${adult && adult.name} - Uwatchfree Online™`}
        />
        <meta
          property='og:description'
          content={`${adult && adult.name} | For Movies, TV Show & Sports Live.`}
        />
      <meta
            property='og:description'
            content='Watch free Movies, TV shows & Sports online on any device. We offer streaming on any Platform. Watch now !!!'
          />
        <meta property='og:url' content={`${adult && adult.url}`} />
        <meta name='keywords' content={`${adult && adult.keywords}`} />
        <meta property='og:site_name' content='Uwatchfree Online' />
        <meta property='og:type' content='article' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta property='article:section' content='adult' />
        <meta name='author' content='admin' />
        <meta
          property='article:modified_time'
          content='2024-01-01T13:13:13+00:00'
        />
        <meta property='og:image' content={`${adult && adult.backimage}`}  />

        <meta property='og:image:width' content='1280' />
        <meta property='og:image:height' content='720' />
        <meta property='og:image:type' content='image/jpeg' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:label1' content='Est. reading time' />
        <meta name='twitter:data1' content='1 minute' />
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
          content='dmv6sg06w9r5eji88'
        />

        {/* <script src='https://www.youtube.com/iframe_api' /> */}
        <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: uwatchfreeSchema }}
          />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: ldJsonData }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: rankMathSchema }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: trailerSchema }}
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
          integrity='sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=='
          crossorigin='anonymous'
          referrerpolicy='no-referrer'
        />
        {/* Webpushr tracking code */}
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
      <Script src='../../propler/ads.js' defer />
      <AdultSkipAds />
      <div
        className={`w-full bg-gray-600 shadow`}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          padding: '20px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
          textAlign: 'center'
        }}
      >
           <h2
            className='flex flex-col text-center py-5 font-bold text-3xl items-center justify-center'
            style={{ color: '#40D7BC',  textShadow: '5px 5px 2px #000' }}
          >
            Uwatchfree Online™ - For Movies, TV Show & Sports.  </h2>
         <p className='flex flex-col text-center py-5 font-bold text-xl items-center justify-center'
            style={{ color: '#40D7BC',  textShadow: '5px 5px 2px #000' }}
          > 
"Uwatchfree Online™ - For Movies, Tv Shows & Sports Live" is a platform that provides access to a wide range of high-definition movies, tv shows & sports Live streaming online. With this platform, users can enjoy a diverse selection of movies, tv shows & sports Live spanning various genres, including action, drama, comedy, thriller, romance, live and more.

The platform aims to offer a seamless and enjoyable watching experience, allowing users to browse through a vast collection of movies, tv shows & sports Live and watch them instantly without the need for downloading. Additionally, it may provide features such as personalized recommendations, user ratings, and reviews to help users discover new movies, tv shows & sports Live tailored to their preferences.

Overall, "Uwatchfree Online™ - For Movies, Tv Shows & Sports Live" strives to be a go-to destination for enthusiasts looking for convenient and high-quality streaming options for their entertainment needs.
</p>
        <div style={{ maxWidth: '800px', width: '100%', marginBottom: '20px' }}>
          <Image
            src={adult.backimage}
            alt={adult.title}
            width={300}
            height={500}
            priority
            style={{
              // maxWidth: '50%',
              margin: 'auto',
              marginBottom: '20px',
              borderRadius: '50px',
              boxShadow: '0 0 10px 0 #fff',
              filter:
                'contrast(1.2) saturate(1.5) brightness(1.4) hue-rotate(0deg)'
            }}
          />

          <h2
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '34px',
              fontWeight: 'bold',
              marginBottom: '10px',
              color: '#40D7BC',
              textShadow: '2px 5px 5px #000000'
            }}
          >
            {adult.title}
          </h2>

          <p
            style={{
              marginTop: '20px',
              marginBottom: '10px',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#fff',
              textShadow: '2px 5px 5px #000000'
            }}
          >
            {' '}
            Genre: {adult.genre.join(', ')}{' '}
          </p>
          <p
            style={{
              marginBottom: '10px',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#fff',
              textShadow: '2px 5px 5px #000000'
            }}
          >
            Synopsis: {adult.synopsis}
          </p>
          <p
            style={{
              marginBottom: '10px',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '25px',
              fontWeight: 'bold',
              color: '#fff',
              textShadow: '2px 5px 5px #000000'
            }}
          >
            Director: {adult.directorname}
          </p>

          <p
            style={{
              marginBottom: '10px',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#fff',
              textShadow: '2px 5px 5px #000000'
            }}
          >
            <a href={adult.imdbLink}>IMDb Rating: {adult.imdbRating}</a>
          </p>

          <p
            style={{
              marginBottom: '10px',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#fff',
              textShadow: '2px 5px 5px #000000'
            }}
          >
            Average Time: {adult.avgTime}
          </p>

          <p
            style={{
              marginBottom: '10px',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#fff',
              textShadow: '2px 5px 5px #000000'
            }}
          >
            Country: {adult.country}
          </p>
          <p
            style={{
              marginBottom: '10px',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#fff',
              textShadow: '2px 5px 5px #000000'
            }}
          >
            Start Date: {adult.startDate}
          </p>
          <p
            style={{
              marginBottom: '10px',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#fff',
              textShadow: '2px 5px 5px #000000'
            }}
          >
            Content Rating: {adult.contentRating}
          </p>
          <p
            style={{
              marginBottom: '10px',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#fff',
              textShadow: '2px 5px 5px #000000'
            }}
          >
            Original Network: {adult.Originalnetwork}
          </p>
          <p
            style={{
              marginBottom: '10px',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#fff',
              textShadow: '2px 5px 5px #000000'
            }}
          >
            Language: {adult.language}
          </p>
          <p
            style={{
              marginBottom: '10px',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#fff',
              textShadow: '2px 5px 5px #000000'
            }}
          >
            Time: {adult.time}
          </p>
          <p
            style={{
              marginBottom: '10px',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#fff',
              textShadow: '2px 5px 5px #000000'
            }}
          >
            Starring: {adult.starring.join(', ')}
          </p>
        </div>
        <Rating />
     
        <div className={HomeStyles.adultDetails}>
          {adult && (
            <div>
              <div className={`${HomeStyles.imageGrid} mt-5`}>
                <img
                  className={`${HomeStyles.image} img-fluid lazyload `}
                  src={adult.directorimg}
                  alt={adult.directorname}
                  title={adult.directorname}
                  style={{
                    width: '200px',
                    height: '200px',
                    objectFit: 'cover',
                    filter: 'contrast(1.2) saturate(1.2)',
                    boxShadow: '0 0 10px 0 #C0C0C0' // Shadow effect with black color
                  }}
                  loading='lazy'
                  layout='responsive'
                />
                <img
                  className={`${HomeStyles.image} img-fluid lazyload`}
                  src={adult.actor1img}
                  alt={adult.actor1}
                  title={adult.actor1}
                  style={{
                    width: '200px',
                    height: '200px',
                    objectFit: 'cover',
                    boxShadow: '0 0 10px 0 #C0C0C0', // Shadow effect with black color
                    filter: 'contrast(1.2) saturate(1.2)'
                  }}
                  loading='lazy'
                  layout='responsive'
                />
                <img
                  className={`${HomeStyles.image} img-fluid lazyload`}
                  src={adult.actor2img}
                  alt={adult.actor2}
                  title={adult.actor2}
                  style={{
                    width: '200px',
                    height: '200px',
                    objectFit: 'cover',
                    boxShadow: '0 0 10px 0 #C0C0C0', // Shadow effect with black color
                    filter: 'contrast(1.2) saturate(1.2)'
                  }}
                  loading='lazy'
                  layout='responsive'
                />
                <img
                  className={`${HomeStyles.image} img-fluid lazyload`}
                  src={adult.actor3img}
                  alt={adult.actor3}
                  title={adult.actor3}
                  style={{
                    width: '200px',
                    height: '200px',
                    objectFit: 'cover',
                    boxShadow: '0 0 10px 0 #C0C0C0', // Shadow effect with black color
                    filter: 'contrast(1.2) saturate(1.2)'
                  }}
                  loading='lazy'
                  layout='responsive'
                />
                <img
                  className={`${HomeStyles.image} img-fluid lazyload`}
                  src={adult.actor4img}
                  alt={adult.actor4}
                  title={adult.actor4}
                  style={{
                    width: '200px',
                    height: '200px',
                    objectFit: 'cover',
                    boxShadow: '0 0 10px 0 #C0C0C0', // Shadow effect with black color
                    filter: 'contrast(1.2) saturate(1.2)'
                  }}
                  loading='lazy'
                  layout='responsive'
                />
                <img
                  className={`${HomeStyles.image} img-fluid lazyload`}
                  src={adult.actor5img}
                  alt={adult.actor5}
                  title={adult.actor5}
                  style={{
                    width: '200px',
                    height: '200px',
                    objectFit: 'cover',
                    boxShadow: '0 0 10px 0 #C0C0C0', // Shadow effect with black color
                    filter: 'contrast(1.2) saturate(1.2)'
                  }}
                  loading='lazy'
                  layout='responsive'
                />
              </div>
            </div>
          )}
        </div>
        {/* <DailyMotionBackground videoId={adult.video} /> */}

        <h1
          className='flex flex-col text-center py-5 font-bold text-3xl items-center justify-center'
          style={{ color: '#40D7BC', textShadow: '5px 5px 2px #000' }}
        >
          Watch Online Adult {adult && adult.title}{' '}
        </h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span
            className='rating-no ml-15 rating-left'
            style={{
              color: '#1e06fa',
              justifyContent: 'center',
              alignItems: 'center',
              textShadow: '3px 5px 5px #1e06fa',
              fontSize: '20px'
            }}
          >
            <i className='fas fa-video animate-blink '></i>{' '}
            <span className='animate-blink'> Full HD 1080P </span>
          </span>
          <span style={{ marginLeft: '25px' }}></span>{' '}
          {/* This creates a gap between the spans */}
          <span
            className='rating-no ml-15 rating-left'
            style={{
              color: '#fae206',
              justifyContent: 'center',
              alignItems: 'center',
              textShadow: '3px 5px 5px #fae206',
              fontSize: '20px'
            }}
          >
            <i className='fas fa-video'></i>
            <span> HD 720P </span>
          </span>
        </div>

        <style jsx>{`
          .animate-blink {
            animation: blink 1s infinite;
            color: #1e06fa;
            justify-content: center;
            align-items: center;
            text-shadow: 3px 5px 5px #1e06fa;
          }

          @keyframes blink {
            0% {
              opacity: 1;
            }
            50% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `}</style>

        {/* <div className={Styles['iframe-container']}>
  <iframe id="videoIframe" className="embed-responsive-item rounded-2xl"
    src={adult.server1} frameborder="0" scrolling="no"
    allowFullScreen mozRequestFullScreen webkitRequestFullscreen style={{ marginTop: '10px' }}></iframe>
 </div> */}

        <h3
          style={{
            marginTop: '10px',
            color: '#40D7BC',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textShadow: '3px 5px 5px #000',
            fontSize: '35px',
            fontWeight: 'bold'
          }}
        >
          <span style={{ fontSize: '34px', textShadow: '2px 5px 5px #000000' }}>
            &#x1F4E1;
          </span>{' '}
          Select Server Tab
        </h3>

        <div className='container mt-0'>
          <Tabs>
            <TabList className={HomeStyles.tabList}>
              <Tab
                className={`${HomeStyles.tab} ${HomeStyles.server1}`}
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  textShadow: '2px 5px 5px #000000'
                }}
              >
                Server 1
              </Tab>
              <Tab
                className={`${HomeStyles.tab} ${HomeStyles.server2}`}
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  textShadow: '2px 5px 5px #000000'
                }}
              >
                Server 2
              </Tab>
              <Tab
                className={`${HomeStyles.tab} ${HomeStyles.server3}`}
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  textShadow: '2px 5px 5px #000000'
                }}
              >
                Server 3
              </Tab>
            </TabList>
            <TabPanel>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center'
                }}
              >
                {Array.from({ length: 10 }, (_, episodeNumber) => {
                  const episodeKey = `episode${episodeNumber + 1}sa1ser1`
                  const episodeUrl = adult[episodeKey]
                  if (!episodeUrl) return null
                  return (
                    <div
                      className='mb-5 mr-3'
                      key={`episode${episodeNumber + 1}`}
                    >
                      <button
                        className='episode-button relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110 cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0'
                        onClick={togglePopup1}
                      >
                        <span
                          style={{
                            color: '#15f4ee',
                            fontSize: '24px',
                            textShadow: '3px 5px 5px #000'
                          }}
                        >
                          {' '}
                          <i
                            className='fa fa-play-circle'
                            aria-hidden='true'
                          ></i>{' '}
                          Watch Now
                        </span>
                      </button>
                      {showPopup1 && (
                        <div className='popup-overlay'>
                          <div className='popup'>
                            <button
                              className='close-button'
                              onClick={togglePopup1}
                            >
                              <h2 className='relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0'>
                                Close
                              </h2>
                            </button>
                            <h2
                              className='text-2xl font-bold'
                              style={{
                                color: '#40D7BC',
                                textShadow: '3px 5px 5px #000'
                              }}
                            >
                              Watch Online Adult {adult && adult.name}
                            </h2>
                            <div className={Styles['iframe-container']}>
                              <iframe
                                className='rounded-3xl mr-8 flex border-1 border-blue-600 bg-gray-600 p-2'
                                webkitallowFullScreen
                                mozallowFullScreen
                                allowFullScreen
                                ref={audioIframeRef}
                                id='audioIframe'
                                src={episodeUrl}
                                style={{
                                  filter:
                                    'contrast(1.2) saturate(1.5) brightness(1.3) hue-rotate(0deg)'
                                }}
                              />
                            </div>
                            <p
                              style={{
                                color: '#40D7BC',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textShadow: '3px 5px 5px #000',
                                fontSize: '15px',
                                fontWeight: 'bold'
                              }}
                            >
                              *Note: Use Setting in Player to improve the
                              Quality of video to HD Quality 1080p.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </TabPanel>

            <TabPanel>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center'
                }}
              >
                {Array.from({ length: 10 }, (_, episodeNumber) => {
                  const episodeKey = `episode${episodeNumber + 1}sa1ser2`
                  const episodeUrl = adult[episodeKey]
                  if (!episodeUrl) return null
                  return (
                    <div
                      className='mb-5 mr-3'
                      key={`episode${episodeNumber + 1}`}
                    >
                      <button
                        className='episode-button relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110 cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0'
                        onClick={togglePopup2}
                      >
                        <span
                          style={{
                            color: '#0efa06',
                            fontSize: '24px',
                            textShadow: '3px 5px 5px #000'
                          }}
                        >
                          {' '}
                          <i
                            className='fa fa-play-circle'
                            aria-hidden='true'
                          ></i>{' '}
                          Watch Now
                        </span>
                      </button>

                      {showPopup2 && (
                        <div className='popup-overlay'>
                          <div className='popup'>
                            <button
                              className='close-button'
                              onClick={togglePopup2}
                            >
                              <h2 className='relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0'>
                                Close
                              </h2>
                            </button>
                            <h2
                              className='text-2xl font-bold'
                              style={{
                                color: '#40D7BC',
                                textShadow: '3px 5px 5px #000'
                              }}
                            >
                              Watch Online Adult {adult && adult.name}
                            </h2>
                            <div className={Styles['iframe-container']}>
                              <iframe
                                className='  rounded-3xl  mr-8 flex  border-1 border-blue-600 bg-gray-600 p-2 '
                                webkitallowFullScreen
                                mozallowFullScreen
                                allowFullScreen
                                ref={audioIframeRef}
                                id='audioIframe'
                                src={episodeUrl}
                                style={{
                                  filter:
                                    'contrast(1.2) saturate(1.5) brightness(1.3) hue-rotate(0deg)'
                                }}
                              />
                            </div>
                            <p
                              style={{
                                color: '#40D7BC',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textShadow: '3px 5px 5px #000',
                                fontSize: '15px',
                                fontWeight: 'bold'
                              }}
                            >
                              *Note: Use Setting in Player to improve the
                              Quality of video to HD Quality 1080p.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </TabPanel>

            <TabPanel>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center'
                }}
              >
                {Array.from({ length: 10 }, (_, episodeNumber) => {
                  const episodeKey = `episode${episodeNumber + 1}sa1ser3`
                  const episodeUrl = adult[episodeKey]
                  if (!episodeUrl) return null
                  return (
                    <div
                      className='mb-5 mr-3'
                      key={`episode${episodeNumber + 1}`}
                    >
                      <button
                        className='episode-button relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110 cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0'
                        onClick={togglePopup3}
                      >
                        <span
                          style={{
                            color: '#f80303',
                            fontSize: '24px',
                            textShadow: '3px 5px 5px #000'
                          }}
                        >
                          {' '}
                          <i
                            className='fa fa-play-circle'
                            aria-hidden='true'
                          ></i>{' '}
                          Watch Now
                        </span>
                      </button>

                      {showPopup3 && (
                        <div className='popup-overlay'>
                          <div className='popup'>
                            <button
                              className='close-button'
                              onClick={togglePopup3}
                            >
                              <h2 className='relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0'>
                                Close
                              </h2>
                            </button>
                            <h2
                              className='text-2xl font-bold'
                              style={{
                                color: '#40D7BC',
                                textShadow: '3px 5px 5px #000'
                              }}
                            >
                              Watch Online Adult {adult && adult.name}
                            </h2>
                            <div className={Styles['iframe-container']}>
                              <iframe
                                className='  rounded-3xl  mr-8 flex  border-1 border-blue-600 bg-gray-600 p-2 '
                                webkitallowFullScreen
                                mozallowFullScreen
                                allowFullScreen
                                ref={audioIframeRef}
                                id='audioIframe'
                                src={episodeUrl}
                                style={{
                                  filter:
                                    'contrast(1.2) saturate(1.5) brightness(1.3) hue-rotate(0deg)'
                                }}
                              />
                            </div>
                            <p
                              style={{
                                color: '#40D7BC',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textShadow: '3px 5px 5px #000',
                                fontSize: '15px',
                                fontWeight: 'bold'
                              }}
                            >
                              *Note: Use Setting in Player to improve the
                              Quality of video to HD Quality 1080p.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </TabPanel>
          </Tabs>
        </div>

        <style jsx>{`
          .popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999; /* Set a high z-index value */
          }

          .popup {
            width: 800px;
            background-color: gray;
            padding: 10px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            animation: slide-down 0.5s ease;
            position: relative; /* Ensure the z-index works */
            z-index: 10000; /* Set a higher z-index value */
          }

          @keyframes slide-down {
            from {
              transform: translateY(-100%);
            }
            to {
              transform: translateY(0);
            }
          }
        `}</style>

        <hr className='my-5' />
        <div className='container mt-5'>
          <Tabs>
            <TabList className={HomeStyles.tabList}>
              <Tab
                className={`${HomeStyles.tab} ${HomeStyles.server1}`}
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  textShadow: '2px 5px 5px #000000'
                }}
              >
                server1
              </Tab>
              <Tab
                className={`${HomeStyles.tab} ${HomeStyles.server2}`}
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  textShadow: '2px 5px 5px #000000'
                }}
              >
                server2
              </Tab>
              <Tab
                className={`${HomeStyles.tab} ${HomeStyles.server3}`}
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  textShadow: '2px 5px 5px #000000'
                }}
              >
                server3
              </Tab>
            </TabList>
            {adult && (
              <>
                {/* Server 01 content */}
                <TabPanel>
                  <div className='row mx-auto' style={{ marginTop: '5px' }}>
                    <div
                      className='button-container'
                      style={{
                        marginTop: '10px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                      }}
                    >
                      {Array.from({ length: 10 }, (_, episodeNumber) => {
                        const downloadKey = `download${episodeNumber + 1}s1ser1`
                        const downloadLink = adult[downloadKey]
                        if (!downloadLink) return null
                        return (
                          <div
                            className='mb-5 mr-3'
                            key={`episode${episodeNumber + 1}`}
                          >
                            <a
                              href={downloadLink}
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <button className='episode-button relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110 cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0'>
                                <span
                                  style={{
                                    color: '#15f4ee',
                                    fontSize: '24px',
                                    textShadow: '3px 5px 5px #000'
                                  }}
                                >
                                  <i
                                    className='fa fa-download'
                                    aria-hidden='true'
                                  ></i>{' '}
                                  Download Now
                                </span>
                              </button>
                            </a>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className='row mx-auto' style={{ marginTop: '5px' }}>
                    <div
                      className='button-container'
                      style={{
                        marginTop: '10px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                      }}
                    >
                      {Array.from({ length: 10 }, (_, episodeNumber) => {
                        const downloadKey = `download${episodeNumber + 1}s1ser2`
                        const downloadLink = adult && adult[downloadKey] // Check if adult exists
                        if (!downloadLink) return null
                        return (
                          <div
                            className='mb-5 mr-3'
                            key={`episode${episodeNumber + 1}`}
                          >
                            <a
                              href={downloadLink}
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <button className='episode-button relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110 cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0'>
                                <span
                                  style={{
                                    color: '#0efa06',
                                    fontSize: '24px',
                                    textShadow: '3px 5px 5px #000'
                                  }}
                                >
                                  <i
                                    className='fa fa-download'
                                    aria-hidden='true'
                                  >
                                    {' '}
                                  </i>{' '}
                                  Download Now
                                </span>
                              </button>
                            </a>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </TabPanel>
                {/* Server 03 content */}
                <TabPanel>
                  <div className='row mx-auto' style={{ marginTop: '5px' }}>
                    <div
                      className='button-container'
                      style={{
                        marginTop: '10px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                      }}
                    >
                      {Array.from({ length: 10 }, (_, episodeNumber) => {
                        const downloadKey = `download${episodeNumber + 1}s1ser3`
                        const downloadLink = adult && adult[downloadKey]
                        if (!downloadLink) return null
                        return (
                          <div
                            className='mb-5 mr-3'
                            key={`episode${episodeNumber + 1}`}
                          >
                            <a
                              href={downloadLink}
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <button className='episode-button relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110 cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0'>
                                <span
                                  style={{
                                    color: '#f80303',
                                    fontSize: '24px',
                                    textShadow: '3px 5px 5px #000'
                                  }}
                                >
                                  Download Now{' '}
                                  <i
                                    className='fa fa-magnet'
                                    aria-hidden='true'
                                  ></i>
                                </span>
                              </button>
                            </a>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </TabPanel>
              </>
            )}
          </Tabs>
        </div>
        <div className='flex flex-col py-10 text-blue-600 text-center items-center justify-center'>
          <button
            className='episode-button relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110 cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0'
            onClick={togglePopup}
          >
            <h2 style={{ color: '#15f4ee', textShadow: '3px 5px 5px #000' }}>
              Watch Official Trailer
            </h2>
          </button>
        </div>
        {showPopup && (
          <div className='popup-overlay'>
            <div className='popup'>
              <button className='close-button' onClick={togglePopup}>
                <h2 className='relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0'>
                  Close
                </h2>
              </button>
              <h2
                className='text-2xl font-bold'
                style={{
                  color: '#40D7BC',
                  textShadow: '3px 5px 5px #000'
                }}
              >
                Official Trailer {adult && adult.name}
              </h2>
              {/* <div
                id='player'
                style={{
                  filter:
                    'contrast(1.2) saturate(1.5) brightness(1.3) hue-rotate(0deg)'
                }}
              ></div> */}
              <div
                style={{
                  position: 'relative',
                  paddingBottom: '56.25%',
                  height: 0,
                  overflow: 'hidden'
                }}
              >
                <iframe
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    left: '0px',
                    top: '0px',
                    overflow: 'hidden',
                    filter:
                      'contrast(1.2) saturate(1.5) brightness(1.3) hue-rotate(0deg)'
                  }}
                  className='  rounded-3xl  mr-8 flex  border-1 border-blue-600 bg-gray-600 p-2 '
                  frameborder='0'
                  type='text/html'
                  ref={audioIframeRef}
                  id='audioIframe'
                  src={`https://geo.dailymotion.com/player/xjrxe.html?video=${
                    adult && adult.video
                  }`}
                  width='100%'
                  height='100%'
                  allowfullscreen
                  title='Dailymotion Video Player'
                  allow='autoplay'
                ></iframe>
              </div>

              <p
                style={{
                  color: '#40D7BC',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textShadow: '3px 5px 5px #000',
                  fontSize: '15px',
                  fontWeight: 'bold'
                }}
              >
                *Note: Use Setting in Player to improve the Quality of video to
                HD Quality 1080p.
              </p>
            </div>
          </div>
        )}
        <style jsx>{`
          .popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999; /* Set a high z-index value */
          }

          .popup {
            width: 800px;
            background-color: gray;
            padding: 10px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            animation: slide-down 0.5s ease;
            position: relative; /* Ensure the z-index works */
            z-index: 10000; /* Set a higher z-index value */
          }

          @keyframes slide-down {
            from {
              transform: translateY(-100%);
            }
            to {
              transform: translateY(0);
            }
          }
        `}</style>

        <div class='container1'>
        <ShareButtons
        title="Uwatchfree Online™"
        description="For Movies, TV Show & Sports social platform"
        shareMessage={shareMessage}
        image={adult && adult.url}
      />


        </div>
        <h2
          className='mb-10 animate-pulse'
          style={{
            color: '#40D7BC',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '10vh',
            textShadow: '3px 5px 5px #000'
          }}
        >
          &#x1F604;Trending Adult &#128515;
        </h2>

        <TrendingMovies />
        <Max />
        <div class='container1'>
     
        <ShareButtons
        title="Uwatchfree Online™"
        description="For Movies, TV Show & Sports social platform"
        shareMessage={shareMessage}
        image={adult && adult.url}
      />
        </div>
      </div>
    </div>
  )
}

export async function getStaticPaths () {
  const paths = adultsData.map(adult => ({
    params: { id: adult.id } // Assuming each adult object has an "id" field
  }))
  return { paths, fallback: false }
}

export async function getStaticProps ({ params }) {
  // Fetch the adult data based on the provided id
  const adult = adultsData.find(n => n.id === params.id)

  return {
    props: {
      adult
    }
  }
}

export default adultDetail
