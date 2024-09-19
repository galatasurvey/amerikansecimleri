// src/questions.js
const questions = [
  {
    text: 'Sağlık hizmetleri konusunda hangi politikaları destekliyorsunuz?',
    options: [
      {
        text: 'Özel sağlık çözümlerini teşvik etmeyi destekliyorum.',
        party: 'Trump',
        weight: 2,
      },
      {
        text: 'Herkes için sağlık hizmeti sağlamayı amaçlayan programları destekliyorum.',
        party: 'Kamala',
        weight: 2,
      },
      {
        text: 'Mevcut sistemi iyileştirerek seçenekleri genişletmeyi tercih ediyorum.',
        party: 'Kamala',
        weight: 1,
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
      {
        text: 'Mevcut vergi politikalarını korumayı tercih ediyorum.',
        party: 'Trump',
        weight: 1,
      },
    ],
  },
  {
    text: 'İklim değişikliği ve çevre politikaları hakkında görüşleriniz nelerdir?',
    options: [
      {
        text: 'Çevresel düzenlemeleri azaltarak enerji sektörünü desteklemeyi tercih ediyorum.',
        party: 'Trump',
        weight: 2,
      },
      {
        text: 'İklim değişikliğiyle mücadele için kapsamlı planları destekliyorum.',
        party: 'Kamala',
        weight: 2,
      },
      {
        text: 'Çevreyi korurken ekonomik büyümeyi de gözeten politikaları tercih ediyorum.',
        party: 'Kamala',
        weight: 1,
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
      {
        text: 'Sınır güvenliğini güçlendirirken insancıl göç reformlarını da destekliyorum.',
        party: 'Kamala',
        weight: 1,
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
      {
        text: 'Silah haklarını korurken makul kontrol önlemlerini de destekliyorum.',
        party: 'Kamala',
        weight: 1,
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
      {
        text: 'İş dünyasını desteklerken temel düzenlemeleri sürdürmeyi tercih ediyorum.',
        party: 'Trump',
        weight: 1,
      },
    ],
  },
  {
    text: 'Dış politika ve uluslararası ilişkiler konusunda hangi yaklaşımları destekliyorsunuz?',
    options: [
      {
        text: 'Ulusal çıkarları ön planda tutmayı ve anlaşmaları yeniden müzakere etmeyi destekliyorum.',
        party: 'Trump',
        weight: 2,
      },
      {
        text: 'Müttefiklerle iş birliğini güçlendirmeyi ve anlaşmalara bağlı kalmayı destekliyorum.',
        party: 'Kamala',
        weight: 2,
      },
      {
        text: 'Uluslararası iş birliğini sürdürürken bağımsızlığı da korumayı tercih ediyorum.',
        party: 'Trump',
        weight: 1,
      },
    ],
  },
  {
    text: 'Ceza adaleti ve polis reformu konusunda hangi politikaları destekliyorsunuz?',
    options: [
      {
        text: 'Kanun ve düzeni sağlamayı ve kolluk kuvvetlerini güçlü şekilde destekliyorum.',
        party: 'Trump',
        weight: 2,
      },
      {
        text: 'Adalet sisteminde reform yapmayı ve hesap verebilirliği artırmayı destekliyorum.',
        party: 'Kamala',
        weight: 2,
      },
      {
        text: 'Suçla mücadele ederken bazı reformları da destekliyorum.',
        party: 'Kamala',
        weight: 1,
      },
    ],
  },
  {
    text: 'Eğitim politikaları hakkında ne düşünüyorsunuz?',
    options: [
      {
        text: 'Okul seçimini ve özel seçenekleri teşvik etmeyi destekliyorum.',
        party: 'Trump',
        weight: 2,
      },
      {
        text: 'Devlet okullarına yatırım yapmayı ve ücretsiz eğitim sağlamayı destekliyorum.',
        party: 'Kamala',
        weight: 2,
      },
      {
        text: 'Mevcut sistemi korurken iyileştirmeler yapmayı tercih ediyorum.',
        party: 'Kamala',
        weight: 1,
      },
    ],
  },
  {
    text: 'Eşitlik ve insan hakları konusundaki görüşleriniz nelerdir?',
    options: [
      {
        text: 'Geleneksel aile değerlerini korumayı destekliyorum.',
        party: 'Trump',
        weight: 2,
      },
      {
        text: 'Herkes için eşit hakları ve ayrımcılık karşıtı yasaları destekliyorum.',
        party: 'Kamala',
        weight: 2,
      },
      {
        text: 'Bireysel haklara saygı duyulmalı, ancak dini özgürlükler de korunmalı.',
        party: 'Trump',
        weight: 1,
      },
    ],
  },
];

export default questions;
