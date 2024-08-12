# İDO SATIŞ İPTAL İŞLEMİ

İdo biletinde satış iptali göndermeden önce ceza bilgisini sorgulamalısınız. Budo için satış iptali yapılamamaktadır.

## **Ceza Bilgisi Sorgulama :**

Bilet iptal edildiğinde oluşacak ceza bilgisi için

### İSTEK

```xml
<SatisIptalCezaGetirKomut>
  <Pnr>
    <FirmaNo>5000</FirmaNo>
    <PnrNo>PNRIDO</PnrNo>
    <PnrAramaParametre>OZTURK</PnrAramaParametre>
  </Pnr>
</SatisIptalCezaGetirKomut>
```

### CEVAP

Ceza bilgisi yolcu bazlı olarak aşağıdaki gibi gelmektedir.

| Alan             | Açıklama                                     |
| ---------------- | -------------------------------------------- |
| Tutar | Yolcunun toplam tutarı |
| Komisyon | Yolcu servis ücreti |
| FirmaCeza | Taşıyıcı firmanın ceza olarak keseceği tutar |
| KomisyonCezaliMi | Servis ücreti cezalı mı bilgisi |
| OlusanAcikPara | İptal servisine gönderilecek tutar |

```xml
<SatisIptalCeza>
  <Pnr>
    <PnrNo>PNRIDO</PnrNo>
    <Yolcular>
      <Yolcu>
        <EBiletNo>123456789</EBiletNo>
        <Ad>HAKKI</Ad>
        <Soyad>OZTURK</Soyad>
        <Tutar>59,0000</Tutar>
        <Komisyon>2,0000</Komisyon>
        <FirmaCeza>6,0000</FirmaCeza>
        <KomisyonCezaliMi>1</KomisyonCezaliMi>
        <ToplamCeza>8,0000</ToplamCeza>
        <OlusanAcikPara>51,0000</OlusanAcikPara>
      </Yolcu>
    </Yolcular>
  </Pnr>
</SatisIptalCeza>
```

## SATIŞ İPTAL İŞLEMİ

:::info :exclamation: Not
Satış iptal komuta iptal tutarı olarak ceza servisinden gelen yolcuların OlusanAcikPara değerlerini toplayıp göndermelisiniz.
:::

## İSTEK

```xml
<SatisIptalKomut>
  <Pnr>
    <PnrNo>PNRIDO</PnrNo>
    <PnrAramaParametre>OZTURK</PnrAramaParametre>
    <SatisIptalTutar>51.00</SatisIptalTutar>
  </Pnr>
</SatisIptalKomut>
```

## CEVAP

```xml
<IslemSonuc>
  <Sonuc>true</Sonuc>
  <Tutar>-51.0000</Tutar>
</IslemSonuc>
```
