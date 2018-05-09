const {app, Menu} = require('electron');

const template =[
{
  label: "File",
  submenu: [
  {label: "Cetak", role:'cetak'}
  ]
}, 
{
  label: "aplikasi",
  submenu: [
  {label: "seting database", role:'setingdatabase'},
  {label: "seting harga", role:'setingharga'}
  ]
}
]
const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
