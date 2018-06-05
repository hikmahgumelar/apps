const app = angular.module('APLL',['ngStorage']);

app.factory("dbService", ($http) => {
        let sqlite = require('sqlite-sync');
        let db = sqlite.connect('model/database.db');
        return db;
});

app.controller('MainController', ($scope, $localStorage, dbService) => {
    $scope.title = 'APLIKASI PENDAPATAN LAIN-LAIN';
    $scope.desbar= ['Kardus','Plastik','Karung'];
    $scope.ikat = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    $scope.tanggal = new Date();
    $scope.banyaknya =  ["1","2","3","4"] ;
    $scope.hargasatuan = ["1000","2000","3000","4000","5000","6000","7000","8000","9000","10000"];
  $scope.datas = [];
$scope.getid = (data) => {
  return $scope.datas.indexOf(data);
  }
$scope.hapus = () => {

 dbService.prepare('DELETE FROM `people` WHERE `person_id` IS ?', (data) => {
   $scope.tampilygdihapus = data;
 })
}
$scope.Allhasil = () => {
 	dbService.runAsync("SELECT * FROM listbarang", (data) => {
			$scope.tampildata = data;
		});
  let totalharga = 0;
   for(let i=0;i < $scope.tampildata.length; i++ ){
    totalharga += $scope.tampildata[i].total_hrg;

   }
  return totalharga;
  $scope.hasilnya = "totalharga";
}
// $scope.Allhasil = () => {
//  let totalharga = 0;
//    for(let i=0;i < $scope.datas.length; i++ ){
//     totalharga += $scope.datas[i].TotalHargatext;
//
//    }
//   return totalharga;
//   $scope.hasilnya = "totalharga";
// }
$scope.akses = () => {
	dbService.runAsync("SELECT * FROM listbarang", (data) => {
			$scope.tampildata = data;
		});
}
$scope.tambahDatas = () => {
    $scope.datas.push({notatext:$scope.notaValue,
                      tglnotatext:$scope.tanggal,
                      Destext:$scope.desValue,
                      Ikattext:$scope.ikatValue,
                      Banyaknyatext:$scope.banyaknyaValue,
                      Hargasatuantext:$scope.harsatuValue,
                      TotalHargatext :$scope.banyaknyaValue * $scope.harsatuValue,
          });

    }
$scope.simpan = () => {
  //$localStorage.data = $scope.datas;
  for(let i=0;i < $scope.datas.length; i++){

    dbService.insert('listbarang',{ desbar: $scope.datas[i].Destext, jml_ikat: $scope.datas[i].Ikattext, banyak_brg: $scope.datas[i].Banyaknyatext, harga_ikat: $scope.datas[i].Hargasatuantext, total_hrg: $scope.datas[i].TotalHargatext });
 console.log($scope.datas[i].Destext);
}

}
$scope.hapus = (data) => {
 const index = $scope.datas.indexOf(data);
 $scope.datas.splice(index, 1);
}

$scope.tampil = $localStorage.data;
//akhir
})
