# KARA NOKTALARI KALKIŞ-VARIŞ SORGULAMA

## ŞEMA

Bu sorgu ile Biletall web servisleri için düzenlenmiş kalkış-varış noktaları elde edilir.
Sonraki işlemlerde bu sorgudan gelen ID alanı KalkisNoktaID ya da VarisNoktaID olarak kullanılacaktır.

Sorgulamada kullanacağımız alanların xml şeması aşağıdaki gibidir.

```xml
<xs:element name="KaraNoktaGetirKomut" />
```

## İSTEK

```xml
<KaraNoktaGetirKomut/>
```

## CEVAP
|ALAN|AÇIKLAMA|
|------------------|---------------------------------------------------------------|
|ID|Sefer, Otobüs ve Satış işlemlerinde Kalkış-Varış bilgisi için göndereceğiniz noktanın kimlik değeridir.|
|Seyahat Şehir ID|Aynı şehirdeki noktaları gruplandırabilirsiniz.|
|Bölge|Varsa noktanın bölgesini belirtir. (**Örn:** İstanbul Avrupa)|
|Ülke Kodu|Bağlı olduğu ülkenin kodunu belirtir.|
|Ad|Noktanın adını belirtir.|
|Açıklama|Varsa nokta ile ilgili açıklama belirtir.|
|MerkezMi|Noktanın merkez mi yoksa bir merkeze bağlı mı olduğunu belirtir.|
|BağlıOlduğuNokta|Noktanın bağlı olduğu merkez nokta ID'sidir.|

::: details Kodu görüntülemek için tıklayın.
```xml
console.log(
<KaraNoktalar>
  <KaraNokta>
    <ID>84</ID>
    <SeyahatSehirID>2852</SeyahatSehirID>
    <Bolge />
    <UlkeKodu>TR</UlkeKodu>
    <Ad>Ankara (Aşti)</Ad>
    <Aciklama />
    <MerkezMi>1</MerkezMi>
    <BagliOlduguNoktaID>0</BagliOlduguNoktaID>
  </KaraNokta>
  <KaraNokta>
    <ID>85</ID>
    <SeyahatSehirID>2852</SeyahatSehirID>
    <Bolge />
    <UlkeKodu>TR</UlkeKodu>
    <Ad>Ayaş</Ad>
    <Aciklama />
    <MerkezMi>0</MerkezMi>
    <BagliOlduguNoktaID>84</BagliOlduguNoktaID>
  </KaraNokta>
  <KaraNokta>
    <ID>87</ID>
    <SeyahatSehirID>2852</SeyahatSehirID>
    <Bolge />
    <UlkeKodu>TR</UlkeKodu>
    <Ad>Beypazarı</Ad>
    <Aciklama />
    <MerkezMi>0</MerkezMi>
    <BagliOlduguNoktaID>84</BagliOlduguNoktaID>
  </KaraNokta>
  <KaraNokta>
    <ID>626</ID>
    <SeyahatSehirID>2871</SeyahatSehirID>
    <Bolge />
    <UlkeKodu>TR</UlkeKodu>
    <Ad>İstanbul Avrupa</Ad>
    <Aciklama />
    <MerkezMi>1</MerkezMi>
    <BagliOlduguNoktaID>0</BagliOlduguNoktaID>
  </KaraNokta>
  <KaraNokta>
    <ID>627</ID>
    <SeyahatSehirID>2871</SeyahatSehirID>
    <Bolge />
    <UlkeKodu>TR</UlkeKodu>
    <Ad>İstanbul Anadolu</Ad>
    <Aciklama />
    <MerkezMi>1</MerkezMi>
    <BagliOlduguNoktaID>0</BagliOlduguNoktaID>
  </KaraNokta>
  <KaraNokta>
    <ID>645</ID>
    <SeyahatSehirID>2871</SeyahatSehirID>
    <Bolge />
    <UlkeKodu>TR</UlkeKodu>
    <Ad>İstanbul Silivri</Ad>
    <Aciklama />
    <MerkezMi>1</MerkezMi>
    <BagliOlduguNoktaID>0</BagliOlduguNoktaID>
  </KaraNokta>
  <KaraNokta>
    <ID>603</ID>
    <SeyahatSehirID>2871</SeyahatSehirID>
    <Bolge>İstanbul Avrupa</Bolge>
    <UlkeKodu>TR</UlkeKodu>
    <Ad>Alibeyköy</Ad>
    <Aciklama>Otobüs Kalkış-Varış Noktası</Aciklama>
    <MerkezMi>0</MerkezMi>
    <BagliOlduguNoktaID>626</BagliOlduguNoktaID>
  </KaraNokta>
  <KaraNokta>
    <ID>604</ID>
    <SeyahatSehirID>2871</SeyahatSehirID>
    <Bolge>İstanbul Avrupa</Bolge>
    <UlkeKodu>TR</UlkeKodu>
    <Ad>Avcılar</Ad>
    <Aciklama>Otobüs Kalkış-Varış Noktası</Aciklama>
    <MerkezMi>0</MerkezMi>
    <BagliOlduguNoktaID>626</BagliOlduguNoktaID>
  </KaraNokta>
  <KaraNokta>
    <ID>608</ID>
    <SeyahatSehirID>2871</SeyahatSehirID>
    <Bolge>İstanbul Avrupa</Bolge>
    <UlkeKodu>TR</UlkeKodu>
    <Ad>Bayrampaşa</Ad>
    <Aciklama>Otobüs Kalkış-Varış Noktası</Aciklama>
    <MerkezMi>0</MerkezMi>
    <BagliOlduguNoktaID>626</BagliOlduguNoktaID>
  </KaraNokta>
  <KaraNokta>
    <ID>611</ID>
    <SeyahatSehirID>2871</SeyahatSehirID>
    <Bolge>İstanbul Avrupa</Bolge>
    <UlkeKodu>TR</UlkeKodu>
    <Ad>Beylikdüzü</Ad>
    <Aciklama>Otobüs Kalkış-Varış Noktası</Aciklama>
    <MerkezMi>0</MerkezMi>
    <BagliOlduguNoktaID>626</BagliOlduguNoktaID>
  </KaraNokta>
  <KaraNokta>
    <ID>614</ID>
    <SeyahatSehirID>2871</SeyahatSehirID>
    <Bolge>İstanbul Avrupa</Bolge>
    <UlkeKodu>TR</UlkeKodu>
    <Ad>Büyükçekmece</Ad>
    <Aciklama>Otobüs Kalkış-Varış Noktası</Aciklama>
    <MerkezMi>0</MerkezMi>
    <BagliOlduguNoktaID>626</BagliOlduguNoktaID>
  </KaraNokta>
  <KaraNokta>
    <ID>616</ID>
    <SeyahatSehirID>2871</SeyahatSehirID>
    <Bolge>İstanbul Anadolu</Bolge>
    <UlkeKodu>TR</UlkeKodu>
    <Ad>Ataşehir Dudullu Otogarı</Ad>
    <Aciklama />
    <MerkezMi>0</MerkezMi>
    <BagliOlduguNoktaID>627</BagliOlduguNoktaID>
  </KaraNokta>
  <KaraNokta>
    <ID>625</ID>
    <SeyahatSehirID>2871</SeyahatSehirID>
    <Bolge>İstanbul Anadolu</Bolge>
    <UlkeKodu>TR</UlkeKodu>
    <Ad>Harem Otogarı</Ad>
    <Aciklama />
    <MerkezMi>0</MerkezMi>
    <BagliOlduguNoktaID>627</BagliOlduguNoktaID>
  </KaraNokta>
  <KaraNokta>
    <ID>738</ID>
    <SeyahatSehirID>2875</SeyahatSehirID>
    <Bolge />
    <UlkeKodu>TR</UlkeKodu>
    <Ad>Kayseri</Ad>
    <Aciklama />
    <MerkezMi>1</MerkezMi>
    <BagliOlduguNoktaID>0</BagliOlduguNoktaID>
  </KaraNokta>
  <KaraNokta>
    <ID>742</ID>
    <SeyahatSehirID>2875</SeyahatSehirID>
    <Bolge />
    <UlkeKodu>TR</UlkeKodu>
    <Ad>Pınarbaşı (Kayseri)</Ad>
    <Aciklama />
    <MerkezMi>0</MerkezMi>
    <BagliOlduguNoktaID>738</BagliOlduguNoktaID>
  </KaraNokta>
  <KaraNokta>
    <ID>743</ID>
    <SeyahatSehirID>2875</SeyahatSehirID>
    <Bolge />
    <UlkeKodu>TR</UlkeKodu>
    <Ad>Sarıoğlan</Ad>
    <Aciklama />
    <MerkezMi>0</MerkezMi>
    < BagliOlduguNoktaID >738</BagliOlduguNoktaID>
  </KaraNokta>
</KaraNoktalar>
)
```
:::