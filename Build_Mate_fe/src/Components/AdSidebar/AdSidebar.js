import React, { useEffect, useState } from 'react';
import './AdSidebar.css';  // Optional: For custom styling

const AdSidebar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Set a timeout to show the sidebar after 5 seconds
    const timer = setTimeout(() => {
      setVisible(true);
    }, 5000);

    return () => clearTimeout(timer); // Clean up the timeout if the component unmounts
  }, []);

  useEffect(() => {
    if (visible) {
      // Insert the AdSense script
      const script = document.createElement('script');
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9020312665880795";
      script.async = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);

      script.onload = () => {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (error) {
          console.error("AdSense script loaded but encountered an error:", error);
        }
      };
    }
  }, [visible]);

  const handleHideSidebar = () => {
    setVisible(false);
  };

  return (
    visible && (
      <div className="ad-sidebar">
        <button className="hide-button" onClick={handleHideSidebar}>
          Hide
        </button>
        <ins className="adsbygoogle"
             style={{ display: 'block', width: '100%', height: 'auto' }}
             data-ad-client="ca-pub-9020312665880795"
             data-ad-slot="YOUR_AD_SLOT_ID"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      </div>
    )
  );
};

export default AdSidebar;
