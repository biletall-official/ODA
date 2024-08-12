# HES KODU SORGULAMA

:::info :exclamation: Not 
Yolcunun hes kodu geçerliliğini olup olmadığını ve geçerlilik tarihini öğrenmek için aşağıdaki xml yapmak gerekiyor.
Hes kodu sorgularken Hes Kodu, Tc Kimlik numarası ve sefer tarihi ile göndermeniz gerekmektedir.
:::

## İSTEK

### T.C KİMLİK NO İLE SORGULAMA

```xml
<HesKodu xmlns="">
    <HesKodu>ABC1234567</HesKodu>
    <TcKimlikNo>12345678901</TcKimlikNo>
    <SeferTarihi>2021-01-29</SeferTarihi>
</HesKodu>
```

### PASAPORT İLE SORGULAMA

```xml
<HesKodu xmlns="">
    <HesKodu>ABC1234567</HesKodu>
    <PasaportNo>123ABC123</PasaportNo>
    <SeferTarihi>2021-01-29</SeferTarihi>
</HesKodu>
```

## CEVAP

```xml
 <IslemSonuc xmlns="">
<Sonuc>true</Sonuc>
<GecerlilikTarihi>25.11.2021 06:28:16</GecerlilikTarihi>
    </IslemSonuc>
```
