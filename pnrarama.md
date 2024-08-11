# PNR ARAMA

Rezervasyon veya satış işlemleri sonrası biletler işlem sonucu dönen PNR numarası ile takip edilebilmektedir.

## İSTEK
|Alan|Açıklama|
| ----------------------- | ---------------------------------- |
| **PnrNo***             | İşlemin PNR Numarası               |
| **PnrAramaParametre*** | Yolcu soyadı veya telefon numarası |

:::info
(*) ile işrateli alanlar, gönderilmesi zorunlu alanlardır.
:::

```xml
<PnrIslem>
	<PnrNo>SB1234</PnrNo>
	<PnrIslemTip>0</PnrIslemTip>
	<PnrAramaParametre>OZDEMIR</PnrAramaParametre>
</PnrIslem>
```

## CEVAP
:::details kodu görüntülemek için tıklayın.
```xml
<Bilet>
	<PNR>
		<ID>63790</ID>
		<PNR> SB1234</PNR>
		<PnrTip>K</PnrTip>
		<TakipNo>2011112415322142235204</TakipNo>
		<Ad>AHMET</Ad>
		<Soyad>ALKAN</Soyad>
		<Tel>5321234123</Tel>
		<Email>a@a.com</Email>
		<TCKimlikNo>11111111111</TCKimlikNo>
            <FirmaNo>1003</FirmaNo>
		<OpsiyonTarih>2011-11-24T23:59:00+02:00</OpsiyonTarih>
		<HatirlaticiNot />
		<FirmaAciklama />
		<SMSGonderimSayi>1</SMSGonderimSayi>
	</PNR>
	<Yolcu>
		<PNR>SB1234</PNR>
		<ID>85251</ID>
		<Ad>AHMET</Ad>
		<Soyad>ALKAN</Soyad>
		<TCKimlikNo>11111111111</TCKimlikNo>
		<Cinsiyet>2</Cinsiyet>
		<Tip>0</Tip>
		<Fiyat>40.0000</Fiyat>
		<ServisUcret>0.0000</ServisUcret>
		<Vergi>0.0000</Vergi>
		<EBiletNo>008010735126 </EBiletNo>
		<KoltukNo>28</KoltukNo>
		<BinisYer />
		<BinisServis />
		<InisServis />
		<IslemTipi>SATIS</IslemTipi>
		<IslemTarihi>2011-11-24T15:32:22.223+02:00</IslemTarihi>
		<Acente>BiletAll.Com</Acente>
		<Kullanici>BiletAll.com Web Kullanıcısı</Kullanici>
		<AcenteID>286</AcenteID>
		<KullaniciID>441</KullaniciID>
		<CM_AcenteID>0</CM_AcenteID>
		<CM_KullaniciID>0</CM_KullaniciID>
		<Durum1>SATIS</Durum1>
		<Durum1Tarih>2011-11-24T15:32:22.223+02:00</Durum1Tarih>
		<AktifDurum>1</AktifDurum>
	</Yolcu>
	<Segment>
		<ID>70997</ID>
		<Kalkis>ANKARA</Kalkis>
		<Varis>İSTANBUL</Varis>
		<SeferNo>86247</SeferNo>
		<HatNo>116</HatNo>
		<KalkisTarih>2011-11-24T23:59:00+02:00</KalkisTarih>
		<VarisTarih>2011-11-25T10:58:00+02:00</VarisTarih>
		<TasiyiciFirma>8</TasiyiciFirma>
		<AracTipi>TRLN      </AracTipi>
		<Sinif>N</Sinif>
		<SeferSure>1900-01-01T10:00:00+02:00</SeferSure>
		<SeferTip>MOLALI</SeferTip>
		<PeronNo>ALT-130</PeronNo>
		<KalkisTerminal />
		<BinisYer />
		<BinisServis />
		<InisServis />
		<BosTarih>2011-11-24T00:00:00+02:00</BosTarih>
		<BosSaat>1900-01-01T17:30:00+02:00</BosSaat>
		<DonusMu>0</DonusMu>
		<SinifTip>Ekonomi</SinifTip>
		<FirmaAd>Deneme Turizm</FirmaAd>
		<FirmaKod>8</FirmaKod>
		<FirmaID>8</FirmaID>
		<BiletIptalAktifMi>1</BiletIptalAktifMi>
	</Segment>
	<AcikBilet>
		<Tahsilat>40.0000</Tahsilat>
		<HarcananTutar>40.0000</HarcananTutar>
		<AcikTutar>0.0000</AcikTutar>
		<KazanilanPuan>0.0000</KazanilanPuan>
		<HarcananPuan>0.0000</HarcananPuan>
		<NetPuan>0.0000</NetPuan>
		<TakipNo>2011112415322142235204</TakipNo>
	</AcikBilet>
	<Tahsilat>
		<Tarih>2011-11-24T15:32:22.207+02:00</Tarih>
		<Acente>BiletAll.Com</Acente>
		<IslemTip>TAHSILAT</IslemTip>
		<Tip>KrediKart</Tip>
		<Tutar>40.0000</Tutar>
	</Tahsilat>
	<PNRIslemDetay>
		<PNR>SB1234</PNR>
		<IslemTipi>SATIS</IslemTipi>
		<Tarih>2011-11-24T15:32:22.223+02:00</Tarih>
		<Firma>Deneme Turizm</Firma>
		<KalkisVaris>ANKARA - İSTANBUL</KalkisVaris>
		<KoltukNo>28</KoltukNo>
		<AdSoyad>AHMET ALKAN</AdSoyad>
		<Tutar>40.0000</Tutar>
	</PNRIslemDetay>
	<TahsilatDetay>
		<ID>50301</ID>
		<Tarih>2011-11-24T15:32:22.207+02:00</Tarih>
		<TakipNo>2011112415322142235204</TakipNo>
		<AcenteID>286</AcenteID>
		<KullaniciID>441</KullaniciID>
		<Tutar>40.0000</Tutar>
		<IslemTip>TAHSILAT</IslemTip>
		<OrderID>K3D0000201111241531539</OrderID>
		<TransactionID>11328-PiIJ-1-8550</TransactionID>
		<TahsilatID>K3D0000201111241531539</TahsilatID>
		<Tip>KrediKart</Tip>
		<PosID>1</PosID>
		<OrderID1>K3D0000201111242234539</OrderID1>
		<Tarih1>2011-11-24T15:32:00+02:00</Tarih1>
		<KKNo>XXXXJU2ciVhHq2TQHrCR+j/iCA==XXXX</KKNo>
		<KKSahip>XXX XXX</KKSahip>
		<KKSKAy>XX</KKSKAy>
		<KKSKYil>XX</KKSKYil>
		<KKCvv>XXX</KKCvv>
		<Secure3D>true</Secure3D>
		<Secure3DSonuc>1</Secure3DSonuc>
		<Tutar1>40.0000</Tutar1>
		<AcenteKrediKartID>0</AcenteKrediKartID>
	</TahsilatDetay>
<KoltukNolar>
  <PNRSegmentID>70997</PNRSegmentID>
  <PNRYolcuID>85251</PNRYolcuID>
  <BagajMiktar>15</BagajMiktar>
  <BagajBirim>kg</BagajBirim>
</KoltukNolar>
</Bilet>
```
:::

:::warning
Yolcuları listeleme işleminde Durum1 değeri boş olmayan yolculara göre listeleme yapılmalıdır.AktifDurum değeri ise yolcunun son durumuyla ilgili bilgi verir.Örneğin AktifDurum değeri 2 ise yolcunun son durumu Durum2 dir.Durum1 Rezervasyon olabilirken Durum2 RezervasyonIptal olabilmektedir.
:::

:::tip
PnrTip verisi ile biletin uçak veya otobüs bileti olduğunu anlıyabilirsiniz. PnrTip ile ilgili bilgileri aşağıda bulabilirsiniz.
PnrTip=K,M (Otobüs bileti olduğunu ifade eder. )
PnrTip=T,H,S(Yurtiçi uçak bileti olduğunu ifade eder. )
PnrTip=G (Yurtdışı uçak bileti olduğunu ifade eder.)
PnrTip=I (İdo bileti olduğunu ifade eder.)
:::
