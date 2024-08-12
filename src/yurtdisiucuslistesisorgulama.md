# YURTDIŞI UÇUŞ LİSTESİ SORGULAMA

## ŞEMA

Sorgulamada kullanacağımız alanların xml şeması aşağıdaki gibidir.
|ALAN|AÇIKLAMA|
| --------------------- | ------------------------------------ |
| FirmaNo | Yurtdışı uçuş işlemleri için kullanılacak firma numarası sabittir.**FirmaNo : 1100** |
| **KalkisAdi\*** | Listelemek istediğiniz uçuşların kalkış havaalanı. Bu parametre üç harfli havaalanı kodudur.**Format:(string, min:3 max: 3 karakter). |
| **VarisAdi**\* | Listelemek istediğiniz uçuşların varış havaalanı.Bu parametre üç harfli havaalanı kodudur. **Format:(string, min:3 max: 3 karakter). |
| **Tarih\*** | Listelemek istediğiniz uçuşların kalkış tarihi **Format:(datetime, ‘yyyy-MM-dd’).** |
| SplitSearch | Seferleri gruplamak istediğinizde bu alanı **1** göndermelisiniz. (Zorunlu ) |
| **DonusTarih\*** | Listelemek istediğiniz uçuşların varış tarihi **Format:(datetime, ‘yyyy-MM-dd’).** |
| SplitSearchGidisDonusGrupla | Gidiş dönüş seferleri gruplamak istediğinizde bu alanı 1 göndermelisiniz.(Zorunlu değildir) |
| Sinif (Gönderilmesi zorunlu değil) | Listelemek istediğiniz uçuşların sınıfı Ekonomi: **3** Business: **2** Bu parametre gönderilmediğinde tüm sınıflar için sonuç döner. |
| **SeyahatTipi\*** | Yapılacak seyahatin Tek Yön veya Gidiş-Dönüş olduğunu gösterir. Tek Yön tipi için olması gereken parametre değeri: **1** Gidiş- Dönüş tipi için olması gereken parametre değeri: **2** **Format: integer, 1 veya 2** |
| **IslemTipi\*** | Yapılacak işlemin Satış veya Rezervasyon olduğunu gösterir. Satış işlemi için olması gereken parametre değeri: **0** Rezervasyon işlemi için olması gereken parametre değeri: **1** **Format: integer, 1 veya 0** |
| YetiskinSayi | Seyahat edecek yetişkin yolcu sayısı.|
| CocukSayi | Seyahat edecek çocuk yolcu sayısı. |
| BebekSayi | Seyahat edecek bebek yolcu sayısı. |
| **Ip\*** | Site ziyaretçisinin Ip adresi. |

:::info
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
  <xs:element name="SplitSearch" type="xs:byte" minOccurs="0" />
        <xs:element name="DonusTarih" type="trh" minOccurs="0" />
  <xs:element name="SplitSearchGidisDonus" type="xs:byte" minOccurs="0"/>
  <xs:element name="Sinif" type="xs:byte" minOccurs="0" />
	  <xs:element name="SeyahatTipi" type="xs:byte" minOccurs="0" />
        <xs:element name="IslemTipi" type="xs:byte" />
        <xs:element name="YetiskinSayi" type="xs:byte" minOccurs="0" />
	  <xs:element name="CocukSayi" type="xs:byte" minOccurs="0" />
	  <xs:element name="BebekSayi" type="xs:byte" minOccurs="0" />
        <xs:element name="Ip" type="IpType" />
      </xs:sequence>
    </xs:complexType>
  </xs:element>
```

## STANDART ARAMA

:::info
Split Search Sefer aramaları için Örnek XML (Split Search Araması) başlıklı Sefer isteğini kullanabilirsiniz. Split Search işlemleri için bir üst tablodaki “SplitSearch” ve “SplitSearchGidisDonus” alanlarını inceleyebilirsiniz.
:::

### İSTEK

```xml
<Sefer>
	<FirmaNo>1100</FirmaNo>
	<KalkisAdi>IST</KalkisAdi>
	<VarisAdi>BER</VarisAdi>
	<Tarih>2011-04-20</Tarih>
	<DonusTarih>2011-04-30</DonusTarih>
	<SeyahatTipi>2</SeyahatTipi>
	<IslemTipi>0</IslemTipi>
	<YetiskinSayi>1</YetiskinSayi>
	<CocukSayi>0</CocukSayi>
	<BebekSayi>0</BebekSayi>
<Ip>127.0.0.1</Ip>
</Sefer>
```

#### CEVAP

:::info
Yurtdışı uçuş listesi yapısı şu şekildedir:
Yurtdışı uçak biletlerinde ön plan fiyat bilgisi yer almaktadır. Seferler fiyatlara göre gruplanmaktadır. Fiyat seçeneklerinin sunulduğu bir seçenekler listesi yer almaktadır. Gidiş için seçilecek uçuşların ve bu uçuşların hangi fiyat seçeneğine ait olduğunu belirten bir Seçenekler listesi, gidiş dönüş seyahat tipi seçilmiş sefer listesinde dönüş uçuş bilgilerinin yer aldığı ve her bir uçuşun hangi fiyat seçeneğine ait olduğunu belirten bir DonusSegmentler listesi bulunmaktadır.
Fiyat seçeneklerinde bulunan bilgilere göre gidiş için uygun uçuşları, aynı şekilde dönüş içim uygun uçuşları filtreleyip seçtirmeniz gerekmektedir.
:::
**SEÇENEKLER LİSTESİ**
|ALAN|AÇIKLAMA|
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| ID | Her bir seçenek için tekil olan seçenek numarası. Bu numara ile Segment listelerinden ilgili seçeneğe ait diğer bilgiler çekilebilir. |
| VFiyat | İlgili fiyat seçeneğinin net bilet fiyatı ve vergiler dâhil toplam bilet fiyatıdır.Bu fiyata hizmet bedeli(servis ücreti) dâhil değildir. Bunun sebebi, seçilecek uçuşların farklı hizmet bedeline ait olabilmesidir. Örneğin aktarmalı bir uçuşun ilki ekonomi sınıflarından birisiyle, diğer uçuşlardan herhangi biri de bussiness sınıflardan birisiyle yapılabilir. Böyle durumlarda hizmet bedeli farklılık arz edebilir. |
| NFiyat | İlgili fiyat seçeneğinin vergi hariç net bilet fiyatıdır. |
| YetiskinSayi | Seyahat edecek yetişkin yolcu sayısı. |
| CocukSayi | Seyahat edecek çocuk yolcu sayısı. |
| BebekSayi | Seyahat edecek bebek yolcu sayısı.|
| YetiskinVFiyat| Yetişkin yolcuların vergi dâhil toplam bilet fiyatı. |
| CocukVFiyat | Çocuk yolcuların vergi dâhil toplam bilet fiyatı. |
| BebekVFiyat | Bebek yolcuların vergi dâhil toplam bilet fiyatı. |
| YetiskinNFiyat | Yetişkin yolcuların vergi hariç net bilet fiyatı. |
| CocukVFiyat | Çocuk yolcuların vergi hariç net bilet fiyatı. |
| BebekVFiyat | Bebek yolcuların vergi hariç net bilet fiyatı. |
| OpsiyonTarihi | Her bir fiyat seçeneği için belirlenmiş opsiyon tarihi.|
| Aciklama| Kampanya, Bildirim vs gibi amaçlar içindir.|
| FirmaNo | Hizmeti sağlayan firmaNo belirtir . Fiyat çekme , rezervasyon ,satış işlemlerinde `<FirmaNo>FirmaNo</FirmaNo>` olarak kullanılmalıdır. |

**SEGMENTLER LİSTELERİ**
|ALAN|AÇIKLAMA|
| --------------- | --------------------------------------------------------------------------------------------------- |
| ID | Her bir segment için tekil olan segment numarası. |
| SeçenekID | İlgili segmentin Seçenekler listesinde hangi fiyat seçeneğe ait olduğunu belirten seçenek numarası. |
| UcusID | Listelenen fiyat seçenekleri ile segmentlere göre belirlenmiş olası uçuşların sıra numarası. |
| Aktarma | İlgili segmentin aktarma |
| SeferNo | İlgili uçuşun sefer |
| SeferKod | İlgili uçuşun sefer |
| HavaYolu | İlgili uçuşu yapan havayolu firması |
| HavaYoluKod | İlgili uçuşu yapan havayolu firması |
| KalkisKod | İlgili uçuşun kalkış havaalanı |
| KalkisUlkeID | İlgili uçuşun kalkış ülke |
| KalkisUlke | İlgili uçuşun kalkış havaalanı |
| KalkisSehir | İlgili uçuşun kalkış havaalanı |
| KalkisHavaAlan | İlgili uçuşun kalkış havaalanı |
| VarisKod | İlgili uçuşun varış havaalanı |
| VarisUlkeID | İlgili uçuşun varış ülke |
| VarisUlke | İlgili uçuşun varış havaalanı |
| VarisSehir | İlgili uçuşun varış havaalanı |
| VarisHavaAlan | İlgili uçuşun varış havaalanı |
| KalkisTarih | İlgili uçuşun kalkış |
| VarisTarih | İlgili uçuşun varış |
| Vakit | Seçeneğe ait uçuşun vaktini |
| Sinif | Seçeneğe ait uçuşun sınıfını |
| KalanKoltukSayi | Segmentte bulunan boş koltuk sayısını |
:::details kodu görüntülemek için tıklayın.

```xml
<NewDataSet>
	<Secenekler>
		<ID>0</ID>
		<VFiyat>875</VFiyat>
		<NFiyat>450</NFiyat>
		<YetiskinSayi>1</YetiskinSayi>
		<CocukSayi>1</CocukSayi>
		<BebekSayi>1</BebekSayi>
		<YetiskinVFiyat>426.5</YetiskinVFiyat>
		<CocukVFiyat>426.5</CocukVFiyat>
		<BebekVFiyat>22</BebekVFiyat>
		<YetiskinNFiyat>214</YetiskinNFiyat>
		<CocukNFiyat>214</CocukNFiyat>
		<BebekNFiyat>22</BebekNFiyat>
		<ServisUcreti>0</ServisUcreti>
		<OpsiyonTarihi>20110410</OpsiyonTarihi>
		<RezervasyonYapilabilirMi>1</RezervasyonYapilabilirMi>
		<CharterSeferMi>0</CharterSeferMi>
	<FirmaNo>1100</FirmaNo>
	</Secenekler>
	<Segmentler>
		<ID>0</ID>
		<SecenekID>0</SecenekID>
		<UcusID>0</UcusID>
		<Aktarma>false</Aktarma>
		<SeferNo>1723</SeferNo>
            <SeferKod></SeferKod>
		<HavaYolu>Turkish Airlines</HavaYolu>
		<HavaYoluKod>TK</HavaYoluKod>
		<KalkisKod>IST</KalkisKod>
		<KalkisUlkeID>1</KalkisUlkeID>
		<KalkisUlke>Türkiye</KalkisUlke>
		<KalkisSehir>İstanbul</KalkisSehir>
		<KalkisHavaAlani>Atatürk</KalkisHavaAlani>
		<VarisKod>TXL</VarisKod>
		<VarisUlkeID>3</VarisUlkeID>
		<VarisUlke>Almanya</VarisUlke>
		<VarisSehir>Berlin</VarisSehir>
		<VarisHavaAlani>TEGEL</VarisHavaAlani>
		<UcusSuresi>175</UcusSuresi>
		<KalkisTarih>2011-04-20T14:55:00+03:00</KalkisTarih>
		<VarisTarih>2011-04-20T16:50:00+03:00</VarisTarih>
		<Vakit>Ogle</Vakit>
		<Sinif>P</Sinif>
<KalanKoltukSayi>9</KalanKoltukSayi>
	</Segmentler>
	<DonusSegmentler>
		<ID>0</ID>
		<SecenekID>0</SecenekID>
		<UcusID>1</UcusID>
		<Aktarma>false</Aktarma>
		<SeferNo>1724</SeferNo>
<SeferKod></SeferKod>
		<HavaYolu>Turkish Airlines</HavaYolu>
		<HavaYoluKod>TK</HavaYoluKod>
		<KalkisKod>TXL</KalkisKod>
		<KalkisUlkeID>3</KalkisUlkeID>
		<KalkisUlke>Almanya</KalkisUlke>
		<KalkisSehir>Berlin</KalkisSehir>
		<KalkisHavaAlani>TEGEL</KalkisHavaAlani>
		<VarisKod>IST</VarisKod>
		<VarisUlkeID>1</VarisUlkeID>
		<VarisUlke>Türkiye</VarisUlke>
		<VarisSehir>İstanbul</VarisSehir>
		<VarisHavaAlani>Atatürk</VarisHavaAlani>
		<UcusSuresi>165</UcusSuresi>
		<KalkisTarih>2011-04-30T17:50:00+03:00</KalkisTarih>
		<VarisTarih>2011-04-30T21:35:00+03:00</VarisTarih>
		<Vakit>Aksam</Vakit>
		<Sinif>P</Sinif>
<KalanKoltukSayi>6</KalanKoltukSayi>
	</DonusSegmentler>
</NewDataSet>
```

## SPLİT SEARCH ARAMA

### İSTEK

```xml
<Sefer>
	<FirmaNo>1100</FirmaNo>
	<KalkisAdi>VAN</KalkisAdi>
	<VarisAdi>BUS</VarisAdi>
	<Tarih>2023-11-11</Tarih>
	<SplitSearch>1</SplitSearch>
	<SeyahatTipi>1</SeyahatTipi>
	<IslemTipi>0</IslemTipi>
	<YetiskinSayi>1</YetiskinSayi>
	<CocukSayi>0</CocukSayi>
	<BebekSayi>0</BebekSayi>
<Ip>127.0.0.1</Ip>
</Sefer>
```

:::

#### CEVAP

:::info
Yurtdışı uçuş listesi yapısı şu şekildedir:
Yurtdışı uçak biletlerinde ön plan fiyat bilgisi yer almaktadır. Seferler fiyatlara göre gruplanmaktadır. Fiyat seçeneklerinin sunulduğu bir seçenekler listesi yer almaktadır. Gidiş için seçilecek uçuşların ve bu uçuşların hangi fiyat seçeneğine ait olduğunu belirten bir Seçenekler listesi, gidiş dönüş seyahat tipi seçilmiş sefer listesinde dönüş uçuş bilgilerinin yer aldığı ve her bir uçuşun hangi fiyat seçeneğine ait olduğunu belirten bir DonusSegmentler listesi bulunmaktadır.
Fiyat seçeneklerinde bulunan bilgilere göre gidiş için uygun uçuşları, aynı şekilde dönüş içim uygun uçuşları filtreleyip seçtirmeniz gerekmektedir.
:::

**SEÇENEKLER LİSTESİ**
|ALAN|AÇIKLAMA|
|----------------------------------|--------------------------------------------------------------------------|
|ID|Her bir seçenek için tekil olan seçenek numarası. Bu numara ile Segment listelerinden ilgili seçeneğe ait diğer bilgiler çekilebilir.|
|VFiyat|İlgili fiyat seçeneğinin net bilet fiyatı ve vergiler dâhil toplam bilet fiyatıdır.Bu fiyata hizmet bedeli(servis ücreti) dâhil değildir. Bunun sebebi, seçilecek uçuşların farklı hizmet bedeline ait olabilmesidir. Örneğin aktarmalı bir uçuşun ilki ekonomi sınıflarından birisiyle, diğer uçuşlardan herhangi biri de bussiness sınıflardan birisiyle yapılabilir. Böyle durumlarda hizmet bedeli farklılık arz edebilir.|
|NFiyat|İlgili fiyat seçeneğinin vergi hariç net bilet fiyatıdır.|
|YetiskinSayi|Seyahat edecek yetişkin yolcu sayısı.|
|CocukSayi|Seyahat edecek çocuk yolcu sayısı.|
|BebekSayi|Seyahat edecek bebek yolcu sayısı.|
|YetiskinVFiyat|Yetişkin yolcuların vergi dâhil toplam bilet fiyatı.|
|CocukVFiyat|Çocuk yolcuların vergi dâhil toplam bilet fiyatı.|
|BebekVFiyat|Bebek yolcuların vergi dâhil toplam bilet fiyatı.|
|YetiskinNFiyat|Yetişkin yolcuların vergi hariç net bilet fiyatı.|
|CocukVFiyat|Çocuk yolcuların vergi hariç net bilet fiyatı.|
|BebekVFiyat|Bebek yolcuların vergi hariç net bilet fiyatı.|
|OpsiyonTarihi|Her bir fiyat seçeneği için belirlenmiş opsiyon tarihi.|
|Aciklama|Kampanya, Bildirim vs gibi amaçlar içindir.|
|FirmaNo|Hizmeti sağlayan firmaNo belirtir . Fiyat çekme , rezervasyon ,satış işlemlerinde `<FirmaNo>FirmaNo</FirmaNo>` olarak kullanılmalıdır.|

**SEGMENTLER LİSTELERİ**
|ALAN|AÇIKLAMA|
| --------------- | --------------------------------------------------------------------------------------------------- |
| ID | Her bir segment için tekil olan segment numarası. |
| SeçenekID | İlgili segmentin Seçenekler listesinde hangi fiyat seçeneğe ait olduğunu belirten seçenek numarası. |
| UcusID | Listelenen fiyat seçenekleri ile segmentlere göre belirlenmiş olası uçuşların sıra numarası. |
| Aktarma | İlgili segmentin aktarma bilgisi |
| SeferNo | İlgili uçuşun sefer numarası. |
| SeferKod | İlgili uçuşun sefer kodu. |
| HavaYolu | İlgili uçuşu yapan havayolu firması ismi |
| HavaYoluKod | İlgili uçuşu yapan havayolu firması kodu. |
| KalkisKod | İlgili uçuşun kalkış havaalanı kodu |
| KalkisUlkeID | İlgili uçuşun kalkış ülke numarası |
| KalkisUlke | İlgili uçuşun kalkış havaalanı ülkesi |
| KalkisSehir | İlgili uçuşun kalkış havaalanı şehri |
| KalkisHavaAlan | İlgili uçuşun kalkış havaalanı ismi |
| VarisKod | İlgili uçuşun varış havaalanı kodu |
| VarisUlkeID | İlgili uçuşun varış ülke numarası |
| VarisUlke | İlgili uçuşun varış havaalanı ülkesi |
| VarisSehir | İlgili uçuşun varış havaalanı şehri |
| VarisHavaAlan | İlgili uçuşun varış havaalanı ismi |
| KalkisTarih | İlgili uçuşun kalkış tarihi |
| VarisTarih | İlgili uçuşun varış tarihi |
| Vakit | Seçeneğe ait uçuşun vaktini belirtir. |
| Sinif | Seçeneğe ait uçuşun sınıfını belirtir. |
| KalanKoltukSayi | Segmentte bulunan boş koltuk sayısını belirtir. |
:::details kodu görüntülemek için tıklayın.

```xml
<GidisSecenekler>
	<GidisSecenek>
		<SeferBilgiKey>MA==</SeferBilgiKey>
		<Fiyat>5001.7200</Fiyat>
		<ServisUcret>45.0000</ServisUcret>
		<FiyatParametreKey>MQ==</FiyatParametreKey>
		<TekYolcuUcret>4956.7200</TekYolcuUcret>
		<TekYolcuServisUcret>45.0000</TekYolcuServisUcret>
	</GidisSecenek>
	<GidisSecenek>
		<SeferBilgiKey>Mg==</SeferBilgiKey>
		<Fiyat>5425.7200</Fiyat>
		<ServisUcret>45.0000</ServisUcret>
		<FiyatParametreKey>Mw==</FiyatParametreKey>
		<TekYolcuUcret>5380.7200</TekYolcuUcret>
		<TekYolcuServisUcret>45.0000</TekYolcuServisUcret>
	</GidisSecenek>
</GidisSecenekler>
<SeferBilgiler>
	<SeferBilgi>
		<Key>OA==</Key>
		<Saglayici>Galileo</Saglayici>
		<FirmaNo>1100</FirmaNo>
		<BagajHakki>Yalnızca el bagajı</BagajHakki>
 		<BebekBagajHakki>Yalnızca el bagajı</BebekBagajHakki>
		<Aciklama />
		<CharterSeferMi>0</CharterSeferMi>
		<RezervasyonYapilabilirMi>0</RezervasyonYapilabilirMi>
		<Segmentler>
			<Segment>
				<Index>0</Index>
				<Nereden>VAN</Nereden>
				<Nereye>IST</Nereye>
				<Kalkis>2023-11-11 12:30</Kalkis>
				<Varis>2023-11-11 15:00</Varis>
				<SureDk>150</SureDk>
				<Sinif>Y</Sinif>
				<SinifTip>Ekonomi</SinifTip>
				<FirmaID>1654</FirmaID>
				<Tasiyici>TK</Tasiyici>
				<TasiyiciAd>Turkish Airlines</TasiyiciAd>
				<UcusNo>2751</UcusNo>
				<FirmaUcusNo>TK2751</FirmaUcusNo>
				<KalanKoltukSayi>9</KalanKoltukSayi>
				<UcakTip>Airbus A321</UcakTip>
				<KoridorSayi>1</KoridorSayi>
				<KatSayi>1</KatSayi>
				<KoltukMesafe>79</KoltukMesafe>
				<BagajHakki>Yalnızca el bagajı</BagajHakki>
				<FiyatPaketTanimi>ECOFLY</FiyatPaketTanimi>
			      <FiyatPaketAnahtari>1276475</FiyatPaketAnahtari>
			</Segment>
		</Segmentler>
	</SeferBilgi>
</SeferBilgiler>
<FiyatParametreler>
	<FiyatParametre>
		<Key>OQ==</Key>
		<Segmentler>
			<Segment>
				<Index>0</Index>
				<SeferKod>KzBEejh0YjNuREtBTkMzRHZKQUF
BQT09LDAsVEssMjc1MSxWQU4sSVNULDIwMjMtMTEtMTFUMTI6MzA6MDAuMDAwKzAzOjAwLDIwMjMtMTEtMTFUMTU6MDA6MDAuMDAwKzAzOjAwLFksSFRDTE8sUyxFY29ub215LDAwMDEsMTI3NjQ3NSxFQ09GTFk=</SeferKod>
				<KuralAnahtar>+0Dz8tb3nDKAZC3DvJAAAA==,gws
-eJxNTtEKwzAI/Jhy76dZKX1LlxQKKw62dNCX/f9nzCQbTFBPT09jjEoNItT4bwPeQ7nBjgQY1P16PKFhJCFenSBlxFbSfkdXkNq3xvUsbWoNefaEFHLoVDWcLb4Wc67L0hVR76JCb+AH1s2hLbmUR9rJi/rKPH1JTvBHP1hfK2E=</KuralAnahtar>
			</Segment>
		</Segmentler>
	</FiyatParametre>
</FiyatParametreler>

<IslemId>
	<Value>ee96c996-84bf-48d1-b401-26372180fc48</Value>
</IslemId>
```

:::
