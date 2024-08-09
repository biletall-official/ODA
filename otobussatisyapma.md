# SATIŞ YAPMA

## ŞEMA

Sorgulamada kullanacağımız alanların xml şeması aşağıdaki gibidir.
| FirmaNo                   | Seçilen seferi yapacak olan firmanın firma numarası |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| **KalkisNoktaID\***       | Seçilen seferin KalkisNoktaID değeri. **Format:(string, min:2 max: 30 karakter).**                                                                                                                                                                   |
| **VarisNoktaID\***        | Seçilen seferin VarisNoktaID değeri. **Format:(string, min:2 max: 30 karakter).**                                                                                                                                                                    |
| **Tarih\***               | Seçilen seferin kalkış tarihi (Sefer listesinde bulunan Tarih alanı)**Format:(datetime, ‘yyyy-MM-dd’).**                                                                                                                                             |
| **Saat\***                | Seçilen seferin kalkış saati (Sefer listesinde bulunan Saat alanı)**Format:(datetime, ‘s’).**                                                                                                                                                        |
| **HatNo\***               | Seçilen seferin hat numarası (Sefer listesinde bulunan HatNo alanı)**Format: integer**                                                                                                                                                               |
| **SeferNo\***             | Sefer listesinde bulunan SeferTakipNo alanı                                                                                                                                                                                                          |
| **KoltukNo1\***           | İlk yolcu için seçilen koltuk numarası                                                                                                                                                                                                               |
| **Adi1\***                | İlk yolcunun adı                                                                                                                                                                                                                                     |
| **SoyAdi1\***             | İlk yolcunun soyadı.Yolcu Ad Soyad Bilgileri toplamda 20 karakteri geçmemelidir.Yolcu Ad ve Soyadı türkçe karakter içermemelidir.                                                                                                                    |
| TcVatandasiMi1            | 1 ya da boş gönderildiğinde TcKimlikNo değeri zorunlu hale gelir. TC Vatandaşı olmayan her yolcu için 0 gönderilmelidir.                                                                                                                             |
| TcKimlikNo1               | İlk yolcunun kimlik numarası.Tc Vatandaşları için zorunludur.                                                                                                                                                                                        |
| HESKodu1                  | İlk yolcunun HES Kodu Tc Vatandaşları için zorunludur.                                                                                                                                                                                               |
| PasaportUlkeKod1          | TC Vatandaşı olmayan her yolcu için pasaport ülke kodu bilgisi. Ülkelerin ikili kodları gönderilmelidir. |

| PasaportNo1               | TC Vatandaşı olmayan her yolcu için pasaport numarası bilgisi.                                                                                                                                                                                       |
| BinecegiYer1              | İlk yolcunun yolda bineceği yer bilgisi. (Biniş yerinin adı) **Format:(string, max: 15 karakter).**                                                                                                                                                  |
| ServisYeriKalkis1         | İlk yolcunun seferden önce alınacağı servis durağıdır.(Servis noktasının adı. Aynı anda Bineceği yer ve Kalkış servisi seçilmemelidir.) **Format:(string, max: 15 karakter).**                                                                       |
| ServisYeriVaris1          | İlk yolcunun seferden sonra alınacağı servis durağıdır.(Servis noktasının adı) **Format:(string, max: 15 karakter).**                                                                                                                                |
| **TelefonNo\***           | Telefon numarası bilgisi **Format:(string, 10 karakter - XXXXXXXXXX).**                                                                                                                                                                              |
| **Cinsiyet\***            | Cinsiyet bilgisi. **Bayan Satış = 1 , Bay Satış = 2**                                                                                                                                                                                                |
| **ToplamBiletFiyati\***   | Toplam bilet fiyatını içerir. Fiyat yanlış gönderilirse satış işlemi gerçekleştirilmeyecektir.                                                                                                                                                       |
| **YolcuSayisi\***         | Biletteki yolcu sayısı                                                                                                                                                                                                                               |
| **BiletSeriNo\***         | Bu değer sabittir ve 1 (birdir).                                                                                                                                                                                                                     |
| **OdemeSekli\***          | Bu değer sabittir ve 0 (sıfırdır).                                                                                                                                                                                                                   |
| **SeyahatTipi\***         | Bu değer sabittir ve 0 (sıfırdır).                                                                                                                                                                                                                   |
| WebUyeNo                  | Bu değer sabittir ve 0 (sıfırdır).                                                                                                                                                                                                                   |
| **IP\***                  | Site ziyaretçisinin Ip adresi                                                                                                                                                                                                                        |
| Email                     | Yolcu email adresi ( Pattern = ^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)                                                                                                                                                                 | (([\w-]+\.)+))([a-zA-Z]{2,4} | [0-9]{1,3})(\]?)$) |
| KrediKartNo               | Kart numarası Not: Yalnıca Kredi Kartı satışlarında kart bilgileri gönderilmelidir. Kredi kartı ile ödeme yapılmıyorsa kart bilgilerini göndermeye gerek yoktur.                                                                                     |
| KrediKartSahip            | Kart sahibinin ismi                                                                                                                                                                                                                                  |
| KrediKartGecerlilikTarihi | Kartın son kullanma tarihi **Format : (string,‘Ay.Yil’,Örnek : 24.2020).**                                                                                                                                                                           |
| KrediKartCCV2             | Kartın CCV numarası                                                                                                                                                                                                                                  |
| OnOdemeKullan             | Ön Ödeme kullanılıyorsa bu değer 1 olmalıdır. **_<u>Not:</u>_** Yalnıca Ön Ödeme satışlarında bu bilgiler gönderilmelidir. Ön ödeme ile ödeme yapılmıyorsa bu bilgileri göndermeye gerek yoktur.                                                     |
| OnOdemeTutar              | Ön ödemeden ne kadar kullanılacağı bilgisi **_<u>Not:</u>_** Olası açık biletleri kullanımı için bu şekildedir. Açık bilet kullanımı yoksa bu değer toplam bilet fiyatına eşit olmalıdır.                                                            |
| AcikPnrNo                 | Açık biletin PNR kodu **_<u>Not:</u>_** Açık bilet kullanımı yoksa bu bilgiler gönderilmemelidir.                                                                                                                                                    |
| AcikPnrSoyad(Yeni)        | Açık biletin Soyad bilgisi **_<u>Not:</u>_** Açık bilet kullanımı yoksa bu bilgiler gönderilmemelidir.                                                                                                                                               |
| AcikTutar                 | Açık biletten kullanılacak tutar.                                                                                                                                                                                                                    |
| RezervePnrNo              | Eğer Satış işlemi aslında bir Rezervasyonlu Satış ise ilgili rezervasyonun PNR kodu.                                                                                                                                                                 |
| SeferKod                  | Eğer koltuk seçimi olmayan bir seferse ilgili seferin otobüs sefer listesi cevabında dönen SeferKod değeri gönderilmelidir. Koltuk seçimi yapılmayan seferler için zorunlu bir alandır. Koltuk seçimi yapılabilen seferler için boş gönderilmelidir. |

:::info
(\*) ile işaretli alanlar, gönderilmesi zorunlu alanlardır.
:::

:::danger
Kredi Kartı ödeme yöntemi, Önödeme ödeme yöntemi ve 3D secure zorunluluğu hakkında kullanıcınızı yönlendirmek için, aşağıda size sunulan alanları kullanmalısınız. Aşağıda 3 taşıyıcı firma için örnek durumlar sunulmuştur. Bu firmalar örnek firmalar olup güncel durumun sonuç içerisindeki XML’den kontrol edilmesi gerekir.
:::

```xml
<Otobus> Sonuc XML'i içerisinde <OdemeKurallari> tag’i bulunmaktadır.
```

| Firmalar    | **OdemeKurallari** içinde **OnOdemeAktifMi** alanı şu değer ise |
| ----------- | --------------------------------------------------------------- |
| Metro       | **0** (Sadece Kredi Kartından satabilir, Önödeme satamaz)       |
| OrnekFirma1 | **0** (Sadece Kredi Kartından satabilir, Önödeme satamaz)       |
| OrnekFirma2 | **1** (Önödemeli satış yetkiniz varsa, önödeme ile satabilir)   |

:::info
Yukardaki önödeme satış yapılamayan durumda Kredi Kart’ı ile satış yapılır ve aşağıdaki kurallara göre uygun ödeme yöntemi belirlenir.
:::

| Firmalar    | **OdemeKurallari** içinde **Odeme3DsecureAktifmi** alanı şu değer ise | **OdemeKurallari** içinde **Odeme3DsecureZorunlumu** alanı şu değer ise               |
| ----------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Metro       | **1** (3D ödeme yöntemi kullanılabilir durumda)                       | **0** (normal kredi kartı satış veya 3D secure ödeme yönteminden biri kullanılabilir) |
| OrnekFirma1 | **0** (3D ödeme yöntemi kullanılamaz)                                 | **0**                                                                                 |
| OrnekFirma2 | **1** (3D ödeme yöntemi kullanılabilir durumda)                       | **1** (sadece 3D ödeme yöntemi kullanılmalı)                                          |

```xml
<xs:element name="IslemSatis">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="FirmaNo" type="intOzel" />
      <xs:element name="KalkisNoktaID" type="xs:int" />
      <xs:element name="VarisNoktaID" type="xs:int" />
      <xs:element name="Tarih" type="trh" />
      <xs:element name="Saat" type="xs:dateTime" />
      <xs:element name="HatNo" type="intOzel" />
      <xs:element name="SeferNo" type="xs:string" />
      <xs:element name="KoltukNo1" type="byte99" />
      <xs:element name="Adi1" type="AdSoyad" />
      <xs:element name="Soyadi1" type="AdSoyad" />
      <xs:element name="Cinsiyet1" type="byte2" />
      <xs:element name="TcVatandasiMi1" type="xs:byte" minOccurs="0" />
      <xs:element name="TcKimlikNo1" type="xs:long" minOccurs="0" />
      <xs:element name="HESKodu1" type="Str12" minOccurs="0" />
      <xs:element name="PasaportUlkeKod1" type="Str15" minOccurs="0" />
      <xs:element name="PasaportNo1" type="Str15" minOccurs="0" />
      <xs:element name="BinecegiYer1" type="Str15" minOccurs="0" />
      <xs:element name="ServisYeriKalkis1" type="Str15" minOccurs="0" />
      <xs:element name="ServisYeriVaris1" type="Str15" minOccurs="0" />
      <xs:element name="KoltukNo2" type="byte99" minOccurs="0" />
      <xs:element name="Adi2" type="AdSoyad" minOccurs="0" />
      <xs:element name="Soyadi2" type="AdSoyad" minOccurs="0" />
      <xs:element name="Cinsiyet2" type="byte2" />
      <xs:element name="TcVatandasiMi2" type="xs:byte" minOccurs="0" />
      <xs:element name="TcKimlikNo2" type="xs:long" minOccurs="0" />
      <xs:element name="PasaportUlkeKod2" type="Str15" minOccurs="0" />
      <xs:element name="PasaportNo2" type="Str15" minOccurs="0" />
      <xs:element name="BinecegiYer2" type="Str15" minOccurs="0" />
      <xs:element name="ServisYeriKalkis2" type="Str15" minOccurs="0" />
      <xs:element name="ServisYeriVaris2" type="Str15" minOccurs="0" />
      <xs:element name="KoltukNo3" type="byte99" minOccurs="0" />
      <xs:element name="Adi3" type="AdSoyad" minOccurs="0" />
      <xs:element name="Soyadi3" type="AdSoyad" minOccurs="0" />
      <xs:element name="Cinsiyet3" type="byte2" />
      <xs:element name="TcVatandasiMi3" type="xs:byte" minOccurs="0" />
      <xs:element name="TcKimlikNo3" type="xs:long" minOccurs="0" />
      <xs:element name="PasaportUlkeKod3" type="Str15" minOccurs="0" />
      <xs:element name="PasaportNo3" type="Str15" minOccurs="0" />
      <xs:element name="BinecegiYer3" type="Str15" minOccurs="0" />
      <xs:element name="ServisYeriKalkis3" type="Str15" minOccurs="0" />
      <xs:element name="ServisYeriVaris3" type="Str15" minOccurs="0" />
      <xs:element name="KoltukNo4" type="byte99" minOccurs="0" />
      <xs:element name="Adi4" type="AdSoyad" minOccurs="0" />
      <xs:element name="Soyadi4" type="AdSoyad" minOccurs="0" />
      <xs:element name="Cinsiyet4" type="byte2" />
      <xs:element name="TcVatandasiMi4" type="xs:byte" minOccurs="0" />
      <xs:element name="TcKimlikNo4" type="xs:long" minOccurs="0" />
      <xs:element name="PasaportUlkeKod4" type="Str15" minOccurs="0" />
      <xs:element name="PasaportNo4" type="Str15" minOccurs="0" />
      <xs:element name="BinecegiYer4" type="Str15" minOccurs="0" />
      <xs:element name="ServisYeriKalkis4" type="Str15" minOccurs="0" />
      <xs:element name="ServisYeriVaris4" type="Str15" minOccurs="0" />
      <xs:element name="TelefonNo" type="xs:long" />
      <xs:element name="Cinsiyet" type="byte2" />
      <xs:element name="ToplamBiletFiyati" type="fiyat" />
      <xs:element name="YolcuSayisi" type="byte4" />
      <xs:element name="BiletSeriNo" type="xs:integer" minOccurs="0" />
      <xs:element name="OdemeSekli" type="xs:byte" minOccurs="0" />
      <xs:element name="UyeNo" type="xs:int" minOccurs="0" />
      <xs:element name="FirmaAciklama" type="Str20" minOccurs="0" />
      <xs:element name="HatirlaticiNot" type="Str100" minOccurs="0" />
      <xs:element name="SeyahatTipi" type="xs:byte" minOccurs="0" />
      <xs:element name="SeferKod" type="xs:string" minOccurs="0" />
      <xs:element name="WebYolcu" minOccurs="0">
        <xs:complexType>
          <xs:sequence>
            <xs:element name="WebUyeNo" type="xs:integer" />
            <xs:element name="Ip" type="IpType" />
            <xs:element name="Email" type="EmailType" />
            <xs:element name="KrediKartNo"type="xs:string"minOccurs="0"/>
            <xs:element name="KrediKartSahip" type="xs:string" minOccurs="0" />
            <xs:element name="KrediKartGecerlilikTarihi" type="xs:string" minOccurs="0" />
            <xs:element name="KrediKartCCV2" type="xs:string" minOccurs="0" />
            <xs:element name="OnOdemeKullan" type="xs:byte" minOccurs="0" />
            <xs:element name="OnOdemeTutar" type="fiyat" minOccurs="0" />
            <xs:element name="AcikPnrNo" type="xs:string" minOccurs="0" />
            <xs:element name="AcikPnrSoyad" type="xs:string" minOccurs="0" />
            <xs:element name="AcikTutar" type="fiyat" minOccurs="0" />
            <xs:element name="RezervePnrNo" type="xs:string" minOccurs="0" />
          </xs:sequence>
        </xs:complexType>
      </xs:element>
    </xs:sequence>
  </xs:complexType>
</xs:element>

```

## STANDART İSTEK

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
  <KoltukNo1>6</KoltukNo1>
  <Adi1>AHMET</Adi1>
  <Soyadi1>AKYOL</Soyadi1>
  <TcKimlikNo1>16285391016</TcKimlikNo1>
  <HESKodu1>T5N5196418</HESKodu1>
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
  </WebYolcu>
</IslemSatis>

```

### CEVAP

| Sonuc                  | İşlemin başarılı olup olmadığını belirtir      |
| ---------------------- | ---------------------------------------------- |
| PNR                    | Oluşan PNR kodunu belirtir.                    |
| Mesaj                  | Bilet firma mesajını içerir.                   |
| Ebilet1                | İlk Yolcunun bilet numarası                    |
| Ebilet2                | İkinci Yolcunun bilet numarası                 |
| Ebilet3                | Üçüncü Yolcunun bilet numarası                 |
| Ebilet4                | Dördüncü Yolcunun bilet numarası               |
| SeferInternetTarihSaat | Sefer gerçekleşeceği tarihi ve saati belirtir. |

```xml
<IslemSonuc>
  <Sonuc>true</Sonuc>
  <PNR>GC03037</PNR>
  <Mesaj />
  <SeferInternetTarihSaat>2018-12-10T02:30:00</SeferInternetTarihSaat>
  <Ebilet1>037011459532</Ebilet1>
</IslemSonuc>
```

## SEFER KOD İLE İSTEK

```xml
<IslemSatis>
  <FirmaNo>-276</FirmaNo>
  <KalkisNoktaID>2004</KalkisNoktaID>
  <VarisNoktaID>1384</VarisNoktaID>
  <Tarih>2023-09-17</Tarih>
  <Saat>1900-01-01T12:15:00+03:00</Saat>
  <HatNo>1</HatNo>
  <SeferNo>620529826</SeferNo>
  <KalkisTerminalAdiSaatleri />
  <KoltukNo1>1</KoltukNo1>
  <Adi1>AHMET</Adi1>
  <Soyadi1>AKYOL</Soyadi1>
  <TcKimlikNo1>16285391016</TcKimlikNo1>
  <HESKodu1>T5N5196418</HESKodu1>
  <TelefonNo>5421111110</TelefonNo>
  <Cinsiyet>1</Cinsiyet>
  <ToplamBiletFiyati>410</ToplamBiletFiyati>
  <YolcuSayisi>1</YolcuSayisi>
  <BiletSeriNo>1</BiletSeriNo>
  <OdemeSekli>0</OdemeSekli>
  <FirmaAciklama />
  <HatirlaticiNot />
  <SeyahatTipi>0</SeyahatTipi>
  <SeferKod>RmFsc2UsUk9OLFNpbXBhVHJhbnNPQlVTU3RhbmRhcmQ=</SeferKod>
  <WebYolcu>
    <WebUyeNo>0</WebUyeNo>
    <Ip>127.0.0.1</Ip>
    <Email>a@a.com</Email>
    <OnOdemeKullan>1</OnOdemeKullan>
    <OnOdemeTutar>410.0000</OnOdemeTutar>
  </WebYolcu>
</IslemSatis>
```

### CEVAP

```xml
<IslemSonuc>
  <Sonuc>true</Sonuc>
  <PNR>4279523</PNR>
  <Mesaj />
  <SeferInternetTarihSaat>2023-09-17T12:15:00</SeferInternetTarihSaat>
  <Ebilet1>MRKA02000570838</Ebilet1>
</IslemSonuc>
```

## YABANCI YOLCU İÇİN İSTEK

:::danger
Yabancı yolculara bilet satış işlemi için otobüs sorgusunda gelen aşağıda belirtilen iki Alana göre değerlendirme yapılmalıdır.
:::

| SubeSatistaTcKimlikNoYazmakZorunlu | Yolcuların kimlik numaralarının zorunlu olup olmadığını belirleyen parametredir. Bu parametre taşıyıcı firmaya özgü bir parametredir. **_0 ise zorunlu değil. 1 ise zorunludur._**                                                                             |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PasaportNoIleIslemYapilirMi        | **Değeri 0 gelirse;** SubeSatistaTcKimlikNoYazmakZorunlu değeri “1“ ise, T.C. vatandaşı olmayan yolculara bilet satılamaz. **Değeri 1 gelirse;** T.C. vatandaşı olmayan yolculara bilet satılırken pasaport ülke ve pasaport numarası bilgisi gönderilmelidir. |

```xml
Yabancı yolcu için satış istek örneği;
<IslemSatis>
  <FirmaNo>407</FirmaNo>
  <KalkisNoktaID>738</KalkisNoktaID>
  <VarisNoktaID>977</VarisNoktaID>
  <Tarih>2019-02-28</Tarih>
  <Saat>1900-01-01T10:00:00+03:00</Saat>
  <HatNo>32</HatNo>
  <SeferNo>136525</SeferNo>
  <KalkisTerminalAdiSaatleri />
  <KoltukNo1>17</KoltukNo1>
  <Adi1>AHMET</Adi1>
  <Soyadi1>AKYOL</Soyadi1>
  <TcVatandasiMi1>0</TcVatandasiMi1>
  <PasaportUlkeKod1>US</PasaportUlkeKod1>
  <PasaportNo1>17389706416</PasaportNo1>
  <KoltukNo2>18</KoltukNo2>
  <Adi2>SINAN</Adi2>
  <Soyadi2>AKYOL</Soyadi2>
  <TcKimlikNo2>92512763184</TcKimlikNo2>
  <TelefonNo>1111111111</TelefonNo>
  <Cinsiyet>2</Cinsiyet>
  <ToplamBiletFiyati>40</ToplamBiletFiyati>
  <YolcuSayisi>2</YolcuSayisi>
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
    <OnOdemeTutar>40.0000</OnOdemeTutar>
  </WebYolcu>
</IslemSatis>
```

### CEVAP

## SEYAHAT ÜLKE İSTEK

:::info
**\*<u>**Pasaport ülke kodu alanı için ülkeler listesini ve kodlarını alabileceğiniz aşağıdaki sorgu web servise eklenmiştir;**</u>\***
:::

```xml
<SeyahatUlkeGetirKomut/>
```

### CEVAP

```xml
<SeyahatUlkeler>
  <Ulke>
    <ID>1</ID>
    <Kod>TR</Kod>
    <Ad>Türkiye</Ad>
    <OtobusSeyahatUyari />
  </Ulke>
  <Ulke>
    <ID>2</ID>
    <Kod>AL</Kod>
    <Ad>Arnavutluk</Ad>
    <OtobusSeyahatUyari />
  </Ulke>
  <Ulke>
    <ID>3</ID>
    <Kod>DZ</Kod>
    <Ad>Cezayir</Ad>
    <OtobusSeyahatUyari />
  </Ulke>
</SeyahatUlkeler>
```
