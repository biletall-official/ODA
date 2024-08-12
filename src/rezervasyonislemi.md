# REZERVASYON İŞLEMİ

## ŞEMA

:::info :exclamation: Not 
İdo servisinde koltuk planı çekme ve satış işlemi öncesinde rezervasyon yapmanız gerekmektedir. Bu rezervasyonun sonucunda size sistem tarafından oluşturulan koltuk numaraları bilgisi gelecektir. Bu rezervasyon olağanın aksine 10-15 dakikalık kısa opsiyonlu bir rezervasyon olup süresinin sonunda kendiliğinden iptal edilmektedir.
:::
:::warning :warning: Dikkat
**Budo için rezervasyon aşamasına gerek yoktur. Direk satış işlemi gönderilmelidir.**
:::
Rezervasyon işleminin xml şeması aşağıdaki gibidir.
:::details Kodu görüntülemek için tıklayın. :computer_mouse:

```xml
<?xml version="1.0" encoding="utf-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
	<xs:element name="RezervasyonKomut">
		<xs:complexType>
			<xs:sequence>
        <xs:element name="Pnr" maxOccurs="1" minOccurs="1">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="CepTelefon" type="xs:long" />
              <xs:element name="Eposta" minOccurs="0" type="EmailType" />
              <xs:element name="Yolcular" maxOccurs="1" minOccurs="1">
                <xs:complexType>
                  <xs:sequence>
                    <xs:element name="Yolcu" maxOccurs="7" minOccurs="1">
                      <xs:complexType>
                        <xs:sequence>
                          <xs:element name="ID" type="byte4" />
                          <xs:element name="YolcuTip" type="byte30" />
                          <xs:element name="Ad" type="Str20-2" />
                          <xs:element name="Soyad" type="Str20-2" />
                          <xs:element name="Cinsiyet" type="byte2" />
                          <xs:element name="DogumTarih" type="dogumtarih" minOccurs="0" />
                          <xs:element name="SeaAndMilesNo" type="Str20" minOccurs="0" />
                          <xs:element name="Uyruk" type="Str20" minOccurs="0" />
                          <xs:element name="BagliOlduguYetiskinID" type="byte4" minOccurs="0" />
                          <xs:element name="AracBilgi" maxOccurs="1" minOccurs="0">
                            <xs:complexType>
                              <xs:sequence>
                                <xs:element name="AracTip" type="Str20" />
                                <xs:element name="Plaka" type="Str20" />
                                <xs:element name="KiralikMi" type="xs:short" />
                              </xs:sequence>
                            </xs:complexType>
                          </xs:element>
                        </xs:sequence>
                      </xs:complexType>
                    </xs:element>
                  </xs:sequence>
                </xs:complexType>
              </xs:element>
              <xs:element name="SeferBilgi" maxOccurs="1" minOccurs="1">
                <xs:complexType>
                  <xs:sequence>
                    <xs:element name="Parkurlar" maxOccurs="1" minOccurs="1">
                      <xs:complexType>
                        <xs:sequence>
                          <xs:element name="Parkur" maxOccurs="2" minOccurs="1">
                            <xs:complexType>
                              <xs:sequence>
                                <xs:element name="Segment" maxOccurs="1" minOccurs="1">
                                  <xs:complexType>
                                    <xs:sequence>
                                      <xs:element name="SegmentKod" type="Str20" />
                                      <xs:element name="NeredenKod" type="Str20" />
                                      <xs:element name="NereyeKod" type="Str20" />
                                      <xs:element name="FiyatKod" type="Str20" />
                                      <xs:element name="AracFiyatKod" type="Str20" />
                                      <xs:element name="SinifKod" type="Str20" />
                                      <xs:element name="KoltukSinifKod" type="Str20" />
                                      <xs:element name="KabinSinifKod" type="Str20" />
                                    </xs:sequence>
                                  </xs:complexType>
                                </xs:element>
                              </xs:sequence>
                            </xs:complexType>
                          </xs:element>
                        </xs:sequence>
                      </xs:complexType>
                    </xs:element>
                  </xs:sequence>
                </xs:complexType>
              </xs:element>
<xs:element name="FaturaBilgi" maxOccurs="1" minOccurs="0">
                <xs:complexType>
                  <xs:sequence>
                    <xs:element name="Tip" type="xs:byte" />
                    <xs:element name="Ad" type="Str28-2" minOccurs="0" />
                    <xs:element name="Soyad" type="Str28-2" minOccurs="0" />
                    <xs:element name="TCKimlikNo" type="Str11-11" minOccurs="0" />
                    <xs:element name="FirmaUnvan" type="xs:string" minOccurs="0" />
                    <xs:element name="VergiDaire" type="xs:string" minOccurs="0" />
                    	<xs:element name="VergiNo" type="xs:string" minOccurs="0" />
              	<xs:element name="Adres" type="xs:string" minOccurs="0" />
       	     </xs:sequence>
         </xs:complexType>
              </xs:element>
       	     </xs:sequence>
          </xs:complexType>
        	</xs:element>
			</xs:sequence>
		</xs:complexType>
	</xs:element>
  <xs:simpleType name="EmailType">
    <xs:restriction base="xs:string">
      <xs:pattern value="[^@]+@[^\.]+\..+" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="Str20">
    <xs:restriction base="xs:string">
      <xs:maxLength value="20" />
      <xs:minLength value="0" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="byte4">
    <xs:restriction base="xs:byte">
      <xs:maxExclusive value="9" />
      <xs:minExclusive value="0" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="byte30">
    <xs:restriction base="xs:byte">
      <xs:maxExclusive value="30" />
      <xs:minExclusive value="0" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="Str20-2">
    <xs:restriction base="xs:string">
      <xs:maxLength value="20" />
      <xs:minLength value="2" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="byte2">
    <xs:restriction base="xs:byte">
      <xs:maxExclusive value="3" />
      <xs:minExclusive value="0" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="dogumtarih">
    <xs:restriction base="xs:date">
      <xs:maxExclusive value="2079-01-01" />
      <xs:minExclusive value="1900-01-01" />
    </xs:restriction>
  </xs:simpleType>
</xs:schema>
```

:::

## İSTEK

**Pnr:**
|Alan|Açıklama
|------------|----------------------------------|
|**CepTelefon\***|İletişim için cep telefon numarası bilgisi **Format:(string, 10 karakter - XXXXXXXXXX).**|
|**Eposta\***|İletişim için eposta adresi bilgisi|
:::info :exclamation: Not 
(\*) ile işaretli alanlar, gönderilmesi zorunlu alanlardır.
:::

**Yolcular :**
|Alan|Açıklama|
|---------------------|-------------------------|
|**ID\***|ID alanına yolculara sıradan 1 den başlayarak değer vermeniz uygun olacaktır. ID alanı **Format: int**|
|**YolcuTip\***|İdo Yolcu Tip kodları şöyledir; **Yetişkin:1 Çocuk:2 Yaşlı:4 Öğrenci:5 Özürlü:6 Basın:10 Gazi:11 AracSurucu:12 EkCocuk:13**|
|**Ad\***|Yolcu adı|
|**Soyad\***|Yolcu soyadı|
|**Cinsiyet\***|Cinsiyet.**Bay:2 Bayan:1**|
|**DogumTarih\***|yyyy-MM-dd formatında gönderilmelidir. Doğum tarihinin zorunluluğunu bir önceki adım olan fiyat çekme işleminde gerçekleştirebilirsiniz.|
|SeaAndMilesNo|İdo özel yolcu kartı numarasıdır.|
|Uyruk|TC yada Diğer|
|BagliOlduguYetiskinID|Çocuk yolcular için zorunludur. Çocuk yolcunun bağlı olduğu yetişkin yolcuya verdiğiniz ID değerini bu alana atamalısınız.|
:::info :exclamation: Not 
(\*) ile işaretli alanlar, gönderilmesi zorunlu alanlardır.
:::
|Alan|Açıklama|
| --------------- | ------------------------------------------------------------------------------------------------------------------ |
| AracBilgi | Eğer yolcu tipi araç sürücüsü ise AracBilgi alanları doldurulmalıdır. |
| **AracTip\*** | İdo araç tipleri sorgusundan kod alanını kullanmalısınız.Örn: Otomobil için ‘OTM’ **Format:(string, 3 karakter).** |
| **Plaka\*** | Araç plakası |
| **KiralikMi\*** | **Evet:1 Hayır:0** |

:::info :exclamation: Not 
(\*) ile işaretli alanlar, gönderilmesi zorunlu alanlardır.
:::

**SeferBilgi:**
:::info :exclamation: Not 
İşleminiz tek yön ise tek bir parkur yapısı içerisinde sefer bilgisini oluşturmalısınız. Gidiş dönüş işlem yapıyor iseniz önce gidiş parkurunu sonra dönüş parkurunu **SeferBilgi** yapısına sırasıyla dahil etmeniz gerekmektedir.
**SeferBilgi** ve **Parkur** yapısı içerisinde Segment alanları aşağıdaki şekilde açıklanmaktadır.
:::
|Alan|Açıklama|
| -------------------- | ----------------------------------------------------------------- |
| **SegmentKod\*** | Sefer sonucunda Segment alanında gelen **‘SegmentKod’** değeri. |
| **NeredenKod\*** | Segmentin kalkış noktasının kodu.**Format:(string, 3 karakter).** |
| **NereyeKod\*** | Segmentin varış noktasının kodu.**Format:(string, 3 karakter).** |
| **FiyatKod\*** | İlgili segmentin içerisinden seçilen ücret seçeneğinden alınır. |
| **AracFiyatKod\*** | İlgili segmentin içerisinden seçilen ücret seçeneğinden alınır. |
| **SinifKod\*** | İlgili segmentin içerisinden seçilen ücret seçeneğinden alınır. |
| **KoltukSinifKod\*** | İlgili segmentin içerisinden seçilen ücret seçeneğinden alınır. |
| **KabinSinifKo\*** | İlgili segmentin içerisinden seçilen ücret seçeneğinden alınır. |

:::info :exclamation: Not 
(\*) ile işaretli alanlar, gönderilmesi zorunlu alanlardır.
:::

**FaturaBilgi:**
:::tip :bulb: İpucu
Rezervasyon işleminde ekranınıza "E-Bilet İstiyorum" seçeneği koymalı, bu seçenek işaretlendiğinde de FaturaBilgi alanını göndermelisiniz. Burada şahıs/firma seçeneğide yaparak fatura/ebilet talebini gönderebilirsiniz.
:::
|Alan|Açıklama|
|------------|----------------------------------|
|**Tip\***|0:Şahıs , 1:Firma|
|Ad|**Şahıs ise zorunlu\***|
|Soyad|**Şahıs ise zorunlu\***|
|**TCKimlikNo\***|**Şahıs ise zorunlu\***|
|**FirmaUnva\***|**Firma ise zorunlu\***|
|**VergiNo\***|**Firma ise zorunlu\***|
:::info :exclamation: Not 
(\*) ile işaretli alanlar, gönderilmesi zorunlu alanlardır.
:::
:::details kodu görüntülemek için tıklayın.

```xml
<RezervasyonKomut>
  <Pnr>
    <CepTelefon>1111111111</CepTelefon>
    <Eposta>a@a.com</Eposta>
    <Yolcular>
      <Yolcu>
        <ID>1</ID>
        <YolcuTip>1</YolcuTip>
        <Ad>DELI</Ad>
        <Soyad>VELI</Soyad>
        <Cinsiyet>2</Cinsiyet>
        <DogumTarih>1963-06-01</DogumTarih>
        <SeaAndMilesNo />
        <Uyruk>TC</Uyruk>
      </Yolcu>
      <Yolcu>
        <ID>2</ID>
        <YolcuTip>1</YolcuTip>
        <Ad>HACI</Ad>
        <Soyad>VELI</Soyad>
        <Cinsiyet>2</Cinsiyet>
        <DogumTarih>1967-10-06</DogumTarih>
        <SeaAndMilesNo />
        <Uyruk>TC</Uyruk>
      </Yolcu>
      <Yolcu>
        <ID>3</ID>
        <YolcuTip>12</YolcuTip>
        <Ad>ALI</Ad>
        <Soyad>VELI</Soyad>
        <Cinsiyet>2</Cinsiyet>
        <DogumTarih>1962-02-02</DogumTarih>
        <SeaAndMilesNo />
        <Uyruk>TC</Uyruk>
        <AracBilgi>
          <AracTip>OTM</AracTip>
          <Plaka>38aa111</Plaka>
          <KiralikMi>0</KiralikMi>
        </AracBilgi>
      </Yolcu>
    </Yolcular>
    <SeferBilgi>
      <Parkurlar>
        <Parkur>
          <Segment>
            <SegmentKod>865188</SegmentKod>
            <NeredenKod>YKP</NeredenKod>
            <NereyeKod>YLV</NereyeKod>
            <FiyatKod>438580</FiyatKod>
            <AracFiyatKod>438586</AracFiyatKod>
            <SinifKod>KSECO</SinifKod>
            <KoltukSinifKod>S</KoltukSinifKod>
            <KabinSinifKod>K</KabinSinifKod>
          </Segment>
        </Parkur>
        <Parkur>
          <Segment>
            <SegmentKod>866075</SegmentKod>
            <NeredenKod>YLV</NeredenKod>
            <NereyeKod>YKP</NereyeKod>
            <FiyatKod>438633</FiyatKod>
            <AracFiyatKod>438643</AracFiyatKod>
            <SinifKod>KSECO</SinifKod>
            <KoltukSinifKod>S</KoltukSinifKod>
            <KabinSinifKod>K</KabinSinifKod>
          </Segment>
        </Parkur>
      </Parkurlar>
    </SeferBilgi>
    <FaturaBilgi>
      <Tip>0</Tip>
      <Ad>AHMET</Ad>
      <Soyad>AKYOL</Soyad>
      <TCKimlikNo>11111111110</TCKimlikNo>
    </FaturaBilgi>
  </Pnr>
</RezervasyonKomut>
```

:::

## CEVAP

Rezervasyon işlemi sonucunda **RezervasyonKomut** yapısı içerisindeki Pnr yapısı içerisine bazı sonuç değerleri eklenerek sunulur.

Burada oluşan değerlerden bazıları;
|Alan|Açıklama|
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| PnrNo | Pnr numarası işlemin yolcular açısından takip numarasıdır. İdo tarafında da bu numara ile işlem takip edilmektedir. |
| PnrKod | Pnr kodu sistem tarafından işlemin takibi amacıyla sonraki işlemlerde kullanılacaktır. |
| YolcuKod | Yolcu kodu sistem tarafından yolcunun işlem takibi amacıyla sonraki işlemlerde kullanılacaktır. |
| KoltukSecim | Parkur > Segment > SistemKoltukSecimler yapısı altında ilgili segmentte hangi yolcu için hangi koltuk numarasının atandığı belirtilmektedir. |

:::danger :rotating_light: Uyarı
RezervasyonKomut işleminden sonra gelen OdemeKurallari bilgisi ödemeyi nasıl yapmanız gerektiğini bildirir. Odeme3DSecureAktifMi alanı **1** geldiğinde sanal poslu ödemede 3d secure kullanabileceğinizi, Odeme3DSecureZorunluMu alanı **1** geldiğinde ise ödeme işlemini 3D secure ile yapmanızın zorunlu olduğunu ifade eder. Burada 3D secure kullanma yönteminiz diğer satış işlemleriyle aynıdır. satisXML input değeri içerisinde SatisKomut gönderilir ve sonuç olarak diğer işlemlerdeki gibi PNR bilgisi alınır.
:::
:::details kodu görüntülemek için tıklayın.

```xml
<RezervasyonKomut>
  <Pnr>
    <PnrNo>HY2QZU</PnrNo>
    <PnrKod>33475345</PnrKod>
    <Yolcular>
      <Yolcu>
        <ID>1</ID>
        <YolcuKod>141244046</YolcuKod>
        <Ad>ALI</Ad>
        <Soyad>OZTURK</Soyad>
        <ServisUcret>4</ServisUcret>
      </Yolcu>
      <Yolcu>
        <ID>2</ID>
        <YolcuKod>141244047</YolcuKod>
        <Ad>HASAN</Ad>
        <Soyad>OZTURK</Soyad>
        <ServisUcret>4</ServisUcret>
      </Yolcu>
      <Yolcu>
        <ID>3</ID>
        <YolcuKod />
        <Ad>EFE</Ad>
        <Soyad>OZTURK</Soyad>
        <ServisUcret>0</ServisUcret>
      </Yolcu>
    </Yolcular>
    <SeferBilgi>
      <Parkurlar>
        <Parkur>
          <Segment>
            <SegmentKod>929385</SegmentKod>
            <NeredenKod>YKP</NeredenKod>
            <NereyeKod>YLV</NereyeKod>
            <SistemKoltukSecimler>
              <KoltukSecim>
                <YolcuID>1</YolcuID>
                <KoltukNo>10</KoltukNo>
              </KoltukSecim>
              <KoltukSecim>
                <YolcuID>2</YolcuID>
                <KoltukNo>11</KoltukNo>
              </KoltukSecim>
            </SistemKoltukSecimler>
          </Segment>
        </Parkur>
        <Parkur>
          <Segment>
            <SegmentKod>930019</SegmentKod>
            <NeredenKod>YLV</NeredenKod>
            <NereyeKod>YKP</NereyeKod>
            <SistemKoltukSecimler>
              <KoltukSecim>
                <YolcuID>1</YolcuID>
                <KoltukNo>2</KoltukNo>
              </KoltukSecim>
              <KoltukSecim>
                <YolcuID>2</YolcuID>
                <KoltukNo>3</KoltukNo>
              </KoltukSecim>
            </SistemKoltukSecimler>
          </Segment>
        </Parkur>
      </Parkurlar>
    </SeferBilgi>
  </Pnr>
 <OdemeKurallari>
    <Odeme3DSecureAktifMi>1</Odeme3DSecureAktifMi>
    <Odeme3DSecureZorunluMu>1</Odeme3DSecureZorunluMu>
    <AcikParaliOdemeAktifMi>0</AcikParaliOdemeAktifMi>
    <OnOdemeAktifMi>0</OnOdemeAktifMi>
    <ParakodOdemeAktifMi>0</ParakodOdemeAktifMi>
    <BkmOdemeAktifMi>0</BkmOdemeAktifMi>
    <PaypalOdemeAktifMi>0</PaypalOdemeAktifMi>
    <PaypalUstLimit>500</PaypalUstLimit>
 </OdemeKurallari>
</RezervasyonKomut>
```

:::
