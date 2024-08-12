# 3D SECURE SATIŞ İŞLEMİ

:::tip
Daha önce web servisimizde 3D entegrasyonu yaptıysanız aynı kurallar İdo için de geçerlidir. Detayları “3D GÜVENLİK İLE SATIŞ YAPMA” başlığında bulabilirsiniz.
:::
**Ido 3D secure işlemi de otobüs ve uçaktaki ile aynıdır.** satisXML alanına oluşturulan SatisKomut xml i gönderilecektir. Sonuç olarakta diğerleri ile aynı yapıda sonuç dönmektedir.

**Test web servisinde işlem yapabilmek için;**
http://88.247.60.172/wstest/service.asmx web servis adresini kullanabilir, buradan http://94.55.20.137/wstest/3dsecure/securepay2.aspx sayfasına işleminiz için oluşturacağınız formu post edebilirsiniz. İdo’nun test banka ekranı açılacaktır. Onaylamanız durumunda ise satış gerçekleşecek ve Pnr bilgisi belirttiğiniz url’ye post edilecektir.

**<u>İdo Test Kart Bilgileri:</u>**
**Kart No:** 4508034508034509
**Tarih:** 12/17
**CVV:** 000
**3d Şifresi:** a

**Budo Test Kart Bilgileri:**
Ödeme Ekranı Test Kartları şu şekildedir:

| ALAN                | AÇIKLAMA        |
| ------------------- | --------------- | ---- |
| Test Kart Bilgileri | expiration date | cvv2 |
| 4090700102323514    | 11/21           | 834  |
| 5200190046477986    | 01/21           | 319  |

:::warning
Tüm kartlar için 3D doğrulama şifresi: 123
:::

:::danger
RezervasyonKomut işleminden sonra gelen OdemeKurallari bilgisi ödemeyi nasıl yapmanız gerektiğini bildirir. Odeme3DSecureAktifMi alanı 1 geldiğinde sanal poslu ödemede 3d secure kullanabileceğinizi, Odeme3DSecureZorunluMu alanı 1 geldiğinde ise ödeme işlemini 3D secure ile yapmanızın zorunlu olduğunu ifade eder. Burada 3D secure kullanma yönteminiz diğer satış işlemleriyle aynıdır. satisXML input değeri içerisinde SatisKomut gönderilir ve sonuç olarak diğer işlemlerdeki gibi PNR bilgisi alınır.
:::
