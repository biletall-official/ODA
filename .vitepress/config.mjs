import { defineConfig } from "vitepress";

export default defineConfig({
  title: "BiletAll ",
  description: "BiletAll Web Servis Teknik Dökümanı",
  themeConfig: {
    nav: [
      { text: "Başlangıç", link: "/amaç.md" },
      { text: "Katkıda Bulunanlar", link: "/katkidabulunanlar.md" },
      {
        text: "1.1.0",
        items: [{ text: "SÜRÜM NOTLARI", link: "/changelog.md" }],
      },
    ],

    sidebar: {
      "/changelog/": [
        {
          text: "Sürüm Notları",
          collapsible: true,
          collapsed: true,
          items: [{ text: "1.1.0", link: "/changelog.md" }],
        },
      ],
    },

    sidebar: [
      {
        text: "DÖKÜMANTASYON",
        collapsible: true,
        collapsed: true,

        items: [
          { text: "AMAÇ", link: "/amaç.md" },
          { text: "GENEL ŞARTLAR", link: "/genelsartlar.md" },
          { text: "ULAŞIM VE KULLANIM", link: "/ulasimvekullanim.md" },
        ],
      },
      {
        text: "SERVİSLER",
        link: "/servisler.md",
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: "OTOBÜS SERVİSLERİ",
            link: "/otobusservisleri.md",
            collapsed: true,
            collapsed: true,
            items: [
              { text: "1.FİRMA SORGULAMA", link: "/firmasorgulama.md" },
              {
                text: "2.KARA NOKTALARI KALKIŞ - VARIŞ SORGULAMA",
                link: "/karanoktalarısorgulama.md",
              },
              {
                text: "3.SEFER LİSTESİ SORGULAMA",
                link: "/otobusseferlistesisorgulama.md",
              },
              { text: "4.OTOBÜS SORGULAMA", link: "/otobussorgulama.md" },
              {
                text: "5.OTOBÜS KOLTUK KONTROL",
                link: "/otobuskoltukkontrol.md",
              },
              {
                text: "6.BİNECEĞİ YER BİLGİSİ SORGULAMA",
                link: "/otobusbinecegıyersorgulama.md",
              },
              {
                text: "7.SERVİS BİLGİSİ SORGULAMA",
                link: "/otobusservisbilgisisorgulama.md",
              },
              { text: "8.SATIŞ YAPMA", link: "/otobussatisyapma.md" },
              {
                text: "9.GÜZERGAH SORGULAMA",
                link: "/otobusguzergahsorgulama.md",
              },
              {
                text: "10.OTOBÜS FİRMA KOMİSYON SORGULAMA",
                link: "/otobusfirmakomisyonsorgulama.md",
              },
            ],
          },
          {
            text: "UÇAK SERVİSLERİ",
            link: "/havanoktalarisorgulama.md",
            collapsed: true,
            collapsed: true,
            items: [
              {
                text: "1.HAVA NOKTALARI SORGULAMA",
                link: "/havanoktalarisorgulama.md",
              },
              {
                text: "2.YURTİÇİ UÇUŞ LİSTESİ SORGULAMA",
                link: "/yurticiucuslistesisorgulama.md",
              },
              {
                text: "3.YURTDIŞI UÇUŞ LİSTESİ SORGULAMA",
                link: "/yurtdisiucuslistesisorgulama.md",
              },
              {
                text: "4.SEFER SEÇME - FİYAT ÇEKME",
                link: "/sefersecmefiyatcekme.md",
              },
              {
                text: "5.TAŞIYICI FİRMAYA GÖRE YOLCU YAŞ ARALIKLARI",
                link: "/tasiyicifirmayagoreyolcuyasaraliklari.md",
              },
              {
                text: "6.REZERVASYON , SATIŞ VE REZERVASYONU SATIŞA ÇEVİRME İŞLEMİ",
                link: "/rezervasyonsatisverezervasyonusatisacevirme.md",
              },
            ],
          },
          {
            text: "3D GÜVENLİK İLE SATIŞ YAPMA",
            link: "/ucdilesatisyapma.md",
          },
          {
            text: "PNR İŞLEM SERVİSLERİ",
            link: "/pnrislemservisleri.md",
            collapsed: true,
            collapsed: true,
            items: [
              { text: "1.PNR ARAMA", link: "/pnrarama.md" },
              {
                text: "2.REZERVASYON İPTAL İŞLEMİ",
                link: "/rezervasyoniptalislemi.md",
              },
              {
                text: "3.OTOBÜS SATIŞ İŞLEMİ",
                link: "/otobüssatisiptalislemi.md",
              },
              { text: "4.UÇAK SATIŞ İPTAL İŞLEMİ", link: "/ucaksatisyapma.md" },
              {
                text: "5.TARİH ARALIKLI SATIŞLAR VE İPTALLER LİSTELEME",
                link: "/tariharaliklisatislar.md",
              },
              { text: "6.PNR NKONFİRMASYON", link: "/pnrkonfirmasyon.md" },
              { text: "7.HES KODU SORGULAMA", link: "/heskodu.md" },
              {
                text: "8.GÜNCELLENMİŞ BİLETLER (UÇAK)",
                link: "/guncellenmisbiletler.md",
              },
            ],
          },
          {
            text: "ÖN ÖDEME İŞLEMLERİ",
            link: "/onodemebakiyesorgulama.md",
            collapsed: true,
            collapsed: true,
            items: [
              {
                text: "ÖN ÖDEME BAKİYE SORGULAMA",
                link: "/onodemebakiyesorgulama.md",
              },
              {
                text: "ÖN ÖDEME İŞLEMLERİ SORGULAMA",
                link: "/onodemeislemlerisorgulama.md",
              },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/biletall-official" },
    ],
    outlineTitle: "Bu Sayfada",
    outline: "deep",
  },
});
