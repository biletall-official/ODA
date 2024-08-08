# KALKIŞ NOKTALARI SORGULAMA
## ŞEMA  
Sorgulamada kullanacağımız alanların xml şeması aşağıdaki gibidir.

|**FirmaNo***|İdo noktalarının gelmesi için FirmaNo parametresi 5000 olarak gönderilmesi zorunludur.|
|----------------|--------------------------|

:::info
(*) ile işaretli alanlar, gönderilmesi zorunlu alanlardır.
:::

```xml
<xs:element name="Kalkis">
    <xs:complexType>
        <xs:sequence>
	    <xs:element name="FirmaNo" type="xs:int" />
	  </xs:sequence>
	</xs:complexType>
</xs:element>
```
## İSTEK
```xml
<Kalkis>
  <FirmaNo>5000</FirmaNo>
</Kalkis>
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
    <Kod>AVC</Kod>
    <Ad>Avcilar</Ad>
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
    <Kod>YKP</Kod>
    <Ad>Yenikapı</Ad>
  </IdoNokta>
</IdoNoktalar>
```
