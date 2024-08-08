# 3D GÜVENLİK İLE SATIŞ YAPMA
3d güvenlik ile satış yapabilmeniz için web servisin 3d sayfasına Satis XML’ini kredi kartı bilgileri ile birlikte , Yetki XML’ini, successURL(işlem başarılı ise sonucun döneceği sayfanız)’ini ve failURL(işlem başarısız ise sonucun döneceği sayfanız)’inizi post metodu ile şifreleyip submit etmeniz gerekmektedir.Bu sayfa banka ile ilgili işlemleri gerçekleştirip sonucu sizin belirtmiş olduğunuz sayfalara gönderecektir.Bu sayfalarınızda Get metodu ile dönen sonucu almanız gerekmektedir.Eğer işlem başarılı ise successURL için belirttiğiniz sayfaya , PNR kodu ile sonuç dönecektir.Eğer işlem başarısız ise , Hata koduyla birlikte failURL sayfanıza gidecektir.Burada Get metodu ile birlikte hatanın detayını almanız gerekmektedir.

**3d  Satış işlemini gerçekleştirebilmeniz için yönlenmeniz gereken URL aşağıda belirtilmiştir.**  
https://ws.biletall.com/3DSecure/SecurePay2.aspx

**3d  satış işlemini test  ortamında gerçekleştirebilmeniz için yönlenmeniz gereken URL aşağıda belirtilmiştir.**  
http://94.55.20.137//WSTEST/3DSecure/SecurePay2.aspx

**<u>Test Ortamı Kart Bilgileri:</u>**  
**Kart Numarası:** 5218076007402834
**Son Kullanma Tarihi:** 11/40 
**Güvenlik Numarası:** 820
**Kart 3D Secure Şifresi:** 123456

**satisXML:** Satış yapacağınız xml değerini arka planda set etmelisiniz.
**yetkiXML:** Web servis kullanıcı adı şifrenizi göndereceğiniz XML arka planda set etmelisiniz
**successURL:** Para çekme işlemi başarılı ise sonucun döneceği sayfanızın URL sidir. Post ettiğiniz sayfanızda web servisin 3d ödeme sayfası açılır , 3d secure satış işlemi gerçekleştirilir ve sayfa içerisine dönerek belirtmiş olduğunuz sayfaya sonuç bilgisini gönderir. 
**failURL :** Para çekme işlemi başarısız ise sonucun döneceği sayfanızın URL sidir. Biletleme işlemi gerçekleşmez.


## **Ödeme Sayfanızda Post Edeceğiniz XML İçin .Net Ortamında Kod Örneği**
```xml
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title></title>
    <script type="text/javascript" src="https://www.biletall.com/js/jquery-1.3.2.js"></script>
</head>
<body>
    <input runat="server" id="hostURL" type="hidden" name="hostURL"/>
    <form id="SatisForm" method="post" action='' >
		 <input runat="server" id="satisXML" type="hidden" name="satisXML"/>
		 <input runat="server" id="yetkiXML" type="hidden" name="yetkiXML"/>
		 <input runat="server" id="successURL" type="hidden" name="successURL" />
		 <input runat="server" id="failURL" type="hidden" name="failURL"/>
	</form>
</body>
</html>
     <script language="javascript" type="text/javascript">
         $("#SatisForm")[0].action = $("#hostURL").val();       
         $('#SatisForm')[0].submit();
     </script>
```

## **successURL veya failURL. Net Kod Örneği**
```csharp
string sonuc="";
if (!Convert.ToBoolean(Request.Form.Get("Sonuc")))
{
    sonuc = Request.Form.Get("Hata");
}

else if (Convert.ToBoolean(Request.Form.Get("Sonuc")))
{
    string pnr = Request.Form.Get("PNR");
}
```
## **Gönderilecek olan paremetleri şifrelemek için gerekli olan şifreleme metodları**

```csharp
satisXML.value = USifrele(xmlstring)
yetkiXML.value = USifrele(xmlstring)
successURL.value = USifrele(linkstring)
failURL.value = USifrele(linkstring)

    static string[] karakterDizi = new string[]{
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", 
            "a", "b", "c", "ç", "d", "e", "f", "g", "ğ", "h", "ı", "i", "j", "k", "l", "m", 
            "n", "o", "ö", "p", "q", "r", "s", "ş", "t", "u", "ü", "v", "w", "x", "y", "z",  
            "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", 
            "N", "O", "Ö", "P", "Q", "R", "S", "Ş", "T", "U", "Ü", "V", "W", "X", "Y", "Z",
            "!", "'", "^" , "+", "%", "&", "/", "(", ")", "=", "?", "_", "£", "#", "$", "½",
            "{", "[", "]", "}", "\\", "|", "*", "-", "~", "`", ",", ";", ".", ":", "<", ">",
            "|", "@", "\"", "é", "€", "i", "¨", "æ", "ß", " "
        };
    public static string USifrele(string str)
    {
        Random rnd = new Random();
        int sabit = rnd.Next(100, 870);
        char[] dizi = str.ToCharArray();
        string sonuc = "";
        try
        {
            for (int i = 0; i < dizi.Length; i++)
            {
                int index = Array.IndexOf(karakterDizi, dizi[i].ToString());
                sonuc += (sabit + index).ToString();
            }
            sonuc += sabit.ToString();
        }
        catch
        {
            return "@HatalıKarakterDizisi";
        }
        return sonuc;
    }

    public static string USifreCoz(string str)
    {
        string sonuc = "";
        char[] dizi = str.ToCharArray();
        int sabit = Convert.ToInt16(dizi[dizi.Length - 3].ToString() + dizi[dizi.Length - 2].ToString() + dizi[dizi.Length - 1].ToString());
        try
        {
            for (int i = 0; i < dizi.Length - 3; i = i + 3)
            {
                int index = Convert.ToInt16(dizi[i].ToString() + dizi[i + 1].ToString() + dizi[i + 2].ToString());
                index -= sabit;
                if (index != -1)
                    sonuc += karakterDizi[index];
            }
        }
        catch
        {
            return "@HatalıKarakterDizisi";
        }
        return sonuc;
    }
```