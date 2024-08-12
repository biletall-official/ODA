# ÖN ÖDEME BAKİYE SORGULAMA

## İSTEK

:::tip :bulb: İpucu
Ön ödemeli çalışan kullanıcıların bakiyelerini kontrol edebilmeleri sağlanmaktadır.
:::

```xml
<OnOdemeBakiye></OnOdemeBakiye>
```

## CEVAP

```xml
<OnOdemeBakiye>
  <Tutar>0</Tutar>
</OnOdemeBakiye>
```

## Asp.Net KKULLANIMI:

```csharp
Service s = new Service();
string xmlIslem = @"<OnOdemeBakiye></OnOdemeBakiye>";
string xmlYetki = "<Kullanici><Adi>xxx</Adi><Sifre>yyy</Sifre></Kullanici>";
string sonuc = s.StrIslet(xmlIslem, xmlYetki);
```
