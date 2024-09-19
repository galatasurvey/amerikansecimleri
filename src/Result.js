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
  const KamalaPercentage = ((KamalaScore / totalScore) * 100).toFixed(0);
  const TrumpPercentage = ((TrumpScore / totalScore) * 100).toFixed(0);

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

  const shareUrl = window.location.href;
  const shareTitle = `Amerikan siyasetçilere yakınlık anketi, benim sonuçlar: ${KamalaPercentage}% Kamala, ${TrumpPercentage}% Trump. Ankete katılmak için:`;

  return (
    <div className="result-container">
      {/* The section to be captured in the screenshot */}
      <div className="result" ref={resultRef}>
      <img
          src={`${process.env.PUBLIC_URL}/logo_full.png`}
          alt="Logo"
          className="logo-fixed-bottom"
        />
        <h2>Fikirlerin Amerikan siyasetçilerinden kime daha yakın?</h2>
        <div className="chart-container">
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
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <p>Verdiğiniz cevaplara göre siyasetçilere yakınlık oranları:</p>
        <p>{KamalaPercentage}% Kamala Harris</p>
        <p>{TrumpPercentage}% Donald Trump</p>
        <hr />

        anket linki:       <a href={shareUrl} target="_blank" rel="noopener noreferrer">
  {shareUrl}
</a>      </div>
      <div className="result">
      {/* Separate download screenshot button */}
      <button onClick={handleCopyLink} className="button-copy-link">
          Anket linkini kopyala, arkadaşlarına gönder.
        </button>
      <button className="button-copy-link" onClick={handleDownloadScreenshot}>
        Ekran görüntüsünü al
      </button>

      {isLoading && <p className="loading">İşlem yapılıyor, lütfen bekleyin...</p>}

      {/* Separate social share section */}
      <div className="social-share-buttons">
        
        <div className="share-icons">
          Sonuçlarını paylaş:
          <TwitterShareButton
            url={shareUrl}
            title={shareTitle}
            className="share-button"
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>

          <FacebookShareButton
            url={shareUrl}
            quote={shareTitle}
            className="share-button"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <TelegramShareButton
            url={shareUrl}
            title={shareTitle}
            className="share-button"
          >
            <TelegramIcon size={32} round />
          </TelegramShareButton>

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
      </div>
    </div>
  );
}

export default Result;
