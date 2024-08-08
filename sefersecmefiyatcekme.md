# SEFER SEÇME - FİYAT ÇEKME
:::danger
Fiyat çekme aşamasında ilgili uçuş sınıfının tükenmesinden kaynaklı hata alabilirsiniz. Hata almanız durumunda fiyat çekmeye çalıştığınız uçuşun parkuru için yeniden sefer sorgulaması yapmanız gerekmektedir.
Yurtiçi veya yurtdışı uçuş listeleri alındıktan uçuş planına göre segment seçimleri yapılır. Tek yön bir uçuş planı varsa gidiş segmenti, gidiş-dönüş şeklinde bir uçuş planı varsa gidiş ve dönüş segmentleri seçilip oluşan seyahat planının ücret bilgisi çekilir. Fiyat çekme işleminde kullanılacak FirmaNo bilgisi için, sefer listesinde gelen FirmaNo alanı kullanılmalıdır.
:::
## ŞEMA
```xml
Bu noktada aşağıda şeması verilen UcusFiyat xml’i kullanılacaktır.

<?xml version="1.0" encoding="utf-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="UcusFiyat">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="FirmaNo" type="xs:int" minOccurs="0" />
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
        <xs:element name="YetiskinSayi" type="xs:byte" minOccurs="0" />
        <xs:element name="CocukSayi" type="xs:byte" minOccurs="0" />
        <xs:element name="BebekSayi" type="xs:byte" minOccurs="0" />
        <xs:element name="OgrenciSayi" type="xs:byte" minOccurs="0" />
        <xs:element name="YasliSayi" type="xs:byte" minOccurs="0" />
        <xs:element name="AskerSayi" type="xs:byte" minOccurs="0" />
        <xs:element name="GencSayi" type="xs:byte" minOccurs="0" />
        <xs:element name="CIP" type="xs:byte" minOccurs="0" />
      </xs:sequence>
    </xs:complexType>
  </xs:element>
  <xs:simpleType name="Str4">
    <xs:restriction base="xs:string">
      <xs:maxLength value="3" />
      <xs:minLength value="3" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="Str10">
    <xs:restriction base="xs:string">
      <xs:maxLength value="10" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="Str100">
    <xs:restriction base="xs:string">
      <xs:maxLength value="100" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="StrSinif">
    <xs:restriction base="xs:string">
      <xs:maxLength value="2" />
      <xs:minLength value="1" />
    </xs:restriction>
  </xs:simpleType>
</xs:schema>
```
## İSTEK

|FirmaNo|Sefer listesinde gelen FirmaNo alanı kullanılmalıdır.|
|----------------------------------|-------------------------------------------|
|YetiskinSayi|Yetişkin yolcu sayısı|
|CocukSayi|Çocuk yolcu sayısı|
|BebekSayi|Bebek yolcu sayısı|
|OgrenciSayi|Öğrenci yolcu sayısı (Sadece yurtiçi uçuşlarda)|
|YasliSayi|Yaşlı yolcu sayısı (Sadece yurtiçi uçuşlarda)|
|AskerSayi|Asker yolcu sayısı (Sadece yurtiçi uçuşlarda)|
|GencSayi|Genç yolcu sayısı (Sadece yurtiçi uçuşlarda)|

|Segment Alanları|Segment alanlarında uçuş planı içerisindeki önce gidiş, sonra varsa dönüş segmentleri seyahat planındaki sırasıyla girilmelidir.|
|---------------------|----------------------------------------------------------|
|Kalkis|havaSegmentin kalkışalanı kodu.|
|Varis|Segmentin varış havaalanı kodu.|
|KalkisTarih|Kalkış tarihi|
|VarisTarih|Varış tarihi|
|SeferNo|Segmentin uçuş numarası|
|Firma|İlgili uçuşu yapan havayolu firması kodu.|
|Sinif|İlgili uçuşun sınıfını belirtir.|
|DonusMu|İlgili segmentin dönüş segmenti mi olduğunu belirtir|
|SeferKod|İlgili segmentin sefer kodunu belirtir.Bu bilgi Atlasglobal uçuşlarında gelmektedir. |


```xml
<UcusFiyat>
	<FirmaNo>1100</FirmaNo>
	<Segment1>
		<Kalkis>IST</Kalkis>
		<Varis>TXL</Varis>
		<KalkisTarih>2011-11-29T11:50:00</KalkisTarih>
		<VarisTarih>2011-11-29T13:45:00</VarisTarih>
		<UcusNo>1725</UcusNo>
		<FirmaKod>TK</FirmaKod>
		<Sinif>W</Sinif>
		<DonusMu>0</DonusMu>
            <SeferKod></SeferKod>
	</Segment1>
	<Segment2>
		<Kalkis>TXL</Kalkis>
		<Varis>IST</Varis>
		<KalkisTarih>2011-12-09T18:00:00</KalkisTarih>
		<VarisTarih>2011-12-09T21:45:00</VarisTarih>
		<UcusNo>1724</UcusNo>
		<FirmaKod>TK</FirmaKod>
		<Sinif>W</Sinif>
		<DonusMu>1</DonusMu>
           <SeferKod></SeferKod>
	</Segment2>
	<YetiskinSayi>1</YetiskinSayi>
	<CocukSayi>0</CocukSayi>
	<BebekSayi>0</BebekSayi>
	<OgrenciSayi>0</OgrenciSayi>
	<YasliSayi>0</YasliSayi>
      <AskerSayi>0</AskerSayi>
	<GencSayi>0</GencSayi>

</UcusFiyat>
```
## CEVAP
:::info
Seçilen segmentler için toplam ve yolcu bazlı ücret değerlerini vermektedir.
:::
**BAGAJ BİLGİLERİ**
:::tip
Eğer servis cevabında bagaj bilgileri alanları dönmüşse, segment-yolcutipi bazında bagaj hakkı bilgisi oluşturulabilir. BagajMiktar + BagajBirim şeklinde bagaj bilgisi oluşturulabilir.
Örnek: 25kg.
:::
:::tip
BagajMiktar bilgisi gelmemişse sadece BagajBirim alanında gelen bilgi kullanılır. Örnek: “Yalnızca El Bagajı”, “Yok”.
:::
:::tip
ervis cevabında BagajBilgiler alanı zorunlu değildir. Belli bir segment-yolcutipi ikilisi için gelmediği ya da hiç gelmediği durumlar da dikkate alınmalıdır.
:::
:::warning
Ödeme 3d zorunlumu satış işleminin nasıl gerçekleşmesi gerektiğini bildirir. YolcuPasaportNoZorunlumu alanı genellikle YurtDışı uçuşlarında kullanılmaktadır. PasaportNo zorunlu olduğu durumlarda, PasaportNo, PasaportGecerlilikTarihi, PasaportUlkeKod ve DogumTarih bilgilerinin Rezervasyon/Satış Xmlinde belirtildiği şekilde gönderilmesi gerekir.
:::
:::warning
YolcuDogumTarihiZorunlumu alanı yolcu doğum tarihlerinin satış ve rezervasyon işleminde zorunlu olduğunu bildirir.Yolcu doğum tarihleri için yaş aralığı kontrolü aşağıda belirtildiği şekilde olmalıdır.
:::
:::warning
 (Yetiskin,Ogretmen,Ogrenci..)FirmaKartZorunlumu Bazı firmalar bazı yolcu tiplerine yaptıkları indirimi doğrulayabilmek için rezervasyon ya da fiyat adımlarında firma kart bilgilerini istemektedir. Rezervasyon ve satış işlemlerinizde firma kartının zorunluluğunu bu parametreden anlayabilirsiniz.
Örn. THY öğrenci ve öğretmen yolcu tipleri için miles&smiles numarasını istemektedir. 
:::

|Yetişkin|12 Yaş Üzeri|
|---------------|-----------------|
|Çocuk|2 - 12 Yaş Arası|
|Bebek|0 - 2 Yaş Arası|
|Öğrenci|13 - 24 Yaş Arası|
|Asker|Asker Yolcu|
|Genç|12 - 24 Yaş Arası|

:::warning
Not: Gidiş Dönüş uçuşlarında Türk Havayolları(Anadolujet ve THY),SunExpress ve  Atlasglobal, Borajet birlikte seçilememektedir.Seçilen firmaların FirmaNo bilgileri aynı olmalıdır.
:::
:::warning 
RezervasyonAktifMi parametresi false ise bu sınıf/seyahat için rezervasyon yapılamayacağı anlamına gelmektedir. Satış işlemi yapılabilir.
:::

```xml
<NewDataSet>
  <FiyatListesi>
    <ToplamYolcuSayisi>3</ToplamYolcuSayisi>
    <ToplamBiletFiyati>729.5700</ToplamBiletFiyati>
    <ToplamNetBiletFiyati>613.69</ToplamNetBiletFiyati>
    <ToplamVergi>71.88</ToplamVergi>
    <ToplamServisUcret>44.0000</ToplamServisUcret>
    <ToplamMinServisUcret>0.0000</ToplamMinServisUcret>
    <YetiskinYolcuSayisi>1</YetiskinYolcuSayisi>
    <YetiskinNetFiyat>322.05</YetiskinNetFiyat>
    <YetiskinVergi>35.94</YetiskinVergi>
    <YetiskinServisUcret>22.0000</YetiskinServisUcret>
    <YetiskinMinServisUcret>0.0000</YetiskinMinServisUcret>
    <YetiskinFirmaKartZorunluMu>0</YetiskinFirmaKartZorunluMu>
    <CocukYolcuSayisi>0</CocukYolcuSayisi>
    <CocukNetFiyat>0</CocukNetFiyat>
    <CocukVergi>0</CocukVergi>
    <CocukServisUcret>0</CocukServisUcret>
    <CocukMinServisUcret>0</CocukMinServisUcret>
    <CocukFirmaKartZorunluMu>0</CocukFirmaKartZorunluMu>
    <BebekYolcuSayisi>1</BebekYolcuSayisi>
    <BebekNetFiyat>34</BebekNetFiyat>
    <BebekVergi>0</BebekVergi>
    <BebekServisUcret>0</BebekServisUcret>
    <BebekMinServisUcret>0</BebekMinServisUcret>
    <BebekFirmaKartZorunluMu>0</BebekFirmaKartZorunluMu>
    <YasliYolcuSayisi>0</YasliYolcuSayisi>
    <YasliNetFiyat>0</YasliNetFiyat>
    <YasliVergi>0</YasliVergi>
    <YasliServisUcret>0</YasliServisUcret>
    <YasliMinServisUcret>0</YasliMinServisUcret>
    <YasliFirmaKartZorunluMu>0</YasliFirmaKartZorunluMu>
    <OgrenciYolcuSayisi>1</OgrenciYolcuSayisi>
    <OgrenciNetFiyat>257.64</OgrenciNetFiyat>
    <OgrenciVergi>35.94</OgrenciVergi>
    <OgrenciServisUcret>22.0000</OgrenciServisUcret>
    <OgrenciMinServisUcret>0.0000</OgrenciMinServisUcret>
    <OgrenciFirmaKartZorunluMu>1</OgrenciFirmaKartZorunluMu>
    <OzurluYolcuSayisi>0</OzurluYolcuSayisi>
    <OzurluNetFiyat>0</OzurluNetFiyat>
    <OzurluVergi>0</OzurluVergi>
    <OzurluServisUcret>0</OzurluServisUcret>
    <OzurluMinServisUcret>0</OzurluMinServisUcret>
    <OzurluFirmaKartZorunluMu>0</OzurluFirmaKartZorunluMu>
    <AskerYolcuSayisi>0</AskerYolcuSayisi>
    <AskerNetFiyat>0</AskerNetFiyat>
    <AskerVergi>0</AskerVergi>
    <AskerServisUcret>0</AskerServisUcret>
    <AskerMinServisUcret>0</AskerMinServisUcret>
    <AskerFirmaKartZorunluMu>0</AskerFirmaKartZorunluMu>
    <GencYolcuSayisi>0</GencYolcuSayisi>
    <GencNetFiyat>0</GencNetFiyat>
    <GencVergi>0</GencVergi>
    <GencServisUcret>0</GencServisUcret>
    <GencMinServisUcret>0</GencMinServisUcret>
    <GencFirmaKartZorunluMu>0</GencFirmaKartZorunluMu>
    <OgretmenYolcuSayisi>0</OgretmenYolcuSayisi>
    <OgretmenNetFiyat>0</OgretmenNetFiyat>
    <OgretmenVergi>0</OgretmenVergi>
    <OgretmenServisUcret>0</OgretmenServisUcret>
    <OgretmenMinServisUcret>0</OgretmenMinServisUcret>
    <OgretmenFirmaKartZorunluMu>1</OgretmenFirmaKartZorunluMu>
    <BasinYolcuSayisi>0</BasinYolcuSayisi>
    <BasinNetFiyat>0</BasinNetFiyat>
    <BasinVergi>0</BasinVergi>
    <BasinServisUcret>0</BasinServisUcret>
    <BasinMinServisUcret>0</BasinMinServisUcret>
    <BasinFirmaKartZorunluMu>0</BasinFirmaKartZorunluMu>
    <GaziYolcuSayisi>0</GaziYolcuSayisi>
    <GaziNetFiyat>0</GaziNetFiyat>
    <GaziVergi>0</GaziVergi>
    <GaziServisUcret>0</GaziServisUcret>
    <GaziMinServisUcret>0</GaziMinServisUcret>
    <GaziFirmaKartZorunluMu>0</GaziFirmaKartZorunluMu>
    <AracSurucuYolcuSayisi>0</AracSurucuYolcuSayisi>
    <AracSurucuNetFiyat>0</AracSurucuNetFiyat>
    <AracSurucuVergi>0</AracSurucuVergi>
    <AracSurucuServisUcret>0</AracSurucuServisUcret>
    <AracSurucuMinServisUcret>0</AracSurucuMinServisUcret>
    <AracSurucuFirmaKartZorunluMu>0</AracSurucuFirmaKartZorunluMu>
    <EkCocukYolcuSayisi>0</EkCocukYolcuSayisi>
    <EkCocukNetFiyat>0</EkCocukNetFiyat>
    <EkCocukVergi>0</EkCocukVergi>
    <EkCocukServisUcret>0</EkCocukServisUcret>
    <EkCocukMinServisUcret>0</EkCocukMinServisUcret>
    <EkCocukFirmaKartZorunluMu>0</EkCocukFirmaKartZorunluMu>
    <IndirimliYolcuSayisi>0</IndirimliYolcuSayisi>
    <IndirimliNetFiyat>0</IndirimliNetFiyat>
    <IndirimliVergi>0</IndirimliVergi>
    <IndirimliServisUcret>0</IndirimliServisUcret>
    <IndirimliMinServisUcret>0</IndirimliMinServisUcret>
    <IndirimliFirmaKartZorunluMu>0</IndirimliFirmaKartZorunluMu>
    <Odeme3DSecureAktifMi>1</Odeme3DSecureAktifMi>
    <Odeme3DSecureZorunluMu>1</Odeme3DSecureZorunluMu>
    <PaypalUstLimit>0</PaypalUstLimit>
    <YolcuDogumTarihiZorunluMu>1</YolcuDogumTarihiZorunluMu>
    <YolcuPasaportNoZorunluMu>0</YolcuPasaportNoZorunluMu>
    <EmailZorunluMu>0</EmailZorunluMu>
    <BAServisUcret>0.0000</BAServisUcret>
    <KAServisUcret>0.0000</KAServisUcret>
    <MaxServisUcret>1000.0000</MaxServisUcret>
    <RezervasyonAktifMi>true</RezervasyonAktifMi>
  </FiyatListesi>
  <OdemeKurallari>
    <Odeme3DSecureAktifMi>1</Odeme3DSecureAktifMi>
    <Odeme3DSecureZorunluMu>0</Odeme3DSecureZorunluMu>
    <AcikParaliOdemeAktifMi>1</AcikParaliOdemeAktifMi>
    <OnOdemeAktifMi>1</OnOdemeAktifMi>
    <ParakodOdemeAktifMi>0</ParakodOdemeAktifMi>
    <BkmOdemeAktifMi>0</BkmOdemeAktifMi>
    <PaypalOdemeAktifMi>0</PaypalOdemeAktifMi>
    <PaypalUstLimit>0</PaypalUstLimit>
    <HopiAktifMi>0</HopiAktifMi>
    <MasterpassAktifMi>0</MasterpassAktifMi>
    <FastPayOdemeAktifMi>0</FastPayOdemeAktifMi>
  </OdemeKurallari>
  <BagajBilgiler>
    <YolcuTip>1</YolcuTip>
    <SegmentNereden>ASR</SegmentNereden>
    <SegmentNereye>IST</SegmentNereye>
    <SegmentTarihSaat>2019-10-21T00:00:00+03:00</SegmentTarihSaat>
    <BagajMiktar>15</BagajMiktar>
    <BagajBirim>kg</BagajBirim>
  </BagajBilgiler>
  <BagajBilgiler>
    <YolcuTip>3</YolcuTip>
    <SegmentNereden>ASR</SegmentNereden>
    <SegmentNereye>IST</SegmentNereye>
    <SegmentTarihSaat>2019-10-21T00:00:00+03:00</SegmentTarihSaat>
    <BagajMiktar>10</BagajMiktar>
    <BagajBirim>kg</BagajBirim>
  </BagajBilgiler>
  <BagajBilgiler>
    <YolcuTip>5</YolcuTip>
    <SegmentNereden>ASR</SegmentNereden>
    <SegmentNereye>IST</SegmentNereye>
    <SegmentTarihSaat>2019-10-21T00:00:00+03:00</SegmentTarihSaat>
    <BagajMiktar>15</BagajMiktar>
    <BagajBirim>kg</BagajBirim>
  </BagajBilgiler>
</NewDataSet>
```
