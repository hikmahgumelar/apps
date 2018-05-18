const app = angular.module('APLL',[]);
app.controller('MainController',['$scope', ($scope) => {
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
$scope.tambahDatas = () => {
    $scope.datas.push({notatext:$scope.notaValue,
                      tglnotatext:$scope.tanggal,
                      isi: {
       Destext:$scope.desValue, 
       Ikattext:$scope.ikatValue, 
       Banyaknyatext:$scope.banyaknyaValue, 
       Hargasatuantext:$scope.harsatuValue,
       TotalHargatext :$scope.ikatValue * $scope.harsatuValue,
      // TotalSemuatext :$scope.totalharga,
          }});

    }
$scope.hapus = (data) => {
 const index = $scope.datas.indexOf(data);
 $scope.datas.splice(index, 1);
}
$scope.Allhasil = () => {
 let totalharga = 0;
   for(let i=0;i < $scope.datas.length; i++ ){
    totalharga += $scope.datas[i].isi.TotalHargatext;
      
   }
  return totalharga;
//  var hasilnya = totalharga;
}

//akhir
}])
