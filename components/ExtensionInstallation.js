import { useState } from 'react';

const ExtensionInstallation = () => {
  const [showPopup, setShowPopup] = useState(true); // State to control popup visibility

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <>
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50" onClick={closePopup}>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Install SquareX - Be Secure & Anonymous Extension</h2>
              <p className="mb-4">
                To enhance your experience on our website, please install the SquareX - Be Secure & Anonymous Chrome extension from the Chrome Web Store:
              </p>
              <a
                href="https://chrome.google.com/webstore/detail/squarex-be-secure-anonymo/kapjaoifikajdcdehfdlmojlepfpkpoe"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block py-2 px-4 rounded text-white bg-blue-500 hover:bg-blue-600 mr-2"
              >
                Install SquareX Extension
              </a>
              <button
                onClick={closePopup}
                className="btn-secondary inline-block py-2 px-4 rounded text-white bg-gray-500 hover:bg-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ExtensionInstallation;
