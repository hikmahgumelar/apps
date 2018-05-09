const {app, Menu} = require('electron');

const template =[
{
  label: "File",
  submenu: [
  {label: "Cetak", role:'cetak'},
  {label: "Keluar", role:'keluar'}
  
  ]
}, 
{
  label: "Setting",
  submenu: [
  {label: "seting database", role:'setingdatabase'},
  {label: "seting harga", role:'setingharga'}
  ]
},
{
  label: "Aplikasi",
  submenu: [
  {label: "Tentang Aplikasi", role:'tentangapp'},
  {label: "Pembuat Aplikasi", role:'pembuatapp'}
  ]
}
]
const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
