# OTOBÜS SATIŞ İPTAL İŞLEMİ

## İSTEK

| Alan               | Açıklama                                                                                |
| ------------------ | --------------------------------------------------------------------------------------- |
| **PnrNo\***        | İşlemin PNR Numarası                                                                    |
| PnrKoltukNo        | Otobüste bu alanın girilmesi zorunludur.                                                |
| PnrSatisIptalTutar | İptal edilecek tutar                                                                    |
| AcikParaIade       | İşlem sonucunda oluşan açık paranın iade edilmesi için 1 parametresini göndermelisiniz. |
| PnrAramaParametre  | Yolcu Soyadı ya da Cep Telefonu                                                         |

:::info :exclamation: Not 
(\*) ile işrateli alanlar, gönderilmesi zorunlu alanlardır.
:::

:::info :exclamation: Not 
Otobüste tüm koltukları tek seferde açığa almak için PnrKoltukNo alanını 0 göndermeniz gerekmektedir.
:::

## CEVAP

| Alan  | Açıklama    |
| ----- | ------------------------------------------------------------------------------------ |
| Tutar | İşlem sonucu oluşan biletall açık para tutarı. Bazı firmalarda direk iptal edilip para iadesi yapılmaktadır. Hangi firmalarda direk iade yapıldığı bilgisi için biletall müşteri hizmetleri ile temasa geçiniz. |

```xml
<NewDataSet>
	<IslemSonuc>
		<Sonuc>true</Sonuc>
		<Tutar>-27,00 TL</Tutar>
	</IslemSonuc>
</NewDataSet>
```
