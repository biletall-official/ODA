#  KOLTUK PLAN ÇEKME İŞLEMİ
## ŞEMA
:::info
Rezervasyon işleminde koltuk numaraları oluşturulmasından dolayı isterseniz bu aşamayı kullanmadan direk satış kısmından devam edebilirsiniz. Ancak yolcunuza kendi koltuğunu seçtirmek isterseniz bu adımı kullanarak oluşturacağınız koltuk şemasından bir tercih yaptırmanız gerekmektedir.
:::

 Çekme işlem şeması aşağıdaki gibidir;  

```xml
<?xml version="1.0" encoding="utf-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
	<xs:element name="IdoKoltukPlanCekKomut">
		<xs:complexType>
			<xs:sequence>
        <xs:element name="Pnr" maxOccurs="1" minOccurs="1">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="PnrNo" type="Str20-2" />
              <xs:element name="PnrKod" type="Str20-2" />       
              <xs:element name="SeferBilgi" maxOccurs="1" minOccurs="1">
                <xs:complexType>
                  <xs:sequence>
                    <xs:element name="Parkurlar" maxOccurs="1" minOccurs="1">
                      <xs:complexType>
                        <xs:sequence>
                          <xs:element name="Parkur" maxOccurs="2" minOccurs="1">
                            <xs:complexType>
                              <xs:sequence>
                                <xs:element name="Segment" maxOccurs="1" minOccurs="1">
                                  <xs:complexType>
                                    <xs:sequence>
                                      <xs:element name="SegmentKod" type="Str20" />
                                      <xs:element name="NeredenKod" type="Str20" />
                                      <xs:element name="NereyeKod" type="Str20" />                                      
                                    </xs:sequence>
                                  </xs:complexType>
                                </xs:element>
                              </xs:sequence>
                            </xs:complexType>
                          </xs:element>
                        </xs:sequence>
                      </xs:complexType>
                    </xs:element>                
                  </xs:sequence>
                </xs:complexType>
              </xs:element>           
            </xs:sequence>
          </xs:complexType>
        </xs:element>	
			</xs:sequence>
		</xs:complexType>
	</xs:element>  
  <xs:simpleType name="Str20">
    <xs:restriction base="xs:string">
      <xs:maxLength value="20" />
      <xs:minLength value="0" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="Str20-2">
    <xs:restriction base="xs:string">
      <xs:maxLength value="20" />
      <xs:minLength value="2" />
    </xs:restriction>
  </xs:simpleType>  
</xs:schema>
```
## İSTEK

|**PnrNo***|Rezervasyon işlemi sonucunda dönen ‘PnrNo’ alanı|
|-------------------|----------------------------------------|
|**PnrKod***|Rezervasyon işlemi sonucunda dönen ‘PnrKod’ alanı|
|**SegmentKod***|Sefer listesinden itibaren alınan rezervasyon işleminde de kullandığımız ‘SegmentKod’ alanıdır.|
|**NeredenKod***|Segmentin kalkış noktasının kodu.**Format:(string, 3 karakter).**|
|NereyeKod*|Segmentin varış noktasının kodu.**Format:(string, 3 karakter).**|

```xml
<IdoKoltukPlanCekKomut>
  <Pnr>
    <PnrNo>HY2QZU</PnrNo>
    <PnrKod>33475345</PnrKod>
    <SeferBilgi>
      <Parkurlar>
        <Parkur>
          <Segment>
            <SegmentKod>929385</SegmentKod>
            <NeredenKod>YKP</NeredenKod>
            <NereyeKod>YLV</NereyeKod>
          </Segment>
        </Parkur>
        <Parkur>
          <Segment>
            <SegmentKod>930019</SegmentKod>
            <NeredenKod>YLV</NeredenKod>
            <NereyeKod>YKP</NereyeKod>
          </Segment>
        </Parkur>
      </Parkurlar>
    </SeferBilgi>
  </Pnr>
</IdoKoltukPlanCekKomut>
```

## CEVAP

:::info
Görselde görünen koltuklar ilgili segmente ait feribotun **‘1.Kat’** ındaki **‘SALON 2’** bölümüne aittir. Her koltuk kendi **‘Sira’** ve **‘Sutun’** unda yerleşmiştir.
**Sira:** Yukarıdan aşağı yerleşim sırası
**Sutun:** Sağdan sola yerleşim sırası
:::

**Koltuk:**   
|Kat|Koltuğun bulunduğu kat bilgisi|
|-----------|-----------------------------------------------------|
|Bolum|Koltuğun bulunduğu bölüm|
|BolumAd|Koltuğun bulunduğu bölümün adı|
|Sira|Koltuğun bulunduğu sıra ya da satır|
|Sutun|Koltuğun bulunduğu sütun|
|Pozisyon|Gelebilecek durumlar aşağıdadır. Bu pozisyon değerlerine göre anlamlı görseli kullanabilirsiniz.**Koltuk, Koridor, Kapi, Masa, Cafe, Wc, Park, Merdiven, Kamera, Kitapci, VipKoltuk**|
|No|Koltuk numarasıdır|
|KabinSinifKod|Kabinin sınıf kodudur|
|KoltukDurum|Koltuk durum bilgisidir. ‘Musait’ olan koltuklar seçilebilir koltuklardır.**Musait, Pasif, Satildi, Rezerve, Bloke,**|
|KoltukYon|Koltuk yönünü tasarımınızda gösterebilmenizi sağlar.**Dogu, Bati, Kuzey, Guney, KuzeyDogu, GuneyDogu, KuzeyBati, GuneyBati**|

:::info
Sonuç olarak Pnr yapısı içerisinde ilgili parkur ve sefer hiyerarşisi içinde koltuk planı gelmektedir. 
Koltuk planı kapsam sıralaması şöyledir.
Parkur > Segment > KoltukPlan > Kat > Bolum > Koltuk
:::
:::tip
Bir koltuk planı içerisinde öncelikle katlar bulunmaktadır. Sonra ilgili katın bölümleri bulunmaktadır. Bölüm içerisinde ise Sira ve Sutun verileriyle bir yerleşim yapılmaktadır. Bu bölümü anlamak ve xml yapısını daha anlamlı hale getirmek için yapılmış örnekler üzerinde bir feribot yapısının nasıl olduğuna bakabilirsiniz.
:::
```xml
<IdoKoltukPlanCekKomut>
  <Pnr>
    <PnrKod>33475345</PnrKod>
    <PnrNo>HY2QZU</PnrNo>
    <SeferBilgi>
      <Parkurlar>
        <Parkur>
          <Segment>
            <SegmentKod>929385</SegmentKod>
            <NeredenKod>YKP</NeredenKod>
            <NereyeKod>YLV</NereyeKod>
            <KoltukPlan>
              <Koltuk>
                <ID>1</ID>
                <Kat>1</Kat>
                <Bolum>1</Bolum>
                <BolumAd>SALON 1</BolumAd>
                <Sira>1</Sira>
                <Sutun>1</Sutun>
                <Pozisyon>Koltuk</Pozisyon>
                <No>1</No>
                <KabinSinifKod>E</KabinSinifKod>
                <KoltukDurum>Musait</KoltukDurum>
                <KoltukYon>Dogu</KoltukYon>
              </Koltuk>
              <Koltuk>
                <ID>2</ID>
                <Kat>1</Kat>
                <Bolum>1</Bolum>
                <BolumAd>SALON 1</BolumAd>
                <Sira>1</Sira>
                <Sutun>2</Sutun>
                <Pozisyon>Masa</Pozisyon>
                <No>0</No>
                <KabinSinifKod />
                <KoltukDurum>Musait</KoltukDurum>
                <KoltukYon>Dogu</KoltukYon>
              </Koltuk>
              <Koltuk>
                <ID>3</ID>
                <Kat>1</Kat>
                <Bolum>1</Bolum>
                <BolumAd>SALON 1</BolumAd>
                <Sira>1</Sira>
                <Sutun>3</Sutun>
                <Pozisyon>Koltuk</Pozisyon>
                <No>4</No>
                <KabinSinifKod>E</KabinSinifKod>
                <KoltukDurum>Musait</KoltukDurum>
                <KoltukYon>Bati</KoltukYon>
              </Koltuk>
              <!--..............-->
              <Koltuk>
                <ID>2727</ID>
                <Kat>1</Kat>
                <Bolum>4</Bolum>
                <BolumAd>BALKON 2</BolumAd>
                <Sira>32</Sira>
                <Sutun>20</Sutun>
                <Pozisyon>Koridor</Pozisyon>
                <No>0</No>
                <KabinSinifKod />
                <KoltukDurum>Musait</KoltukDurum>
                <KoltukYon>Dogu</KoltukYon>
              </Koltuk>
              <Koltuk>
                <ID>2728</ID>
                <Kat>1</Kat>
                <Bolum>4</Bolum>
                <BolumAd>BALKON 2</BolumAd>
                <Sira>32</Sira>
                <Sutun>21</Sutun>
                <Pozisyon>Koridor</Pozisyon>
                <No>0</No>
                <KabinSinifKod />
                <KoltukDurum>Musait</KoltukDurum>
                <KoltukYon>Dogu</KoltukYon>
              </Koltuk>
              <Koltuk>
                <ID>2729</ID>
                <Kat>1</Kat>
                <Bolum>4</Bolum>
                <BolumAd>BALKON 2</BolumAd>
                <Sira>32</Sira>
                <Sutun>22</Sutun>
                <Pozisyon>Koridor</Pozisyon>
                <No>0</No>
                <KabinSinifKod />
                <KoltukDurum>Musait</KoltukDurum>
                <KoltukYon>Dogu</KoltukYon>
              </Koltuk>
            </KoltukPlan>
          </Segment>
        </Parkur>
        <Parkur>
          <Segment>
            <SegmentKod>930019</SegmentKod>
            <NeredenKod>YLV</NeredenKod>
            <NereyeKod>YKP</NereyeKod>
            <KoltukPlan>
              <Koltuk>
                <ID>1</ID>
                <Kat>1</Kat>
                <Bolum>1</Bolum>
                <BolumAd>SALON 1</BolumAd>
                <Sira>1</Sira>
                <Sutun>1</Sutun>
                <Pozisyon>Koltuk</Pozisyon>
                <No>1</No>
                <KabinSinifKod>E</KabinSinifKod>
                <KoltukDurum>Musait</KoltukDurum>
                <KoltukYon>Dogu</KoltukYon>
              </Koltuk>
              <Koltuk>
                <ID>2</ID>
                <Kat>1</Kat>
                <Bolum>1</Bolum>
                <BolumAd>SALON 1</BolumAd>
                <Sira>1</Sira>
                <Sutun>2</Sutun>
                <Pozisyon>Masa</Pozisyon>
                <No>0</No>
                <KabinSinifKod />
                <KoltukDurum>Musait</KoltukDurum>
                <KoltukYon>Dogu</KoltukYon>
              </Koltuk>
              <Koltuk>
                <ID>3</ID>
                <Kat>1</Kat>
                <Bolum>1</Bolum>
                <BolumAd>SALON 1</BolumAd>
                <Sira>1</Sira>
                <Sutun>3</Sutun>
                <Pozisyon>Koltuk</Pozisyon>
                <No>4</No>
                <KabinSinifKod>E</KabinSinifKod>
                <KoltukDurum>Pasif</KoltukDurum>
                <KoltukYon>Bati</KoltukYon>
              </Koltuk>
              <!--.............-->
              <Koltuk>
                <ID>2727</ID>
                <Kat>1</Kat>
                <Bolum>4</Bolum>
                <BolumAd>BALKON 2</BolumAd>
                <Sira>32</Sira>
                <Sutun>20</Sutun>
                <Pozisyon>Koridor</Pozisyon>
                <No>0</No>
                <KabinSinifKod />
                <KoltukDurum>Musait</KoltukDurum>
                <KoltukYon>Dogu</KoltukYon>
              </Koltuk>
              <Koltuk>
                <ID>2728</ID>
                <Kat>1</Kat>
                <Bolum>4</Bolum>
                <BolumAd>BALKON 2</BolumAd>
                <Sira>32</Sira>
                <Sutun>21</Sutun>
                <Pozisyon>Koridor</Pozisyon>
                <No>0</No>
                <KabinSinifKod />
                <KoltukDurum>Musait</KoltukDurum>
                <KoltukYon>Dogu</KoltukYon>
              </Koltuk>
              <Koltuk>
                <ID>2729</ID>
                <Kat>1</Kat>
                <Bolum>4</Bolum>
                <BolumAd>BALKON 2</BolumAd>
                <Sira>32</Sira>
                <Sutun>22</Sutun>
                <Pozisyon>Koridor</Pozisyon>
                <No>0</No>
                <KabinSinifKod />
                <KoltukDurum>Musait</KoltukDurum>
                <KoltukYon>Dogu</KoltukYon>
              </Koltuk>
            </KoltukPlan>
          </Segment>
        </Parkur>
      </Parkurlar>
    </SeferBilgi>
  </Pnr>
</IdoKoltukPlanCekKomut>
```