// src/Result.js
import React, { useRef, useState } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
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
  const totalScore = KamalaScore + TrumpScore;
  const KamalaPercentage = ((KamalaScore / totalScore) * 100).toFixed(2);
  const TrumpPercentage = ((TrumpScore / totalScore) * 100).toFixed(2);

  const data = [
    { name: 'Kamala', value: parseFloat(KamalaPercentage) },
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
        alert('Link kopyalandı!');
      })
      .catch((error) => {
        console.error('Link kopyalanamadı:', error);
        alert('Link kopyalanamadı.');
      });
  };

  // Define the share URL and title/message for consistency across platforms
  const shareUrl = window.location.href;
  const shareTitle = `Amerikan siyasetçilere yakınlık anketi, benim sonuçlar: ${KamalaPercentage}% Kamala, ${TrumpPercentage}% Trump. Ankete katılmak için:`;

  return (
    <div className="result" ref={resultRef}>
    
      <div className="social-share-buttons">
  <button onClick={handleCopyLink} className="button-copy-link">
    Anket linkini kopyala, arkadaşlarına gönder.
  </button>
  <div className="share-icons">
  Sonuçlarını paylaş:
    {/* Twitter Share Button */}
    <TwitterShareButton
      url={shareUrl}
      title={shareTitle}
      className="share-button"
    >
      <TwitterIcon size={32} round />
    </TwitterShareButton>

    {/* Facebook Share Button */}
    <FacebookShareButton
      url={shareUrl}
      quote={shareTitle}
      className="share-button"
    >
      <FacebookIcon size={32} round />
    </FacebookShareButton>

    {/* Telegram Share Button */}
    <TelegramShareButton
      url={shareUrl}
      title={shareTitle}
      className="share-button"
    >
      <TelegramIcon size={32} round />
    </TelegramShareButton>

    {/* WhatsApp Share Button */}
    <WhatsappShareButton
      url={shareUrl}
      title={shareTitle}
      separator=":: "
      className="share-button"
    >
      <WhatsappIcon size={32} round />
    </WhatsappShareButton>
  </div>
</div>


      <button className="custom-button" onClick={handleDownloadScreenshot}>
        Ekran görüntüsünü al
      </button>
    </div>
  );
}

export default Result;
