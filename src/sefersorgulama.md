# SEFER SORGULAMA

## ŞEMA

:::info
Sefer sorgulama işleminde yukarıda şeması verilen **SeferCekKomut** xml yapısı oluşturulmalıdır. **‘SeferCekKomut’** içerisine **‘AramaKriter’** xml yapısını alarak yapılan sorguya anlam kazandırır.
:::
:::details kodu görüntülemek için tıklayın.

```xml
<?xml version="1.0" encoding="utf-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
	<xs:element name="SeferCekKomut">
		<xs:complexType>
			<xs:sequence>
        <xs:element name="AramaKriter" maxOccurs="1" minOccurs="1">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="FirmaNo" type="xs:int" />
              <xs:element name="Parkurlar" maxOccurs="1" minOccurs="1">
                <xs:complexType>
                  <xs:sequence>
                    <xs:element name="Parkur" maxOccurs="2" minOccurs="1">
                      <xs:complexType>
                        <xs:sequence>
                          <xs:element name="NeredenKod" type="strKod" />
                          <xs:element name="NereyeKod" type="strKod" />
                          <xs:element name="Tarih" type="dateKalkis" />
                        </xs:sequence>
                      </xs:complexType>
                    </xs:element>
                  </xs:sequence>
                </xs:complexType>
              </xs:element>
              <xs:element name="YolcuSayilar" minOccurs="0">
                <xs:complexType>
                  <xs:sequence>
                    <xs:element name="YolcuSayi" maxOccurs="7">
                      <xs:complexType>
                        <xs:sequence>
                          <xs:element name="TipKod" type="byteYT" />
                          <xs:element name="Sayi" type="intYS" />
                        </xs:sequence>
                      </xs:complexType>
                    </xs:element>
                  </xs:sequence>
                </xs:complexType>
              </xs:element>
              <xs:element name="AracSayilar" minOccurs="0">
                <xs:complexType>
                  <xs:sequence>
                    <xs:element name="AracSayi" maxOccurs="3">
                      <xs:complexType>
                        <xs:sequence>
                          <xs:element name="TipKod" type="strATK" />
                          <xs:element name="Sayi" type="intAS" />
                        </xs:sequence>
                      </xs:complexType>
                    </xs:element>
                  </xs:sequence>
                </xs:complexType>
              </xs:element>
            </xs:sequence>
          </xs:complexType>
        </xs:element>
        <xs:element name="Ip" type="IpType" minOccurs="0" />
			</xs:sequence>
		</xs:complexType>
	</xs:element>
  <xs:simpleType name="strKod">
    <xs:restriction base="xs:string">
      <xs:maxLength value="30" />
      <xs:minLength value="2" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="dateKalkis">
    <xs:restriction base="xs:date">
      <xs:maxExclusive value="2079-01-01" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="intYS">
    <xs:restriction base="xs:int">
      <xs:minExclusive value="0" />
      <xs:maxExclusive value="8" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="intAS">
    <xs:restriction base="xs:int">
      <xs:minExclusive value="0" />
      <xs:maxExclusive value="7" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="byteYT">
    <xs:restriction base="xs:byte">
      <xs:maxExclusive value="30" />
      <xs:minExclusive value="0" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="strATK">
    <xs:restriction base="xs:string">
      <xs:maxLength value="30" />
      <xs:minLength value="2" />
    </xs:restriction>
  </xs:simpleType>
    <xs:simpleType name="IpType">
    <xs:restriction base="xs:string">
      <xs:pattern value="[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}" />
    </xs:restriction>
  </xs:simpleType>
</xs:schema>
```

:::

## İSTEK

**AramaKriter Parametreleri Açıklamaları:**
|ALAN|AÇIKLAMA|
| ------------- | ----------------------------- |
| **FirmaNo\*** | 5000 gönderilmelidir. |
| **Ip\*** | Site ziyaretçisinin Ip adresi |

:::info
(\*) ile işaretli alanlar, gönderilmesi zorunlu alanlardır.
:::

**Parkurlar:**
:::tip
Gidiş – Dönüş arama yapmak istediğinizde örnekte olduğu gibi ikinci bir parkur ekleyip dönüş değerleri girilmelidir. Parkur içeriği aşağıdaki gibi olmalıdır.
:::
|ALAN|AÇIKLAMA|
| ---------------- | ----------------------------------------------------------------------------------------- |
| **NeredenKod\*** | Listelemek istediğiniz seferlerin kalkış noktasının kodu.**Format:(string, 3 karakter).** |
| **NereyeKod\*** | Listelemek istediğiniz seferlerin varış noktasının kodu.**Format:(string, 3 karakter).** |
| **Tarih\*** | Listelemek istediğiniz seferlerin kalkış tarihi **Format:(datetime, ‘yyyy-MM-dd’).** |

:::info
(\*) ile işaretli alanlar, gönderilmesi zorunlu alanlardır.
:::

**YolcuSayilar:**
:::tip
İçerisine YolcuSayi xml yapısını alarak aramak istediğiniz seferde hangi yolcu tipinden kaç adet yolcu olacağını belirtmelisiniz.
:::
|ALAN|AÇIKLAMA|
|-------------------|-------------------------|
|**TipKod\***|İdo Yolcu Tip kodları şöyledir; Yetişkin:1 Çocuk:2 Yaşlı:4 Öğrenci:5 Özürlü:6 Basın:10 Gazi:11**|
|**Sayi**\*|Yolcu tipinden kaç adet yolcu olacağı. **Format:(int, max : 7).\*_\_|
:::info
(_) ile işaretli alanlar, gönderilmesi zorunlu alanlardır.
:::

**AracSayilar:**
:::tip
İçerisine AracSayi xml yapısını alarak aramak istediğiniz seferde hangi araç tipinden kaç adet olacağını belirtmelisiniz.  
:::
|ALAN|AÇIKLAMA|
|----------------|-------------------------|
|**TipKod\***|İdo araç tipleri sorgusundan kod alanını almalısınız.**Format:(string, 3 karakter).**|
|**Sayi\***|Araç tipinden kaç adet olacağı.**Format:(int, max : 7).**|
:::info
(\*) ile işaretli alanlar, gönderilmesi zorunlu alanlardır.
:::

## CEVAP

:::info
Sefer arama sonucunda **‘SeferListe’** içerisinde **‘Parkur’** yapıları bulunmaktadır. Gidiş ve dönüş parkurlarına eş olarak gidiş ve dönüş seferleri ilgili parkurun içerisinde gelmektedir. Her sefer ‘Segment’ yapıları içerisinde detaylandırılmaktadır. Her segmentin de içerisinde o segmentin ücret seçenekleri **‘UcretSecenekler’** içerisinde verilmektedir.
:::

**Segment Alanları:**
|ALAN|AÇIKLAMA|
|-------------|--------------------------------|
|SegmentKod|Segment kodu sonraki işlemlerde kullanılmak için önemlidir.İdo ve Budo için farklı format ve uzunluklarda gelebilir.|
|BudoSessionID|Sadece Budo seferlerinde gelir, Budo satış tamamlama aşamasına kadar gereklidir.|
|SeferNo|Sefer numarasıdır.|
|FeribotTip|Feribot tipinin kısa kodudur.|
|NeredenKod|Kalkış noktasının kodudur.|
|NeredenAd|Kalkış noktasının adıdır.|
|NereyeKod|Varış noktasının kodudur.|
|NereyeAd|Varış noktasının adıdır.|
|Tarih|Kalkış tarih ve saati.|
|VarisTarih|Tahmini varış tarih ve saati.|

**UcretSecenek Alanları:**
|ALAN|AÇIKLAMA|
|-------------------|---------------------------|
|SinifAd|İdo için (PROMO,ECO,BIZ),Budo için (TAM, PROMOSYON) Gibi kesin olmayan sınıf adları gelir.|
|SinifKod|Sınıfın kodunu ifade eder.|
|FiyatKod|Ücret seçeneğinin kodudur.|
|AracFiyatKod|Varsa araç için ücret seçeneğinin kodudur.|
|KoltukSinifKod|İlgili ücretin seyahat sınıfının kodudur.|
|KabinSinifKod|İlgili ücretin kabin seyahat sınıfının kodudur.|
|KoltukAdet|İlgili ücretten kalan koltuk adedidir.|
|ToplamUcret|İlgili ücret seçeneğinin ücret değerini ifade eder.|

| ALAN          | AÇIKLAMA                                  |
| ------------- | ----------------------------------------- |
| YolcuUcretler | Yolcu Ucret                               |
| YolcuTip      | Yolcu tipi açıklaması.                    |
| YolcuTipKod   | Yolcu tipi kodu.                          |
| AracTipKod    | Eğer araç sürücüsü ise araç tipinin kodu. |
| YolcuSayi     | Seçenek yolcu adeti.                      |
| NetFiyat      | İlgili yolcu tipinin net fiyatı.          |
| ServisUcret   | İlgili yolcu tipinin servis ücreti.       |

:::danger
Sefer listesinde Budo seferleri de eklenmiştir. Budo firma numarası 5001 olarak gelecektir.
:::
:::details kodu görüntülemek için tıklayın.

```xml
<SeferListe>
  <Parkur>
    <NeredenKod>YKP</NeredenKod>
    <NereyeKod>YLV</NereyeKod>
    <Tarih>2015-05-27</Tarih>
    <Segment>
      <ID>1</ID>
      <SegmentKod>865098</SegmentKod>
      <TasiyiciFirmaNo>5000</TasiyiciFirmaNo>
      <TasiyiciFirmaAd>İDO</TasiyiciFirmaAd>
      <SeferNo>1310</SeferNo>
      <FeribotTip>FC</FeribotTip>
      <NeredenKod>YKP</NeredenKod>
      <NeredenAd>Yenikapı</NeredenAd>
      <NereyeKod>YLV</NereyeKod>
      <NereyeAd>Yalova</NereyeAd>
      <Tarih>2015-05-27T08:15:00+03:00</Tarih>
      <VarisTarih>2015-05-27T09:30:00+03:00</VarisTarih>
      <Vakit>Sabah</Vakit>
      <UcretSecenekler>
        <UcretSecenek>
          <SinifAd>ECO</SinifAd>
          <SinifKod>KSECO</SinifKod>
          <FiyatKod>438580</FiyatKod>
          <AracFiyatKod>438586</AracFiyatKod>
          <KoltukSinifKod>S</KoltukSinifKod>
          <KabinSinifKod>K</KabinSinifKod>
          <KoltukAdet>26</KoltukAdet>
          <ToplamUcret>125</ToplamUcret>
          <YolcuUcretler>
            <YolcuUcret>
              <YolcuTip>AracSurucu</YolcuTip>
              <YolcuTipKod>12</YolcuTipKod>
              <AracTipKod>OTM</AracTipKod>
              <YolcuSayi>1</YolcuSayi>
              <NetFiyat>89</NetFiyat>
              <ServisUcret>2</ServisUcret>
            </YolcuUcret>
            <YolcuUcret>
              <YolcuTip>Yetiskin</YolcuTip>
              <YolcuTipKod>1</YolcuTipKod>
              <YolcuSayi>2</YolcuSayi>
              <NetFiyat>15</NetFiyat>
              <ServisUcret>2</ServisUcret>
            </YolcuUcret>
          </YolcuUcretler>
        </UcretSecenek>
      </UcretSecenekler>
    </Segment>
    <Segment>
      <ID>2</ID>
      <SegmentKod>865143</SegmentKod>
      <TasiyiciFirmaNo>5000</TasiyiciFirmaNo>
      <TasiyiciFirmaAd>İDO</TasiyiciFirmaAd>
      <SeferNo>1316</SeferNo>
      <FeribotTip>FC</FeribotTip>
      <NeredenKod>YKP</NeredenKod>
      <NeredenAd>Yenikapı</NeredenAd>
      <NereyeKod>YLV</NereyeKod>
      <NereyeAd>Yalova</NereyeAd>
      <Tarih>2015-05-27T11:30:00+03:00</Tarih>
      <VarisTarih>2015-05-27T12:45:00+03:00</VarisTarih>
      <Vakit>Sabah</Vakit>
      <UcretSecenekler>
        <UcretSecenek>
          <SinifAd>ECO</SinifAd>
          <SinifKod>KSECO</SinifKod>
          <FiyatKod>438580</FiyatKod>
          <AracFiyatKod>438586</AracFiyatKod>
          <KoltukSinifKod>S</KoltukSinifKod>
          <KabinSinifKod>K</KabinSinifKod>
          <KoltukAdet>27</KoltukAdet>
          <ToplamUcret>125</ToplamUcret>
          <YolcuUcretler>
            <YolcuUcret>
              <YolcuTip>AracSurucu</YolcuTip>
              <YolcuTipKod>12</YolcuTipKod>
              <AracTipKod>OTM</AracTipKod>
              <YolcuSayi>1</YolcuSayi>
              <NetFiyat>89</NetFiyat>
              <ServisUcret>2</ServisUcret>
            </YolcuUcret>
            <YolcuUcret>
              <YolcuTip>Yetiskin</YolcuTip>
              <YolcuTipKod>1</YolcuTipKod>
              <YolcuSayi>2</YolcuSayi>
              <NetFiyat>15</NetFiyat>
              <ServisUcret>2</ServisUcret>
            </YolcuUcret>
          </YolcuUcretler>
        </UcretSecenek>
      </UcretSecenekler>
    </Segment>
  </Parkur>
  <Parkur>
    <NeredenKod>YLV</NeredenKod>
    <NereyeKod>YKP</NereyeKod>
    <Tarih>2015-05-29</Tarih>
    <Segment>
      <ID>1</ID>
      <SegmentKod>865999</SegmentKod>
      <TasiyiciFirmaNo>5000</TasiyiciFirmaNo>
      <TasiyiciFirmaAd>İDO</TasiyiciFirmaAd>
      <SeferNo>1303</SeferNo>
      <FeribotTip>FC</FeribotTip>
      <NeredenKod>YLV</NeredenKod>
      <NeredenAd>Yalova</NeredenAd>
      <NereyeKod>YKP</NereyeKod>
      <NereyeAd>Yenikapı</NereyeAd>
      <Tarih>2015-05-29T07:15:00+03:00</Tarih>
      <VarisTarih>2015-05-29T08:30:00+03:00</VarisTarih>
      <Vakit>Sabah</Vakit>
      <UcretSecenekler>
        <UcretSecenek>
          <SinifAd>PROMO</SinifAd>
          <SinifKod>KYECOPRO</SinifKod>
          <FiyatKod>438629</FiyatKod>
          <AracFiyatKod>438642</AracFiyatKod>
          <KoltukSinifKod>Y</KoltukSinifKod>
          <KabinSinifKod>K</KabinSinifKod>
          <KoltukAdet>20</KoltukAdet>
          <ToplamUcret>75</ToplamUcret>
          <YolcuUcretler>
            <YolcuUcret>
              <YolcuTip>AracSurucu</YolcuTip>
              <YolcuTipKod>12</YolcuTipKod>
              <AracTipKod>OTM</AracTipKod>
              <YolcuSayi>1</YolcuSayi>
              <NetFiyat>49</NetFiyat>
              <ServisUcret>2</ServisUcret>
            </YolcuUcret>
            <YolcuUcret>
              <YolcuTip>Yetiskin</YolcuTip>
              <YolcuTipKod>1</YolcuTipKod>
              <YolcuSayi>2</YolcuSayi>
              <NetFiyat>10</NetFiyat>
              <ServisUcret>2</ServisUcret>
            </YolcuUcret>
          </YolcuUcretler>
        </UcretSecenek>
        <UcretSecenek>
          <SinifAd>ECO</SinifAd>
          <SinifKod>KSECO</SinifKod>
          <FiyatKod>438633</FiyatKod>
          <AracFiyatKod>438643</AracFiyatKod>
          <KoltukSinifKod>S</KoltukSinifKod>
          <KabinSinifKod>K</KabinSinifKod>
          <KoltukAdet>50</KoltukAdet>
          <ToplamUcret>125</ToplamUcret>
          <YolcuUcretler>
            <YolcuUcret>
              <YolcuTip>AracSurucu</YolcuTip>
              <YolcuTipKod>12</YolcuTipKod>
              <AracTipKod>OTM</AracTipKod>
              <YolcuSayi>1</YolcuSayi>
              <NetFiyat>89</NetFiyat>
              <ServisUcret>2</ServisUcret>
            </YolcuUcret>
            <YolcuUcret>
              <YolcuTip>Yetiskin</YolcuTip>
              <YolcuTipKod>1</YolcuTipKod>
              <YolcuSayi>2</YolcuSayi>
              <NetFiyat>15</NetFiyat>
              <ServisUcret>2</ServisUcret>
            </YolcuUcret>
          </YolcuUcretler>
        </UcretSecenek>
      </UcretSecenekler>
    </Segment>
    <Segment>
      <ID>2</ID>
      <SegmentKod>866037</SegmentKod>
      <TasiyiciFirmaNo>5000</TasiyiciFirmaNo>
      <TasiyiciFirmaAd>İDO</TasiyiciFirmaAd>
      <SeferNo>1351</SeferNo>
      <FeribotTip>FC</FeribotTip>
      <NeredenKod>YLV</NeredenKod>
      <NeredenAd>Yalova</NeredenAd>
      <NereyeKod>YKP</NereyeKod>
      <NereyeAd>Yenikapı</NereyeAd>
      <Tarih>2015-05-29T10:30:00+03:00</Tarih>
      <VarisTarih>2015-05-29T11:45:00+03:00</VarisTarih>
      <Vakit>Sabah</Vakit>
      <UcretSecenekler>
        <UcretSecenek>
          <SinifAd>PROMO</SinifAd>
          <SinifKod>KYECOPRO</SinifKod>
          <FiyatKod>438629</FiyatKod>
          <AracFiyatKod>438649</AracFiyatKod>
          <KoltukSinifKod>Y</KoltukSinifKod>
          <KabinSinifKod>K</KabinSinifKod>
          <KoltukAdet>5</KoltukAdet>
          <ToplamUcret>85</ToplamUcret>
          <YolcuUcretler>
            <YolcuUcret>
              <YolcuTip>AracSurucu</YolcuTip>
              <YolcuTipKod>12</YolcuTipKod>
              <AracTipKod>OTM</AracTipKod>
              <YolcuSayi>1</YolcuSayi>
              <NetFiyat>59</NetFiyat>
              <ServisUcret>2</ServisUcret>
            </YolcuUcret>
            <YolcuUcret>
              <YolcuTip>Yetiskin</YolcuTip>
              <YolcuTipKod>1</YolcuTipKod>
              <YolcuSayi>2</YolcuSayi>
              <NetFiyat>10</NetFiyat>
              <ServisUcret>2</ServisUcret>
            </YolcuUcret>
          </YolcuUcretler>
        </UcretSecenek>
        <UcretSecenek>
          <SinifAd>ECO</SinifAd>
          <SinifKod>KSECO</SinifKod>
          <FiyatKod>438633</FiyatKod>
          <AracFiyatKod>438643</AracFiyatKod>
          <KoltukSinifKod>S</KoltukSinifKod>
          <KabinSinifKod>K</KabinSinifKod>
          <KoltukAdet>35</KoltukAdet>
          <ToplamUcret>125</ToplamUcret>
          <YolcuUcretler>
            <YolcuUcret>
              <YolcuTip>AracSurucu</YolcuTip>
              <YolcuTipKod>12</YolcuTipKod>
              <AracTipKod>OTM</AracTipKod>
              <YolcuSayi>1</YolcuSayi>
              <NetFiyat>89</NetFiyat>
              <ServisUcret>2</ServisUcret>
            </YolcuUcret>
            <YolcuUcret>
              <YolcuTip>Yetiskin</YolcuTip>
              <YolcuTipKod>1</YolcuTipKod>
              <YolcuSayi>2</YolcuSayi>
              <NetFiyat>15</NetFiyat>
              <ServisUcret>2</ServisUcret>
            </YolcuUcret>
          </YolcuUcretler>
        </UcretSecenek>
      </UcretSecenekler>
    </Segment>
  </Parkur>
</SeferListe>
```

:::
