# OTOBÜS REZERVASYON YAPMA

## ŞEMA

Sorgulamada kullanacağımız alanların xml şeması aşağıdaki gibidir.
|ALAN|AÇIKLAMA|
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| FirmaNo                                                | Seçilen seferi yapacak olan firmanın firma numarası                                                                                                                           |
| **KalkisNoktaID***                                    | Seçilen seferin KalkisNoktaID değeri.**Format:(integer).**                                                                                                                      |
| **VarisNoktaID***                                     | Seçilen seferin VarisNoktaID değeri.**Format:(integer).**                                                                                                                       |
| **Tarih***                                            | Seçilen seferin kalkış tarihi (Sefer listesinde bulunan Tarih alanı)**Format:(datetime, ‘yyyy-MM-dd’).**                                                                        |
| **Saat***                                             | Seçilen seferin kalkış saati (Sefer listesinde bulunan Saat alanı)                                                                                                              |
| **Format:(datetime, ‘s’).**                            |
| **HatNo***                                            | Seçilen seferin hat numarası (Sefer listesinde bulunan HatNo alanı)                                                                                                             |
| **Format: integer**                                    |
| **SeferNo***                                          | Sefer listesinde bulunan SeferTakipNo alanı                                                                                                                                     |
| **KoltukNo1***                                        | İlk yolcu için seçilen koltuk numarası                                                                                                                                          |
| **Adi1***                                             | İlk yolcunun adı                                                                                                                                                                |
| **SoyAdi1***                                          | İlk yolcunun soyadı .Yolcu Ad Soyad Bilgileri toplamda 20 karakteri geçmemelidir.Yolcu Ad ve Soyadı türkçe karakter ve boşluk içermemelidir.                                    |
| TcVatandasiMi1                                         | 1 ya da boş gönderildiğinde TcKimlikNo değeri zorunlu hale gelir.                                                                                                               |
| TC Vatandaşı olmayan her yolcu için 0 gönderilmelidir. |
| TcKimlikNo1                                            | İlk yolcunun kimlik numarası.Tc Vatandaşları için zorunludur.                                                                                                                   |
| PasaportUlkeKod1                                       | TC Vatandaşı olmayan her yolcu için pasaport ülke kodu bilgisi. Ülkelerin ikili kodları gönderilmelidir.                                                                        |
| PasaportNo1                                            | TC Vatandaşı olmayan her yolcu için pasaport numarası bilgisi.                                                                                                                  |
| BinecegiYer1                                           | İlk yolcunun yolda bineceği yer bilgisi. (Biniş yerinin adı) **Format:(string, max: 15 karakter).**                                                                             |
| ServisYeriKalkis1                                      | İlk yolcunun seferden önce alınacağı servis durağıdır. (Servis noktasının adı. Aynı anda Bineceği yer ve Kalkış servisi seçilmemelidir.) **Format:(string, max: 15 karakter).** |
| ServisYeriVaris1                                       | İlk yolcunun seferden sonra alınacağı servis durağıdır. (Servis noktasının adı)**Format:(string, max: 15 karakter).**                                                           |
| **TelefonNo***                                        | Telefon numarası bilgisi.**Format:(string, 10 karakter - XXXXXXXXXX).**                                                                                                         |
| **Cinsiyet***                                         | Cinsiyet bilgisi.**Bayan Satış = 1, Bay Satış = 2**                                                                                                                             |
| **YolcuSayisi***                                      | Biletteki yolcu sayısı                                                                                                                                                          |
| RezerveSaati                                           | Maximum Opsiyon tarihine göre ayarlamak istenilen opsiyon tarihi.(Bu değer gönderilmezse max tarih belirlenir.) **Format:(datetime, ‘s’).**                                     |
| WebUyeNo                                               | Bu değer sabittir ve 0 (sıfırdır).                                                                                                                                              |
| **IP***                                               | Site ziyaretçisinin Ip adresi                                                                                                                                                   |
| Email                                                  | Yolcu email adresi ( Pattern = ^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)                                                                                            | (([\w-]+\.)+))([a-zA-Z]{2,4} | [0-9]{1,3})(\]?)$) |

:::info
(*) ile işaretli alanlar, gönderilmesi zorunlu alanlardır.
:::
:::details kodu görüntülemek için tıklayın.
```xml
<xs:element name="IslemRezervasyon">
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
  <xs:element name="TcVatandasiMi1" type="xs:byte" minOccurs="0" />
	  <xs:element name="TcKimlikNo1" type="xs:long" minOccurs="0" />
  	  <xs:element name="PasaportUlkeKod1" type="Str15" minOccurs="0" />			  <xs:element name="PasaportNo1" type="Str15" minOccurs="0" />
	  <xs:element name="BinecegiYer1" type="Str15" minOccurs="0" />
	  <xs:element name="ServisYeriKalkis1" type="Str15" minOccurs="0" />
	  <xs:element name="ServisYeriVaris1" type="Str15" minOccurs="0" />
	  <xs:element name="KoltukNo2" type="byte99" minOccurs="0" />
	  <xs:element name="Adi2" type="AdSoyad" minOccurs="0" />
	  <xs:element name="Soyadi2" type="AdSoyad" minOccurs="0" />
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
  <xs:element name="TcVatandasiMi4" type="xs:byte" minOccurs="0" />
	  <xs:element name="TcKimlikNo4" type="xs:long" minOccurs="0" />
  <xs:element name="PasaportUlkeKod4" type="Str15" minOccurs="0" />
	  <xs:element name="PasaportNo4" type="Str15" minOccurs="0" />
	  <xs:element name="BinecegiYer4" type="Str15" minOccurs="0" />
	  <xs:element name="ServisYeriKalkis4" type="Str15" minOccurs="0" />
	  <xs:element name="ServisYeriVaris4" type="Str15" minOccurs="0" />
	  <xs:element name="TelefonNo" type="xs:long" />
	  <xs:element name="Cinsiyet" type="byte2" />
	  <xs:element name="YolcuSayisi" type="byte4" />
	  <xs:element name="UyeNo" type="xs:int" minOccurs="0" />
	  <xs:element name="RezerveSaati" type="xs:dateTime" minOccurs="0" />
	  <xs:element name="FirmaAciklama" type="Str20" minOccurs="0" />
	  <xs:element name="HatirlaticiNot" type="Str100" minOccurs="0" />
	  <xs:element name="WebYolcu" minOccurs="0">
	 	<xs:complexType>
			<xs:sequence>
				<xs:element name="WebUyeNo" type="xs:integer" />
				<xs:element name="Ip" type="IpType" />
				<xs:element name="Email" type="EmailType" />
			</xs:sequence>
			</xs:complexType>
		</xs:element>
	</xs:sequence>
  </xs:complexType>
</xs:element>
```
:::
## İSTEK

### T.C Vatandaşı olan yolcu için rezervasyon istek örneği;

```xml
<IslemRezervasyon>
  <FirmaNo>37</FirmaNo>
  <KalkisNoktaID>738</KalkisNoktaID>
  <VarisNoktaID>84</VarisNoktaID>
  <Tarih>2018-12-09</Tarih>
  <Saat>1900-01-01T02:30:00+02:00</Saat>
  <HatNo>1</HatNo>
  <SeferNo>288179</SeferNo>
  <KalkisTerminalAdiSaatleri></KalkisTerminalAdiSaatleri>
  <KoltukNo1>5</KoltukNo1>
  <Adi1>AHMET</Adi1>
  <Soyadi1>AKYOL</Soyadi1>
  <TcKimlikNo1>16285391016</TcKimlikNo1>
  <ServisYeriKalkis1>ANAYURT 2</ServisYeriKalkis1>
  <TelefonNo>5421111110</TelefonNo>
  <Cinsiyet>2</Cinsiyet>
  <YolcuSayisi>1</YolcuSayisi>
  <FirmaAciklama></FirmaAciklama>
  <HatirlaticiNot></HatirlaticiNot>
  <WebYolcu>
    <WebUyeNo>0</WebUyeNo>
    <Ip>0.0.0.0</Ip>
    <Email>a@a.com</Email>
  </WebYolcu>
</IslemRezervasyon>
```

### T.C Vatandaşı olmayan yolcu için rezervasyon istek örneği;

```xml
<IslemRezervasyon xmlns="">
  <FirmaNo>37</FirmaNo>
  <KalkisNoktaID>738</KalkisNoktaID>
  <VarisNoktaID>84</VarisNoktaID>
  <Tarih>2019-02-25</Tarih>
  <Saat>1900-01-01T13:00:00+02:00</Saat>
  <HatNo>4</HatNo>
  <SeferNo>291537</SeferNo>
  <KalkisTerminalAdiSaatleri></KalkisTerminalAdiSaatleri>
  <KoltukNo1>11</KoltukNo1>
  <Adi1>AHMET</Adi1>
  <Soyadi1>AKYOL</Soyadi1>
  <TcVatandasiMi1>0</TcVatandasiMi1>
  <PasaportUlkeKod1>US</PasaportUlkeKod1>
  <PasaportNo1>17389706416</PasaportNo1>
  <KoltukNo2>12</KoltukNo2>
  <Adi2>SINAN</Adi2>
  <Soyadi2>AKYOL</Soyadi2>
  <TcVatandasiMi2>0</TcVatandasiMi2>
  <PasaportUlkeKod2>US</PasaportUlkeKod2>
  <PasaportNo2>48713011814</PasaportNo2>
  <TelefonNo>1111111111</TelefonNo>
  <Cinsiyet>2</Cinsiyet>
  <YolcuSayisi>2</YolcuSayisi>
  <FirmaAciklama></FirmaAciklama>
  <HatirlaticiNot></HatirlaticiNot>
  <WebYolcu>
    <WebUyeNo>0</WebUyeNo>
    <Ip>0.0.0.0</Ip>
    <Email>a@a.com</Email>
  </WebYolcu>
</IslemRezervasyon>
```

## CEVAP
|ALAN|AÇIKLAMA|
| ---------------------- | ---------------------------------------------- |
|Sonuc                  | İşlemin başarılı olup olmadığını belirtir      |
| PNR                    | Oluşan PNR kodunu belirtir.                    |
| RezervasyonOpsiyon     | Belirlenmiş opsiyon tarihini belirtir.         |
| Mesaj                  | Bilet firma mesajını içerir.                   |
| SeferInternetTarihSaat | Sefer gerçekleşeceği tarihi ve saati belirtir. |

```xml
<IslemSonuc>
  <Sonuc>true</Sonuc>
  <PNR>FC03037</PNR>
  <RezervasyonOpsiyon>02.12.2018 23.50</RezervasyonOpsiyon>
  <Mesaj></Mesaj>
  <SeferInternetTarihSaat>2018-12-10T00:00:00+03:00</SeferInternetTarihSaat>
</IslemSonuc>
```
