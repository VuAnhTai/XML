var diaChiDichVu="http://localhost:1000"
var diaChiMedia=`${diaChiDichVu}/Media`

function docDanhSachTivi() { 
  var thamSo="maSoXuLy=Doc_Du_lieu"
  var diaChiXuLy=`${diaChiDichVu}?${thamSo}`
  var xuLyHTTP = new XMLHttpRequest()
  xuLyHTTP.open("GET",  diaChiXuLy, false)
  xuLyHTTP.send("")
  var chuoiXML = xuLyHTTP.responseText
  var duLieu = new DOMParser().parseFromString(chuoiXML, "text/xml").documentElement
  var danhSachMatHang=duLieu.getElementsByTagName("Danh_sach_Tivi")[0]
  return danhSachMatHang
}

function tinhDoanhThuTivi(Tivi){
  var doanhThu = 0;
  var banHang = Tivi.getElementsByTagName('Ban_hang')
  for(var i = 0; i < banHang.length; i++){
    var tien = banHang[i].getAttribute('Tien')
    doanhThu +=parseInt(tien)
  }
  return doanhThu
}

function tinhTongDoanhThu(danhSach){
  var tongDoanhThu = 0
  for (var i = 0; i < danhSach.getElementsByTagName("Tivi").length; i++) {
    var Tivi = danhSach.getElementsByTagName("Tivi")[i]
    
    var tien = parseInt(tinhDoanhThuTivi(Tivi))
    tongDoanhThu += tien
  }
  return  tongDoanhThu.toLocaleString("vi")
}
function taoChuoiHTMLDanhSachTivi(danhSach) {
  var thDanhSach = document.createElement("div")
  
  thDanhSach.className = "row"

  for (var i = 0; i < danhSach.getElementsByTagName("Tivi").length; i++) {
    var Tivi = danhSach.getElementsByTagName("Tivi")[i]
    var ten = Tivi.getAttribute("Ten")
    var maSo = Tivi.getAttribute("Ma_so")
    var donGiaBan = parseInt(Tivi.getAttribute("Don_gia_Ban"))  
    var tien = parseFloat(tinhDoanhThuTivi(Tivi))

    var thHinh = document.createElement("img")
    thHinh.src = `${diaChiMedia}/${maSo}.png`
    thHinh.style.cssText = `width:150px;height:150px;`

    var thThongTin = document.createElement("div")
    thThongTin.className = `btn`
    thThongTin.style.cssText = `text-align:left`
    thThongTin.innerHTML = `${ten}
                    <br />Đơn giá Bán:  
                    ${donGiaBan.toLocaleString("vi")}
                    <br />Doanh thu:
                    ${tien.toLocaleString("vi")}`

    var thMatHang = document.createElement("div")
    thMatHang.className = `col-md-3`
    thMatHang.style.cssText = `margin-bottom:10px`
    thMatHang.appendChild(thHinh)
    thMatHang.appendChild(thThongTin)

    thDanhSach.appendChild(thMatHang)
  }
  var chuoiHTML=thDanhSach.outerHTML
  return chuoiHTML
}


//************** Xử lý Nghiệp vụ ***********
function traCuuTivi(Chuoi_Tra_cuu, Danh_sach) {
  Chuoi_Tra_cuu = Chuoi_Tra_cuu.toUpperCase()
  var Tai_lieu = new DOMParser().parseFromString("<Danh_sach_Tivi /", "text/xml")
  var Danh_sach_Kq = Tai_lieu.documentElement
  for (var i = 0; i < Danh_sach.getElementsByTagName("Tivi").length; i++) {
    var Mat_hang = Danh_sach.getElementsByTagName("Tivi")[i]
    var Ten = Mat_hang.getAttribute("Ten").toUpperCase()
    if (Ten.indexOf(Chuoi_Tra_cuu) >= 0) 
      Danh_sach_Kq.appendChild(Tai_lieu.importNode(Mat_hang, true))
  }

  return Danh_sach_Kq
}