const {app, Menu} = require('electron');
const electron = require('electron')
const BrowserWindow = electron.BrowserWindow
const url = require('url')
const path = require('path')

const template =[
{
  label: "File",
  submenu: [
  {label: "Cetak", role:'print'},
  {label: "Keluar", role:'quit'}

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
  {
    label: "Pembuat Aplikasi", 
    click () { frameAbout(); }
  }
  ]
}
  ]
  const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)

  var kotak = null;
  function frameAbout(){
    if (kotak) {
      kotak.focus()
        return;
    }
    kotak = new BrowserWindow({
      height: 220,
      resizable: false,
      width: 350,
      title: "Tentang Pembuat Aplikasi",
      fullscreenable: false,
    });
    kotak.setMenu(null);
kotak.loadURL(url.format({
  pathname: path.join(__dirname, '../pages/about.html'),
  protocol: 'file:',
  slashes: true
}))
kotak.on('closed', () => {
kotak = null;
});
};

  
