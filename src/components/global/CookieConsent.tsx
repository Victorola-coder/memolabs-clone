import { useState, useEffect } from "react";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent");
    if (!hasConsented) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-green-500 text-white p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div>
          <h4 className="font-bold text-lg mb-2">Cookies on MEMO</h4>
          <p>
            We use cookies to improve your experience on our website. We'll
            never sell this data to anyone.
          </p>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <button
            onClick={handleDecline}
            className="px-6 py-2 border-2 border-white rounded-full hover:bg-white hover:text-blue-500 transition-colors"
          >
            No Thanks
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-2 bg-white text-blue-500 rounded-full hover:bg-opacity-90 transition-colors"
          >
            Sounds Good
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
