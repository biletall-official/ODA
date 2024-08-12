# ULAŞIM VE KULLANIM

BiletAll Webservis uygulaması aşağıda belirtilmiş olan internet adreslerine yetkilendirilmiş üye kuruluşların belirleyecekleri sabit IP’lere hizmet verir.BiletAll Webservis’i kullanacak kuruluşlar **BiletAll Acente Başvuru Formu**’nda istenen bilgileri, bu formu doldurarak **www.biletall.com**’a bildirmelidir. Üye kuruluşların verecekleri hizmetin kesintiye uğramaması için verilen IP adresinin sabit tutulması gerekmektedir.

## <u>**İNTERNET ULAŞIM ADRESLERİ**</u>

Canlı Ortam: https://ws.biletall.com/Service.asmx  
Test Ortamı: http://62.248.56.228/WSTEST/Service.asmx

## <u>**WEB SERVİS ADRESLERİ**</u>

BiletAll Webservis, Web Service Definition Language (WSDL) dosyasına aşağıdaki adresten ulaşılabilir.  
Gerçek Ortam: https://WS.biletall.com/Service.asmx?wsdl  
Test Ortamı: http://94.55.20.137/WSTEST/Service.asmx?wsdl

BiletAll Webservis uygulamasına erişebilmek için XML protokolü kullanılması gerekmektedir. Servise XML ile birlikte size verilen kullanıcı adı ve şifresi de gönderilir.

::: danger
**Geliştirmeye başlamadan önce okumanız gereken notlar:**

1. Servis ile ilgili sorunuzun dokümanda bulunmadığından emin olunuz. Dokümanda bulunmayan teknik sorular için http://wsdestek.biletall.com.html ekranından ilk olarak Sıkça Sorulan Soruları tarayınız, sorunuza cevap bulamaz iseniz , yine aynı ekrandan yeni talep oluşturabilirsiniz.
2. <u>Teknik sorularınıza biletal çağrı merkezi ve acente temsilciniz cevap veremeyecek ve aşağıdaki sebeplerden dolayı cevap üretme süresini tespit edemeyecektir.</u> Sadece http://wsdestek.biletall.com.html ekranından teknik cevap üretilmektedir. Daha önce oluşturulan talep ile ilgili sorunuzu , aynı talebin içinde en alta yeni soru olarak yazabilirsiniz.
3. İlgili uzman, tüm acentelerden gelen teknik talepleri geliş sırasına göre incelemekte ve her biri için incelemesini tamamladığında cevap üretebilmektedir.Ayrıca talep dış servislerden kaynaklı bir durumu içeriyorsa, dış servis ilgililerinden gelecek bilgi ile yeni cevap oluşturulmaktadır. Bu sebeplerden dolayı yeni bir talebin cevaplanma süresi değişkenlik göstermektedir. Talebinizi kendiniz sonlandırmadığınız sürece, inceleme sırasını beklemeye devam edecektir. Silinen talep olmayacaktır. Aynı soru için yeni talep oluşturmak, inceleme sırasındaki yerini değiştirmeyecektir.
4. Servise göndereceğiniz istek datanızın içindeki <u> xml tag’lerinin sıralaması ile dokümandaki xml tag’lerinin sıralamasının birebir örtüştüğünden ve veri tiplerinin birebir aynı olduğundan</u> emin olunuz.
:::
