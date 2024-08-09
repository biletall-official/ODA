# BİNECEĞİ YER SORGULAMA

## ŞEMA

Sorgulamada kullanacağımız alanların xml şeması aşağıdaki gibidir.

|alan|açıklama|
| ------------- | ---------------------------------------------------- |
| FirmaNo     | Seçilen seferi yapacak olan firmanın firma numarası            |
| **KalkisNoktaID\*** | Seçilen seferin KalkisNoktaID değeri. **Format:(integer).**  |  
| **YerelSaat\***     | Seçilen seferin kalkış saati (Sefer listesinde bulunan YerelInternetSaat alanı) **Format:(datetime, ‘s’).** |
| **HatNo\***         | Seçilen seferin hat numarası (Sefer listesinde bulunan HatNo alanı) **Format: integer**      |

:::info
(*) ile işaretli alanlar, gönderilmesi zorunlu alanlardır.
:::

```xml
 <xs:element name="BinecegiYer">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="FirmaNo" type="xs:int" />
  <xs:element name="KalkisNoktaID" type="xs:int" />
        <xs:element name="YerelSaat" type="xs:dateTime" />
        <xs:element name="HatNo" type="xs:int" />
      </xs:sequence>
    </xs:complexType>
  </xs:element>
```

## İSTEK

```xml
<BinecegiYer>
  <FirmaNo>37</FirmaNo>
  <KalkisNoktaID>738</KalkisNoktaID>
  <YerelSaat>2018-12-10T02:30:00</YerelSaat>
  <HatNo>1</HatNo>
</BinecegiYer>
```

## SONUÇ

```xml
<NewDataSet>
  <Table>
    <Saat>2018-12-10T02:30:00+03:00</Saat>
  </Table>
  <Table>
    <Yer />
    <Saat>2018-12-10T02:30:00+03:00</Saat>
    <Internette_Gozuksunmu>0</Internette_Gozuksunmu>
  </Table>
  <Table>
    <Yer> BELSİN GİRİŞ  </Yer>
    <Saat>2018-12-10T02:30:00+03:00</Saat>
    <Internette_Gozuksunmu>1</Internette_Gozuksunmu>
  </Table>
  <Table>
    <Yer> FUZULİ</Yer>
    <Saat>2018-12-10T02:30:00+03:00</Saat>
    <Internette_Gozuksunmu>1</Internette_Gozuksunmu>
  </Table>
  <Table>
    <Yer> HIMMETD SHEL</Yer>
    <Saat>2018-12-10T02:30:00+03:00</Saat>
    <Internette_Gozuksunmu>1</Internette_Gozuksunmu>
  </Table>
  <Table>
    <Yer> TOYOTA</Yer>
    <Saat>2018-12-10T02:30:00+03:00</Saat>
    <Internette_Gozuksunmu>1</Internette_Gozuksunmu>
  </Table>
  <Table>
    <Yer>AĞAÇ İŞLERİ</Yer>
    <Saat>2018-12-10T02:40:00+03:00</Saat>
    <Internette_Gozuksunmu>1</Internette_Gozuksunmu>
  </Table>
</NewDataSet>
```
