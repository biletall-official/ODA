# REZERVASYON İPTAL İŞLEMİ
|Alan|Açıklama|
| ----------------- | ---------------------------------------- |
| **PnrNo***       | İşlemin PNR Numarası                     |
| PnrKoltukNo       | Otobüste bu alanın girilmesi zorunludur. |
| PnrAramaParametre | Yolcu Soyadı ya da Cep Telefonu          |

:::info
(*) ile işrateli alanlar, gönderilmesi zorunlu alanlardır.
:::

## İSTEK

```xml
<PnrIslem>
	<PnrNo>RDN206</PnrNo>
	<PnrKoltukNo>44</PnrKoltukNo>
	<WebUyeNo>0</WebUyeNo>
	<PnrIslemTip>1</PnrIslemTip>
	<PnrAramaParametre>OZDEMIR</PnrAramaParametre>
</PnrIslem>
```

## CEVAP

```xml
<IslemSonuc>
	<Sonuc>true</Sonuc>
</IslemSonuc>
```
