# UÇAK SATIŞ YAPMA

:::info
Uçak biletinde satış iptali göndermeden önce ceza bilgisini sorgulamalısınız.
:::

## CEZA BİLGİSİ SORGULAMA

Ceza bilgisi yolcu bazlı olarak aşağıdaki gibi gelmektedir.

### İSTEK

```xml
<SatisIptalCezaGetirKomut>
  <Pnr>
    <PnrNo>XXXYAS</PnrNo>
    <PnrAramaParametre>OZTURK</PnrAramaParametre>
  </Pnr>
</SatisIptalCezaGetirKomut>
```
|ALAN|AÇIKLAMA|
| ----------------------- | ------------------------ |
| **PnrNo***             | PNR Numarası             |
| **PnrAramaParametre*** | Soyad ya da Cep Telefonu |

:::info
(*) ile işrateli alanlar, gönderilmesi zorunlu alanlardır.
:::

#### CEVAP
|ALAN|AÇIKLAMA|
| ---------------- | -------------------------------------------- |
| Tutar            | Yolcunun toplam tutarı                       |
| Komisyon         | Yolcu servis ücreti                          |
| FirmaCeza        | Taşıyıcı firmanın ceza olarak keseceği tutar |
| KomisyonCezaliMi | Servis ücreti cezalı mı bilgisi              |
| OlusanAcikPara   | İptal servisine gönderilecek tutar           |

```xml
<SatisIptalCeza>
  <Pnr>
    <PnrNo>XXXYAS</PnrNo>
    <Yolcular>
      <Yolcu>
        <EBiletNo>2352317041611</EBiletNo>
        <Ad>HASAN</Ad>
        <Soyad>OZTURK</Soyad>
        <Tutar>434,9800</Tutar>
        <Komisyon>5,0000</Komisyon>
        <FirmaCeza>120,0000</FirmaCeza>
        <KomisyonCezaliMi>1</KomisyonCezaliMi>
        <ToplamCeza>125,0000</ToplamCeza>
        <OlusanAcikPara>309,9800</OlusanAcikPara>
      </Yolcu>
    </Yolcular>
  </Pnr>
</SatisIptalCeza>
```

## SATIŞ İPTAL İŞLEMİ

:::warning
Satış iptal komuta iptal tutarı olarak ceza servisinden gelen yolcuların OlusanAcikPara değerlerini toplayıp göndermelisiniz.
:::

### İSTEK

```xml
<SatisIptalKomut>
  <Pnr>
    <PnrNo>XXXYAS</PnrNo>
    <PnrAramaParametre>OZTURK</PnrAramaParametre>
    <SatisIptalTutar>309.9800</SatisIptalTutar>
  </Pnr>
</SatisIptalKomut>
```

#### CEVAP

```xml
<IslemSonuc>
  <Sonuc>true</Sonuc>
  <Tutar>-309.9800</Tutar>
</IslemSonuc>
```

## SATIŞI İPTAL EDİP OLUŞAN AÇIK PARANIN İADESİ

### İSTEK

```xml
<SatisIptalKomut>
     <Pnr>
        <FirmaNo>1001</FirmaNo>
        <PnrNo>VC56WK</PnrNo>
        <PnrAramaParametre>AYTEKELI</PnrAramaParametre>
        <KomisyonCezaliMi>1</KomisyonCezaliMi>
        <SatisIptalTutar>163.9000</SatisIptalTutar>
        <AcikParaIadeEdilsinMi>1</AcikParaIadeEdilsinMi>
    </Pnr>
</SatisIptalKomut>
```
