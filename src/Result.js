import React, { useRef, useState } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import html2canvas from 'html2canvas';

function Result({ KamalaScore, TrumpScore }) {
  const [isLoading, setIsLoading] = useState(false);
  const [shareInstructions, setShareInstructions] = useState(false); // For desktop share instructions
  const resultRef = useRef(null);

  const totalScore = KamalaScore + TrumpScore;
  const KamalaPercentage = ((KamalaScore / totalScore) * 100).toFixed(0);
  const TrumpPercentage = ((TrumpScore / totalScore) * 100).toFixed(0);

  const data = [
    { name: 'Harris', value: parseFloat(KamalaPercentage) },
    { name: 'Trump', value: parseFloat(TrumpPercentage) },
  ];

  const COLORS = ['#0000FF', '#FF0000'];

  const handleDownloadAndShareScreenshot = async () => {
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

      // Check if Web Share API is supported
      if (navigator.share && file) {
        await navigator.share({
          title: 'Galata Anket Sonucu',
          text: 'Politika tercihlerinizin Amerika başkan adaylarına yakınlık oranları:',
          files: [file], // Share the screenshot file
        });
      } else {
        // Fallback for desktops: download the screenshot
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'Galata_anket_sonucu.jpeg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Show sharing instructions for desktop users
        setShareInstructions(true);
      }
    } catch (error) {
      console.error('Ekran görüntüsü alınamadı veya paylaşılamadı:', error);
      alert('Ekran görüntüsü alınırken bir hata oluştu. Lütfen tekrar deneyin.');
    }
    setIsLoading(false);
  };

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
      </div>

      {/* Button to trigger the screenshot and share */}
      <button className="button-copy-link" onClick={handleDownloadAndShareScreenshot}>
        <span style={{ fontSize: '14px' }}>
          Ekran görüntüsünü kaydet ve paylaş
        </span>
      </button>

      {isLoading && <p className="loading">İşlem yapılıyor, lütfen bekleyin...</p>}

      {/* Share instructions for desktop users */}
      {shareInstructions && (
        <div style={{ marginTop: '20px', fontSize: '14px', color: 'green' }}>
          <p>Ekran görüntüsü başarıyla kaydedildi!</p>
          <p>Şimdi dosyayı sosyal medya, e-posta veya mesajlaşma uygulamaları üzerinden paylaşabilirsiniz.</p>
        </div>
      )}
    </div>
  );
}

export default Result;
