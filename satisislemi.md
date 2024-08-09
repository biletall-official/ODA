# SATIŞ İŞLEMİ

## ŞEMA

:::warning
İdo için Satış işlemi öncesinde Rezervasyon işlemini gerçekleştirmiş olmanız gerekmektedir. Rezervasyon işlemi sonunda sistem tarafından oluşturulan koltuklar İdo tarafında kısa bir opsiyon süresine sahiptir. Satış işleminde ödeme İdo tarafından ve kendi posları üzerinde gerçekleşmektedir.
:::
**\*Budo için direkt olarak satış işlemi gerçekleştirilecektir**.

Satış işleminin xml şeması aşağıdaki gibidir;

```xml
<?xml version="1.0" encoding="utf-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="SatisKomut">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="Pnr" maxOccurs="1" minOccurs="1">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="FirmaNo" type="int10000-0" />
              <xs:element name="PnrNo" type="Str20" />
              <xs:element name="PnrKod" type="Str20" minOccurs="0" />
              <xs:element name="BudoSessionID" type="xs:string" minOccurs="0"/>
              <xs:element name="CepTelefon" type="xs:long" />
              <xs:element name="Eposta" minOccurs="0" type="EmailType" />
              <xs:element name="UyeNo" type="xs:string" minOccurs="0" />
              <xs:element name="HatirlaticiNot" type="Str100" minOccurs="0" />
              <xs:element name="Yolcular" maxOccurs="1" minOccurs="1">
                <xs:complexType>
                  <xs:sequence>
                    <xs:element name="Yolcu" maxOccurs="7" minOccurs="1">
                      <xs:complexType>
                        <xs:sequence>
                          <xs:element name="ID" type="int20-0" />
                          <xs:element name="YolcuKod" type="Str20" />
                          <xs:element name="YolcuTip" type="int20-0" />
                          <xs:element name="Ad" type="Str28-2" />
                          <xs:element name="Soyad" type="Str28-2" />
                          <xs:element name="Cinsiyet" type="byte2" />
                          <xs:element name="DogumTarih" type="dogumtarih" minOccurs="0" />
                          <xs:element name="SeaAndMilesNo" type="Str20" minOccurs="0" />
                          <xs:element name="Uyruk" type="Str20" minOccurs="0" />
                          <xs:element name="TCKimlikNo" type="tckn" minOccurs="0" />
                          <xs:element name="NetFiyat" type="fiyat" />
                          <xs:element name="ServisUcret" type="fiyat" />
                          <xs:element name="BagliOlduguYetiskinID" type="byte4" minOccurs="0" />
                          <xs:element name="AracBilgi" maxOccurs="1" minOccurs="0">
                            <xs:complexType>
                              <xs:sequence>
                                <xs:element name="AracTip" type="Str20" />
                                <xs:element name="Plaka" type="Str20" />
                                <xs:element name="KiralikMi" type="xs:short" />
                              </xs:sequence>
                            </xs:complexType>
                          </xs:element>
                        </xs:sequence>
                      </xs:complexType>
                    </xs:element>
                  </xs:sequence>
                </xs:complexType>
              </xs:element>
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
                                      <xs:element name="SegmentKod" type="xs:string" />
                                      <xs:element name="TasiyiciFirmaNo" type="int10000-0" />
                                      <xs:element name="NeredenKod" type="Str20" />
                                      <xs:element name="NereyeKod" type="Str20" />
                                      <xs:element name="Tarih" type="xs:dateTime" />
                                      <xs:element name="VarisTarih" type="xs:dateTime" minOccurs="0" />
                                      <xs:element name="SeferNo" type="Str20" />
                                      <xs:element name="FeribotTip" type="Str20" />
                                      <xs:element name="FiyatKod" type="Str20" minOccurs="0"/>
                                      <xs:element name="AracFiyatKod" type="Str20" minOccurs="0"/>
                                      <xs:element name="SinifKod" type="Str20" minOccurs="0"/>
                                      <xs:element name="SinifAd" type="Str20" minOccurs="0"/>
                                      <xs:element name="KoltukSinifKod" type="Str20" minOccurs="0"/>
                                      <xs:element name="KabinSinifKod" type="Str20" minOccurs="0"/>
                                      <xs:element name="KoltukSecimler" maxOccurs="unbounded" minOccurs="0">
                                        <xs:complexType>
                                          <xs:sequence>
                                            <xs:element name="KoltukSecim" maxOccurs="unbounded">
                                              <xs:complexType>
                                                <xs:sequence>
                                                  <xs:element name="YolcuID" type="Str20" />
                                                  <xs:element name="KoltukNo" type="intKoltuk" />
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
            </xs:sequence>
          </xs:complexType>
        </xs:element>
        <xs:element name="OdemeBilgi" minOccurs="1" maxOccurs="1">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="KrediKartliOdeme" minOccurs="1" maxOccurs="1">
                <xs:complexType>
                  <xs:sequence>
                    <xs:element name="KartNo" type="xs:string" minOccurs="0" />
                    <xs:element name="AdSoyad" type="xs:string" minOccurs="0" />
                    <xs:element name="SonKullanimAy" type="xs:string" minOccurs="0" />
                    <xs:element name="SonKullanimYil" type="xs:string" minOccurs="0" />
                    <xs:element name="GuvenlikKod" type="xs:string" minOccurs="0" />
                  </xs:sequence>
                </xs:complexType>
              </xs:element>
            </xs:sequence>
          </xs:complexType>
        </xs:element>
      </xs:sequence>
    </xs:complexType>
  </xs:element>
  <xs:simpleType name="int10000-0">
    <xs:restriction base="xs:int">
      <xs:maxExclusive value="32000" />
      <xs:minExclusive value="0" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="int20-0">
    <xs:restriction base="xs:int">
      <xs:maxExclusive value="32000" />
      <xs:minExclusive value="0" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="EmailType">
    <xs:restriction base="xs:string">
      <xs:pattern value="[^@]+@[^\.]+\..+" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="dogumtarih">
    <xs:restriction base="xs:date">
      <xs:maxExclusive value="2079-01-01" />
      <xs:minExclusive value="1900-01-01" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="byte4">
    <xs:restriction base="xs:byte">
      <xs:maxExclusive value="9" />
      <xs:minExclusive value="0" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="Str28-2">
    <xs:restriction base="xs:string">
      <xs:maxLength value="28" />
      <xs:minLength value="2" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="Str20">
    <xs:restriction base="xs:string">
      <xs:maxLength value="20" />
      <xs:minLength value="0" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="fiyat">
    <xs:restriction base="xs:double">
      <xs:maxExclusive value="15000" />
      <xs:minExclusive value="-1" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="intKoltuk">
    <xs:restriction base="xs:int">
      <xs:maxExclusive value="10000" />
      <xs:minExclusive value="0" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="byte2">
    <xs:restriction base="xs:byte">
      <xs:maxExclusive value="3" />
      <xs:minExclusive value="0" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="Str100">
    <xs:restriction base="xs:string">
      <xs:maxLength value="100" />
      <xs:minLength value="0" />
    </xs:restriction>
  </xs:simpleType>
  <xs:simpleType name="tckn">
    <xs:restriction base="xs:string">
      <xs:maxLength value="11" />
      <xs:minLength value="0" />
    </xs:restriction>
  </xs:simpleType>
</xs:schema>
```

## İSTEK

```xml
<SatisKomut>
  <Pnr>
    <FirmaNo>5000</FirmaNo>
    <PnrNo>HY2QZU</PnrNo>
    <PnrKod>33475345</PnrKod>
    <CepTelefon>5321111111</CepTelefon>
    <Eposta>a@a.com</Eposta>
    <HatirlaticiNot />
    <Yolcular>
      <Yolcu>
        <ID>1</ID>
        <YolcuKod>141244046</YolcuKod>
        <YolcuTip>12</YolcuTip>
        <Ad>ALI</Ad>
        <Soyad>OZTURK</Soyad>
        <Cinsiyet>2</Cinsiyet>
        <DogumTarih>1975-03-03</DogumTarih>
        <SeaAndMilesNo>123123123</SeaAndMilesNo>
        <Uyruk>TC</Uyruk>
        <NetFiyat>178</NetFiyat>
        <ServisUcret>4</ServisUcret>
        <AracBilgi>
          <AracTip>OTM</AracTip>
          <Plaka>34ASD123</Plaka>
          <KiralikMi>0</KiralikMi>
        </AracBilgi>
      </Yolcu>
      <Yolcu>
        <ID>2</ID>
        <YolcuKod>141244047</YolcuKod>
        <YolcuTip>1</YolcuTip>
        <Ad>HASAN</Ad>
        <Soyad>OZTURK</Soyad>
        <Cinsiyet>2</Cinsiyet>
        <DogumTarih>1975-08-05</DogumTarih>
        <SeaAndMilesNo />
        <Uyruk>TC</Uyruk>
        <NetFiyat>30</NetFiyat>
        <ServisUcret>4</ServisUcret>
      </Yolcu>
      <Yolcu>
        <ID>3</ID>
        <YolcuKod />
        <YolcuTip>2</YolcuTip>
        <Ad>EFE</Ad>
        <Soyad>OZTURK</Soyad>
        <Cinsiyet>2</Cinsiyet>
        <DogumTarih>2013-08-03</DogumTarih>
        <SeaAndMilesNo />
        <Uyruk>TC</Uyruk>
        <NetFiyat>0</NetFiyat>
        <ServisUcret>0</ServisUcret>
        <BagliOlduguYetiskinID>2</BagliOlduguYetiskinID>
      </Yolcu>
    </Yolcular>
    <SeferBilgi>
      <Parkurlar>
        <Parkur>
          <Segment>
            <SegmentKod>929385</SegmentKod>
            <TasiyiciFirmaNo>5000</TasiyiciFirmaNo>
            <NeredenKod>YKP</NeredenKod>
            <NereyeKod>YLV</NereyeKod>
            <Tarih>2015-06-19T17:45:00</Tarih>
            <VarisTarih>2015-06-19T19:00:00</VarisTarih>
            <SeferNo>1320</SeferNo>
            <FeribotTip>FC</FeribotTip>
            <FiyatKod>438580</FiyatKod>
            <AracFiyatKod>438586</AracFiyatKod>
            <SinifKod>KSECO</SinifKod>
            <SinifAd>ECO</SinifAd>
            <KoltukSinifKod>S</KoltukSinifKod>
            <KabinSinifKod>K</KabinSinifKod>
            <KoltukSecimler>
              <KoltukSecim>
                <YolcuID>1</YolcuID>
                <KoltukNo>90</KoltukNo>
              </KoltukSecim>
              <KoltukSecim>
                <YolcuID>2</YolcuID>
                <KoltukNo>95</KoltukNo>
              </KoltukSecim>
            </KoltukSecimler>
          </Segment>
        </Parkur>
        <Parkur>
          <Segment>
            <SegmentKod>930019</SegmentKod>
            <TasiyiciFirmaNo>5000</TasiyiciFirmaNo>
            <NeredenKod>YLV</NeredenKod>
            <NereyeKod>YKP</NereyeKod>
            <Tarih>2015-06-22T13:45:00</Tarih>
            <VarisTarih>2015-06-22T15:00:00</VarisTarih>
            <SeferNo>1317</SeferNo>
            <FeribotTip>FC</FeribotTip>
            <FiyatKod>438633</FiyatKod>
            <AracFiyatKod>438643</AracFiyatKod>
            <SinifKod>KSECO</SinifKod>
            <SinifAd>ECO</SinifAd>
            <KoltukSinifKod>S</KoltukSinifKod>
            <KabinSinifKod>K</KabinSinifKod>
            <KoltukSecimler>
              <KoltukSecim>
                <YolcuID>1</YolcuID>
                <KoltukNo>37</KoltukNo>
              </KoltukSecim>
              <KoltukSecim>
                <YolcuID>2</YolcuID>
                <KoltukNo>40</KoltukNo>
              </KoltukSecim>
            </KoltukSecimler>
          </Segment>
        </Parkur>
      </Parkurlar>
    </SeferBilgi>
  </Pnr>
  <OdemeBilgi>
    <KrediKartliOdeme>
      <KartNo>54************43</KartNo>
      <AdSoyad>tarık</AdSoyad>
      <SonKullanimAy>01</SonKullanimAy>
      <SonKullanimYil>2017</SonKullanimYil>
      <GuvenlikKod>***</GuvenlikKod>
    </KrediKartliOdeme>
  </OdemeBilgi>
</SatisKomut>
```

## CEVAP

```
<Bilet>
  <Pnr>
    <FirmaNo>5000</FirmaNo>
    <PnrNo>HY2QZU</PnrNo>
    <PnrKod>33475345</PnrKod>
    <PnrTip>I</PnrTip>
    <Yolcular>
      <Yolcu>
        <ID>1266156</ID>
        <YolcuKod>141244046</YolcuKod>
        <YolcuTip>12</YolcuTip>
        <Ad>ALI</Ad>
        <Soyad>OZTURK</Soyad>
        <EBiletNo>1111</EBiletNo>
        <AracBilgi>
          <AracTip>OTM</AracTip>
          <Plaka>34ASD123</Plaka>
          <KiralikMi>0</KiralikMi>
        </AracBilgi>
      </Yolcu>
      <Yolcu>
        <ID>1266157</ID>
        <YolcuKod>141244047</YolcuKod>
        <YolcuTip>1</YolcuTip>
        <Ad>HASAN</Ad>
        <Soyad>OZTURK</Soyad>
        <EBiletNo>2222</EBiletNo>
      </Yolcu>
      <Yolcu>
        <ID>1266158</ID>
        <YolcuKod />
        <YolcuTip>2</YolcuTip>
        <Ad>EFE</Ad>
        <Soyad>OZTURK</Soyad>
        <EBiletNo>3333</EBiletNo>
        <BagliOlduguYetiskinID>1266157</BagliOlduguYetiskinID>
      </Yolcu>
    </Yolcular>
  </Pnr>
</Bilet>
```

## BUDO İSTEK

```xml
<SatisKomut>
  <Pnr>
    <FirmaNo>5001</FirmaNo>
    <PnrNo />
    <PnrKod />
    <BudoSessionID>4d16b34e-6d16-4804-b3c7-b43498760530</BudoSessionID>
    <CepTelefon>5433506541</CepTelefon>
    <Eposta>ahmetakyol38@yahoo.com</Eposta>
    <HatirlaticiNot />
    <Yolcular>
      <Yolcu>
        <ID>1</ID>
        <YolcuKod />
        <YolcuTip>1</YolcuTip>
        <Ad>AHMET</Ad>
        <Soyad>AKYOL</Soyad>
        <Cinsiyet>2</Cinsiyet>
        <DogumTarih>1970-05-05</DogumTarih>
        <Uyruk>TC</Uyruk>
        <TCKimlikNo>40255666712</TCKimlikNo>
        <NetFiyat>26</NetFiyat>
        <ServisUcret>0</ServisUcret>
      </Yolcu>
    </Yolcular>
    <SeferBilgi>
      <Parkurlar>
        <Parkur>
          <Segment>
            <SegmentKod>586dc056-3bcc-e611-805d-000c29065395</SegmentKod>
            <TasiyiciFirmaNo>5001</TasiyiciFirmaNo>
            <NeredenKod>BRS</NeredenKod>
            <NereyeKod>BCK</NereyeKod>
            <Tarih>2017-02-28T16:30:00</Tarih>
            <VarisTarih>2017-02-28T18:30:00</VarisTarih>
            <SeferNo />
            <FeribotTip>DO</FeribotTip>
            <SinifKod>T</SinifKod>
            <SinifAd>TAM</SinifAd>
          </Segment>
        </Parkur>
      </Parkurlar>
    </SeferBilgi>
  </Pnr>
  <OdemeBilgi>
    <KrediKartliOdeme>
      <KartNo>*****</KartNo>
      <AdSoyad>ahmet akyol</AdSoyad>
      <SonKullanimAy>10</SonKullanimAy>
      <SonKullanimYil>2023</SonKullanimYil>
      <GuvenlikKod>096</GuvenlikKod>
    </KrediKartliOdeme>
  </OdemeBilgi>
</SatisKomut>
```
