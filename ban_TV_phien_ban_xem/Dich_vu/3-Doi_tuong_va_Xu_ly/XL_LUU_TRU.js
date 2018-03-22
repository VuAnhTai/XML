var file = require("fs")
var duongDanThuMucDuLieu="..//2-Du_lieu_Luu_tru"
var duongDanThuMucMedia="..//Media"

var DOMParser=require("xmldom").DOMParser
var XMLSerializer=require("xmldom").XMLSerializer
 
class XL_LUU_TRU{
  docDuLieu(){
    var duongDan=duongDanThuMucDuLieu +"//Du_lieu.xml"
    var chuoiXML=file.readFileSync(duongDan,"UTF-8")
    var duLieu = new DOMParser().parseFromString(chuoiXML, "text/xml").documentElement
    
    return duLieu
  }
  docMedia(tenTapTin){ 
    var duongDanTapTin =duongDanThuMucMedia +"//" + tenTapTin
    var nhiPhan=file.readFileSync(duongDanTapTin)
    return nhiPhan
  }
 
}
//=============================
var xuLy=new XL_LUU_TRU
module.exports = xuLy


 


