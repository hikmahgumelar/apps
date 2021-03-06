const app = angular.module('APLL',['ngStorage']);

app.factory("dbService", ($http) => {
        let sqlite = require('sqlite-sync');
        let db = sqlite.connect('model/database.db');
        return db;
});

app.controller('MainController', ($scope, $localStorage, dbService) => {
    $scope.title = 'APLIKASI PENDAPATAN LAIN-LAIN';
    $scope.desbar= ['Kardus','Plastik','Karung','Sewa Teras'];
    $scope.ikat = ['1,2,3,4,5,6,7,8,9,10'];
    $scope.tanggal = new Date();
    $scope.banyaknya =  ["1 Kg","2 Kg","3 Kg","4 Kg"] ;
    $scope.hargasatuan = ["1000","2000"];
  $scope.datas = [];
$scope.getid = (data) => {
  return $scope.datas.indexOf(data);
  }
$scope.Allhasil = () => {
 let totalharga = 0;
   for(let i=0;i < $scope.datas.length; i++ ){
    totalharga += $scope.datas[i].isi.TotalHargatext;
      
   }
  return totalharga;
  $scope.hasilnya = "totalharga";
}
$scope.akses = () => {
	dbService.runAsync("SELECT * FROM pessoas WHERE ativo = 1", (data) => {
			$scope.pessoas = data;
			console.log('nih datanya ==>' + data);
		});
}
$scope.tambahDatas = () => {
    $scope.datas.push({notatext:$scope.notaValue,
                      tglnotatext:$scope.tanggal,
                      isi: {
       Destext:$scope.desValue, 
       Ikattext:$scope.ikatValue, 
       Banyaknyatext:$scope.banyaknyaValue, 
       Hargasatuantext:$scope.harsatuValue,
       TotalHargatext :$scope.ikatValue * $scope.harsatuValue,
          }});

    }
$scope.simpan = () => {
  console.log($scope.datas);
  $localStorage.data = $scope.datas;
}
$scope.hapus = (data) => {
 const index = $scope.datas.indexOf(data);
 $scope.datas.splice(index, 1);
}

$scope.tampil = $localStorage.data;
//akhir
})
