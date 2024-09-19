import React, { useRef, useState } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import html2canvas from 'html2canvas';
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';

function Result({ KamalaScore, TrumpScore }) {
  const [isLoading, setIsLoading] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const totalScore = KamalaScore + TrumpScore;
  const KamalaPercentage = ((KamalaScore / totalScore) * 100).toFixed(0);
  const TrumpPercentage = ((TrumpScore / totalScore) * 100).toFixed(0);

  const data = [
    { name: 'Harris', value: parseFloat(KamalaPercentage) },
    { name: 'Trump', value: parseFloat(TrumpPercentage) },
  ];

  const COLORS = ['#0000FF', '#FF0000'];

  const resultRef = useRef(null);

  // Function to check if the user is on mobile
  const isMobileDevice = () => {
    return /Mobi|Android/i.test(navigator.userAgent);
  };

  const handleDownloadOrShare = async () => {
    setIsLoading(true);
    try {
      const element = resultRef.current;
      const canvas = await html2canvas(element, {
        useCORS: true,
        allowTaint: false,
        logging: false,
      });
      const dataUrl = canvas.toDataURL('image/jpeg');

      // Convert the base64 data URL to a Blob
      const response = await fetch(dataUrl);
      const blob = await response.blob();
      const file = new File([blob], 'Galata_anket_sonucu.jpeg', { type: blob.type });

      // Check if Web Share API is supported AND if it's a mobile device
      if (navigator.share && isMobileDevice()) {
        await navigator.share({
          title: 'Galata Anket Sonucu',
          text: 'Politika tercihlerinizin Amerika başkan adaylarına yakınlık oranları:',
          files: [file], // Share the screenshot file
        });
      } else {
        // Fallback for desktop: Download the screenshot
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'Galata_anket_sonucu.jpeg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error) {
      console.error('Ekran görüntüsü alınamadı veya paylaşılamadı:', error);
      alert('Ekran görüntüsü alınırken bir hata oluştu. Lütfen tekrar deneyin.');
    }
    setIsLoading(false);
  };

  const handleCopyLink = () => {
    const shareUrl = `${window.location.origin}/`;
    navigator.clipboard
      .writeText(shareUrl)
      .then(() => {
        setShowWarning(true);
        setTimeout(() => {
          setShowWarning(false);
        }, 2000);
      })
      .catch((error) => {
        console.error('Link kopyalanamadı:', error);
        alert('Link kopyalanamadı.');
      });
  };

  const shareUrl = window.location.href;
  const shareTitle = `Amerikan siyasetçilere yakınlık anketi, benim sonuçlar: ${KamalaPercentage}% Kamala, ${TrumpPercentage}% Trump. 9 soruluk ankete katılmak için linke tıkla.`;

  return (
    <div className="result-container">
      {/* The section to be captured in the screenshot */}
      <div className="result" ref={resultRef}>
        <img
          src={`${process.env.PUBLIC_URL}/logo_full.png`}
          alt="Logo"
          className="logo-fixed-bottom"
        />
        <hr />
        <p style={{ fontSize: '14px', marginTop: '0px' }}>
          Politika tercihlerinizin Amerika başkan adaylarına yakınlık oranları:
        </p>
        <div className="chart-container" style={{ margin: '0', padding: '0', marginTop: '-50px', marginBottom: '-40px' }}>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
                outerRadius="40%"
                fill="#8884d8"
                dataKey="value"
                isAnimationActive={true}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Conditional message based on the higher percentage */}
        {KamalaPercentage > TrumpPercentage ? (
          <p style={{ color: '#0000FF', fontSize: '18px', fontWeight: 'bold', marginTop: '0px' }}>
            Demokratlara daha yakınsınız!
          </p>
        ) : (
          <p style={{ color: '#FF0000', fontSize: '18px', fontWeight: 'bold', marginTop: '5px' }}>
            Cumhuriyetçilere daha yakınsınız!
          </p>
        )}

        <hr />
        Anket linki:{' '}
        <a
          href={shareUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#ccc',
            padding: '2px 4px',
            borderRadius: '4px',
            textDecoration: 'none',
            color: 'black',
          }}
        >
          {shareUrl}
        </a>
      </div>
      <button
        className="custom-button"
        onClick={() =>
          window.open('https://galataanket.anketekatil.com/auth/register', '_blank')
        }
      >
        <span style={{ fontSize: '12px' }}>
          Galata Anket'ten yeni anketler için kayıt ol.
        </span>
        
      </button>
      <hr></hr>
        {/* Copy link button */}
        <button onClick={handleCopyLink} className="button-copy-link">
          <span style={{ fontSize: '14px' }}>Anket linkini kopyala, paylaş.</span>
        </button>

        {/* Warning message that appears for 2 seconds */}
        {showWarning && (
          <p style={{ color: 'white', fontSize: '12px', marginTop: '10px' }}>
            Link kopyalandı!
          </p>
        )}

<p style={{ color: 'white', fontSize: '12px', marginTop: '-10px' }}>
          </p>

        {/* Display appropriate text based on the device */}
        <button className="button-copy-link" onClick={handleDownloadOrShare}>
          <span style={{ fontSize: '14px' }}>
            {isMobileDevice() ? 'Ekran görüntüsünü paylaş.' : 'Ekran görüntüsünü kaydet.'}
          </span>
        </button>
        {isLoading && <p  style={{ color: 'white', fontSize: '12px', marginTop: '10px' }}>İşlem yapılıyor, lütfen bekleyin...</p>}
      </div>
    
  );
}

export default Result;
