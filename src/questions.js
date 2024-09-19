// src/questions.js
const questions = [
  
  {
    text: (
      <span style={{ fontSize: '14px', textAlign: 'justify' }}>
        Bu ankette bazı politika tercihleriniz sorulacak ve fikirlerinizin Trump ve Kamala yakınlığı raporlanacaktır. Cevaplarınız kayıt altına alınmamaktadır. Kişisel bilgileriniz sorulmamaktadır. Sorular yapay zekaya Amerikada tartışılan politikalar ve başkan adaylarının tutumları üzerinden yazdırılmıştır.
      </span>
    ),
    options: [
      {
        text: '10 soruluk ankete ulaşmak için tıklayınız.',
        weight: 0,
      },
    ],
  },
  {
    text: 'Sağlık hizmetleri konusunda hangi politikaları destekliyorsunuz?',
    options: [
      
      {
        text: 'Sağlık hizmetinin devlet tarafından sağlanmasını destekliyorum.',
        party: 'Kamala',
        weight: 2,
      },
      {
        text: 'Özel sağlık çözümlerini teşvik etmeyi destekliyorum.',
        party: 'Trump',
        weight: 2,
      },
    ],
  },
  {
    text: 'Vergilendirme ve ekonomi politikaları hakkında ne düşünüyorsunuz?',
    options: [
      {
        text: 'Üst gelir grupları ve şirketler için vergi indirimlerini destekliyorum.',
        party: 'Trump',
        weight: 2,
      },
      {
        text: 'Zenginler ve büyük şirketler için vergileri artırmayı destekliyorum.',
        party: 'Kamala',
        weight: 2,
      },
    ],
  },
  {
    text: 'İklim değişikliği ve çevre politikaları hakkında görüşleriniz nelerdir?',
    options: [
      {
        text: 'İklim değişikliğiyle mücadele için kapsamlı planları destekliyorum.',
        party: 'Kamala',
        weight: 2,
      },
      {
        text: 'Çevresel düzenlemeleri azaltarak enerji sektörünü desteklemeyi tercih ediyorum.',
        party: 'Trump',
        weight: 2,
      },
    ],
  },
  {
    text: 'Göçmenlik politikaları konusunda hangi yaklaşımı destekliyorsunuz?',
    options: [
      {
        text: 'Sınır güvenliğini artırmayı ve yasaları sıkı uygulamayı destekliyorum.',
        party: 'Trump',
        weight: 2,
      },
      {
        text: 'Göçmenlere vatandaşlık yolu sağlayan politikaları destekliyorum.',
        party: 'Kamala',
        weight: 2,
      },
    ],
  },
  {
    text: 'Silah kontrolü konusunda hangi politikaları destekliyorsunuz?',
    options: [
      {
        text: 'Silah sahipliği üzerindeki kısıtlamaları azaltmayı tercih ediyorum.',
        party: 'Trump',
        weight: 2,
      },
      {
        text: 'Sıkı kontroller ve bazı silahların yasaklanması gibi önlemleri destekliyorum.',
        party: 'Kamala',
        weight: 2,
      },
    ],
  },
  {
    text: 'Ekonomik düzenlemeler ve iş dünyası politikaları hakkında ne düşünüyorsunuz?',
    options: [
      {
        text: 'İşletmeler üzerindeki düzenlemeleri azaltarak büyümeyi destekliyorum.',
        party: 'Trump',
        weight: 2,
      },
      {
        text: 'Şirketlere yönelik daha sıkı düzenlemeleri destekliyorum.',
        party: 'Kamala',
        weight: 2,
      },
      
    ],
  },
  {
    text: 'Dış politika ve uluslararası ilişkiler konusunda hangi yaklaşımları destekliyorsunuz?',
    options: [
      {
        text: 'Ulusal çıkarları ön planda tutmayı ve uluslararası anlaşmaları yeniden müzakere etmeyi destekliyorum.',
        party: 'Trump',
        weight: 2,
      },
      {
        text: 'Müttefiklerle iş birliğini güçlendirmeyi ve uluslararası anlaşmalara bağlı kalmayı destekliyorum.',
        party: 'Kamala',
        weight: 2,
      }
    ],
  },
  {
    text: 'Ceza adaleti ve polis reformu konusunda hangi politikaları destekliyorsunuz?',
    options: [
      {
        text: 'Yetkililerin hesap verebilirliğinin artırması önceliyorum.',
        party: 'Kamala',
        weight: 2,
      },
      {
        text: 'Kanun ve düzenin sağlanmasını önceliyorum.',
        party: 'Trump',
        weight: 2,
      },
      
    ],
  },
  {
    text: 'Eğitim politikaları hakkında ne düşünüyorsunuz?',
    options: [
      {
        text: 'Özel okul seçeneklerini teşvik etmeyi destekliyorum.',
        party: 'Trump',
        weight: 2,
      },
      {
        text: 'Devlet okullarına yatırım yapmayı ve ücretsiz eğitim sağlamayı destekliyorum.',
        party: 'Kamala',
        weight: 2,
      },
    ],
  },
  
];

export default questions;
