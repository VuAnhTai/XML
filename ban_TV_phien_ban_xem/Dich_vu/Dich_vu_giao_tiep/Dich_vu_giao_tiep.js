var nodejsDichVu = require('http')
var luuTru = require('../Doi_tuong_va_xu_ly/Xu_ly_du_lieu.js')
var port = 1000
var xuLyThamSo = require('querystring')

var duLieu = luuTru.docDuLieu()

var dichVu = nodejsDichVu.createServer((yeuCau, dapUng)=>
{
    var chuoiNhan = ""
    var diaChiXuLy = yeuCau.url.replace("/", "")
    
})