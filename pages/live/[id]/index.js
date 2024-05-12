import { useRouter } from 'next/router'
import livesData from '../../../public/live.json'
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
import CommentForm from '@components/CommentForm';
import ExtensionInstallation from '@components/ExtensionInstallation'
// import DailyMotionBackground from '@components/DailyMotionBackground'
import Max from '@components/Max'
import Script from 'next/script'

const liveDetail = ({ live }) => {
  const router = useRouter()
  const { id } = router.query

  const [showPopup, setShowPopup] = useState(false)
  const [messageShown, setMessageShown] = useState(false) // Define messageShown state
  const [showPopup1, setShowPopup1] = useState(false)
  const [showPopup2, setShowPopup2] = useState(false)
  const [showPopup3, setShowPopup3] = useState(false)
  const [showPopup4, setShowPopup4] = useState(false)
  const [showPopup5, setShowPopup5] = useState(false)
  const [showPopup6, setShowPopup6] = useState(false)
  const [showPopupTrailer, setShowPopupTrailer] = useState(false)
  const [flashing, setFlashing] = useState(true)

  const shareMessage =
    'Watch Now !!! Uwatchfree Online™ - For Movies, TV Show & Sports!'

    const [comments, setComments] = useState([]);

    useEffect(() => {
      const fetchComments = async () => {
        try {
          const response = await fetch('/api/comments');
          if (response.ok) {
            const commentsData = await response.json();
            const filteredComments = commentsData.filter(comment => comment.liveId === live.id);
            setComments(filteredComments);
          } else {
            throw new Error('Failed to fetch comments');
          }
        } catch (error) {
          console.error('Error fetching comments:', error);
        }
      };
  
      fetchComments();
    }, [live.id]);
  
    const handleSubmitComment = async (commentData) => {
      try {
        const response = await fetch('/api/comments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(commentData),
        });
    
        if (response.ok) {
          const newComment = await response.json();
          setComments((prevComments) => [...prevComments, newComment]);
          alert('Comment posted successfully!');
        } else {
          throw new Error('Failed to post comment: ' + response.statusText);
        }
      } catch (error) {
        console.error('Error posting comment:', error);
        alert('Failed to post comment. Please try again later.');
      }
    };
    
  
    const renderComments = () => {
      return comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.id}>
            <p  className='text-center font-bold text-3xl mt-8'
            style={{
              color: '#40D7BC',
              fontSize: '30px',
              textShadow: '5px 5px 2px #000'
            }}>{comment.commentText}</p>
            <p  className='text-center font-bold text-3xl mt-8'
            style={{
              color: '#40D7BC',
              fontSize: '20px',
              textShadow: '5px 5px 2px #000',
              marginBottom:'20px',
            }}>Posted on: {new Date(comment.timestamp).toLocaleString()}</p>
          </div>
        ))
      ) : (
        <p  className='text-center font-bold text-3xl mt-8'
        style={{
          color: '#40D7BC',
          fontSize: '30px',
          marginBottom:'20px',
          textShadow: '5px 5px 2px #000'
        }}>No comments yet.</p>
      );
    };
    


  useEffect(() => {
    // Flashing effect interval (toggle flashing state every 500ms)
    const interval = setInterval(() => {
      setFlashing(prevFlashing => !prevFlashing)
    }, 500)

    return () => {
      clearInterval(interval) // Clean up interval on component unmount
    }
  }, [])

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

  const togglePopup4 = () => {
    setShowPopup4(!showPopup4)
  }

  const togglePopup5 = () => {
    setShowPopup5(!showPopup5)
  }

  const togglePopup6 = () => {
    setShowPopup6(!showPopup6)
  }
  const togglePopupTrailer = () => {
    setShowPopupTrailer(!showPopupTrailer)
  }

  const [adultlives, setAdultlives] = useState([])

  useEffect(() => {
    // Filter adult lives from the livesData
    const filteredlives = livesData.filter(live => live.group === 'adult')
    setAdultlives(filteredlives)
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
  }, [live, enableNoiseCancellation])

  const loadVideo = (videoPage, contentType, server) => {
    const videoIframe = document.getElementById('videoIframe')

    const userResponse = confirm(
      `Do you want to load ${
        contentType === 'tvshow' ? 'TV Show Episode' : 'live'
      } from Server ${server}?`
    )

    if (userResponse) {
      // If the user clicks "OK"
      if (!messageShown) {
        // Display a message (only if it hasn't been shown before)
        alert(
          `Loading ${
            contentType === 'tvshow' ? 'TV Show Episode' : 'live'
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

  // const rankMathSchema = JSON.stringify({
  //   '@context': 'https://schema.org',
  //   '@graph': [
  //     {
  //       '@type': ['Person', 'Organization'],
  //       '@id': 'https://gravatar.com/drtrailer2022/#person',
  //       name: 'Dr Trailer'
  //     },
  //     {
  //       '@type': 'WebSite',
  //       '@id': 'https://uwatchfreeonline.vercel.app/#website',
  //       url: 'https://uwatchfreeonline.vercel.app/',
  //       name: 'Uwatchfree Online™',
  //       publisher: {
  //         '@id': 'https://gravatar.com/drtrailer2022/#person'
  //       },
  //       inLanguage: 'en-US'
  //     },
  //     {
  //       '@type': 'WebPage',
  //       '@id': `/${live['live.watch']}#webpage`,
  //       url: `/${live['live.watch']}`,
  //       name: `${live.name} | Uwatchfree Online™`,
  //       datePublished: '2024-01-13T13:00:00+00:00',
  //       dateModified: '2024-01-13T13:13:00+00:00',
  //       isPartOf: {
  //         '@id': 'https://uwatchfreeonline.vercel.app/#website'
  //       },
  //       inLanguage: 'en-US'
  //     },
  //     {
  //       '@type': 'Person',
  //       '@id': 'https://uwatchfreeonline.vercel.app/author/watchlivesonline/',
  //       name: 'Dr Trailer',
  //       url: 'https://uwatchfreeonline.vercel.app/author/watchlivesonline/',
  //       image: {
  //         '@type': 'ImageObject',
  //         '@id': 'https://gravatar.com/drtrailer2022',
  //         url: 'https://gravatar.com/drtrailer2022',
  //         caption: 'Dr Trailer',
  //         inLanguage: 'en-US'
  //       },
  //       sameAs: ['https://uwatchfreeonline.vercel.app/']
  //     },
  //     {
  //       '@type': 'Article',
  //       '@id': `/${live['live.watch']}#article`,
  //       headline: `Watch ${live.name} | Uwatchfree Online™`,
  //       datePublished: '2024-01-13T13:00:00+00:00',
  //       dateModified: '2024-01-13T13:13:00+00:00',
  //       articleSection: 'live',
  //       author: {
  //         '@id':
  //           'https://uwatchfreeonline.vercel.app/author/watchlivesonline/'
  //       },
  //       publisher: {
  //         '@id': 'https://gravatar.com/drtrailer2022/#person'
  //       },
  //       description: `Uwatchfree Online | ${live.name} for free. Where you can find lives of your interest in full HD quality updated on a daily basis. Watch Now or Download Now to Watch Later!`,
  //       image: live.image,
  //       name: `Watch ${live.name} | Uwatchfree Online™`,
  //       isPartOf: {
  //         '@id': `/${live['live.watch']}#webpage`
  //       },
  //       inLanguage: 'en-US',
  //       mainEntityOfPage: {
  //         '@id': `/${live['live.watch']}#webpage`
  //       }
  //     },
  //     {
  //       '@type': 'BlogPosting',
  //       '@id': `/${live['live.watch']}#blogPost`,
  //       headline: `Watch ${live.name} | Uwatchfree Online™`,
  //       datePublished: '2024-01-13T13:00:00+00:00',
  //       dateModified: '2024-01-13T13:13:00+00:00',
  //       articleSection: 'live',
  //       author: {
  //         '@id':
  //           'https://uwatchfreeonline.vercel.app/author/watchlivesonline/'
  //       },
  //       publisher: {
  //         '@id': 'https://gravatar.com/drtrailer2022/#person'
  //       },
  //       description: `Uwatchfree Online | ${live.name} for free. Where you can find lives of your interest in full HD quality updated on a daily basis. Watch Now or Download Now to Watch Later!`,
  //       image: live.image,
  //       name: `Watch ${live.name} | Uwatchfree Online™`,
  //       '@id': `/${live['live.watch']}#richSnippet`,
  //       isPartOf: {
  //         '@id': `/${live['live.watch']}#webpage`
  //       },
  //       inLanguage: 'en-US',
  //       mainEntityOfPage: {
  //         '@id': `/${live['live.watch']}#webpage`
  //       }
  //     }
  //   ]
  // })

  // const ldJsonData = JSON.stringify({
  //   '@context': 'https://schema.org',
  //   '@type': 'live',
  //   '@id': `/${live['live.watch']}`,
  //   name: live.name,
  //   url: `/${live['live.watch']}`,
  //   description: live.synopsis,
  //   image: live.poster,
  //   genre: live.genre,
  //   datePublished: live.yearRelease,
  //   director: {
  //     '@type': 'Person',
  //     name: live.director
  //   },
  //   actor: live.starring.map(actor => ({
  //     '@type': 'Person',
  //     name: actor
  //   })),
  //   potentialAction: {
  //     '@type': 'WatchAction',
  //     target: [
  //       {
  //         '@type': 'EntryPoint',
  //         name: live.name,
  //         urlTemplate: `${live['live.url']}`
  //       }
  //     ]
  //   },
  //   locationCreated: {
  //     '@type': 'Place',
  //     name: live.country
  //   },
  //   aggregateRating: {
  //     '@type': 'AggregateRating',
  //     ratingValue: live.aggregateRating.ratingValue,
  //     bestRating: live.aggregateRating.bestRating,
  //     worstRating: live.aggregateRating.worstRating,
  //     ratingCount: live.aggregateRating.ratingCount
  //   },
  //   author: {
  //     '@type': 'Person',
  //     name: 'DrTrailer',
  //     url: 'https://gravatar.com/drtrailer2022'
  //   },
  //   publisher: {
  //     '@type': 'Organization',
  //     name: 'Uwatchfree Online™',
  //     logo: {
  //       '@type': 'ImageObject',
  //       url: 'https://uwatchfreeonline.vercel.app/og_image.jpg'
  //     }
  //   },
  //   additionalProperty: {
  //     '@type': 'PropertyValue',
  //     name: 'Action Platform',
  //     value: ['Desktop Web Platform', 'iOS Platform', 'Android Platform']
  //   }
  // })

  // const trailerSchema = JSON.stringify({
  //   '@context': 'https://schema.org',
  //   '@type': 'VideoObject',
  //   name: `${live.name} | Uwatchfree Online™`,
  //   description: live.trailer.description,
  //   uploadDate: live.trailer.uploadDate,
  //   thumbnailUrl: live.trailer.thumbnail.contentUrl,
  //   duration: live.trailer.duration,
  //   embedUrl: live.trailer.embedUrl
  // })

  return (
    <div>
      <Head>
        <meta
          name='robots'
          content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        />
        <title> Watch {live && live.name} | Uwatchfree Online™</title>
        <link rel='canonical' href={live && live.url} />
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content='index,follow' />
        <meta name='revisit-after' content='1 days' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content={`${live && live.name} - Uwatchfree Online™`}
        />
        <meta
          property='og:description'
          content={`${live && live.name} | For Movies, TV Show & Sports Live.`}
        />
        <meta
          property='og:description'
          content='Watch Sky live Cricket HD Live Streaming, Sky live Cricket Live, Watch Sky live Cricket live stream online free with the best quality and no registration or download - Watch TV Channels online from anywhere, on any device.'
        />
        <meta property='og:url' content={`${live && live.url}`} />
        <meta name='keywords' content={`${live && live.keywords}`} />
        <meta property='og:site_name' content='Uwatchfree Online' />
        <meta property='og:type' content='article' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta property='article:section' content='live' />
        <meta name='author' content='admin' />
        <meta
          property='article:modified_time'
          content='2024-01-01T13:13:13+00:00'
        />
        <meta property='og:image' content={`${live && live.backimage}`} />

        <meta property='og:image:width' content='1080px' />
        <meta property='og:image:height' content='720px' />
        <meta property='og:image:type' content='image/jpeg' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:label1' content='Est. reading time' />
        <meta name='twitter:data1' content='1 minute' />
        
        <link
            rel="alternate"
            hrefLang="en-us"
            href="/"
          />
          <link
            rel="alternate"
            hrefLang="en-gb"
            href="/"
          />
          <link
            rel="alternate"
            hrefLang="en-ca"
            href="/"
          />
          <link
            rel="alternate"
            hrefLang="en-au"
            href="/"
          />
          <link
            rel="alternate"
            hrefLang="en-se"
            href="/"
          />
          <link
            rel="alternate"
            hrefLang="en-fr"
            href="/"
          />
          <link
            rel="alternate"
            hrefLang="en-dk"
            href="/"
          />
          <link
            rel="alternate"
            hrefLang="en-no"
            href="/"
          />
          <link
            rel="alternate"
            hrefLang="x-default"
            href="/"
          />

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
        {/* <script
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
        /> */}
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
      <ExtensionInstallation />
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
          style={{ color: '#40D7BC', textShadow: '5px 5px 2px #000' }}
        >
          Uwatchfree Online™ - For Movies, TV Show & Sports Live.{' '}
        </h2>
        {/* <p className='flex flex-col text-center py-5 font-bold text-xl items-center justify-center'
            style={{ color: '#40D7BC',  textShadow: '5px 5px 2px #000' }}
          > 
"Uwatchfree Online™ - For Movies, Tv Shows & Sports Live" is a platform that provides access to a wide range of high-definition movies, tv shows & live Live streaming online. With this platform, users can enjoy a diverse selection of movies, tv shows & live Live spanning various genres, including action, drama, comedy, thriller, romance, live and more.

The platform aims to offer a seamless and enjoyable watching experience, allowing users to browse through a vast collection of movies, tv shows & live Live and watch them instantly without the need for downloading. Additionally, it may provide features such as personalized recommendations, user ratings, and reviews to help users discover new movies, tv shows & live Live tailored to their preferences.

Overall, "Uwatchfree Online™ - For Movies, Tv Shows & Sports Live" strives to be a go-to destination for enthusiasts looking for convenient and high-quality streaming options for their entertainment needs.


</p> */}
      <p
            className='text-center font-bold text-lg'
            style={{
              color: '#40D7BC',
              textShadow: '5px 5px 2px #000',
              marginTop: '20px',
              fontSize: '20px'
            }}
          >
            To enhance your experience on our website, please install the
            SquareX - Be Secure & Anonymous Chrome extension from the Chrome Web
            Store:
            <br />
          <button
            className={`btn btn-success ${flashing ? 'btn-flashing' : ''}`}
            onClick={() => {
              // Handle button click event
            }}
          >
            <a
              href='https://chrome.google.com/webstore/detail/squarex-be-secure-anonymo/kapjaoifikajdcdehfdlmojlepfpkpoe'
              className=' text-center font-bold text-lg items-center justify-center'
              style={{
                color: '#FF0000',
                textShadow: '5px 5px 2px #000',
                marginTop: '20px',
                fontSize: '30px'
              }}
              target='_blank'
              rel='noopener noreferrer'
            >
              Install SquareX
            </a>
          </button>
        </p>

        <div style={{ maxWidth: '800px', width: '100%',     marginTop: '20px', marginBottom: '20px' }}>
          <Image
            src={live.backimage}
            alt={live.title}
            width={1280}
            height={720}
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

          <h1
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '34px',
              fontWeight: 'bold',
              marginBottom: '10px',
              color: '#40D7BC',
              textShadow: '2px 5px 5px #000000'
            }}
          >
            {live.title}
          </h1>
        </div>
        {/* <h1
          className='flex flex-col text-center py-5 font-bold text-3xl items-center justify-center'
          style={{ color: '#40D7BC', textShadow: '5px 5px 2px #000' }}
        >
          Watch Online live {live && live.title}{' '}
        </h1> */}

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
                  const episodeUrl = live[episodeKey]
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
                              Watch Online {live && live.title}
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
                              *Note: Please Use VPN Services for your devices to
                              get the channel to work.
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
                  const episodeUrl = live[episodeKey]
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
                              Watch Online {live && live.title}
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
                              *Note: Please Use VPN Services for your devices to
                              get the channel to work.
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
                  const episodeUrl = live[episodeKey]
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
                              Watch Online {live && live.title}
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
                              *Note: Please Use VPN Services for your devices to
                              get the channel to work.
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
                server 4
              </Tab>
              <Tab
                className={`${HomeStyles.tab} ${HomeStyles.server2}`}
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  textShadow: '2px 5px 5px #000000'
                }}
              >
                server 5
              </Tab>
              <Tab
                className={`${HomeStyles.tab} ${HomeStyles.server3}`}
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  textShadow: '2px 5px 5px #000000'
                }}
              >
                server 6
              </Tab>
            </TabList>
            {live && (
              <>
                {/* Server 01 content */}
                <TabPanel>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'center'
                    }}
                  >
                    {Array.from({ length: 10 }, (_, episodeNumber) => {
                      const downloadKey = `download${episodeNumber + 1}s1ser1`
                      const downloadLink = live && live[downloadKey] // Check if live exists
                      if (!downloadLink) return null
                      return (
                        <div
                          className='mb-5 mr-3'
                          key={`episode${episodeNumber + 1}`}
                        >
                          <button
                            className='episode-button relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110 cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0'
                            onClick={togglePopup4}
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
                          {showPopup4 && (
                            <div className='popup-overlay'>
                              <div className='popup'>
                                <button
                                  className='close-button'
                                  onClick={togglePopup4}
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
                                  Watch Online {live && live.title}
                                </h2>
                                <div className={Styles['iframe-container']}>
                                  <iframe
                                    className='rounded-3xl mr-8 flex border-1 border-blue-600 bg-gray-600 p-2'
                                    webkitallowFullScreen
                                    mozallowFullScreen
                                    allowFullScreen
                                    ref={audioIframeRef}
                                    id='audioIframe'
                                    src={downloadLink}
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
                                  *Note: Please Use VPN Services for your
                                  devices to get the channel to work.{' '}
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
                      const downloadKey = `download${episodeNumber + 1}s1ser2`
                      const downloadLink = live && live[downloadKey] // Check if live exists
                      if (!downloadLink) return null
                      return (
                        <div
                          className='mb-5 mr-3'
                          key={`episode${episodeNumber + 1}`}
                        >
                          <button
                            className='episode-button relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110 cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0'
                            onClick={togglePopup5}
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

                          {showPopup5 && (
                            <div className='popup-overlay'>
                              <div className='popup'>
                                <button
                                  className='close-button'
                                  onClick={togglePopup5}
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
                                  Watch Online {live && live.title}
                                </h2>
                                <div className={Styles['iframe-container']}>
                                  <iframe
                                    className='  rounded-3xl  mr-8 flex  border-1 border-blue-600 bg-gray-600 p-2 '
                                    webkitallowFullScreen
                                    mozallowFullScreen
                                    allowFullScreen
                                    ref={audioIframeRef}
                                    id='audioIframe'
                                    src={downloadLink}
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
                                  *Note: Please Use VPN Services for your
                                  devices to get the channel to work.
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </TabPanel>
                {/* Server 03 content */}
                <TabPanel>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'center'
                    }}
                  >
                    {Array.from({ length: 10 }, (_, episodeNumber) => {
                      const downloadKey = `download${episodeNumber + 1}s1ser3`
                      const downloadLink = live && live[downloadKey] // Check if live exists
                      if (!downloadLink) return null
                      return (
                        <div
                          className='mb-5 mr-3'
                          key={`episode${episodeNumber + 1}`}
                        >
                          <button
                            className='episode-button relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110 cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0'
                            onClick={togglePopup6}
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

                          {showPopup6 && (
                            <div className='popup-overlay'>
                              <div className='popup'>
                                <button
                                  className='close-button'
                                  onClick={togglePopup6}
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
                                  Watch Online {live && live.title}
                                </h2>
                                <div className={Styles['iframe-container']}>
                                  <iframe
                                    className='  rounded-3xl  mr-8 flex  border-1 border-blue-600 bg-gray-600 p-2 '
                                    webkitallowFullScreen
                                    mozallowFullScreen
                                    allowFullScreen
                                    ref={audioIframeRef}
                                    id='audioIframe'
                                    src={downloadLink}
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
                                  *Note: Please Use VPN Services for your
                                  devices to get the channel to work.
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </TabPanel>
              </>
            )}
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

         {/* Display existing comments */}
     <div style={{ marginTop: '20px' }}>
        {renderComments()}
      </div>

      {/* Comment form */}
      <CommentForm
        pageType="live"
        liveId={live.id}
        onSubmit={handleSubmitComment}
      />

        <div class='container1'>
          <ShareButtons
            title='Uwatchfree Online™'
            description='For Movies, TV Show & Sports social platform'
            shareMessage={shareMessage}
            image={live && live.url}
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
          &#x1F604;Trending Movies &#128515;
        </h2>

        <TrendingMovies />

        <Max />
        <div class='container1'>
          <ShareButtons
            title='Uwatchfree Online™'
            description='For Movies, TV Show & Sports social platform'
            shareMessage={shareMessage}
            image={live && live.url}
          />
        </div>
      </div>
    </div>
  )
}

export async function getStaticPaths () {
  const paths = livesData.map(live => ({
    params: { id: live.id } // Assuming each live object has an "id" field
  }))
  return { paths, fallback: false }
}

export async function getStaticProps ({ params }) {
  // Fetch the live data based on the provided id
  const live = livesData.find(m => m.id === params.id)

  return {
    props: {
      live
    }
  }
}

export default liveDetail

// "episode1sa1ser1": "https://d.daddylivehd.sx/embed/stream-65.php",
// "episode1sa1ser2": "https://daddylivehd.sx/embed/stream-267.php",
// "episode1sa1ser3": "https://daddylivehd.sx/embed/stream-500.php",
// "download1s1ser1": "https://d.daddylivehd.sx/embed/stream-35.php",
// "download1s1ser2": "https://daddylivehd.sx/embed/stream-40.php",
// "download3s1ser3": "https://daddylivehd.sx/embed/stream-33.php"
