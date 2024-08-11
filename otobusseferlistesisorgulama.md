# SEFER LİSTESİ SORGULAMA

## ŞEMA
|Alan|Açıklama|
| ----------------- | -------------------------------------------------------------------------------------------------- |
| **Firma No***     | Sistemde bulunan bütün firmaların sefer listesini görüntülemek için kullanılır. Bu alanın değeri sabittir, sıfır göndermelisiniz.                                   |
|**Kalkış Nokta ID*** | Listelemek istediğiniz seferlerin kalkış noktasının ID değeri.**Format: integer**                                                       |
|**Varış Nokta ID***  | Listelemek istediğiniz seferlerin kalkış noktasının ID değeri.**Format: integer**                                                     |
|**Tarih***          | Listelemek istediğiniz seferlerin kalkış tarihi **Format:(datetime, ‘yyyy-MM-dd’)**.                                                    |
| Ara Nokta Gelsin  | Yalnızca seçmiş olduğunuz kalkış ve varış noktasına ait seferleri listelemek için bu alan 0 gönderilmelidir. Başka kalkış noktasından başlayan seferleri de listelemek için bu parametre 1 olarak gönderilmelidir.(1 kullanılmalıdır..)**Format: integer, 1 veya 0** |
|**İslem Tipi***      | Yapılacak işlemin Satış veya Rezervasyon olduğunu gösterir.Satış işlemi için olması gereken parametre değeri:**0** Rezervasyon işlemi için olması gereken parametre değeri:**1** **Format: integer, 1 veya 0** |
| Yolcu Sayısı      | Seyahat edecek yolcu sayısı.   |
| **Ip***              | Site ziyaretçisinin Ip adresi    |

:::info
(*) ile işrateli alanlar, gönderilmesi zorunlu alanlardır.  
:::

## İSTEK

```xml
<Sefer>
  <FirmaNo>0</FirmaNo>
  <KalkisNoktaID>738</KalkisNoktaID>
  <VarisNoktaID>84</VarisNoktaID>
  <Tarih>2018-12-10</Tarih>
  <AraNoktaGelsin>1</AraNoktaGelsin>
  <IslemTipi>0</IslemTipi>
  <YolcuSayisi>1</YolcuSayisi>
  <Ip>127.0.0.1</Ip>
</Sefer>
```

## CEVAP
:::details kodu görüntülemek için tıklayın.
```xml
<NewDataSet>
  <Table>
    <ID>1</ID>
    <Vakit>Gece</Vakit>
    <FirmaNo>37</FirmaNo>
    <FirmaAdi>İnci Turizm</FirmaAdi>
    <YerelSaat>2018-12-10T02:30:00+03:00</YerelSaat>
    <YerelInternetSaat>2018-12-10T02:30:00+03:00</YerelInternetSaat>
    <Tarih>2018-12-09T00:00:00+03:00</Tarih>
    <GunBitimi>0</GunBitimi>
    <Saat>1900-01-01T02:30:00+02:00</Saat>
    <HatNo>1</HatNo>
    <IlkKalkisYeri>KAYSERİ</IlkKalkisYeri>
    <SonVarisYeri>ANKARA</SonVarisYeri>
    <KalkisYeri>KAYSERİ</KalkisYeri>
    <VarisYeri>ANKARA</VarisYeri>
    <IlkKalkisNoktaID>738</IlkKalkisNoktaID>
    <IlkKalkisNokta>Kayseri</IlkKalkisNokta>
    <KalkisNoktaID>738</KalkisNoktaID>
    <KalkisNokta>Kayseri</KalkisNokta>
    <VarisNoktaID>84</VarisNoktaID>
    <VarisNokta>Ankara (Aşti)</VarisNokta>
    <SonVarisNoktaID>84</SonVarisNoktaID>
    <SonVarisNokta>Ankara (Aşti)</SonVarisNokta>
    <OtobusTipi>560</OtobusTipi>
    <OtobusKoltukYerlesimTipi>2+2</OtobusKoltukYerlesimTipi>
    <OTipAciklamasi>33.34Setra S415 HD</OTipAciklamasi>
    <OtobusTelefonu>(533)-966-31-84</OtobusTelefonu>
    <OtobusPlaka />
    <SeyahatSuresi>1900-01-01T05:00:00+02:00</SeyahatSuresi>
    <SeyahatSuresiGosterimTipi>1</SeyahatSuresiGosterimTipi>
    <YaklasikSeyahatSuresi>5-6</YaklasikSeyahatSuresi>
    <BiletFiyati1>15</BiletFiyati1>
    <BiletFiyatiInternet>15</BiletFiyatiInternet>
    <Sinif_Farki>0</Sinif_Farki>
    <MaxRzvZamani>0</MaxRzvZamani>
    <SeferTipi />
    <SeferTipiAciklamasi>MOLALI</SeferTipiAciklamasi>
    <HatSeferNo />
    <O_Tip_Sinif>0</O_Tip_Sinif>
    <SeferTakipNo>288179</SeferTakipNo>
    <ToplamSatisAdedi>0</ToplamSatisAdedi>
    <DolulukKuraliVar>0</DolulukKuraliVar>
    <OTipOzellik>01101011100000000000000000000000000000000000000000</OTipOzellik>e
    <NormalBiletFiyati>30</NormalBiletFiyati>
    <DoluSeferMi>0</DoluSeferMi>
    <Tesisler>ÖzKent: 03:30, </Tesisler>
    <SeferBosKoltukSayisi>46</SeferBosKoltukSayisi>
    <KalkisTerminalAdiSaatleri />
    <MaximumRezerveTarihiSaati>2018-12-02T00:00:00+03:00</MaximumRezerveTarihiSaati>
    <Guzergah>Kayseri -&gt;Ankara (Aşti) </Guzergah>
    <KKZorunluMu>false</KKZorunluMu>
    <KoltukSecimiVar>true</KoltukSecimiVar>
    <SeferKod />
  </Table>
  <Table>
    <ID>6</ID>
    <Vakit>Ogle</Vakit>
    <FirmaNo>37</FirmaNo>
    <FirmaAdi>İnci Turizm</FirmaAdi>
    <YerelSaat>2018-12-10T15:15:00+03:00</YerelSaat>
    <YerelInternetSaat>2018-12-10T15:15:00+03:00</YerelInternetSaat>
    <Tarih>2018-12-10T00:00:00+03:00</Tarih>
    <GunBitimi>0</GunBitimi>
    <Saat>1900-01-01T15:15:00+02:00</Saat>
    <HatNo>2</HatNo>
    <IlkKalkisYeri>KAYSERİ</IlkKalkisYeri>
    <SonVarisYeri>ANKARA</SonVarisYeri>
    <KalkisYeri>KAYSERİ</KalkisYeri>
    <VarisYeri>ANKARA</VarisYeri>
    <IlkKalkisNoktaID>738</IlkKalkisNoktaID>
    <IlkKalkisNokta>Kayseri</IlkKalkisNokta>
    <KalkisNoktaID>738</KalkisNoktaID>
    <KalkisNokta>Kayseri</KalkisNokta>
    <VarisNoktaID>84</VarisNoktaID>
    <VarisNokta>Ankara (Aşti)</VarisNokta>
    <SonVarisNoktaID>84</SonVarisNoktaID>
    <SonVarisNokta>Ankara (Aşti)</SonVarisNokta>
    <OtobusTipi>2,+1</OtobusTipi>
    <OtobusKoltukYerlesimTipi>2+1</OtobusKoltukYerlesimTipi>
    <OTipAciklamasi />
    <OtobusTelefonu>(530)-402-68-23</OtobusTelefonu>
    <OtobusPlaka />
    <SeyahatSuresi>1900-01-01T05:00:00+02:00</SeyahatSuresi>
    <YaklasikSeyahatSuresi>5-6</YaklasikSeyahatSuresi>
    <BiletFiyati1>30</BiletFiyati1>
    <BiletFiyatiInternet>30</BiletFiyatiInternet>
    <Sinif_Farki>1</Sinif_Farki>
    <MaxRzvZamani>0</MaxRzvZamani>
    <SeferTipi />
    <SeferTipiAciklamasi>MOLALI</SeferTipiAciklamasi>
    <HatSeferNo />
    <O_Tip_Sinif>0</O_Tip_Sinif>
    <SeferTakipNo>286803</SeferTakipNo>
    <ToplamSatisAdedi>0</ToplamSatisAdedi>
    <DolulukKuraliVar>0</DolulukKuraliVar>
    <OTipOzellik>00000111111111111111000000000000000000000000000000</OTipOzellik>
    <NormalBiletFiyati>501</NormalBiletFiyati>
    <DoluSeferMi>0</DoluSeferMi>
    <Tesisler>ÖzKent: 20:45, Metro Dinnlenme Tesisi: 18:50, </Tesisler>
    <SeferBosKoltukSayisi>44</SeferBosKoltukSayisi>
    <KalkisTerminalAdiSaatleri />
    <MaximumRezerveTarihiSaati>2018-12-04T00:00:00+03:00</MaximumRezerveTarihiSaati>
    <Guzergah>Kayseri -&gt;Ankara (Aşti) </Guzergah>
    <KKZorunluMu>false</KKZorunluMu>
    <KoltukSecimiVar>false</KoltukSecimiVar>
    <SeferKod>RmFsc2UsUk9OLFNpbXBhVHJhbnNPQlVTU3RhbmRhcmQ=</SeferKod>
  </Table>
  <OTipOzellik>
    <O_Tip_Ozellik>0</O_Tip_Ozellik>
    <O_Tip_Ozellik_Aciklama>İnternet</O_Tip_Ozellik_Aciklama>
    <O_Tip_Ozellik_Detay>Sağladığımız internet bağlantısını bilgisayarınızda kullanabilirsiniz.</O_Tip_Ozellik_Detay>
    <O_Tip_Ozellik_Icon>Internet.gif</O_Tip_Ozellik_Icon>
  </OTipOzellik>
  <OTipOzellik>
    <O_Tip_Ozellik>1</O_Tip_Ozellik>
    <O_Tip_Ozellik_Aciklama>Rahat Koltuk</O_Tip_Ozellik_Aciklama>
    <O_Tip_Ozellik_Detay>Bu araçta geniş ve rahat koltuk bulunmaktadır.</O_Tip_Ozellik_Detay>
    <O_Tip_Ozellik_Icon>Rahat_Koltuk.gif</O_Tip_Ozellik_Icon>
  </OTipOzellik>
  <OTipOzellik>
    <O_Tip_Ozellik>2</O_Tip_Ozellik>
    <O_Tip_Ozellik_Aciklama>Koltuk Ekranı (Uydu Yayını)</O_Tip_Ozellik_Aciklama>
    <O_Tip_Ozellik_Detay>Koltuk ekranları üzerinden birçok interaktif medya ve uydu yayını izlenebilmektedir.</O_Tip_Ozellik_Detay>
    <O_Tip_Ozellik_Icon>Koltuk_Ekrani.gif</O_Tip_Ozellik_Icon>
  </OTipOzellik>
  <OTipOzellik>
    <O_Tip_Ozellik>3</O_Tip_Ozellik>
    <O_Tip_Ozellik_Aciklama>WC</O_Tip_Ozellik_Aciklama>
    <O_Tip_Ozellik_Detay>Araçta Tuvalet Bulunmaktadır.</O_Tip_Ozellik_Detay>
    <O_Tip_Ozellik_Icon>WC.gif</O_Tip_Ozellik_Icon>
  </OTipOzellik>
  <OTipOzellik>
    <O_Tip_Ozellik>4</O_Tip_Ozellik>
    <O_Tip_Ozellik_Aciklama>TV (Genel)</O_Tip_Ozellik_Aciklama>
    <O_Tip_Ozellik_Detay>Araçta uygun saatlerde Genel TV ve Video yayını yapılmaktadır.</O_Tip_Ozellik_Detay>
    <O_Tip_Ozellik_Icon>TV_Genel.Gif</O_Tip_Ozellik_Icon>
  </OTipOzellik>
  <OTipOzellik>
    <O_Tip_Ozellik>5</O_Tip_Ozellik>
    <O_Tip_Ozellik_Aciklama>Digiturk</O_Tip_Ozellik_Aciklama>
    <O_Tip_Ozellik_Detay>Digiturk yayını bulunmaktadır.</O_Tip_Ozellik_Detay>
    <O_Tip_Ozellik_Icon>Digiturk.gif</O_Tip_Ozellik_Icon>
  </OTipOzellik>
  <OTipOzellik>
    <O_Tip_Ozellik>6</O_Tip_Ozellik>
    <O_Tip_Ozellik_Aciklama>Kulaklık</O_Tip_Ozellik_Aciklama>
    <O_Tip_Ozellik_Detay>Seyahat sırasında Kulaklık verilebilmektedir.</O_Tip_Ozellik_Detay>
    <O_Tip_Ozellik_Icon>Kulaklik.gif</O_Tip_Ozellik_Icon>
  </OTipOzellik>
  <OTipOzellik>
    <O_Tip_Ozellik>7</O_Tip_Ozellik>
    <O_Tip_Ozellik_Aciklama>Müzik Yayını (Genel)</O_Tip_Ozellik_Aciklama>
    <O_Tip_Ozellik_Detay>Araçta uygun saatlerde Genel Radyo ve Müzik yayını yapılmaktadır.</O_Tip_Ozellik_Detay>
    <O_Tip_Ozellik_Icon>Muzik_Genel.gif</O_Tip_Ozellik_Icon>
  </OTipOzellik>
  <OTipOzellik>
    <O_Tip_Ozellik>8</O_Tip_Ozellik>
    <O_Tip_Ozellik_Aciklama>Müzik Yayını (Koltuk)</O_Tip_Ozellik_Aciklama>
    <O_Tip_Ozellik_Detay>Koltuk üzerindeki kulaklık çıkışlarından çok kanallı müzik yayını yapılmaktadır.</O_Tip_Ozellik_Detay>
    <O_Tip_Ozellik_Icon>Muzik_Koltuk.gif</O_Tip_Ozellik_Icon>
  </OTipOzellik>
  <OTipOzellik>
    <O_Tip_Ozellik>9</O_Tip_Ozellik>
    <O_Tip_Ozellik_Aciklama>Cep Telefonu (Serbest)</O_Tip_Ozellik_Aciklama>
    <O_Tip_Ozellik_Detay>Seyahat sırasında cep telefonunuzu kullanabilirsiniz.</O_Tip_Ozellik_Detay>
    <O_Tip_Ozellik_Icon>Cep.gif</O_Tip_Ozellik_Icon>
  </OTipOzellik>
  <OTipOzellik>
    <O_Tip_Ozellik>10</O_Tip_Ozellik>
    <O_Tip_Ozellik_Aciklama>220 Volt Priz</O_Tip_Ozellik_Aciklama>
    <O_Tip_Ozellik_Detay>Seyahat Sırasında 220 volt ile çalışan cihazlarınızı kullanabileceğiniz priz bulunmaktadır.</O_Tip_Ozellik_Detay>
    <O_Tip_Ozellik_Icon>priz.gif</O_Tip_Ozellik_Icon>
  </OTipOzellik>
  <OTipOzellik>
    <O_Tip_Ozellik>11</O_Tip_Ozellik>
    <O_Tip_Ozellik_Aciklama>Koltuk Ekranı (MIT)</O_Tip_Ozellik_Aciklama>
    <O_Tip_Ozellik_Detay>Koltuk ekranları üzerinden Multimedya,Internet ve Tv yayını kullanılabilemektedir.</O_Tip_Ozellik_Detay>
    <O_Tip_Ozellik_Icon>Koltuk_MIT.gif</O_Tip_Ozellik_Icon>
  </OTipOzellik>
  <OTipOzellik>
    <O_Tip_Ozellik>12</O_Tip_Ozellik>
    <O_Tip_Ozellik_Aciklama>Namaz Vakitlerinde Durur</O_Tip_Ozellik_Aciklama>
    <O_Tip_Ozellik_Detay>Namaz Vakitlerinde Durur</O_Tip_Ozellik_Detay>
    <O_Tip_Ozellik_Icon>Cami.gif</O_Tip_Ozellik_Icon>
  </OTipOzellik>
  <OTipOzellik>
    <O_Tip_Ozellik>13</O_Tip_Ozellik>
    <O_Tip_Ozellik_Aciklama>Ligtv</O_Tip_Ozellik_Aciklama>
    <O_Tip_Ozellik_Detay>Ligtv yayını bulunmaktadır.</O_Tip_Ozellik_Detay>
    <O_Tip_Ozellik_Icon>ligtv.gif</O_Tip_Ozellik_Icon>
  </OTipOzellik>
  <OTipOzellik>
    <O_Tip_Ozellik>14</O_Tip_Ozellik>
    <O_Tip_Ozellik_Aciklama>Koltuk Ekranı (10 inç)</O_Tip_Ozellik_Aciklama>
    <O_Tip_Ozellik_Detay>Bu araçta 10 inç Koltuk Ekranı bulunmaktadır. </O_Tip_Ozellik_Detay>
    <O_Tip_Ozellik_Icon>Koltuk_Ekrani10.gif</O_Tip_Ozellik_Icon>
  </OTipOzellik>
  <OTipOzellik>
    <O_Tip_Ozellik>15</O_Tip_Ozellik>
    <O_Tip_Ozellik_Aciklama>Okuma Lambası</O_Tip_Ozellik_Aciklama>
    <O_Tip_Ozellik_Detay>Bu araçta Koltuk Arkası Okuma Lambası bulunmaktadır. </O_Tip_Ozellik_Detay>
    <O_Tip_Ozellik_Icon>OkumaLambasi.gif</O_Tip_Ozellik_Icon>
  </OTipOzellik>
  <OTipOzellik>
    <O_Tip_Ozellik>16</O_Tip_Ozellik>
    <O_Tip_Ozellik_Aciklama>Radyo (Kişisel)</O_Tip_Ozellik_Aciklama>
    <O_Tip_Ozellik_Detay>Bu araçta Kişisel Radyo bulunmaktadır. </O_Tip_Ozellik_Detay>
    <O_Tip_Ozellik_Icon>KisiselRadyo.gif</O_Tip_Ozellik_Icon>
  </OTipOzellik>
  <OTipOzellik>
    <O_Tip_Ozellik>17</O_Tip_Ozellik>
    <O_Tip_Ozellik_Aciklama>Koltuk Ekranı (13 inç)</O_Tip_Ozellik_Aciklama>
    <O_Tip_Ozellik_Detay>Bu araçta 13 inç Koltuk Ekranı bulunmaktadır. </O_Tip_Ozellik_Detay>
    <O_Tip_Ozellik_Icon>Koltuk_Ekrani13.gif</O_Tip_Ozellik_Icon>
  </OTipOzellik>
  <OTipOzellik>
    <O_Tip_Ozellik>18</O_Tip_Ozellik>
    <O_Tip_Ozellik_Aciklama>USB Giriş</O_Tip_Ozellik_Aciklama>
    <O_Tip_Ozellik_Detay>Bu araçta müzik, video ve şarj için kullanabileceğiniz USB girişi bulunmaktadır.</O_Tip_Ozellik_Detay>
    <O_Tip_Ozellik_Icon>usb.gif</O_Tip_Ozellik_Icon>
  </OTipOzellik>
  <OTipOzellik>
    <O_Tip_Ozellik>19</O_Tip_Ozellik>
    <O_Tip_Ozellik_Aciklama>Kahvaltı</O_Tip_Ozellik_Aciklama>
    <O_Tip_Ozellik_Detay>Bu araçta kahvaltı verilmektedir. </O_Tip_Ozellik_Detay>
    <O_Tip_Ozellik_Icon>Kahvalti.gif</O_Tip_Ozellik_Icon>
  </OTipOzellik>
  <OTipOzellik>
    <O_Tip_Ozellik>20</O_Tip_Ozellik>
    <O_Tip_Ozellik_Aciklama>Tanımsız</O_Tip_Ozellik_Aciklama>
    <O_Tip_Ozellik_Detay>Tanımsız</O_Tip_Ozellik_Detay>
    <O_Tip_Ozellik_Icon>Tanimsiz.gif</O_Tip_Ozellik_Icon>
  </OTipOzellik>
  <OTipOzellik>
    <O_Tip_Ozellik>21</O_Tip_Ozellik>
    <O_Tip_Ozellik_Aciklama>Tanımsız</O_Tip_Ozellik_Aciklama>
    <O_Tip_Ozellik_Detay>Tanımsız</O_Tip_Ozellik_Detay>
    <O_Tip_Ozellik_Icon>Tanimsiz.gif</O_Tip_Ozellik_Icon>
  </OTipOzellik>
</NewDataSet>
```
:::
:::info
Sefer listesinde yeni kara nokta yapısındaki nokta karşılıkları için KalkisNoktaID, KalkisNokta, VarisNoktaID, VarisNokta alanları eklenmiştir.
:::
:::info
Sefer lislemenizde otobüs hareket saati için YerelInternetSaat bilet fiyatı içinse BiletFiyatiInternet alanlarını kullanınız.
:::
:::info
Size gönderilen Tarih ve Saat alanı üzerinde **<u>_hiçbir değişiklik yapmadan_</u>** kullanabilirsiniz.( +03:00 +02:00 gibi yaz saati, kış saati uygulaması bizim tarafımızda ayarlanmaktadır.)
:::
:::tip
Bazı koltuklar için özel sınıflar uygulanmaktadır ve ücret farkı doğmaktadır.Bu ücret farklılığı otobüs planında daha detaylı olarak belirtilmektedir.Sefer listelemesinde ise sinif farkı ücretini BiletFiyatiInternet ücretine ekleyerek 2 adet ücret gösterebilirsiniz.  
**Örneğin:** 40 TL / 50 TL
:::
:::info
Otobüs tipi özellikleri için sefer listesinde OTipOzellik bilgileri gelmektedir.Burada index’i 1 olan veriler otobüs özelliklerini vermektedir.Index verileri sefer listesiyle birlikte gelen OTipOzellik verileri ile eşleştirilir ve detaylı bilgiye erişilir.  
**Örneğin:** OTipOzellik ozelliği 1100000000000000000000000000000000000 olsun.  
0.index i 1 yani O_Tip_Ozellik listesinde bulunan 0 nolu index ile eşleşmektedir.Aşağıdaki liste üzerinden baktığımızda O_Tip_Ozellik verisi 0 olan Internet özellliği seçilen sefer için mevcuttur.
:::
:::tip
İlgili sefer için koltuk seçiminin olup olmadığını belirten KoltukSecimiVar alanı gelmektedir. Eğer bu alan false ise koltuk planı sorgulamadan direk satış yapılabilir.
:::
:::info
KoltukSecimiVar alanı false gelen seferler için satış adımında kullanılmak üzere SeferKod alanı eklenmiştir.
:::
:::info
Sefer sorgusuna “SeyahatSuresiGosterimTipi”parametresi eklenmiştir. Bu parametrenin değerleri şöyle anlamlandırılır;  
0 : Seyahat süresi gösterilmemelidir.  
1 : “YaklasikSeyahatSuresi” alanındaki değer kullanılmalıdır. (Saat aralığıdır.)  
2 : Seyahat süresi “SeyahatSuresi” alanından alınarak kesin değeriyle gösterilmelidir.

“SeyahatSuresiGosterimTipi” alanı Otobüs ve Pnr Arama sorgularına da eklenmiştir.

```xml
<OTipOzellik>
	<O_Tip_Ozellik>0</O_Tip_Ozellik>
	<O_Tip_Ozellik_Aciklama>İnternet</O_Tip_Ozellik_Aciklama>
	<O_Tip_Ozellik_Detay>
</O_Tip_Ozellik_Detay>
	<O_Tip_Ozellik_Icon>Internet.gif</O_Tip_Ozellik_Icon>
    </OTipOzellik>
    <OTipOzellik>
	<O_Tip_Ozellik>1</O_Tip_Ozellik>
	<O_Tip_Ozellik_Aciklama>Rahat Koltuk</O_Tip_Ozellik_Aciklama>
	<O_Tip_Ozellik_Detay>
</O_Tip_Ozellik_Detay>
	<O_Tip_Ozellik_Icon>Rahat_Koltuk.gif</O_Tip_Ozellik_Icon>
    </OTipOzellik>
```

:::
