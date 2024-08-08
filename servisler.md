# SERVİSLER
Servis işlemlerindeki örnekler **C#.Net 2.0** için hazırlanmıştır ve kullanılan fonksiyonlar aşağıdaki gibidir.Buradaki fonksiyonlar ile webservisten veri çekilip datasetin içerisine alınmaktadır.   

```csharp

using System.Xml;
public XmlDocument StrtoXmldocument(string str)
{
    XmlDocument xd = new XmlDocument();
    try
    {
        string str1 = str;
        xd.LoadXml(str1);
    }
    catch
    {

    }
    return xd;    
}
public DataSet StringtoDataset(string xmlstring, string kullaniciadi,     string sifre)
{
      WebReference.Service sr = new WebReference.Service();//BiletAll WS
        
        XmlNodeReader nr = new XmlNodeReader(sr.XmlIslet(StrtoXmldocument(xmlstring).DocumentElement, StrtoXmldocument("<Kullanici><Adi>" + kullaniciadi + "</Adi><Sifre>" + sifre + "</Sifre></Kullanici>").DocumentElement));
        DataSet ds = new DataSet();

        try
        {
            ds.ReadXml(nr);
        }
        catch
        { 
            
        }
        return ds;
    }
