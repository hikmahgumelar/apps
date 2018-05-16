const app = angular.module('APLL',[]);
app.controller('MainController',['$scope', ($scope) => {
    $scope.title = 'APLIKASI PENDAPATAN LAIN-LAIN';
    $scope.desbar= ['Kardus','Plastik','Karung','Sewa Teras'];
    $scope.ikat = ['1,2,3,4,5,6,7,8,9,10'];
    $scope.tanggal = new Date();
    $scope.banyaknya =  ["1 Kg","2 Kg","3 Kg","4 Kg"] ;
    $scope.hargasatuan = ["1000","2000"];
    
  $scope.datas = [];
$scope.totalDatas = () => {
  return $scope.datas.length;
  }
$scope.tambahDatas = () => {
 $scope.datas.push({notatext:$scope.notaValue,
   Destext:$scope.desValue, 
   Ikattext:$scope.ikatValue, 
   Banyaknyatext:$scope.banyaknyaValue, 
   Hargasatuantext:$scope.harsatuValue
 });
 $scope.desValue ='';
 $scope.ikatValue='';
 $scope.banyaknyaValue='';
 $scope.harsatuValue='';
 $scope.TotalPendapatan = '';
 }
//akhir

}])
