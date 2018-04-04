var file = require("fs")
var duongDanThuMucDuLieu="..//2-Du_lieu_Luu_tru"
var duongDanThuMucMedia="..//Media"

var DOMParser=require("xmldom").DOMParser
var XMLSerializer=require("xmldom").XMLSerializer

function docCuaHang(){
  var duongDan=duongDanThuMucDuLieu +"//Cua_hang.xml"
  var chuoiXML=file.readFileSync(duongDan,"UTF-8")
  var duLieu = new DOMParser().parseFromString(chuoiXML, "text/xml").documentElement
  
  return duLieu
}
function ghiMatHang(matHang){
  var Kq="OK"
  
  try{
    var duongDan=duongDanThuMucDuLieu + "//" + "Danh_sach_Tivi.xml"
    var Chuoi_JSON=JSON.stringify(Mat_hang,null,"\t")
    File.writeFileSync(Duong_dan,Chuoi_JSON,"UTF-8")
  }
  catch(Loi){
     Kq=Loi.toString()
  }
 
  return Kq 
}

function danhSachTivi(){
  var duongDan=duongDanThuMucDuLieu +"//Danh_sach_Tivi.xml"
  var chuoiXML=file.readFileSync(duongDan,"UTF-8")
  var duLieu = new DOMParser().parseFromString(chuoiXML, "text/xml").documentElement
  
  return duLieu
}
class XL_LUU_TRU{
  docDuLieu(){
    var duLieu={}
    duLieu.cuaHang=docCuaHang()
    duLieu.danhSachTivi=danhSachTivi()
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


 


