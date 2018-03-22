var nodeJSDichVu = require("http")
var luuTru=require("../3-Doi_tuong_va_Xu_ly/XL_LUU_TRU.js")
var nghiepVu=require("../3-Doi_tuong_va_Xu_ly/XL_NGHIEP_VU.js")
var port = 1000
var xuLyThamSo = require('querystring')
var DOMParser=require("xmldom").DOMParser
var XMLSerializer=require("xmldom").XMLSerializer

var duLieu=luuTru.docDuLieu()
var dichVu = nodeJSDichVu.createServer((req, res) =>
{
  var chuoiNhan = "" 
  var diaChiXuLy = req.url.replace("/","")
  
  req.on('data', (chunk) => {chuoiNhan += chunk})
  req.on('end', () => {
    if (diaChiXuLy.startsWith("Media")){
      var tenTapTin=diaChiXuLy.replace("Media/","")
      var NhiPhanKQ=luuTru.docMedia(tenTapTin)
      res.writeHead(200, {'Content-Type': 'image/png' });       
      res.end(NhiPhanKQ,'binary');
    }
    else {
      var thamSo = xuLyThamSo.parse(diaChiXuLy.replace("?",""))
      var maSoXuLy=thamSo.maSoXuLy
      var chuoiKQ=""
      if (maSoXuLy=="Doc_Du_lieu"){
        chuoiKQ=new XMLSerializer().serializeToString(duLieu) 
      }
      // else {
      //   chuoiKQ="Không có Mã số Xử lý "+  maSoXuLy + " này"
      // }
      res.setHeader("Access-Control-Allow-Origin", '*')
      res.end(chuoiKQ); 
    }
  })
  
})

dichVu.listen(port);


 



 