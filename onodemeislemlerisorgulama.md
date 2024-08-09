# ÖN ÖDEME İŞLEMLERİ SORGULAMA

:::tip
Ön ödemeli çalışan kullanıcıların hesaplarına, daha önce ön ödeme ile satılan biletlerle ilgili, diğer kanallardan yapılan iptal işlemi sonucu iade yapılabilir. Aşağıdaki servis ile her gün bir önceki günün iadeleri çekilip, pnr sahiplerine belirtilen tutar kadar iade yapılmalıdır.
:::

## İSTEK

```xml
<OnOdemeIslemlerim>
  <BaslangicTarihi>2016-07-29</BaslangicTarihi>
  <BitisTarihi>2016-07-30</BitisTarihi>
  <IslemTipi>IADE</IslemTipi>
</OnOdemeIslemlerim>
```

## CEVAP
:::details kodu görüntülemek için tıklayın.
```xml
<OnOdemeIslemlerim>
  <xs:schema id="OnOdemeIslemlerim" xmlns="" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:msdata="urn:schemas-microsoft-com:xml-msdata">
    <xs:element name="OnOdemeIslemlerim" msdata:IsDataSet="true" msdata:MainDataTable="OnOdemeIslem" msdata:Locale="">
      <xs:complexType>
        <xs:choice minOccurs="0" maxOccurs="unbounded">
          <xs:element name="OnOdemeIslem">
            <xs:complexType>
              <xs:sequence>
                <xs:element name="Tarih" type="xs:dateTime" minOccurs="0" />
                <xs:element name="PnrNo" type="xs:string" minOccurs="0" />
                <xs:element name="Soyad" type="xs:string" minOccurs="0" />
                <xs:element name="Tip" type="xs:string" minOccurs="0" />
                <xs:element name="Tutar" type="xs:decimal" minOccurs="0" />
              </xs:sequence>
            </xs:complexType>
          </xs:element>
        </xs:choice>
      </xs:complexType>
    </xs:element>
  </xs:schema>
  <OnOdemeIslem>
    <Tarih>2016-07-29T01:04:06.107+03:00</Tarih>
    <PnrNo>ABSDFGET</PnrNo>
    <Soyad>CETIN</Soyad>
    <Tip>IADE</Tip>
    <Tutar>84.9900</Tutar>
  </OnOdemeIslem>
  <OnOdemeIslem>
    <Tarih>2016-07-29T09:30:56.953+03:00</Tarih>
    <PnrNo>ABSDFGDE</PnrNo>
    <Soyad>ARICI</Soyad>
    <Tip>IADE</Tip>
    <Tutar>313.9800</Tutar>
  </OnOdemeIslem>
</OnOdemeIslemlerim>
```
:::