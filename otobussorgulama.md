# OTOBÜS SORGULAMA

## ŞEMA

Sorgulamada kullanacağımız alanların xml şeması aşağıdaki gibidir. 
|ALAN |AÇIKLAMA|
|----------------------|---------------------------------------| 
|**FirmaNo**|Seçilen seferi yapacak olan firmanın firma numarası|
|**KalkisNoktaID***|Seçilen seferin KalkisNoktaID değeri.**Format:(integer).**|
|**VarisNoktaID***|Seçilen seferin VarisNoktaID değeri.**Format:(integer).**|
|**Tarih***|Seçilen seferin kalkış tarihi (Sefer listesinde bulunan Tarih alanı)**Format:(datetime, ‘yyyy-MM-dd’).**|
|**Saat***|Seçilen seferin kalkış saati (Sefer listesinde bulunan Saat alanı) **Format:(datetime, ‘s’)**|
|**HatNo***|Seçilen seferin hat numarası (Sefer listesinde bulunan HatNo alanı)**Format: integer**|
|**IslemTipi***|Yapılacak işlemin Satış veya Rezervasyon olduğunu gösterir.Satış işlemi için olması gereken parametre değeri: 0 Rezervasyon işlemi için olması gereken parametre değeri: 1 **Format: integer, 1 veya 0**|
|**YolcuSayisi**|Seyahat edecek yolcu sayısı.|
|**SeferTakipNo***|Sefer listesinde bulunan SeferTakipNo alanı|
|**Ip***|Site ziyaretçisinin Ip adresi|
:::info
(*) ile işaretli alanlar, gönderilmesi zorunlu alanlardır.
:::

```xml
<xs:element name="Otobus">
  <xs:complexType>
    <xs:sequence>
	   <xs:element name="FirmaNo" type="intOzel" />
	   <xs:element name="KalkisNoktaID" type="xs:int" />
  <xs:element name="VarisNoktaID" type="xs:int" />
  <xs:element name="Tarih" type="trh" />
	   <xs:element name="Saat" type="xs:dateTime" />
	   <xs:element name="HatNo" type="intOzel" />
	   <xs:element name="IslemTipi" type="xs:byte" />
	   <xs:element name="YolcuSayisi" type="byte4" minOccurs="0" />
	   <xs:element name="SeferTakipNo" type="xs:string" minOccurs="0" />
         <xs:element name="Ip" type="IpType" />
	</xs:sequence>
  </xs:complexType>
</xs:element>
```

## İSTEK

```xml
<Otobus>
  <FirmaNo>37</FirmaNo>
  <KalkisNoktaID>738</KalkisNoktaID>
  <VarisNoktaID>84</VarisNoktaID>
  <Tarih>2018-12-09</Tarih>
  <Saat>1900-01-01T02:30:00+02:00</Saat>
  <HatNo>1</HatNo>
  <IslemTipi>0</IslemTipi>
  <SeferTakipNo>288179</SeferTakipNo>
  <Ip>127.0.0.1</Ip>
</Otobus>
```

## CEVAP

**Otobüs xml yapısı şu şekildedir:**
Otobüs detaylarını gösteren cevapta sefer bilgileri, koltuk planı, satılabilecek yolcu tipleri bulunmaktadır.

**Sefer Bilgileri**
|ALAN|AÇIKLAMA|
|-----------------|-----------------------------------------------------|
|InternetTarihSaat|Yolculara gösterilmesi gereken otobüsün kalkış saati.|
|BiletFiyatiInternet|Herbir koltuk için uygulanacak olan bilet fiyatı.|
|BiletFiyatiSinifFarki|Varsa özel koltuklu bölümler için BiletFiyatiInternet fiyatına eklenecek olan sınıf farkı fiyatı.|
|BiletTekKoltukFarki|Varsa tek koltuklar için BiletFiyatiInternet fiyatına eklenecek olan sınıf farkı fiyatı.|
|MaximumRezerveTarihiSaati|Rezervasyonlarda, bilete verilecek olan en ileri opsiyon tarihi. Opsiyon tarihi geçmiş biletler otomatik olarak iptal edilmektedir.|
|OtobusTipSinif|Otobüste fiyat bilgilerinin belirlendiği alan **0 = Normal:** Bütün koltuklarının fiyatı ‘BiletFiyatiInternet’olan otobüs **1 = Royal:** Bütün koltuklarının fiyatı ‘BiletFiyatiInternet + BiletFiyatiSinifFarki’ olan otobüs **2 = Üst Royal:** Otobüsün sadece üst kat koltuklarının fiyatı ‘BiletFiyatiInternet + BiletFiyatiSinifFarki’ olan otobüs **3 = Alt Royal:** Otobüsün sadece alt kat koltuklarının fiyatı ‘BiletFiyatiInternet + BiletFiyatiSinifFarki’ olan otobüs|
|OtobusTipSinif|Otobüste fiyat bilgilerinin belirlendiği alan **0 = Normal:** Bütün koltuklarının fiyatı ‘BiletFiyatiInternet’olan otobüs **1 = Royal:** Bütün koltuklarının fiyatı ‘BiletFiyatiInternet + BiletFiyatiSinifFarki’ olan otobüs **2 = Üst Royal:** Otobüsün sadece üst kat koltuklarının fiyatı ‘BiletFiyatiInternet + BiletFiyatiSinifFarki’ olan otobüs **3 = Alt Royal:** Otobüsün sadece alt kat koltuklarının fiyatı ‘BiletFiyatiInternet + BiletFiyatiSinifFarki’ olan otobüs
|OtobusTipIkinciKatSira|Otobüs planında kat sınırını belirten index|
|MaximumBosBayanYaniSayisi|Otobüste en fazla oluşabilecek boş bayan sayısını belirtir.|
|YonuTersKoltuklar|Otobüsün gidiş yönünün tersinde duran koltukların listesi|
|SubeSatistaTcKimlikNoYazmakZorunlu|Yolcuların kimlik numaralarının zorunlu olup olmadığını belirleyen parametredir. Bu parametre taşıyıcı firmaya özgü bir parametredir ve yalnızca birkaç firma için aktiftir. **0 ise zorunlu değil.** **1 ise zorunludur.**|
|OTipOzellik|Otobüsün hangi özelliklere sahip olduğunu belirtir.OTipOzellik veri setinde gelen sıraya göre o özelliğin olduğunu veya olmadığını belirtir. **Örneğin:** OTipOzellik veri setinde ilk sırada Internet özelliği bulunmaktadır. Eğer sefer bilgilerindeki OTipOzellik alandaki ilk değer 1 ise araçta Internet olduğunu, 0 ise araçta Internet olmadığını belirtir.|
|RezervasyonAktifMi|**true:** rezervasyon yapılabilir, **false:** yapılamaz|
|**SatilabilirKoltukSayi**|**Firma tarafından belirlenen sayıdır. Bu otobüste satılabilecek toplam koltuk sayısını belirtir. Bu sayıdan fazla işlem gönderdiğinizde hata alacağınızdan koltuk seçme aşamasında bir doğrulama yapmanız gerekmektedir.**|
|RezervasyonNedenYapilamaz|RezervasyonAktifMi false ise bazı firmalarda bunun nedeni belirtilmiş olabilir. Firma bu değeri girmemişse boş gelecektir.|
|**FirmaMaxToplamBiletFiyati**|**Değeri 0’dan büyük geldiği durumlarda ilgili otobüs için firmanın belirlediği bir maksimum işlem tutarı vardır. Bu değeri geçen işlemlerinizde hata alırsınız.**|
|**PasaportNoIleIslemYapilirMi**|**Değeri 0 gelirse;** SubeSatistaTcKimlikNoYazmakZorunlu değeri **“1“** ise, T.C. vatandaşı olmayan yolculara bilet satılamaz. **Değeri 1 gelirse;** T.C. vatandaşı olmayan yolculara bilet satılırken pasaport ülke ve pasaport numarası bilgisi gönderilmelidir.|
|**FarkliFiyattaKoltuklarSecilebilirMi**|**Değeri 0 gelirse;** Farklı fiyatlardan koltuklar birlikte satılamaz.**Değeri 1 gelirse;** Tek koltuk farkı gibi fiyat farklarının olduğu farklı fiyatlardan koltuklar birlikte satılabilir.|
|**OtobusKoltukBoslukSemasi**|ek koltuk farkı gibi|
|**FarkliCinsiyetteKoltuklarSecilebilirMi**|Eğer “1” ise o otobüse birden farklı cinsiyet ile bilet rezervasyon ya da satışı yapılabilir.Eğer bu değer “0” ya da boş ise farklı cinsiyette işlem yapılamaz.|
|**OtobusHesKoduZorunluMu**|Heskod degerinin zorunlu olup olmadığı bilgisidir.“1” ise zorunlu “0” ise zorunlu değil anlamındadır.|
|**CiftKoltukTekYolcuyaSatilabilirMi**|Çift koltukların tek olarak satılma durumunu gösteren alandır. “1” olması durumunda çift koltuklar tek satılabilirken, “0“ olması durumunda çift koltuklar sadece birlikte satılabilir.|
|**TekliKoltuklarDoluysaCiftliKoltuktanSatisYapilabilirMi**|Tüm tek koltukların dolu olması durumunda çift koltukların tek yolcuya satılıp satılamayacağı bilgisidir. “1” olması durumunda çift koltuklar tek satılabilirken, “0” olması durumunda satış yapılamaz.|

**Koltuk Planı**
|ALAN|AÇIKLAMA|
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| KoltukStr            | İlgili koltuğunu string olarak koltuk numarası. 01: 1 Numaralı koltuk KO: Koridor KA, PI: Kapı (ayrı ayrı değerler birleşiyor) MA, SA: Masa (ayrı ayrı değerler birleşiyor) PR : Personel Koltuğu                          |
| KoltukNo             | Sayısal Koltuk numarasıdır. Koltuk numarası -1 veya -3 olanlar Koridor, Kapı veya Masaya denk gelen yerlerdir.                      |
| Durum                | Koltuğun o anki durumudur. **Durum=0 =>** Koltuk **Boş Durum=1=>** Koltuk Bir Bayana Satılmış **Durum=2 =>** Koltuk Bir Bayana Rezerve **Durum=3=>** Koltuk Bir Baya Satılmış **Durum=4 =>** Koltuk Bir Baya Rezerve **Durum=5=>** Koltuk Satılmakta **Durum=6=>** Koltuk Satılamaz                 |
| DurumYan             | Yan Koltuğun o anki durumudur. **DurumYan=0=>** Yan Koltuk Boş (Her İki Cinse Satılabilir) **DurumYan=1=>** Yan Koltuk Bir Bayana Satılmış (Sadece Bayana Satılabilir) **DurumYan=2=>** Yan Koltuk Bir Baya Satılmış (Sadece Baya Satılabilir) **DurumYan=3,4,5,6=>** Yan Koltuk Belirsiz (Hiçbir Şekilde Satılamaz) |
| KoltukFiyatiInternet | İlgili koltuğun internet fiyatını göstermektedir.Temel olarak farklı fiyatlardaki koltuklar aynı anda satılamamaktadır.Özel bölüm ve tekli koltuklarda fiyat farkı **varsa** bütün koltuklar aynı fiyat tipinden seçilmelidir. Aksi takdirde bilet satışı gerçekleşmeyecektir.       |
| Kat     | Koltuğun çok katlı otobüslerde hangi kata ait olduğunu belirtir. Elementin gelmediği durumlarda 1 olarak kabul edilebilir.    |
:::details kodu görüntülemek için tıklayın.
```xml
<Otobus>
  <Sefer>
    <YerelTarihSaat>09.12.2018 02:30</YerelTarihSaat>
    <InternetTarihSaat>10.12.2018 02:30</InternetTarihSaat>
    <KalkisAdi>KAYSERİ</KalkisAdi>
    <VarisAdi>ANKARA</VarisAdi>
    <HatNo>1</HatNo>
    <FiyatDegistirebilir>False</FiyatDegistirebilir>
    <BiletFiyati1>30.00</BiletFiyati1>
    <BiletFiyati2>20.00</BiletFiyati2>
    <BiletFiyati3>25.00</BiletFiyati3>
    <BiletFiyatiInternet>15.00</BiletFiyatiInternet>
    <BiletFiyatiSinifFarki>5.00</BiletFiyatiSinifFarki>
    <BiletTekKoltukFarki>0.00</BiletTekKoltukFarki>
    <BiletFiyatiMisafir>0.01</BiletFiyatiMisafir>
    <MisafirBiletSatar>false</MisafirBiletSatar>
    <OzurluIndirmliBiletSatar>true</OzurluIndirmliBiletSatar>
    <KontenjanliBiletSatar>true</KontenjanliBiletSatar>
    <RezervasyonAktifMi>true</RezervasyonAktifMi>
    <SatisAktifMi>true</SatisAktifMi>
    <MaximumRezerveTarihiSaati>02.12.2018 23:50:00</MaximumRezerveTarihiSaati>
    <OtobusTip>560</OtobusTip>
    <OtobusTipSinif>0</OtobusTipSinif>
    <OtobusTipIkinciKatSira>0</OtobusTipIkinciKatSira>
    <OtobusPlaka />
    <OtobusKaptanAdi />
    <OtobusHostesAdi />
    <Okalkti>0</Okalkti>
    <OtobusSeferMesaji />
    <OtobusSubeMesaji />
    <PeronNo>123456789012345678901234Z</PeronNo>
    <KalkisTerminalAdi>KIRŞEHİR üstü gider fhbfghgfhgfhfghgfhgfhgfhgfhgfh 545454655 5465464555564 56454645656445645456 478789879897879879879789999999999999999999999977777777</KalkisTerminalAdi>
    <GeceAciklamasi>Pazar'ı Pazartesi'ye Bağlayan Gece.</GeceAciklamasi>
    <MaximumBosBayanYaniSayisi>0</MaximumBosBayanYaniSayisi>
    <SubeBiletPort>1</SubeBiletPort>
    <YolcuUyePuanToplam>0</YolcuUyePuanToplam>
    <YolcuUyePuanCarpan>10,0000</YolcuUyePuanCarpan>
    <DolulukOraniIndirimiYapildi>False</DolulukOraniIndirimiYapildi>
    <OTipOzellik>01101011100000000000000000000000000000000000000000</OTipOzellik>
    <YonuTersKoltuklar />
    <SubeSatistaTcKimlikNoYazmakZorunlu>1</SubeSatistaTcKimlikNoYazmakZorunlu>
    <SeyahatSuresi>01.01.1900 05:00:00</SeyahatSuresi>
    <SeferTipiAciklamasi>MOLALI</SeferTipiAciklamasi>
    <OTipAciklamasi>33.34Setra S415 HD</OTipAciklamasi>
    <FirmaEnUygunFiyatAktifMi>0</FirmaEnUygunFiyatAktifMi>
    <OtobusMesaj>%3cfont+style%3d%27font-family%3aVerdana%3bfont-size%3a11px%3bfont-weight%3a700%3btext-decoration%3aunderline%2cfalse%3bcolor%3a%23333%3bmargin%3a1px%3b%27%3e%3cb%3e%c4%b0%c5%9fleminiz%2c+Kredi+Kart%c4%b1+Hesap+Ekstrenizde%3cbr%3e%5bB%c4%b0LETAL+%c4%b0%c3%87+VE+DI%c5%9e+T%c4%b0C%5d+olarak+g%c3%b6r%c3%bcnecektir.%3c%2fb%3e%3c%2ffont%3e</OtobusMesaj>
    <Tesisler>ÖzKent: 03:30, </Tesisler>
    <Odeme3DSecureAktifMi>1</Odeme3DSecureAktifMi>
    <Odeme3DSecureZorunluMu>1</Odeme3DSecureZorunluMu>
    <PaypalUstLimit>500</PaypalUstLimit>
    <MaximumBosBayYaniSayisi>0</MaximumBosBayYaniSayisi>
    <SatilabilirKoltukSayi>48</SatilabilirKoltukSayi>
    <RezervasyonNedenYapilamaz />
    <FirmaMaxToplamBiletFiyati>999.99</FirmaMaxToplamBiletFiyati>
<FarkliCinsiyetteKoltuklarSecilebilirMi>0</FarkliCinsiyetteKoltuklarSecilebilirMi>
    <OtobusHesKoduZorunluMu>1</OtobusHesKoduZorunluMu>          <CiftKoltukTekYolcuyaSatilabilirMi>0</CiftKoltukTekYolcuyaSatilabilirMi>
<TekliKoltuklarDoluysaCiftliKoltuktanSatisYapilabilirMi>1<TekliKoltuklarDoluysaCiftliKoltuktanSatisYapilabilirMi>
    <YaklasikSeyahatSuresi>5-6</YaklasikSeyahatSuresi>
    <KalkisNoktaID>738</KalkisNoktaID>
    <KalkisNokta>Kayseri</KalkisNokta>
    <VarisNoktaID>84</VarisNoktaID>
    <VarisNokta>Ankara (Aşti)</VarisNokta>
    <OtobusKoltukBoslukSemasi />
  </Sefer>
  <Koltuk>
    <KoltukStr>01</KoltukStr>
    <KoltukNo>1</KoltukNo>
    <Durum>0</Durum>
    <DurumYan>0</DurumYan>
    <KoltukFiyatiInternet>15</KoltukFiyatiInternet>
    <Kat>1</Kat>
  </Koltuk>
  <Koltuk>
    <KoltukStr>02</KoltukStr>
    <KoltukNo>2</KoltukNo>
    <Durum>0</Durum>
    <DurumYan>0</DurumYan>
    <KoltukFiyatiInternet>15</KoltukFiyatiInternet>
    <Kat>1</Kat>
  </Koltuk>
  <Koltuk>
    <KoltukStr>KO</KoltukStr>
    <KoltukNo>-1</KoltukNo>
    <Durum>0</Durum>
    <DurumYan>0</DurumYan>
    <KoltukFiyatiInternet>0</KoltukFiyatiInternet>
    <Kat>1</Kat>
  </Koltuk>
  <Koltuk>
    <KoltukStr>03</KoltukStr>
    <KoltukNo>3</KoltukNo>
    <Durum>0</Durum>
    <DurumYan>0</DurumYan>
    <KoltukFiyatiInternet>15</KoltukFiyatiInternet>
    <Kat>2</Kat>
  </Koltuk>
  <Koltuk>
    <KoltukStr>04</KoltukStr>
    <KoltukNo>4</KoltukNo>
    <Durum>0</Durum>
    <DurumYan>0</DurumYan>
    <KoltukFiyatiInternet>15</KoltukFiyatiInternet>
    <Kat>2</Kat>
  </Koltuk>
  <SeyahatTipleri>
    <SeyahatTipi>0</SeyahatTipi>
    <SeyahatAdi>Normal</SeyahatAdi>
    <BiletFiyati>15</BiletFiyati>
    <BiletFiyatSinifFarki>5</BiletFiyatSinifFarki>
    <BiletTekKoltukFarki>0</BiletTekKoltukFarki>
  </SeyahatTipleri>
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
    <O_Tip_Ozellik_Aciklama>Sıcak Yemek</O_Tip_Ozellik_Aciklama>
    <O_Tip_Ozellik_Detay>Bu araçta sıcak yemek verilmektedir.</O_Tip_Ozellik_Detay>
    <O_Tip_Ozellik_Icon>sicakyemek.gif</O_Tip_Ozellik_Icon>
  </OTipOzellik>
  <OTipOzellik>
    <O_Tip_Ozellik>21</O_Tip_Ozellik>
    <O_Tip_Ozellik_Aciklama>Masajlı Koltuk</O_Tip_Ozellik_Aciklama>
    <O_Tip_Ozellik_Detay>Bu araçta masajlı koltuk bulunmaktadır.</O_Tip_Ozellik_Detay>
    <O_Tip_Ozellik_Icon>masajlikoltuk.gif</O_Tip_Ozellik_Icon>
  </OTipOzellik>
</Otobus>
```
:::