var File = require("fs")
var duongDanThuMucDuLieu = "Dich_vu/Du_lieu/2-Du_lieu_Luu_tru_Cach_2"
var duongDanThuMucCuaHang = duongDanThuMucDuLieu + "//Nha_hang"
var duongDanThuMucDanhSachTivi = duongDanThuMucDuLieu + "//Mat_hang"
var duongDanThuMucMedia = duongDanThuMucDuLieu + "Dich_vu/Media"

function docCuaHang(){
    var duongDan = duongDanThuMucCuaHang + "/Cua_hang.xml"
    var chuoiXML = File.readFileSync(duongDan, "UTF-8")
    parser = new DOMParser()
    var cuaHang = parser.parseFromString(text,"text/xml")
    return cuaHang
}

class XL_LUU_TRU{
    docDuLieu(){
        var duLieu = {}
        duLieu.cuaHang = docCuaHang()
    }
}

var xuLy = new XL_LUU_TRU
module.exports = xuLy