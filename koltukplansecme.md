# KOLTUK PLAN ÇEKME İŞLEMİ
## ŞEMA
:::info
Rezervasyon işleminde koltuk numaraları oluşturulmasından dolayı isterseniz bu aşamayı kullanmadan direk satış kısmından devam edebilirsiniz. Ancak yolcunuza kendi koltuğunu seçtirmek isterseniz bu adımı kullanarak oluşturacağınız koltuk şemasından bir tercih yaptırmanız gerekmektedir.
:::

Koltuk Plan Çekme işlem şeması aşağıdaki gibidir;

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
## CEVAP