# YURTİÇİ UÇUŞ LİSTESİ SORGULAMA

## ŞEMA

Sorgulamada kullanacağımız alanların xml şeması aşağıdaki gibidir.
|Alan|Açıklama|
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **FirmaNo\*** | Yurtiçi uçuş işlemleri için kullanılacak firma numarası sabittir. **FirmaNo : |
| **KalkisAdi**\* | Listelemek istediğiniz uçuşların kalkış havaalanı.Bu parametre üç harfli havaalanı kodudur.**Format:(string, min:3 max: 3 karakter).** |
| **VarisAdi**\* | Listelemek istediğiniz uçuşların varış havaalanı. Bu parametre üç harfli havaalanı kodudur.**Format:(string, min:3 max: 3 karakter).** |
| **Tarih**\* | Listelemek istediğiniz uçuşların kalkış tarihi **Format:(datetime, ‘yyyy-MM-dd’).** |
| DonusTarih | Listelemek istediğiniz uçuşların varış tarihi **Format:(datetime, ‘yyyy-MM-dd’).** |
| **SeyahatTipi**\* | Yapılacak seyahatin Tek Yön veya Gidiş-Dönüş olduğunu gösterir. Tek Yön tipi için olması gereken parametre değeri: **1** Gidiş- Dönüş tipi için olması gereken parametre değeri: **2\*\* **Format: integer, 1 veya 2** |
| **IslemTipi\*** | Yapılacak işlemin Satış veya Rezervasyon olduğunu gösterir. Satış işlemi için olması gereken parametre değeri: **0** Rezervasyon işlemi için olması gereken parametre değeri: **1** **Format: integer, 1 veya 0** |
| **YetiskinSayi\*** | Seyahat edecek yetişkin yolcu sayısı. |
| CocukSayi | Seyahat edecek çocuk yolcu sayısı. |
| BebekSayi | Seyahat edecek bebek yolcu sayısı. |
| OgrenciSayi | Seyahat edecek öğrenci yolcu sayısı. |
| YasliSayi | Seyahat edecek yaşlı yolcu sayısı. |
| AskerSayi | Seyahat edecek asker yolcu sayısı. |
| GencSayi | Seyahat edecek genç yolcu sayısı. |
| **Ip\*** | Site ziyaretçisinin Ip adresi |

:::info :exclamation: Not 
(\*) ile işaretli alanlar, gönderilmesi zorunlu alanlardır.
:::

```xml
<xs:element name="Sefer">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="FirmaNo" type="xs:int" minOccurs="0" />
        <xs:element name="KalkisAdi" type="Str4" />
        <xs:element name="VarisAdi" type="Str4" />
        <xs:element name="Tarih" type="trh" />
        <xs:element name="DonusTarih" type="trh" minOccurs="0" />
	  <xs:element name="SeyahatTipi" type="xs:byte" minOccurs="0" />
        <xs:element name="IslemTipi" type="xs:byte" />
        <xs:element name="YetiskinSayi" type="xs:byte" minOccurs="0" />
	  <xs:element name="CocukSayi" type="xs:byte" minOccurs="0" />
	  <xs:element name="BebekSayi" type="xs:byte" minOccurs="0" />
	  <xs:element name="OgrenciSayi" type="xs:byte" minOccurs="0" />
	  <xs:element name="YasliSayi" type="xs:byte" minOccurs="0" />
        <xs:element name="AskerSayi" type="xs:byte" minOccurs="0" />
        <xs:element name="GencSayi" type="xs:byte" minOccurs="0" />
        <xs:element name="Ip" type="IpType" />
      </xs:sequence>
    </xs:complexType>
  </xs:element>
```

## İSTEK

```xml
<Sefer>
	<FirmaNo>1000</FirmaNo>
	<KalkisAdi>ASR</KalkisAdi>
	<VarisAdi>IST</VarisAdi>
	<Tarih>2011-04-20</Tarih>
	<DonusTarih>2011-04-30</DonusTarih>
	<SeyahatTipi>2</SeyahatTipi>
	<IslemTipi>0</IslemTipi>
	<YetiskinSayi>1</YetiskinSayi>
	<CocukSayi>0</CocukSayi>
	<BebekSayi>0</BebekSayi>
	<OgrenciSayi>0</OgrenciSayi>
	<YasliSayi>0</YasliSayi>
      <AskerSayi>0</AskerSayi>
      <GencSayi>0</GencSayi>
<Ip>127.0.0.1</Ip>
</Sefer>
```

## CEVAP

**Yurtiçi uçuş listesi yapısı şu şekildedir:**

Gidiş için seçilecek uçuşların fiyat seçeneklerinin yer aldığı bir Seçenekler listesi, uçuş bilgilerinin yer aldığı bir Segmentler listesi bulunmaktadır.  
Gidiş seferlerinde olduğu gibi dönüş seferleri için DonusSecenekler ve DonusSegmentler listeleri bulunmaktadır.  
:::tip :bulb: İpucu
Eğer sınıf bazlı gösterim isteniyorsa seçenekleri listelerken ilgili seçeneğin SegmentSiniflar listesinden sınıflarına bakılarak o sınıfın ilgili segmentleri alınabilir.Ve sonrasında istenilirse Segmentin ücret detaylarını SecenekUcretDetaylar listesinden çekilerek kullanılabilir.  
:::

**SEÇENEKLER LİSTESİ**
|Alan|Açıklama|
| ------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| ID | Her bir seçenek için tekil olan seçenek numarası. Bu numara ile Segment listesinden ilgili seçeneğe ait diğer bilgiler çekilebilir. |
| FiyatP | Promosyon sınıfları için belirlenmiş fiyat bilgisi. Bu sınıflardan satılan biletlerin iptali yapılamamaktadır. |
| FiyatE | Ekonomi sınıfları için belirlenmiş fiyat bilgisi. |
| FiyatB | Bussiness sınıflar için belirlenmiş fiyat bilgisi. |
| BagajP | Promosyon sınıfları için belirlenmiş bagaj bilgisi. |
| BagajE | Ekonomi sınıfları için belirlenmiş bagaj bilgisi. |
| BagajB | Bussiness sınıflar için belirlenmiş bagaj bilgisi. |
| Vakit | Seçeneğe ait uçuşun vaktini belirtir. |
| FirmaNo | Hizmeti sağlayan firmaNo belirtir. Fiyat çekme , rezervasyon ve satış işlemlerinde `<FirmaNo>FirmaNo</FirmaNo>` olarak kullanılmalıdır. |

**SEGMENTLER LİSTESİ**
|Alan|Açıklama|
| -------------- | ------------------------------------------------------------------------------- |
| ID | Her bir segment için tekil olan segment numarası. |
| SeçenekID | İlgili segmentin Seçenekler listesinde hangi seçeneğe ait olduğunu belirten seçenek numarası. Aktarmalı uçuşlarda bir fiyat seçeneği için birden fazla segment olabilir. |
| Firma | İlgili uçuşu yapacak olan taşıyıcı firmanın ikili firma kodu. |
| FirmaAd | İlgili uçuşu yapacak olan taşıyıcı firmanın ismi. |
| SeferNo | İlgili uçuşun sefer numarası. |
| SeferKod | İlgili uçuşun sefer kodu.Bu bilgi Atlasglobal seferlerinde gelmektedir. |
| Kalkis | İlgili uçuşun kalkış havaalanı kodu. |
| Varis | İlgili uçuşun varış havaalanı kodu. |
| KalkisSehir | İlgili uçuşun kalkış havaalanı şehri |
| VarisSehir | İlgili uçuşun varış havaalanı şehri. |
| KalkisHavaAlan | İlgili uçuşun kalkış havaalanı ismi |
| VarisHavaAlan | İlgili uçuşun varış havaalanı ismi |
| KalkisTarih | İlgili uçuşun kalkış tarihi |
| VarisTarih | İlgili uçuşun varış tarihi |
| Sure | İlgili uçuşun dakika olarak süresi |
| Ucaktip | İlgili uçuşu yapacak uçağın tipi |
| SinifP | Promosyon uçuş sınıfı bilgisi |
| SinifE | Ekonomi uçuş sınıfı bilgisi |
| SinifB | Bussiness uçuş sınıfı bilgisi |
| KoltukP | İlgili promosyon sınıfında kalan boş koltuk sayısı. |
| KoltukE | İlgili ekonomi sınıfında kalan boş koltuk sayısı. |
| KoltukB | İlgili bussiness sınıfında kalan boş koltuk sayısı. |
| BagajP | Promosyon sınıfları için belirlenmiş bagaj bilgisi. |
| BagajE | Ekonomi sınıfları için belirlenmiş bagaj bilgisi. |
| BagajB | Bussiness sınıflar için belirlenmiş bagaj bilgisi. |

**SEGMENT SINIFLAR LİSTESİ**
|Alan|Açıklama|
|---------------------|----------------------------------------------------|
|SegmentID2|Segmentler listesindeki ID alanıyla eşleştirilerek kullanılır.|
|SecenekUcretID|SecenekUcretler listesindeki ID alanıyla eşleşerek kullanılır.|
|SinifKod|Segmentin sınıf kodu alanıdır.|
|KoltukSayi|Geçerli sınıfta kaç koltuk boş durumda oldugu bilgisi içindir.|
|Ucret|Geçerli sınıfın ücreti için kullanılır.|
|EksikKoltukMu| |

**SEÇENEK ÜCRETLER LİSTESİ**
|Alan|Açıklama|
| ------------------- | ---------------------------------------------------------------- |
| ID | Listesindeki elemanları birbirinden ayırmak için kullanılır. |
| SecenekID2 | Secenekler listesindeki ID alanıyla eşleşerek kullanılır. |
| SinifAd | Havayolundakı sınıf adına karşılık gelen alan. |
| SinifTip | Sınıfın Tipi |
| KoltukSayi | Geçerli Seçenekte kaç koltuk boş durumda oldugu bilgisi içindir. |
| Bagaj | Seçeneğin bagaj hakkı |
| TekYolcuUcret | Seçeneğin ücreti |
| TekYolcuServisUcret | Servis ücreti |
| ToplamUcret | Seçeneğin ücreti |
| ToplamServisUcret | Servis ücreti |
| Aciklama | Kampanya, Bildirim vs gibi amaçlar içindir. |

**Seçenek Ücret Detayları Listesi**
|Alan|Açıklama|
| -------------- | --------------------------------------------------------------------------------- |
| ID             | SecenekUcretDetaylar listesindeki elemanları birbirinden ayırmak için kullanılır. |
| SecenekUcretID | SecenekUcretler listesindeki ID alanıyla eşleşerek kullanılır.                    |
| Tip            | Detayın Tipi                                                                      |
| Aciklama       | Tipin ilgili açıklama                                                             |

:::info :exclamation: Not 
**Yurtiçi Dolu Seferler:**  
Seçenek listesinde FiyatP, FiyatE, FiyatB alanlarının hepsinde 0 dönüyorsa hiçbir sınıfta yer olmadığı dolayısıyla seferin dolu olduğu anlamına gelir.
:::
:::details Kodu görüntülemek için tıklayın. :computer_mouse:

```xml

<NewDataSet>
	<Secenekler>
		<ID>1</ID>
<FirmaNo>1000</FirmaNo>
<FiyatP>239.99</FiyatP>
<FiyatE>277.99</FiyatE>
<FiyatB>0</FiyatB>
<ServisUcretP>15.0000</ServisUcretP>
<ServisUcretE>22.0000</ServisUcretE>
<ServisUcretB>0</ServisUcretB>
<ToplamFiyatP>239.99</ToplamFiyatP>
<ToplamFiyatE>277.99</ToplamFiyatE>
<ToplamFiyatB></ToplamFiyatB>
<ToplamServisUcretP>15.0000</ToplamServisUcretP>
<ToplamServisUcretE>22.0000</ToplamServisUcretE>
<ToplamServisUcretB></ToplamServisUcretB>
<BagajP>15 kg</BagajP>
<BagajE>20 kg</BagajE>
<Vakit>Sabah</Vakit>
<A>TK2643</A>
	</Secenekler>
	<Segmentler>
		<ID>0</ID>
		<SecenekID>1</SecenekID>
		<Firma>TK</Firma>
		<FirmaAd>Türk Havayolları</FirmaAd>
<GercekTFAciklama>OPERATED BY ANADOLUJET AIRCRAFT</GercekTFAciklama>
		<SeferNo>TK2023</SeferNo>
            <SeferKod></SeferKod>
		<Kalkis>ASR</Kalkis>
		<Varis>IST</Varis>
		<KalkisSehir>Kayseri</KalkisSehir>
		<VarisSehir>İstanbul</VarisSehir>
		<KalkisHavaalan>Erkilet</KalkisHavaalan>
		<VarisHavaalan>Atatürk</VarisHavaalan>
		<KalkisTarih>2011-04-20T06:30:00+03:00</KalkisTarih>
		<VarisTarih>2011-04-20T08:00:00+03:00</VarisTarih>
<Sure>120</Sure>
		<UcakTip>738</UcakTip>
		<SinifE>S</SinifE>
		<SinifB>J</SinifB>
		<KoltukE>9</KoltukE>
		<KoltukB>4</KoltukB>
<BagajE>15 kg</BagajE>
<BagajB>20 kg</BagajB>
	</Segmentler>
	<DonusSecenekler>
		<ID>1</ID>
		<FiyatP>0</FiyatP>
		<FiyatE>204.0</FiyatE>
		<FiyatB>314.0</FiyatB>
<BagajE>15 kg</BagajE>
<BagajB>20 kg</BagajB>
		<Vakit>Sabah</Vakit>
		<A>TK2010</A>
	</DonusSecenekler>
	<DonusSegmentler>
		<ID>0</ID>
		<SecenekID>1</SecenekID>
		<Firma>TK</Firma>
		<FirmaAd>Türk Havayolları</FirmaAd>
		<SeferNo>TK2010</SeferNo>
            <SeferKod></SeferKod>
		<Kalkis>IST</Kalkis>
		<Varis>ASR</Varis>
		<KalkisSehir>İstanbul</KalkisSehir>
		<VarisSehir>Kayseri</VarisSehir>
		<KalkisHavaalan>Atatürk</KalkisHavaalan>
		<VarisHavaalan>Erkilet</VarisHavaalan>
		<KalkisTarih>2011-04-30T07:20:00+03:00</KalkisTarih>
		<VarisTarih>2011-04-30T08:45:00+03:00</VarisTarih>
<Sure>85</Sure>
		<UcakTip>738</UcakTip>
		<SinifE>S</SinifE>
		<SinifB>J</SinifB>
		<KoltukE>9</KoltukE>
		<KoltukB>3</KoltukB>
<BagajE>15 kg</BagajE>
<BagajB>20 kg</BagajB>
	</DonusSegmentler>
</NewDataSet>
```

:::
