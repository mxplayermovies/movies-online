import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Add the script tag for the YouTube IFrame Player API */}
       
          {/* Include Bootstrap and Tailwind CSS */}
         
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
