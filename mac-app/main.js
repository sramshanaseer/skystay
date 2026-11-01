const {app,BrowserWindow,Menu}=require('electron');const path=require('path');
function mk(){const w=new BrowserWindow({width:1360,height:860,title:'Skystay',backgroundColor:'#13141d',autoHideMenuBar:true,webPreferences:{contextIsolation:true}});w.loadFile(path.join(__dirname,'index.html'));w.webContents.setWindowOpenHandler(()=>({action:'deny'}))}
app.whenReady().then(()=>{Menu.setApplicationMenu(Menu.buildFromTemplate([{role:'appMenu'},{role:'editMenu'},{label:'View',submenu:[{role:'togglefullscreen'},{role:'reload'}]},{role:'windowMenu'}]));mk();app.on('activate',()=>{if(!BrowserWindow.getAllWindows().length)mk()})});
app.on('window-all-closed',()=>app.quit());
