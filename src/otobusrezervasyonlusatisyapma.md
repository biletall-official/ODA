# REZERVASYONLU SATIŞ YAPMA

:::info :exclamation: Not 
Rezervasyonlu satış yapma işlemi, satış yapma işlemindeki gibidir.Ek olarak RezervePnrNo bilgisi kullanılmaktadır.
:::

## İSTEK

```xml
<IslemSatis>
  <FirmaNo>37</FirmaNo>
  <KalkisNoktaID>738</KalkisNoktaID>
  <VarisNoktaID>84</VarisNoktaID>
  <Tarih>2018-12-09</Tarih>
  <Saat>1900-01-01T02:30:00+02:00</Saat>
  <HatNo>1</HatNo>
  <SeferNo>288179</SeferNo>
  <KalkisTerminalAdiSaatleri />
  <KoltukNo1>5</KoltukNo1>
  <Adi1>AHMET</Adi1>
  <Soyadi1>AKYOL</Soyadi1>
  <TcKimlikNo1>16285391016</TcKimlikNo1>
  <ServisYeriKalkis1>ANAYURT 2</ServisYeriKalkis1>
  <TelefonNo>5421111110</TelefonNo>
  <Cinsiyet>2</Cinsiyet>
  <ToplamBiletFiyati>15</ToplamBiletFiyati>
  <YolcuSayisi>1</YolcuSayisi>
  <BiletSeriNo>1</BiletSeriNo>
  <OdemeSekli>0</OdemeSekli>
  <FirmaAciklama />
  <HatirlaticiNot />
  <SeyahatTipi>0</SeyahatTipi>
  <WebYolcu>
    <WebUyeNo>0</WebUyeNo>
    <Ip>127.0.0.1</Ip>
    <Email>a@a.com</Email>
    <OnOdemeKullan>1</OnOdemeKullan>
    <OnOdemeTutar>15.0000</OnOdemeTutar>
    <RezervePnrNo>FC03037</RezervePnrNo>
  </WebYolcu>
</IslemSatis>
```

## CEVAP

```xml
<IslemSonuc>
  <Sonuc>true</Sonuc>
  <PNR>FC03037</PNR>
  <Mesaj />
  <SeferInternetTarihSaat>2018-12-10T02:30:00</SeferInternetTarihSaat>
  <Ebilet1>037011459533</Ebilet1>
</IslemSonuc>
```
