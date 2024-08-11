# VARIŞ NOKTALARI SORGULAMA

## İSTEK

Sorgulamada kullanacağımız alanların xml şeması aşağıdaki gibidir.
|Alan|Açıklama|
| --------------- |---------------------------------------------------------------- |
| **FirmaNo***   | İdo noktalarının gelmesi için FirmaNo parametresi 5000 olarak gönderilmesi zorunludur.      |
| **KalkisKod*** | Seçilmiş Kalkış noktası. Bu alan zorunludur. Her bir kalkış noktasının belirli varış noktaları vardır. Kalkış noktalarında seçilen noktanın Kod değeri gönderilmelidir.**Format:(string, 3 karakter).** |

:::info
(*) ile işaretli alanlar, gönderilmesi zorunlu alanlardır.
:::

```xml
<xs:element name="Varis">
    <xs:complexType>
	<xs:sequence>
	  <xs:element name="FirmaNo" type="xs:int" />
	  <xs:element name="KalkisKod" type="KalkisKodType" />
	</xs:sequence>
    </xs:complexType>
</xs:element>
```

## İSTEK

```xml
<Varis>
  <FirmaNo>5000</FirmaNo>
  <KalkisKod>YKP</KalkisKod>
</Varis>
```

## CEVAP

```xml
<IdoNoktalar>
  <IdoNokta>
    <Kod>ARM</Kod>
    <Ad>Armutlu</Ad>
  </IdoNokta>
  <IdoNokta>
    <Kod>ART</Kod>
    <Ad>Armutlu Tatil Köyü</Ad>
  </IdoNokta>
  <IdoNokta>
    <Kod>AVA</Kod>
    <Ad>Avsa Adası</Ad>
  </IdoNokta>
  <IdoNokta>
    <Kod>BKY</Kod>
    <Ad>Bakirköy</Ad>
  </IdoNokta>
  <IdoNokta>
    <Kod>BDM</Kod>
    <Ad>Bandırma</Ad>
  </IdoNokta>
  <IdoNokta>
    <Kod>BST</Kod>
    <Ad>Bostancı</Ad>
  </IdoNokta>
  <IdoNokta>
    <Kod>BRS</Kod>
    <Ad>Bursa</Ad>
  </IdoNokta>
</IdoNoktalar>
```
