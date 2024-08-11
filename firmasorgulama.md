# FİRMA SORGULAMA

## ŞEMA

Sorgulamada kullanacağımız alanların xml şeması aşağıdaki gibidir.  
Alanların açıklaması şu şekildedir.

|Alan|Açıklama|
| -------- | ------------------------------------------------------------- |
| Firma No | Hesabınıza bağlı otobüs firmasının bilgilerini çekmeye yarar. |

```xml
<xs:element name="Firmalar_2">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="FirmaNo" type="xs:int" minOccurs="0" />
      </xs:sequence>
    </xs:complexType>
  </xs:element>
```

Görüldüğü üzere bu alanların hiç birini gönderme zorunluluğu yoktur.

## İSTEK

```XML
<Firmalar_2 xmlns=""></Firmalar_2>
```

::: info
Test ortamında firmaları listelemek için <Firmalar xmlns=""></Firmalar> şeklinde istek göndermeniz gerekirken canlı ortamda <Firmalar_2 xmlns=""></Firmalar_2> şeklinde göndermeniz gerekmektedir.
:::

## CEVAP

|Alan|Açıklama|
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sefere kadar iptal edebilme süresi dakika | Eğer firmada bilet iptal aktifse sefer saatine kaç dakika kalana kadar iptal edilebileceğini belirtir. Boş gelirse firmada böyle bir bilgi bulunmuyor demektir. |

```xml
<Firmalar>
	<Firma>
		<ID>-269</ID>
		<FirmaNo>-269</FirmaNo>
		<FirmaLogo>
			https://eticket.ipektr.com/wsbos3/LogoVer.Aspx?fnum=-269
		</FirmaLogo>
             <Ad>Trans Montana</Ad>
             <SeyahatTip>Otobus</SeyahatTip>
             <Kod>4848</Kod>
             <SiteUrl />
             <CheckinUrl />
             <Telefon />
             <BiletIptalAktifMi>1</BiletIptalAktifMi>
		<AcikParaKullanimAktifMi>1</AcikParaKullanimAktifMi>
		<SefereKadarIptalEdilebilmeSuresiDakika>
			1440
		</SefereKadarIptalEdilebilmeSuresiDakika>
  </Firma>
```
