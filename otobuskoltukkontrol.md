# OTOBÜS KOLTUK KONTROL

## ŞEMA

Koltuk seçim işleminde bazen seçilen koltuk ya da koltuklar başka bir platformdan satılmış olabiliyor. Rezervasyon ya da satış işlemini göndermeden önce koltuk kontrolü yapabilirsiniz.
|ALAN|AÇIKLAMA|
| ------------- | --------------------------------------- |
| FirmaNo             | Seçilen seferi yapacak olan firmanın firma numarası          |
| **KalkisNoktaID\*** | Seçilen seferin KalkisNoktaID değeri.**Format:(integer).** |
| **VarisNoktaID\***  | Seçilen seferin VarisNoktaID değeri.**Format:(integer).** |
| **Tarih\***         | Seçilen seferin kalkış tarihi (Sefer listesinde bulunan Tarih alanı)**Format:(datetime, ‘yyyy-MM-dd’).**|
| **Saat\***          | Seçilen seferin kalkış saati (Sefer listesinde bulunan Saat alanı)**Format:(datetime, ‘s’).**|
| **HatNo\***         | Seçilen seferin hat numarası (Sefer listesinde bulunan HatNo alanı)**Format: |
| **IslemTipi\***     | Yapılacak işlemin Satış veya Rezervasyon olduğunu gösterir. Satış işlemi için olması gereken parametre değeri:**0** Rezervasyon işlemi için olması gereken parametre değeri:**1 Format: integer, 1 veya 0** |
| YolcuSayisi         | Seyahat edecek yolcu sayısı.|
| **SeferTakipNo\***  | Sefer listesinde bulunan SeferTakipNo alanı |
| **Ip\***            | Site ziyaretçisinin Ip adresi |

|ALAN|AÇIKLAMA|
| --------------- | --------------------------------------------------------------------------------- |
|**Koltuklar\*** | Seçili koltukların koltuk numaraları ve cinsiyet bilgisinin gönderildiği alandır. |
|**KoltukNo\***  | Seçilen koltuğun numarası                                                         |
|**Cinsiyet\***  | Seçilen koltuk için yolcunun cinsiyet bilgisi. **Bayan = 1 , Bay = 2**            |

:::info
(*) ile işaretli alanlar, gönderilmesi zorunlu alanlardır.
:::

Sorgulamada kullanacağımız alanların xml şeması aşağıdaki gibidir;

```xml
<xs:element name="OtobusKoltukKontrol">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="FirmaNo" type="intOzel" />
      <xs:element name="KalkisNoktaID" type="xs:int" minOccurs="0" />
      <xs:element name="VarisNoktaID" type="xs:int" minOccurs="0" />
      <xs:element name="KalkisAdi" type="xs:string" minOccurs="0" />
      <xs:element name="VarisAdi" type="xs:string" minOccurs="0" />
      <xs:element name="Tarih" type="trh" />
      <xs:element name="Saat" type="xs:dateTime" />
      <xs:element name="HatNo" type="intOzel" />
      <xs:element name="IslemTipi" type="xs:byte" />
      <xs:element name="SeferTakipNo" type="xs:string" />
      <xs:element name="Ip" type="IpType" minOccurs="0" />
      <xs:element name="Koltuklar" maxOccurs="1" minOccurs="1">
        <xs:complexType>
          <xs:sequence>
            <xs:element name="Koltuk" maxOccurs="5" minOccurs="1">
              <xs:complexType>
                <xs:sequence>
                  <xs:element name="KoltukNo" type="byte99" />
                  <xs:element name="Cinsiyet" type="byte2" />
                </xs:sequence>
              </xs:complexType>
            </xs:element>
          </xs:sequence>
        </xs:complexType>
      </xs:element>
    </xs:sequence>
  </xs:complexType>
</xs:element>
```

## İSTEK

```xml
<OtobusKoltukKontrol>
  <FirmaNo>37</FirmaNo>
  <KalkisNoktaID>738</KalkisNoktaID>
  <VarisNoktaID>84</VarisNoktaID>
  <Tarih>2018-12-09</Tarih>
  <Saat>1900-01-01T02:30:00+02:00</Saat>
  <HatNo>1</HatNo>
  <IslemTipi>0</IslemTipi>
  <SeferTakipNo>288179</SeferTakipNo>
  <Ip>127.0.0.1</Ip>
  <Koltuklar>
    <Koltuk>
      <KoltukNo>1</KoltukNo>
      <Cinsiyet>2</Cinsiyet>
    </Koltuk>
  </Koltuklar>
</OtobusKoltukKontrol>
```

## CEVAP

### SONUÇ

```xml
<IslemSonuc>
  <Sonuc>true</Sonuc>
</IslemSonuc>
```

### HATA SONUCU

```xml
<IslemSonuc>
  <Sonuc>false</Sonuc>
  <Hata>Hatalı koltuk. Koltuk müsait değil. Koltuk No : 5</Hata>
</IslemSonuc>
```
