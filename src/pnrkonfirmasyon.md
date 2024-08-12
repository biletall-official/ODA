# PNR KONFİRMASYON

:::info :exclamation: Not 
Biletin yolcuya görüntülenmesinde herhangi bir sorun olup olmadığını anlamak için konfirmasyon işlemi yapmanız gerekmektedir. Konfirmasyon işlemi yapılmayan biletler için Biletall sorumluluk kabul etmemektedir. Konfirmasyon işlemi yapılmayan biletler için çağrı merkezimiz sizi uyaracaktır. Konfirmasyon işlemi aşağıdaki XML işlemi ile gerçekleşir.
PnrYolcuId elementi , Pnr sorgulamınızda birlikte size gelen Yolcu Elementi içerisinde bulunan ID alanıdır.Aktif durumu satışa dönüşmüş yolcuların ID sini PnrYolcuId ile göndermeniz gerekmektedir.
:::
:::tip
PNR’da birden fazla koltuk satılmış ise, soyad alanına birinci yolcununun soyadı yazılır.
:::

## İSTEK

```xml
<PnrKonfirmasyon>
  <Pnr>ZSV3068</Pnr>
  <Soyad>ACAR</Soyad>
  <PnrYolcuId>21,22,23</PnrYolcuId>
  <IslemTipi>SATIS</IslemTipi>
</PnrKonfirmasyon>
```

## SONUÇ

```xml
<IslemSonuc>
  <Sonuc>true</Sonuc>
  <Hata></Hata>
</IslemSonuc>
```
