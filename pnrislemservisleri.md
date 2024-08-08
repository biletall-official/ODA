# PNR İŞLEM SERVİSLERİ
## ŞEMA
PNR İşlem servisleri aşağıda şeması verilen PnrIslem xml yapısı ile kullanılmaktadır. 
```xml
<?xml version="1.0" encoding="utf-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="PnrIslem">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="PnrNo" type="strPNR" />
        <xs:element name="PnrKoltukNo" type="xs:short" minOccurs="0" />
        <xs:element name="WebUyeNo" type="xs:integer" minOccurs="0" />
        <xs:element name="PnrIslemTip" type="xs:short" />
        <xs:element name="PnrAktif" type="xs:integer" minOccurs="0" />
        <xs:element name="PnrAdiSoyadi" type="xs:string" minOccurs="0" />
        <xs:element name="PnrSatisIptalTutar" type="fiyat" minOccurs="0" />
        <xs:element name="PnrBiletSeriNo" type="xs:string" minOccurs="0" />
        <xs:element name="PnrBiletTakipNo" type="xs:string" minOccurs="0" />
        <xs:element name="PnrAramaParametre" type="xs:string" minOccurs="0" />
      </xs:sequence>
    </xs:complexType>
  </xs:element>
  <xs:simpleType name="strPNR">
    <xs:restriction base="xs:string">
      <xs:minLength value="6" />
      <xs:maxLength value="10" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="fiyat">
    <xs:restriction base="xs:double">
      <xs:maxExclusive value="1000" />
      <xs:minExclusive value="0" />
    </xs:restriction>
  </xs:simpleType>
</xs:schema>
```
