# TARİH ARALIKLI SATIŞLAR VE İPTALLER LİSTELEME

:::tip
Tarih aralıklı satış ve iptallerinizi işlem bazında görmenizi sağlar. Tarih aralığında sizin yaptığınız veya sizin biletinize yapılan işlemleri listeler. Belli aralıklarla bu sorguyu çalıştırarak kendi veritabanınızla biletall arasındaki senkronizasyonu sağlayabilirsiniz.
:::
:::warning
Cevap xml’indeki “IslemiYapanFarkliKullaniciMi” sizin satış işlemleriniz başka bir kullanıcı tarafından(biletall veya çağrı merkezi) iptal edilmişse 1 değerini alır.
:::

## İSTEK

```xml
 <Islemlerim_2 xmlns="">
  <BaslangicTarihi>2019-12-09T10:00:00</BaslangicTarihi>
  <BitisTarihi>2019-12-09T11:00:00</BitisTarihi>
</Islemlerim_2>
```

## CEVAP

```xml
<Islemler xmlns="">
  <Islem>
    <PNR>123456</PNR>
    <PnrSoyad>TEST</PnrSoyad>
    <Tel>5321231234</Tel>
    <EBiletNo>1111111</EBiletNo>
    <YolcuAd>ZUHAL</YolcuAd>
    <YolcuSoyad>TEST</YolcuSoyad>
    <IslemTipi>SATIS</IslemTipi>
    <IslemTarihi>2019-09-23T15:23:03.92+03:00</IslemTarihi>
    <IslemiYapanKullanici>xyz.com WS Kullanıcısı</IslemiYapanKullanici>
    <IslemiYapanFarkliKullaniciMi>0</IslemiYapanFarkliKullaniciMi>
  </Islem>
  <Islem>
    <PNR>456789</PNR>
    <PnrSoyad>TEST</PnrSoyad>
    <Tel>5321231234</Tel>
    <EBiletNo>222222</EBiletNo>
    <YolcuAd>BERNA</YolcuAd>
    <YolcuSoyad>TEST</YolcuSoyad>
    <IslemTipi>SATISIPTAL</IslemTipi>
    <IslemTarihi>2019-09-23T15:22:45.733+03:00</IslemTarihi>
    <IslemiYapanKullanici>Biletall.com</IslemiYapanKullanici>
    <IslemiYapanFarkliKullaniciMi>1</IslemiYapanFarkliKullaniciMi>
  </Islem>
  <Islem>
    <PNR>369852</PNR>
    <PnrSoyad>TEST</PnrSoyad>
    <Tel>5321231234</Tel>
    <EBiletNo>4444444</EBiletNo>
    <YolcuAd>ONUR</YolcuAd>
    <YolcuSoyad>TEST</YolcuSoyad>
    <IslemTipi>SATIS</IslemTipi>
    <IslemTarihi>2019-09-23T15:22:20.57+03:00</IslemTarihi>
    <IslemiYapanKullanici>xyz.com WS Kullanıcısı</IslemiYapanKullanici>
    <IslemiYapanFarkliKullaniciMi>0</IslemiYapanFarkliKullaniciMi>
  </Islem>
</Islemler>
```
