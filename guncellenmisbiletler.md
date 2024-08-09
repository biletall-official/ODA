# GÜNCELLENMİŞ BİLETLER (UÇAK)

## GEÇİCİ BİLETLERİN SORGULANMASI

:::tip
Bazı yurtdışı charter firmalara yapılan biletleme isteklerinde cevap süresi beklenen sürenin çok üzerinde olabilmektedir ve sağlayıcı tarafından bir referans numarası ile geçici bilet oluşturulmaktadır. Bu durumda biletleme isteği yapıldıktan sonra işlem sonucunda geçici PNR numarası dönecektir. Bir biletin geçici bilet olup olmadığının anlaşılması için PNRIslem isteği atarak PNR sorgulanmalıdır. Sorgulanan PNR’ın cevap XML’inde PNR elementi içerisinde ReferansNo alanı geçiyorsa, bu bilet geçici bilettir. Sağlayıcı tarafından referans numarası döndüğü durumda ilgili bilet belirli aralıklarla Biletall servisi tarafından sorgulanarak, biletin son durumu sisteme yansıtılmaktadır. Bu durumda PNR’ın son durumu belirli periyotlarla **“Güncellenmiş Biletler”** servisinden sorgulanarak nihai durumunun öğrenilmesi gerekmektedir. Güncellenmiş biletler servisinden sorgulandığında ilgili PNR’ın cevabında DegisiklikTipi’nin 1 olması durumunda bilet oluşmuş, **DegisiklikTipi**’nin **2** olması durumunda ise bilet iptal edilmiş demektir. **DegisiklikTipi** alanının **1** veya **2** olmadığı durumda ise sistem tarafından biletin son durumunun sorgulanması devam ediyor anlamına gelmektedir. Bu durum taşıyıcı firma tarafında 48 saate kadar uzayabilmektedir. İlgili PNR acente ekranları üzerinden de takip edilebilmektedir.
:::

### İSTEK

```xml
<PNR>
    <ID>21503474</ID>
    <PNR>OBT3734187056BA</PNR>
    <PnrTip>X</PnrTip>
    <TakipNo>2024073111243591958910</TakipNo>
    <Ad>K****</Ad>
    <Soyad>B****</Soyad>
    <Tel>500XXXXXXX</Tel>
    <Email>abc@abc.com</Email>
    <TCKimlikNo>95326128736</TCKimlikNo>
    <SMSGonderimSayi>1</SMSGonderimSayi>
    <FaturalansinMi>false</FaturalansinMi>
    <FaturaKisiAd>KAAN</FaturaKisiAd>
    <FaturaKisiSoyad>BAYKAN</FaturaKisiSoyad>
    <FaturaKisiTCKNo>953********</FaturaKisiTCKNo>
    <FaturaKisiAdres />
    <OfflineMi>false</OfflineMi>
    <UyeID>0</UyeID>
    <CM_EFaturaBireyselMi>true</CM_EFaturaBireyselMi>
    <AydinlatmaSozlesmeID>2</AydinlatmaSozlesmeID>
    <AcikRizaSozlesmeID>0</AcikRizaSozlesmeID>
    <HizmetSozlesmeID>0</HizmetSozlesmeID>
    <ReferansNo>OBT3734187056BA</ReferansNo>
    <UlkeTelefonKodu>90</UlkeTelefonKodu>
    <ByBiletallApi>false</ByBiletallApi>
    <FirmaNo>4750</FirmaNo>
    <ToplamIndirim>0.0000</ToplamIndirim>
    <ServisUcretIndirim>0</ServisUcretIndirim>
</PNR>
```

## REZERVASYON OPSİYON TARİHİNİN GÜNCELLENMESİ

Yurtdışı uçak rezervasyonu yapıldığında sağlayıcıdan rezervasyona ait opsiyon tarihi bazı durumlarda iletilmemektedir. Opsiyon tarihinin iletilmediği zamanlarda ilgili rezervasyon belirli periyotlarla Biletall servisleri tarafından sorgulanır ve opsiyon tarihinin sağlayıcı tarafından iletilmesi durumunda sisteme yansıtılır. Bu durumda PNR’ın opsiyon tarihi **“Güncellenmiş Biletler”** servisinden sorgulanarak opsiyon tarihinin öğrenilmesi gerekmektedir.

### İSTEK

| BaslangicTarih | yyyy-MM-dd HH:mm:ss formatında gönderilen sorgu başlangıç tarihi değerini içerir.**Not:** Başlangıç ve bitiş tarihleri arasında en fazla 30 gün olabilir. |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BitisTarih     | yyyy-MM-dd HH:mm:ss formatında gönderilen sorgu bitiş tarihi değerini içerir.**Not:** Başlangıç ve bitiş tarihleri arasında en fazla 30 gün olabilir.     |
| Tip            | Uçak biletleri için 2 gönderilmelidir.                                                                                                                    |

```xml
<GuncellenmisBiletler>
    <BaslangicTarih>2024-08-04</BaslangicTarih>
    <BitisTarih>2024-08-06</BitisTarih>
    <Tip>2</Tip>
</GuncellenmisBiletler>
```

#### CEVAP

| PNR             | Kesilen biletin PNR numarasını içerir.                                                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Soyad           | Kesilen biletin ilk yolcusunun soyadını içerir.                                                                                                                                |
| GuncellemeTarih | Yapılan değişikliğin hangi tarihte ve saatte olduğunu belirtir.                                                                                                                |
| DegisiklikTipi  | Yapılan değişikliğin hangi türde olduğunu belirtir. **0:** Bilinmeyen **1:** Biletlendi **2:** İptal edildi **3:** Bilet alanında değişiklik oldu (opsiyon tarihi vb.)         |
| DegisenAlanTipi | Bilet üzerinde değişen alanın tipini belirtir. **0:** Bilinmeyen **1:** PNR **2:** Havayolu PNR **3:** Uçuş tarihi **4:** Opsiyon tarihi **5:** Fiyat **6:** Referans numarası |
| EskiDeger       | Bilet üzerinde değişen alanın eski değerini içerir.                                                                                                                            |
| GuncelDeger     | Bilet üzerinde değişen alanın güncel değerini içerir.                                                                                                                          |

```xml
<GuncellenmisBiletler xmlns="">
    <Bilet>
        <EskiDeger />
        <GuncelDeger />
        <DegisiklikTipi>2</DegisiklikTipi>
        <DegisenAlanTipi>0</DegisenAlanTipi>
        <PNR>OBT3734187056BA</PNR>
        <Soyad>XXX</Soyad>
        <GuncellemeTarih>27.07.2024 09:05:03</GuncellemeTarih>
    </Bilet>
    <Bilet>
        <EskiDeger />
        <GuncelDeger>HTGJFE</GuncelDeger>
        <DegisiklikTipi>3</DegisiklikTipi>
        <DegisenAlanTipi>2</DegisenAlanTipi>
        <PNR>IUTHJX</PNR>
        <Soyad>XXX</Soyad>
        <GuncellemeTarih>1.08.2024 11:25:22</GuncellemeTarih>
    </Bilet>
    <Bilet>
        <EskiDeger />
        <GuncelDeger />
        <DegisiklikTipi>1</DegisiklikTipi>
        <DegisenAlanTipi>0</DegisenAlanTipi>
        <PNR>IUTHJX</PNR>
        <Soyad>XXX</Soyad>
        <GuncellemeTarih>1.08.2024 11:25:22</GuncellemeTarih>
    </Bilet>
    <Bilet>
        <EskiDeger>OBT123YHFXN</EskiDeger>
        <GuncelDeger>PHJUTH</GuncelDeger>
        <DegisiklikTipi>3</DegisiklikTipi>
        <DegisenAlanTipi>6</DegisenAlanTipi>
        <PNR>8LSMVK</PNR>
        <Soyad>XXX</Soyad>
        <GuncellemeTarih>6.08.2024 10:16:54</GuncellemeTarih>
    </Bilet>
</GuncellenmisBiletler>
```
