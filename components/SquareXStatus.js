// components/SquareXStatus.js

import { useEffect, useState } from 'react';

const SquareXStatus = () => {
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const extensionId = 'kapjaoifikajdcdehfdlmojlepfpkpoe';
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isChrome = userAgent.includes('chrome');

    // Check if SquareX extension is installed
    const checkExtensionInstallation = () => {
      if (isChrome) {
        setIsInstalled(userAgent.includes(extensionId));
      }
    };

    checkExtensionInstallation();

    // Listen for changes in the extension installation status
    const listener = () => {
      checkExtensionInstallation();
    };

    window.addEventListener('message', listener);

    return () => {
      window.removeEventListener('message', listener);
    };
  }, []);

  return (
    <div>
      {isInstalled ? (
        <p>SquareX extension is installed. Enjoy enhanced features!</p>
      ) : (
        <p>
          SquareX extension is not installed. Please{' '}
          <a
            href="https://chrome.google.com/webstore/detail/squarex-be-secure-anonymo/kapjaoifikajdcdehfdlmojlepfpkpoe"
            target="_blank"
            rel="noopener noreferrer"
          >
            install
          </a>{' '}
          it to access additional features.
        </p>
      )}
    </div>
  );
};

export default SquareXStatus;
