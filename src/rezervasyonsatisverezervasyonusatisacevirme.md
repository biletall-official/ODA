# REZERVASYON , SATIŞ VE REZERVASYONU SATIŞA ÇEVİRME İŞLEMLERİ

## ŞEMA

Uçak Rezervasyon ve Satış işlemleri için sorgulamada kullanacağımız alanların xml şeması aşağıdaki gibidir.

:::tip
IslemUcak_2 xml’i ile yurtiçi ve yurtdışı rezervasyon ve satış istekleri gönderilebilmektedir.
:::
:::details Kodu görüntülemek için tıklayın. :computer_mouse:

```xml
<?xml version="1.0" encoding="utf-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="IslemUcak_2">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="IslemTip" type="xs:byte" />
        <xs:element name="FirmaNo" type="intOzel" />
        <xs:element name="TelefonNo" type="xs:long" minOccurs="0" />
        <xs:element name="CepTelefonNo" type="xs:long" />
        <xs:element name="Email" minOccurs="0" type="EmailType" />
        <xs:element name="UyeNo" type="xs:int" minOccurs="0" />
        <xs:element name="RezerveSaati" type="xs:dateTime" minOccurs="0" />
        <xs:element name="HatirlaticiNot" type="Str100" minOccurs="0" />
        <xs:element name="Segment1">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="Kalkis" type="Str4" />
              <xs:element name="Varis" type="Str4" />
              <xs:element name="KalkisTarih" type="xs:dateTime" minOccurs="0" />
              <xs:element name="VarisTarih" type="xs:dateTime" minOccurs="0" />
              <xs:element name="UcusNo" type="Str100" />
              <xs:element name="FirmaKod" type="StrSinif" />
              <xs:element name="Sinif" type="StrSinif" />
              <xs:element name="DonusMu" type="xs:byte" minOccurs="0" />
              <xs:element name="SeferKod" type="Str100" minOccurs="0"/>
            </xs:sequence>
          </xs:complexType>
        </xs:element>
        <xs:element name="Segment2" minOccurs="0">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="Kalkis" type="Str4" />
              <xs:element name="Varis" type="Str4" />
              <xs:element name="KalkisTarih" type="xs:dateTime" minOccurs="0" />
              <xs:element name="VarisTarih" type="xs:dateTime" minOccurs="0" />
              <xs:element name="UcusNo" type="Str100" />
              <xs:element name="FirmaKod" type="StrSinif" />
              <xs:element name="Sinif" type="StrSinif" />
              <xs:element name="DonusMu" type="xs:byte" minOccurs="0" />
              <xs:element name="SeferKod" type="Str100" minOccurs="0"/>
            </xs:sequence>
          </xs:complexType>
        </xs:element>
        <xs:element name="Segment3" minOccurs="0">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="Kalkis" type="Str4" />
              <xs:element name="Varis" type="Str4" />
              <xs:element name="KalkisTarih" type="xs:dateTime" minOccurs="0" />
              <xs:element name="VarisTarih" type="xs:dateTime" minOccurs="0" />
              <xs:element name="UcusNo" type="Str100" />
              <xs:element name="FirmaKod" type="StrSinif" />
              <xs:element name="Sinif" type="StrSinif" />
              <xs:element name="DonusMu" type="xs:byte" minOccurs="0" />
              <xs:element name="SeferKod" type="Str100" minOccurs="0"/>
            </xs:sequence>
          </xs:complexType>
        </xs:element>
        <xs:element name="Segment4" minOccurs="0">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="Kalkis" type="Str4" />
              <xs:element name="Varis" type="Str4" />
              <xs:element name="KalkisTarih" type="xs:dateTime" minOccurs="0" />
              <xs:element name="VarisTarih" type="xs:dateTime" minOccurs="0" />
              <xs:element name="UcusNo" type="Str100" />
              <xs:element name="FirmaKod" type="StrSinif" />
              <xs:element name="Sinif" type="StrSinif" />
              <xs:element name="DonusMu" type="xs:byte" minOccurs="0" />
              <xs:element name="SeferKod" type="Str100" minOccurs="0"/>
            </xs:sequence>
          </xs:complexType>
        </xs:element>
        <xs:element name="Segment5" minOccurs="0">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="Kalkis" type="Str4" />
              <xs:element name="Varis" type="Str4" />
              <xs:element name="KalkisTarih" type="xs:dateTime" minOccurs="0" />
              <xs:element name="VarisTarih" type="xs:dateTime" minOccurs="0" />
              <xs:element name="UcusNo" type="Str100" />
              <xs:element name="FirmaKod" type="StrSinif" />
              <xs:element name="Sinif" type="StrSinif" />
              <xs:element name="DonusMu" type="xs:byte" minOccurs="0" />
              <xs:element name="SeferKod" type="Str100" minOccurs="0"/>
            </xs:sequence>
          </xs:complexType>
        </xs:element>
        <xs:element name="Segment6" minOccurs="0">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="Kalkis" type="Str4" />
              <xs:element name="Varis" type="Str4" />
              <xs:element name="KalkisTarih" type="xs:dateTime" minOccurs="0" />
              <xs:element name="VarisTarih" type="xs:dateTime" minOccurs="0" />
              <xs:element name="UcusNo" type="Str100" />
              <xs:element name="FirmaKod" type="StrSinif" />
              <xs:element name="Sinif" type="StrSinif" />
              <xs:element name="DonusMu" type="xs:byte" minOccurs="0" />
              <xs:element name="SeferKod" type="Str100" minOccurs="0"/>
            </xs:sequence>
          </xs:complexType>
        </xs:element>
        <xs:element name="Yolcu1">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="Ad" type="Str15-2" />
              <xs:element name="Soyad" type="Str15-2" />
              <xs:element name="Cinsiyet" type="byte2" />
              <xs:element name="YolcuTip" type="byte4" />
              <xs:element name="TCKimlikNo" type="Str11" minOccurs="0" />
              <xs:element name="PasaportNo" type="Str11" minOccurs="0" />
              <xs:element name="PasaportGecerlilikTarihi" type="trh" minOccurs="0" />
              <xs:element name="PasaportUlkeKod" type="Str10" minOccurs="0" />
              <xs:element name="DogumTarih" type="trh" minOccurs="0" />
              <xs:element name="MilNo" type="Str11" minOccurs="0" />
              <xs:element name="NetFiyat" type="fiyat" minOccurs="0" />
              <xs:element name="Vergi" type="fiyat" minOccurs="0" />
              <xs:element name="ServisUcret" type="fiyat" minOccurs="0" />
            </xs:sequence>
          </xs:complexType>
        </xs:element>
        <xs:element name="Yolcu2" minOccurs="0">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="Ad" type="Str15-2" />
              <xs:element name="Soyad" type="Str15-2" />
              <xs:element name="Cinsiyet" type="byte2" />
              <xs:element name="YolcuTip" type="byte4" />
              <xs:element name="TCKimlikNo" type="Str11" minOccurs="0" />
              <xs:element name="PasaportNo" type="Str11" minOccurs="0" />
              <xs:element name="PasaportGecerlilikTarihi" type="trh" minOccurs="0" />
              <xs:element name="PasaportUlkeKod" type="Str10" minOccurs="0" />
              <xs:element name="DogumTarih" type="trh" minOccurs="0" />
              <xs:element name="MilNo" type="Str11" minOccurs="0" />
              <xs:element name="NetFiyat" type="fiyat" minOccurs="0" />
              <xs:element name="Vergi" type="fiyat" minOccurs="0" />
              <xs:element name="ServisUcret" type="fiyat" minOccurs="0" />
            </xs:sequence>
          </xs:complexType>
        </xs:element>
        <xs:element name="Yolcu3" minOccurs="0">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="Ad" type="Str15-2" />
              <xs:element name="Soyad" type="Str15-2" />
              <xs:element name="Cinsiyet" type="byte2" />
              <xs:element name="YolcuTip" type="byte4" />
              <xs:element name="TCKimlikNo" type="Str11" minOccurs="0" />
              <xs:element name="PasaportNo" type="Str11" minOccurs="0" />
              <xs:element name="PasaportGecerlilikTarihi" type="trh" minOccurs="0" />
              <xs:element name="PasaportUlkeKod" type="Str10" minOccurs="0" />
              <xs:element name="DogumTarih" type="trh" minOccurs="0" />
              <xs:element name="MilNo" type="Str11" minOccurs="0" />
              <xs:element name="NetFiyat" type="fiyat" minOccurs="0" />
              <xs:element name="Vergi" type="fiyat" minOccurs="0" />
              <xs:element name="ServisUcret" type="fiyat" minOccurs="0" />
            </xs:sequence>
          </xs:complexType>
        </xs:element>
        <xs:element name="Yolcu4" minOccurs="0">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="Ad" type="Str15-2" />
              <xs:element name="Soyad" type="Str15-2" />
              <xs:element name="Cinsiyet" type="byte2" />
              <xs:element name="YolcuTip" type="byte4" />
              <xs:element name="TCKimlikNo" type="Str11" minOccurs="0" />
              <xs:element name="PasaportNo" type="Str11" minOccurs="0" />
              <xs:element name="PasaportGecerlilikTarihi" type="trh" minOccurs="0" />
              <xs:element name="PasaportUlkeKod" type="Str10" minOccurs="0" />
              <xs:element name="DogumTarih" type="trh" minOccurs="0" />
              <xs:element name="MilNo" type="Str11" minOccurs="0" />
              <xs:element name="NetFiyat" type="fiyat" minOccurs="0" />
              <xs:element name="Vergi" type="fiyat" minOccurs="0" />
              <xs:element name="ServisUcret" type="fiyat" minOccurs="0" />
            </xs:sequence>
          </xs:complexType>
        </xs:element>
        <xs:element name="Yolcu5" minOccurs="0">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="Ad" type="Str15-2" />
              <xs:element name="Soyad" type="Str15-2" />
              <xs:element name="Cinsiyet" type="byte2" />
              <xs:element name="YolcuTip" type="byte4" />
              <xs:element name="TCKimlikNo" type="Str11" minOccurs="0" />
              <xs:element name="PasaportNo" type="Str11" minOccurs="0" />
              <xs:element name="PasaportGecerlilikTarihi" type="trh" minOccurs="0" />
              <xs:element name="PasaportUlkeKod" type="Str10" minOccurs="0" />
              <xs:element name="DogumTarih" type="trh" minOccurs="0" />
              <xs:element name="MilNo" type="Str11" minOccurs="0" />
              <xs:element name="NetFiyat" type="fiyat" minOccurs="0" />
              <xs:element name="Vergi" type="fiyat" minOccurs="0" />
              <xs:element name="ServisUcret" type="fiyat" minOccurs="0" />
            </xs:sequence>
          </xs:complexType>
        </xs:element>
        <xs:element name="Yolcu6" minOccurs="0">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="Ad" type="Str15-2" />
              <xs:element name="Soyad" type="Str15-2" />
              <xs:element name="Cinsiyet" type="byte2" />
              <xs:element name="YolcuTip" type="byte4" />
              <xs:element name="TCKimlikNo" type="Str11" minOccurs="0" />
              <xs:element name="PasaportNo" type="Str11" minOccurs="0" />
              <xs:element name="PasaportGecerlilikTarihi" type="trh" minOccurs="0" />
              <xs:element name="PasaportUlkeKod" type="Str10" minOccurs="0" />
              <xs:element name="DogumTarih" type="trh" minOccurs="0" />
              <xs:element name="MilNo" type="Str11" minOccurs="0" />
              <xs:element name="NetFiyat" type="fiyat" minOccurs="0" />
              <xs:element name="Vergi" type="fiyat" minOccurs="0" />
              <xs:element name="ServisUcret" type="fiyat" minOccurs="0" />
            </xs:sequence>
          </xs:complexType>
        </xs:element>
        <xs:element name="Yolcu7" minOccurs="0">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="Ad" type="Str15-2" />
              <xs:element name="Soyad" type="Str15-2" />
              <xs:element name="Cinsiyet" type="byte2" />
              <xs:element name="YolcuTip" type="byte4" />
              <xs:element name="TCKimlikNo" type="Str11" minOccurs="0" />
              <xs:element name="PasaportNo" type="Str11" minOccurs="0" />
              <xs:element name="PasaportGecerlilikTarihi" type="trh" minOccurs="0" />
              <xs:element name="PasaportUlkeKod" type="Str10" minOccurs="0" />
              <xs:element name="DogumTarih" type="trh" minOccurs="0" />
              <xs:element name="MilNo" type="Str11" minOccurs="0" />
              <xs:element name="NetFiyat" type="fiyat" minOccurs="0" />
              <xs:element name="Vergi" type="fiyat" minOccurs="0" />
              <xs:element name="ServisUcret" type="fiyat" minOccurs="0" />
            </xs:sequence>
          </xs:complexType>
        </xs:element>
        <xs:element name="Yolcu8" minOccurs="0">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="Ad" type="Str15-2" />
              <xs:element name="Soyad" type="Str15-2" />
              <xs:element name="Cinsiyet" type="byte2" />
              <xs:element name="YolcuTip" type="byte4" />
              <xs:element name="TCKimlikNo" type="Str11" minOccurs="0" />
              <xs:element name="PasaportNo" type="Str11" minOccurs="0" />
              <xs:element name="PasaportGecerlilikTarihi" type="trh" minOccurs="0" />
              <xs:element name="PasaportUlkeKod" type="Str10" minOccurs="0" />
              <xs:element name="DogumTarih" type="trh" minOccurs="0" />
              <xs:element name="MilNo" type="Str11" minOccurs="0" />
              <xs:element name="NetFiyat" type="fiyat" minOccurs="0" />
              <xs:element name="Vergi" type="fiyat" minOccurs="0" />
              <xs:element name="ServisUcret" type="fiyat" minOccurs="0" />
            </xs:sequence>
          </xs:complexType>
        </xs:element>
        <xs:element name="Yolcu9" minOccurs="0">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="Ad" type="Str15-2" />
              <xs:element name="Soyad" type="Str15-2" />
              <xs:element name="Cinsiyet" type="byte2" />
              <xs:element name="YolcuTip" type="byte4" />
              <xs:element name="TCKimlikNo" type="Str11" minOccurs="0" />
              <xs:element name="PasaportNo" type="Str11" minOccurs="0" />
              <xs:element name="PasaportGecerlilikTarihi" type="trh" minOccurs="0" />
              <xs:element name="PasaportUlkeKod" type="Str10" minOccurs="0" />
              <xs:element name="DogumTarih" type="trh" minOccurs="0" />
              <xs:element name="MilNo" type="Str11" minOccurs="0" />
              <xs:element name="NetFiyat" type="fiyat" minOccurs="0" />
              <xs:element name="Vergi" type="fiyat" minOccurs="0" />
              <xs:element name="ServisUcret" type="fiyat" minOccurs="0" />
            </xs:sequence>
          </xs:complexType>
        </xs:element>
        <xs:element name="Fatura" minOccurs="0">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="FaturaTip" type="xs:byte" />
              <xs:element name="KisiAd" type="Str15" minOccurs="0" />
              <xs:element name="KisiSoyad" type="Str15" minOccurs="0" />
              <xs:element name="KisiTCKimlikNo" type="Str11" minOccurs="0" />
              <xs:element name="KisiAdres" type="xs:string" minOccurs="0" />
              <xs:element name="FirmaAd" type="xs:string" minOccurs="0" />
              <xs:element name="FirmaVergiNo" type="xs:string" minOccurs="0" />
              <xs:element name="FirmaVergiDairesi" type="xs:string" minOccurs="0" />
              <xs:element name="FirmaAdres" type="xs:string" minOccurs="0" />
            </xs:sequence>
          </xs:complexType>
        </xs:element>
        <xs:element name="WebYolcu" minOccurs="0">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="Ip" type="IpType" />
              <xs:element name="KrediKartNo" type="xs:string" minOccurs="0" />
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
</xs:schema>
```

:::

## UÇAK REZERVASYON İŞLEMİ

:::info :exclamation: Not 
Aşağıda örnek bir yurtiçi rezervasyon isteği, cevabı ve açıklamaları bulunmaktadır. Yurt dışı uçuşlarda rezervasyon işlemi sadece FirmaNo su 1100 olan firmalar için geçerlidir. Diğer firmalar için rezervasyon işlemi yapılamamaktadır.
:::

### İSTEK

|Alan|Açıklama
| ------------------ | --------------------------------------------------------------- |
| **IslemTip\***     | Rezervasyon için **1** Satış için **0** değeri alır.    |
| **FirmaNo\***      | Sefer Listesinde gelen FirmaNo alanı kullanılmalıdır.    |
| **TelefonNo\***    | Telefon numarası bilgisi**Format:(string, 10 karakter - XXXXXXXXXX).**   |
| **CepTelefonNo\*** | Cep Telefon numarası bilgisi **Format:(string, 10 karakter - XXXXXXXXXX).**|
| **Email\***   | Yolcu email adresi (Pattern = ^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.) (([\w-]+\.)+))([a-zA-Z]{2,4} [0-9]{1,3})(\]?)$) |

:::info :exclamation: Not 
(\*) ile işaretli alanlar, gönderilmesi zorunlu alanlardır.
:::
|Alan|Açıklama
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Segment Alanları | Segment alanlarında uçuş planı içerisindeki önce gidiş, sonra varsa dönüş segmentleri seyahat planındaki sırasıyla(Segment1, Segment2.. şeklinde) girilmelidir. |
| **Kalkis\*** | Segmentin kalkış havaalanı kodu. |
| **Varis\*** | Segmentin varış havaalanı kodu. |
| **KalkisTarih\***| Kalkış tarihi |
| **VarisTarih\*** | Varış tarihi |
| **UcusNo\*** | Segmentin uçuş numarası |
| **FirmaKod\*** | İlgili uçuşu yapan havayolu firması kodu. |
| **Sinif\*** | İlgili uçuşun sınıfını belirtir. |
| **DonusMu\*** | İlgili segmentin dönüş segmenti mi olduğunu belirtir |
| SeferKod | İlgili segmentin sefer kodunu belirtir |

:::info :exclamation: Not 
(\*) ile işaretli alanlar, gönderilmesi zorunlu alanlardır.
:::
|Alan|Açıklama
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Yolcu Alanları | Yolcu alanlarında uçuş planı içerisindeki her yolcu bilgisi(Yolcu1, Yolcu2…şeklinde) girilmelidir. |
| **Ad\*** | Yolcu adı |
| **Soyad\*** | Yolcu soyadı |
| **Cinsiyet\*** | Cinsiyet. **Bay:2 Bayan:1** |
| **YolcuTip\*** | İlgili yolcu tipi kodu.**Yetişkin:1 Çocuk:2 Bebek:3 Yaşlı:4 Öğrenci:5 Özürlü:6 Asker:7 Genç:8** |
| DogumTarih | yyyy-MM-dd formatında gönderilmelidir. Doğum tarihinin zorunluluğunu bir önceki adım olan fiyat çekme işleminde gerçekleştirebilirsiniz. |
| PasaportNo | Yurt dışı uçuşlarda pasaport no zorunlu ise ülke kodu girilmeden gönderilmesi gerekmektedir. |
| PasaportGecerlilikTarihi | Pasaport no zorunluysa pasaport geçerlilik tarihi de girilmelidir. Pasaport geçerlilik tarihi, sefer kalkış tarihinden itibaren 6 ay daha geçerli olmalıdır. |
| TcKimlikNo | Yolcu T.C. kimlik numarası |
| **NetFiyat\*** | UcusFiyat ile çekilen ücretlerden yolcu tipine göre net fiyat bilgisi |
| **Vergi\*** | UcusFiyat ile çekilen ücretlerden yolcu tipine göre vergi bilgisi |
| **ServisUcret\*** | UcusFiyat ile çekilen ücretlerden yolcu tipine göre Servis ücreti bilgisi |

:::info :exclamation: Not 
(\*) ile işaretli alanlar, gönderilmesi zorunlu alanlardır.
:::
:::details Kodu görüntülemek için tıklayın. :computer_mouse:

```xml
<IslemUcak_2>
	<IslemTip>1</IslemTip>
	<FirmaNo>1000</FirmaNo>
	<TelefonNo>2121234123</TelefonNo>
	<CepTelefonNo>5321234123</CepTelefonNo>
	<Email>callcenter@biletalll.com</Email>
	<HatirlaticiNot />
	<Segment1>
		<Kalkis>AYT</Kalkis>
		<Varis>ESB</Varis>
		<KalkisTarih>2011-11-25T11:30:00</KalkisTarih>
		<VarisTarih>2011-11-25T12:35:00</VarisTarih>
		<UcusNo>TK7017</UcusNo>
		<FirmaKod>AN</FirmaKod>
		<Sinif>T</Sinif>
		<DonusMu>0</DonusMu>
            <SeferKod></SeferKod>
	</Segment1>
	<Segment2>
		<Kalkis>ESB</Kalkis>
		<Varis>AYT</Varis>
		<KalkisTarih>2011-11-30T09:30:00</KalkisTarih>
		<VarisTarih>2011-11-30T10:40:00</VarisTarih>
		<UcusNo>TK7016</UcusNo>
		<FirmaKod>AN</FirmaKod>
		<Sinif>O</Sinif>
		<DonusMu>1</DonusMu>
            <SeferKod></SeferKod>
	</Segment2>
	<Yolcu1>
		<Ad>AHMET</Ad>
		<Soyad>ALKAN</Soyad>
		<Cinsiyet>1</Cinsiyet>
		<YolcuTip>1</YolcuTip>
		<TCKimlikNo>11111111111</TCKimlikNo>
		<DogumTarih>1980-01-29<DogumTarih>
		<MilNo />
		<NetFiyat>126</NetFiyat>
		<Vergi>62</Vergi>
		<ServisUcret>5</ServisUcret>
	</Yolcu1>
</IslemUcak_2>
```

:::

### CEVAP

| Alan               | Açıklama                                         |
| ------------------ | ------------------------------------------------ |
| Sonuc              | İşlem sonucu. **true/false**                     |
| PNR                | İşlem sonunda oluşan PNR numarası                |
| RezervasyonOpsiyon | Rezervasyonun geçerli olacağı tarih-saat bilgisi |

```xml
<IslemSonuc>
	<Sonuc>true</Sonuc>
	<PNR>SX0102</PNR>
	<RezervasyonOpsiyon>28.11.2011 13:00</RezervasyonOpsiyon>
</IslemSonuc>
```

## UÇAK SATIŞ İŞLEMİ

### İSTEK

Aşağıda örnek bir yurtiçi satış isteği, cevabı ve açıklamaları bulunmaktadır.
|Alan|Açıklama
| ------------------ | ------------------------------------------------ |
| **IslemTip\*** | Rezervasyon için **1** Satış için **0** değeri alır. |
| **FirmaNo\*** | Sefer Listesinde gelen FirmaNo alanı kullanılmalıdır. |
| **TelefonNo\*** | Telefon numarası bilgisi**Format:(string, 10 karakter - XXXXXXXXXX).** |
| **CepTelefonNo\*** | Cep Telefon numarası bilgisi **Format:(string, 10 karakter - XXXXXXXXXX).** |
| **Email\*** | Yolcu email adresi ( Pattern = ^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.) | (([\w-]+\.)+))([a-zA-Z]{2,4} | [0-9]{1,3})(\]?)$) |

:::info :exclamation: Not 
(\*) ile işaretli alanlar, gönderilmesi zorunlu alanlardır.
:::
|Alan|Açıklama
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Segment Alanları | Segment alanlarında uçuş planı içerisindeki önce gidiş, sonra varsa dönüş segmentleri seyahat planındaki sırasıyla(Segment1, Segment2.. şeklinde) girilmelidir. |
| **Kalkis\*** | Segmentin kalkış havaalanı kodu. |
| **Varis\*** | Segmentin varış havaalanı kodu. |
| **KalkisTarih\*** | Kalkış tarihi |
| **VarisTarih\*** | Varış tarihi |
| **UcusNo\*** | Segmentin uçuş numarası |
| **FirmaKod\*** | İlgili uçuşu yapan havayolu firması kodu. |
| **Sinif\*** | İlgili uçuşun sınıfını belirtir. |
| **DonusMu\*** | İlgili segmentin dönüş segmenti mi olduğunu belirtir |
| SeferKod | İlgili segmentin sefer kodunu belirtir.Bu bilgi Atlasglobal uçuşlarında gelmektedir. |

:::info :exclamation: Not 
(\*) ile işaretli alanlar, gönderilmesi zorunlu alanlardır.
:::
|Alan|Açıklama
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Yolcu Alanları | Yolcu alanlarında uçuş planı içerisindeki her yolcu bilgisi(Yolcu1, Yolcu2…şeklinde) girilmelidir. |
| **Ad\*** | Yolcu adı |
| **Soyad\*** | Yolcu soyadı |
| **Cinsiyet\*** | **Cinsiyet.Bay:2 Bayan:1** |
| **YolcuTip\*** | İlgili yolcu tipi kodu.**Yetişkin:1 Çocuk:2 Bebek:3 Yaşlı:4 Öğrenci:5 Özürlü:6 Asker:7 Genç:8** |
| TcKimlikNo | Yolcu T.C. kimlik numarası |
| DogumTarih | yyyy-MM-dd formatında gönderilmelidir.Doğum tarihinin zorunluluğunu bir önceki adım olan fiyat çekme işleminde gerçekleştirebilirsiniz. |
| PasaportNo | Yurt dışı uçuşlarda pasaport no zorunlu ise ülke kodu girilmeden gönderilmesi gerekmektedir. |
| PasaportGecerlilikTarihi | Pasaport no zorunluysa pasaport geçerlilik tarihi de girilmelidir. Pasaport geçerlilik tarihi, sefer kalkış tarihinden itibaren 6 ay daha geçerli olmalıdır. |
| **NetFiyat\*** | UcusFiyat ile çekilen ücretlerden yolcu tipine göre net fiyat bilgisi |
| **Vergi\*** | UcusFiyat ile çekilen ücretlerden yolcu tipine göre vergi bilgisi |
| **ServisUcret\*** | UcusFiyat ile çekilen ücretlerden yolcu tipine göre Servis ücreti bilgisi |

:::info :exclamation: Not 
(\*) ile işaretli alanlar, gönderilmesi zorunlu alanlardır.
:::

**Fatura Alanı**
|Alan|Açıklama
| ----------------- | ------------------------------ |
| FaturaTip | Fatura tipi,**Kişi:0 Firma:1** |
| KisiAd | Fatura kişi adı |
| KisiSoyad | Fatura kişi soyadı |
| KisiTCKimlikNo | Fatura kişi tc kimlik no |
| KisiAdres | Fatura kişi adres |
| FirmaAd | Fatura firma ad |
| FirmaVergiNo | Fatura firma vergi numarası |
| FirmaVergiDairesi | Fatura firma vergi dairesi |
| FirmaAdres | Fatura firma adresi |

**WebYolcu Alanı**
|Alan|Açıklama
| ------------------------- | ---------------------------------------------------------------------------------------------------- |
| KrediKartNo | Müşteri kredi kartı numarası |
| KrediKartSahip | Müşteri kredi kart sahibi adı |
| KrediKartGecerlilikTarihi | Kredi kart geçerlilik tarihi **Örn : 8.2013 (ay.yıl)** |
| KrediKartCCV2 | Kredi kartı güvenlik numarası |
| AcikPnrNo | Kullanılmak istenen biletall açık parasının PNR kodu |
| AcikPnrSoyad(Yeni) | Açık biletin Soyad bilgisi <u>**Not:**</u> Açık bilet kullanımı yoksa bu bilgiler gönderilmemelidir. |
| AcikTutar | Kullanılmak istenen biletall açık parasının tutarı |
| RezervePnrNo | Daha önce rezerve edilen bir işlem satışa dönüştürülüyorsa işlemin Rezervasyon PNR kodu. |
:::details Kodu görüntülemek için tıklayın. :computer_mouse:

```xml
<IslemUcak_2>
	<IslemTip>0</IslemTip>
	<FirmaNo>1000</FirmaNo>
	<CepTelefonNo>5321234123</CepTelefonNo>
	<Email>a@a.com</Email>
	<HatirlaticiNot />
	<Segment1>
		<Kalkis>IST</Kalkis>
		<Varis>ASR</Varis>
		<KalkisTarih>2012-01-23T06:45:00</KalkisTarih>
		<VarisTarih>2012-01-23T08:25:00</VarisTarih>
		<UcusNo>TK2216</UcusNo>
		<FirmaKod>TK</FirmaKod>
		<Sinif>G</Sinif>
		<DonusMu>0</DonusMu>
           <SeferKod></SeferKod>
	</Segment1>
	<Segment2>
		<Kalkis>IST</Kalkis>
		<Varis>ASR</Varis>
		<KalkisTarih>2012-01-26T09:10:00</KalkisTarih>
		<VarisTarih>2012-01-26T11:15:00</VarisTarih>
		<UcusNo>TK2217</UcusNo>
		<FirmaKod>TK</FirmaKod>
		<Sinif>G</Sinif>
		<DonusMu>1</DonusMu>
            <SeferKod></SeferKod>
	</Segment2>
	<Yolcu1>
		<Ad>AHMET</Ad>
		<Soyad>ALKAN</Soyad>
		<Cinsiyet>2</Cinsiyet>
		<YolcuTip>1</YolcuTip>
		<TCKimlikNo>00000000000</TCKimlikNo>
		<MilNo />
		<NetFiyat>110</NetFiyat>
		<Vergi>58</Vergi>
		<ServisUcret>15</ServisUcret>
	</Yolcu1>
	<Yolcu2>
		<Ad>HAKAN</Ad>
		<Soyad>ACAR</Soyad>
		<Cinsiyet>1</Cinsiyet>
		<YolcuTip>1</YolcuTip>
		<TCKimlikNo>00000000000</TCKimlikNo>
		<MilNo />
		<NetFiyat>110</NetFiyat>
		<Vergi>58</Vergi>
		<ServisUcret>15</ServisUcret>
	</Yolcu2>
	<Fatura>
		<FaturaTip>0</FaturaTip>
		<KisiAd>AHMET</KisiAd>
		<KisiSoyad>ALKAN</KisiSoyad>
		<KisiTCKimlikNo>00000000000</KisiTCKimlikNo>
		<KisiAdres>BiletAll Organizasyon</KisiAdres>
		<FirmaAd />
		<FirmaVergiNo />
		<FirmaVergiDairesi />
		<FirmaAdres />
	</Fatura>
	<WebYolcu>
<Ip>127.0.0.1</Ip>
		<KrediKartNo>xxxxxxxxxxxxxxxx</KrediKartNo>
		<KrediKartSahip>AHMET ALKAN</KrediKartSahip>
		<KrediKartGecerlilikTarihi>7.2013</KrediKartGecerlilikTarihi>
		<KrediKartCCV2>xxx</KrediKartCCV2>
	</WebYolcu>
</IslemUcak_2>
```

:::

### CEVAP

| Alan            | Açıklama                                                                      |
| --------------- | ----------------------------------------------------------------------------- |
| Sonuc           | İşlem sonucu. **true/false**                                                  |
| PNR             | İşlem sonunda oluşan PNR numarası                                             |
| EBilet alanları | Yolcu sayısı kadar gönderilen yolcu sırasıyla e bilet numaraları oluşacaktır. |

```xml
<IslemSonuc>
	<Sonuc>true</Sonuc>
	<PNR>SX0102</PNR>
	<EBilet1>XXXXXXXXX</EBilet1>
	<EBilet2>XXXXXXXXX</EBilet2>
</IslemSonuc>
```

## UÇAK REZERVASYONUNU SATIŞA ÇEVİRME İŞLEMİ

:::tip :bulb: İpucu
Rezervasyonu satışa çevirme işlemi satış işlemi gibidir. Buna ek olarak WebYolcu içerisinde RezervePnrNo alanı da gönderilmelidir.FirmaNo alanı için PNR sorgusuyla birlikte gelen PNR listesinde bulunan FirmaNo alanı kullanılmalıdır.
:::
:::details Kodu görüntülemek için tıklayın. :computer_mouse:

```xml
<IslemUcak_2>
	<IslemTip>0</IslemTip>
	<FirmaNo>1000</FirmaNo>
	<CepTelefonNo>5321234123</CepTelefonNo>
	<Email>a@a.com</Email>
	<HatirlaticiNot />
	<Segment1>
		<Kalkis>IST</Kalkis>
		<Varis>ASR</Varis>
		<KalkisTarih>2012-01-23T06:45:00</KalkisTarih>
		<VarisTarih>2012-01-23T08:25:00</VarisTarih>
		<UcusNo>TK2216</UcusNo>
		<FirmaKod>TK</FirmaKod>
		<Sinif>G</Sinif>
		<DonusMu>0</DonusMu>
           <SeferKod></SeferKod>
	</Segment1>
	<Segment2>
		<Kalkis>IST</Kalkis>
		<Varis>ASR</Varis>
		<KalkisTarih>2012-01-26T09:10:00</KalkisTarih>
		<VarisTarih>2012-01-26T11:15:00</VarisTarih>
		<UcusNo>TK2217</UcusNo>
		<FirmaKod>TK</FirmaKod>
		<Sinif>G</Sinif>
		<DonusMu>1</DonusMu>
            <SeferKod></SeferKod>
	</Segment2>
	<Yolcu1>
		<Ad>AHMET</Ad>
		<Soyad>ALKAN</Soyad>
		<Cinsiyet>2</Cinsiyet>
		<YolcuTip>1</YolcuTip>
		<TCKimlikNo>00000000000</TCKimlikNo>
		<MilNo />
		<NetFiyat>110</NetFiyat>
		<Vergi>58</Vergi>
		<ServisUcret>15</ServisUcret>
	</Yolcu1>
	<Yolcu2>
		<Ad>HAKAN</Ad>
		<Soyad>ACAR</Soyad>
		<Cinsiyet>1</Cinsiyet>
		<YolcuTip>1</YolcuTip>
		<TCKimlikNo>00000000000</TCKimlikNo>
		<MilNo />
		<NetFiyat>110</NetFiyat>
		<Vergi>58</Vergi>
		<ServisUcret>15</ServisUcret>
	</Yolcu2>
	<Fatura>
		<FaturaTip>0</FaturaTip>
		<KisiAd>AHMET</KisiAd>
		<KisiSoyad>ALKAN</KisiSoyad>
		<KisiTCKimlikNo>00000000000</KisiTCKimlikNo>
		<KisiAdres>BiletAll Organizasyon</KisiAdres>
		<FirmaAd />
		<FirmaVergiNo />
		<FirmaVergiDairesi />
		<FirmaAdres />
	</Fatura>
	<WebYolcu>
<Ip>127.0.0.1</Ip>
		<KrediKartNo>xxxxxxxxxxxxxxxx</KrediKartNo>
		<KrediKartSahip>AHMET ALKAN</KrediKartSahip>
		<KrediKartGecerlilikTarihi>7.2013</KrediKartGecerlilikTarihi>
		<KrediKartCCV2>xxx</KrediKartCCV2>
		<RezervePnrNo>S31234</RezervePnrNo>
	</WebYolcu>
</IslemUcak_2>
```

:::
