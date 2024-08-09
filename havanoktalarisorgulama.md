# HAVA NOKTALARI SORGULAMA

:::info
Bu sorgu ile Biletall web servisleri için düzenlenmiş havaalanı kalkış-varış noktaları elde edilir.
:::

## ŞEMA

Sorgulamada kullanacağımız alanların xml şeması aşağıdaki gibidir.

```xml
<xs:element name="HavaNoktaGetirKomut" />
```

## İSTEK

```xml
<HavaNoktaGetirKomut/>
```

## CEVAP

| ALANLAR         | AÇIKLAMALAR                                            |
| --------------- | ------------------------------------------------------ |
| UlkeKod         | Havaalanının bulunduğu ülkenin kodudur.                |
| UlkeAd          | Havaalanının bulunduğu ülkenin adıdır.                 |
| UlkeAdEn        | Havaalanının bulunduğu ülkenin adının İngilizcesidir.  |
| SehirKod        | Havaalanının bulunduğu şehrin kodudur.                 |
| SehirAd         | Havaalanının bulunduğu şehrin adıdır.                  |
| SehirAdEn       | Havaalanının bulunduğu şehrin adının İngilizcesidir.   |
| HavaAlanKod     | Havaalanının kodudur.                                  |
| HavaAlanAd      | Havaalanının adıdır.                                   |
| HavaAlanAdEn    | Havaaalanı adının İngilizcesidir.                      |
| HavaAlanBolge   | Havaalanının bulunduğu bölgenin adıdır.                |
| HavaAlanBolgeEn | Havaalanının bulunduğu bölgenin adının İngilizcesidir. |

```xml
<HavaNoktalar>
	<HavaNokta>
		<UlkeKod>TR</UlkeKod>
		<UlkeAd>Türkiye</UlkeAd>
		<UlkeAdEn>Turkey</UlkeAdEn>
		<SehirKod>ECNT</SehirKod>
		<SehirAd>Lefkoşa</SehirAd>
		<SehirAdEn>Lefkosa</SehirAdEn>
		<HavaAlanKod>ECN</HavaAlanKod>
		<HavaAlanAd>Ercan Havalimanı</HavaAlanAd>
		<HavaAlanAdEn>Ercan Airport</HavaAlanAdEn>
		<HavaAlanBolge>Kıbrıs</HavaAlanBolge>
		<HavaAlanBolgeEn>Northern Cyprus</HavaAlanBolgeEn>
	</HavaNokta>
	<HavaNokta>
		<UlkeKod>TR</UlkeKod>
		<UlkeAd>Türkiye</UlkeAd>
		<UlkeAdEn>Turkey</UlkeAdEn>
		<SehirKod>ADAT</SehirKod>
		<SehirAd>Adana</SehirAd>
		<SehirAdEn>Adana</SehirAdEn>
		<HavaAlanKod>ADA</HavaAlanKod>
		<HavaAlanAd>Şakirpaşa Havalimanı</HavaAlanAd>
		<HavaAlanAdEn>Sakirpasa Airport</HavaAlanAdEn>
		<HavaAlanBolge />
		<HavaAlanBolgeEn />
	</HavaNokta>
	<HavaNokta>
		<UlkeKod>TR</UlkeKod>
		<UlkeAd>Türkiye</UlkeAd>
		<UlkeAdEn>Turkey</UlkeAdEn>
		<SehirKod>ADFT</SehirKod>
		<SehirAd>Adıyaman</SehirAd>
		<SehirAdEn>Adiyaman</SehirAdEn>
		<HavaAlanKod>ADF</HavaAlanKod>
		<HavaAlanAd>Adıyaman Havalimanı</HavaAlanAd>
		<HavaAlanAdEn>Adiyaman Airport</HavaAlanAdEn>
		<HavaAlanBolge />
		<HavaAlanBolgeEn />
	</HavaNokta>
</HavaNoktalar>
```
