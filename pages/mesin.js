
      <center><h3>PROGRAM APLIKASI PENDAPATAN</h3></center>
      <center><h3> LAIN-LAIN </h1></center>
      <hr>
      <div class="container">
        <div class="row">
      <div class="col">
        <h6>TOTAL PENDAPATAN LAIN-LAIN :</h6><h4><font color="red"><b>Rp 1.537.500</b></font></h4>

          <input href="report.html" type="button" value="INPUT BARU" class="default">
      </div>
      <div class="col">
      <img  src="../assets/indomaret.png" class="rounded float-right" border="0" style="margin:0">
      </div>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-sm-4">
          <label for="nopembuatan">No Pembuatan :</label>
          <input type="text" id="nopembuatan" class="form-control" value="K-222334" readonly style="text-align:center">
        </div>
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
          <label for="tglpembuatan">Tanggal Pembuatan:</label>
          <input type="text" id="tglpembuatan" class="form-control" value="12 april 2018"readonly style="text-align:center">
        </div>
      </div>
      <hr>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th></th>
            <th>Deskripsi</th>
            <th>Ikatan</th>
            <th>Berat Barang</th>
            <th>Harga Satuan Barang</th>   
            <th>Total Harga Barang</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" name="kardus"</td>
            <td>Kardus</td>
            <td>3 Ikatan</td>
            <td>4 KG</td> 
            <td>@ikat 2500</td>
            <td>Rp 10.000</td>
          </tr>
          <tr>
            <td><input type="checkbox" name="plastik"</td>
            <td>Plastik</td>
            <td>5 Ikatan</td>
            <td>2 KG</td> 
            <td>@ikat 1500</td>
            <td>Rp 7.500</td>
          </tr>
          <tr>
            <td><input type="checkbox" name="karung"</td>
            <td>Karung</td>
            <td>5 Ikatan</td>
            <td>3 KG</td> 
            <td>@ikat 4000</td>
            <td>Rp 20.000</td>
          </tr>
          <tr>
            <td><input type="checkbox" name="kardus"</td>
            <td>Sewa Teras</td>
            <td disabled></td>
            <td readonly></td>
            <td readonly></td>
            <td>Rp 1.500.000</td>
          </tr>
        </tbody>
      </table>
      <div class="container">
        <div class="row">
          <div class="col-sm">
           <button type="button">SIMPAN</button>
          </div>
          <div class="col-sm">
          
          <button href='report.html'>REPORT</button>
          </div>
          <div class="col-sm">
         
          <button href='report.html' type="button"> CETAK </button>
          </div>
        </div>
      </div>
      <script>
/
