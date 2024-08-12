# SERVİS BİLGİSİ SORGULAMA
## ŞEMA
Sorgulamada kullanacağımız alanların xml şeması aşağıdaki gibidir.
|FirmaNo| Seçilen seferi yapacak olan firmanın firma numarası|
|--------|-------------------------------------------------------------------------------| 
|**KalkisNoktaID***|Seçilen seferin KalkisNoktaID değeri. (İniş Servisi için KalkisNoktaID alanı içerisinde VarisNoktaID değeri gönderilmelidir.) **Format:(integer).**|
|**YerelSaat***|Seçilen seferin kalkış saati (Sefer listesinde bulunan YerelInternetSaat alanı) **Format:(datetime, ‘s’).**|
|**HatNo***|Seçilen seferin hat numarası (Sefer listesinde bulunan HatNo alanı) **Format: integer**|
|Tarih|Sefer listesinde bulunan Tarih alanı **Format:(datetime, ‘s’)**|
|Saat| Sefer listesinde bulunan Saat alanı **Format:(datetime, ‘s’).**|

:::info
(*) ile işaretli alanlar, gönderilmesi zorunlu alanlardır.
:::

```xml
<xs:element name="Servis_2">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="FirmaNo" type="xs:int" />
  <xs:element name="KalkisNoktaID" type="xs:int" />
        <xs:element name="YerelSaat" type="xs:dateTime" />
        <xs:element name="HatNo" type="xs:int" />
        <xs:element name="Tarih" type="xs:dateTime" />
        <xs:element name="Saat" type="xs:dateTime" />
      </xs:sequence>
    </xs:complexType>
  </xs:element>
```

## İSTEK
**Örnek Biniş Servisi isteği;** (Kayseri » Ankara (Aşti) seferi) 
```xml
<Servis_2>
  <FirmaNo>37</FirmaNo>
  <KalkisNoktaID>738</KalkisNoktaID>
  <YerelSaat>2018-12-10T02:30:00</YerelSaat>
  <HatNo>1</HatNo>
  <Tarih>2018-12-09T00:00:00</Tarih>
  <Saat>1900-01-01T02:30:00</Saat>
</Servis_2>
```  

**Örnek İniş Servisi isteği;** (Kayseri » Ankara (Aşti) seferi)
```xml
<Servis_2>
  <FirmaNo>37</FirmaNo>
  <KalkisNoktaID>84</KalkisNoktaID>
  <YerelSaat>2018-12-10T02:30:00</YerelSaat>
  <HatNo>1</HatNo>
  <Tarih>2079-06-06T01:00:00</Tarih>
  <Saat>1900-01-01T00:00:00</Saat>
</Servis_2>
```

## CEVAP
```xml
<NewDataSet>  
  <Table>
    <Yer>ANAYURT 2</Yer>
    <Saat>2018-12-10T15:47:00+03:00</Saat>
    <Internette_Gozuksunmu>1</Internette_Gozuksunmu>
  </Table>
</NewDataSet>
````
