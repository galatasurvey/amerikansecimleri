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
  const [showWarning, setShowWarning] = useState(false); // State for warning message

  const totalScore = KamalaScore + TrumpScore;
  const KamalaPercentage = ((KamalaScore / totalScore) * 100).toFixed(0);
  const TrumpPercentage = ((TrumpScore / totalScore) * 100).toFixed(0);

  const data = [
    { name: 'Harris', value: parseFloat(KamalaPercentage) },
    { name: 'Trump', value: parseFloat(TrumpPercentage) },
  ];

  const COLORS = ['#0000FF', '#FF0000'];

  const resultRef = useRef(null);

  const handleDownloadScreenshot = async () => {
    setIsLoading(true);
    try {
      const element = resultRef.current;
      const canvas = await html2canvas(element, {
        useCORS: true,
        allowTaint: false,
        logging: false,
      });
      const dataUrl = canvas.toDataURL('image/jpeg');

      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'Galata_anket_sonucu.jpeg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Ekran görüntüsü alınamadı:', error);
      alert('Ekran görüntüsü alınırken bir hata oluştu. Lütfen tekrar deneyin.');
    }
    setIsLoading(false);
  };

  const handleCopyLink = () => {
    const shareUrl = `${window.location.origin}/`; // Adjust this if your survey starts at a different path
    navigator.clipboard
      .writeText(shareUrl)
      .then(() => {
        setShowWarning(true); // Show the warning message
        setTimeout(() => {
          setShowWarning(false); // Hide the warning after 2 seconds
        }, 2000); // 2 seconds
      })
      .catch((error) => {
        console.error('Link kopyalanamadı:', error);
        alert('Link kopyalanamadı.');
      });
  };

  const shareUrl = window.location.href;
  const shareTitle = `Amerikan siyasetçilere yakınlık anketi, benim sonuçlar: ${KamalaPercentage}% Kamala, ${TrumpPercentage}% Trump. 10 soruluk ankete katılmak için linke tıkla.`;

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
        <p style={{ marginTop: '0px' }}>Politika tercihlerinizin Amerika başkan adaylarına yakınlık oranları:</p>
        <div className="chart-container" style={{ margin: '0', padding: '0', marginBottom: '-40px' }}>
  <ResponsiveContainer width="100%" height={300}>
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
        Anket linki: <a href={shareUrl} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#ccc", padding: '2px 4px', borderRadius: '4px', textDecoration: 'none', color: 'black' }}>
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
      <div className="result2">
        {/* Copy link button */}
        <button onClick={handleCopyLink} className="button-copy-link">
          <span style={{ fontSize: '14px' }}>
            Anket linkini kopyala, gönder.
          </span>
        </button>

        {/* Warning message that appears for 2 seconds */}
        {showWarning && (
          <p style={{ color: 'green', fontSize: '12px', marginTop: '10px' }}>
            Link kopyalandı!
          </p>
        )}

        {isLoading && <p className="loading">İşlem yapılıyor, lütfen bekleyin...</p>}

        {/* Separate social share section */}
        <div className="social-share-buttons">
          <div className="share-icons" style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '12px' }}>
              Sonucu Paylaş:
            </span>

            <TwitterShareButton
              title={shareTitle}
              url={shareUrl}
              className="share-button"
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>

            <FacebookShareButton
              quote={shareTitle}
              url={shareUrl}
              className="share-button"
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>

            <TelegramShareButton
              title={shareTitle}
              url={shareUrl}
              className="share-button"
            >
              <TelegramIcon size={32} round />
            </TelegramShareButton>

            <WhatsappShareButton
              title={shareTitle}
              url={shareUrl}
              className="share-button"
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>
        </div>
        <button className="button-copy-link" onClick={handleDownloadScreenshot}>
          <span style={{ fontSize: '14px' }}>
            Ekran görüntüsünü kaydet.
          </span>
        </button>

      </div>

    </div>
  );
}

export default Result;
