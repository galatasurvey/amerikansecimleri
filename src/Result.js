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
        logging: true, // Enable logging for debugging
      });
      const dataUrl = canvas.toDataURL('image/png');

      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'Galata_anket_sonucu.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      alert('Ekran görüntüsü indirildi!');
    } catch (error) {
      console.error('Ekran görüntüsü alınamadı:', error);
      alert('Ekran görüntüsü alınırken bir hata oluştu. Lütfen tekrar deneyin.');
    }
    setIsLoading(false);
  };

  // Set the survey start URL
  const shareUrl = `${window.location.origin}/`; // Adjust this if your survey starts at a different path

  const handleCopyLink = () => {
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

  return (
    <div className="result" ref={resultRef}>
      {/* Use Base64 encoded image or ensure correct path */}
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
      <p>Verdiğin cevaplara göre fikirlerin yakınlık oranları:</p>
      <p>{KamalaPercentage}% Kamala</p>
      <p>{TrumpPercentage}% Trump</p>

      {isLoading && <p className="loading">İşlem yapılıyor, lütfen bekleyin...</p>}

      <div className="social-share-buttons">
        <button onClick={handleCopyLink} className="button-copy-link">
          Anket linkini kopyala, arkadaşlarına gönder.
        </button>
      </div>

      <button className="custom-button" onClick={handleDownloadScreenshot}>
        Ekran görüntüsünü al
      </button>
    </div>
  );
}

export default Result;
