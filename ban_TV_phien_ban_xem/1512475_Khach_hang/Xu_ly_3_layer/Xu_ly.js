function docDanhSachMatHang() { 
  var diaChiDichVu="http://localhost:1000"
  var thamSo="maSoXuLy=Doc_Du_lieu"
  var diaChiXuLy=`${diaChiDichVu}?${thamSo}`
  var xuLyHTTP = new XMLHttpRequest()
  xuLyHTTP.open("GET",  diaChiXuLy, false)
  xuLyHTTP.send("")
  var chuoiXML = xuLyHTTP.responseText
  var duLieu = new DOMParser().parseFromString(chuoiXML, "text/xml").documentElement
  var danhSachMatHang=duLieu.getElementsByTagName("Danh_sach_Mat_hang")[0]
  return danhSachMatHang
}
function taoChuoiHTMLDanhSachMatHang(danhSach) {
  
  var diaChiMedia = "../Media"
  var thDanhSach = document.createElement("div")
  thDanhSach.className = "row"

  for (var i = 0; i < danhSach.getElementsByTagName("Mat_hang").length; i++) {
    var matHang = danhSach.getElementsByTagName("Mat_hang")[i]
    var ten = matHang.getAttribute("Ten")
    var maSo = matHang.getAttribute("Ma_so")
    var donGiaBan = parseInt(matHang.getAttribute("Don_gia_Ban"))  
    
    var thHinh = document.createElement("img")
    thHinh.src = `${diaChiMedia}/${maSo}.png`
    thHinh.style.cssText = `width:150px;height:150px;`

    var thThongTin = document.createElement("div")
    thThongTin.className = `btn`
    thThongTin.style.cssText = `text-align:left`
    thThongTin.innerHTML = `${Ten}
                    <br />Đơn giá Bán 
                    ${donGiaBan.toLocaleString("vi")}`
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