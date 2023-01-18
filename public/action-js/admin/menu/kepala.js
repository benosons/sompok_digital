console.log('You are running jQuery version: ' + $.fn.jquery);
$(document).ready(function(){
    load()
    $('#tech-companies-1').DataTable()

    window.ektp = ''
    window.kartu_keluarga = ''
    window.ektp_edit = ''
    window.kartu_keluarga_edit = ''
    
    $('#ektp').change(function(){
        const file = this.files[0];
        
        if (file){
          let reader = new FileReader();
          reader.onload = function(event){
            // console.log(event.target.result);
            window.ektp = file
            // $('#previewKtp').attr('src', event.target.result);
          }
          reader.readAsDataURL(file);
        }
    });

    $('#kartu_keluarga').change(function(){
        const file = this.files[0];
        
        if (file){
          let reader = new FileReader();
          reader.onload = function(event){
            window.kartu_keluarga = file
            // $('#previewSelfie').attr('src', event.target.result);
          }
          reader.readAsDataURL(file);
        }
    });

    $('#ektp_edit').change(function(){
        const file = this.files[0];
        
        if (file){
          let reader = new FileReader();
          reader.onload = function(event){
            // console.log(event.target.result);
            window.ektp_edit = file
            // $('#previewKtp').attr('src', event.target.result);
          }
          reader.readAsDataURL(file);
        }
    });

    $('#kartu_keluarga_edit').change(function(){
        const file = this.files[0];
        
        if (file){
          let reader = new FileReader();
          reader.onload = function(event){
            window.kartu_keluarga_edit = file
            // $('#previewSelfie').attr('src', event.target.result);
          }
          reader.readAsDataURL(file);
        }
    });

    $('#simpan_kk').on('click', function () {
        bootbox.confirm({
          message: "Apakah data sudah <b>sesuai</b> ?",
          buttons: {
          confirm: {
              label: '<i class="fa fa-check"></i> Ya',
              className: 'btn-success btn-xs',
          },
          cancel: {
              label: '<i class="fa fa-times"></i> Tidak',
              className: 'btn-danger btn-xs',
          }
        },
        callback : function(result) {
        if(result) {
            var nama            = $('#nama').val()
            var nomor_telepon   = $('#nomor_telepon').val()
            var pekerjaan       = $('#pekerjaan').val()
            var status          = $('#status_').val()
            var keterangan      = $('#keterangan').val()
            var ektp            = window.ektp
            var kartu_keluarga  = window.kartu_keluarga
        
            var formData = new FormData();
            formData.append('table', 'data_kk');
            formData.append('nama', nama);
            formData.append('nomor_telepon', nomor_telepon);
            formData.append('pekerjaan', pekerjaan);
            formData.append('status', status);
            formData.append('keterangan', keterangan);
            formData.append('ektp', ektp);
            formData.append('kartu_keluarga', kartu_keluarga);
    
            save(formData)
            }
          }
        })
    
      })

      $('#update_kk').on('click', function () {
        var id              = $('#id_edit').val()
        var nama            = $('#nama_edit').val()
        var nomor_telepon   = $('#nomor_telepon_edit').val()
        var pekerjaan       = $('#pekerjaan_edit').val()
        var status          = $('#status_edit').val()
        var keterangan      = $('#keterangan_edit').val()
        var ektp            = window.ektp_edit ? window.ektp_edit : ''
        var kartu_keluarga  = window.kartu_keluarga_edit ? window.kartu_keluarga_edit : ''
    
        var formData = new FormData();
        formData.append('table', 'data_kk');
        formData.append('id', id);
        formData.append('nama', nama);
        formData.append('nomor_telepon', nomor_telepon);
        formData.append('pekerjaan', pekerjaan);
        formData.append('status', status);
        formData.append('keterangan', keterangan);
        formData.append('ektp', ektp);
        formData.append('kartu_keluarga', kartu_keluarga);

        save(formData)
      })

      $('#btn_tambah').on('click', function () {
        $('[name="form_kepala"]').val('')
        window.ektp = null
        window.kartu_keluarga = null
      })
});

function load(){
    
    $.ajax({
        type: 'post',
        dataType: 'json',
        url: 'loadkk',
        success: function(result){
            let data = result.data;
            let code = result.code;
            
            if(code == 1){
                var dt = $('#data_kk').DataTable({
                    destroy: true,
                    paging: true,
                    lengthChange: true,
                    searching: true,
                    ordering: true,
                    info: true,
                    autoWidth: false,
                    responsive: false,
                    pageLength: 10,
                    aaData: result.data,
                    buttons: ["excel", "colvis"],
                    aoColumns: [
                        { 'mDataProp': 'id', 'width':'10'},
                        { 'mDataProp': 'nama'},
                        { 'mDataProp': 'nomor_telepon', 'width':'10'},
                        { 'mDataProp': 'pekerjaan', 'width':'10'},
                        { 'mDataProp': 'status'},
                        { 'mDataProp': 'keterangan'},
                        { 'mDataProp': 'create_date'},
                        { 'mDataProp': 'id'},
                        { 'mDataProp': 'id'},
                    ],
                    order: [[0, 'ASC']],
                    fixedColumns: true,
                    aoColumnDefs:[
                        { width: 50, targets: 0 },
                        {
                            mRender: function ( data, type, row ) {
                                if(type == 'display'){
                                    let el = ''

                                    if(row.ektp && row.kk){
                                        el = `
                                        <div class="d-flex flex-wrap gap-2">
                                        <button type="button" class="btn btn-outline-primary waves-effect waves-light btn-sm" onclick="view('${row.ektp}','KTP','${row.nama}_ktp')">KTP</button>
                                        <button type="button" class="btn btn-outline-info waves-effect waves-light btn-sm" onclick="view('${row.kk}','Kartu Keluarga','${row.nama}_kk')">Kartu Keluarga</button>
                                        </div>`
                                    }else if(row.kk){
                                        el = `<button type="button" class="btn btn-outline-info waves-effect waves-light btn-sm" onclick="view('${row.kk}','Kartu Keluarga','${row.nama}_kk')">Kartu Keluarga</button>`
                                    }else if(row.ektp){
                                        el = `<button type="button" class="btn btn-outline-primary waves-effect waves-light btn-sm" onclick="view('${row.ektp}','KTP','${row.nama}file_name')">KTP</button>`
                                    }else{
                                        el = `-`
                                    }
                                    return el
                                }
                                return data;
                            },
                            
                            aTargets: [ 7 ]
                        },
                        {
                            mRender: function ( data, type, row ) {
                                if(type == 'display'){
                                    let el = `<div class="d-flex flex-wrap gap-2">
                                    <button hidden type="button" class="btn btn-success btn-sm waves-effect waves-light"><i class="bx bx-check-double"></i></button>
                                    <button type="button" class="btn btn-info btn-sm waves-effect waves-light" onclick="edit('${row.id}','${row.nama}','${row.nomor_telepon}','${row.pekerjaan}','${row.keterangan}','${row.status}','${row.ektp? 1:0}', '${row.kk? 1:0}')"><i class="bx bx-edit"></i></button>
                                    <button type="button" class="btn btn-danger btn-sm waves-effect waves-light" onclick="hapus('${row.id}','${row.nama}')"><i class="bx bx-trash"></i></button>
                                    </div>`
                                    // el += `<a type="button" class="btn btn-sm btn-info waves-effect waves-light" onclick="viewimage('${row.ektp}', '${row.kk}')"><i class="mdi mdi-image"></i> Foto</a>`
                                    return el
                                }
                                return data;
                            },
                            
                            aTargets: [ 8 ]
                        },
                    ],
                    fnRowCallback: function(nRow, aData, iDisplayIndex, iDisplayIndexFull){
                        var index = iDisplayIndexFull + 1;
                        $('td:eq(0)', nRow).html('#'+index);
                        return  index;
                    },
                    fnInitComplete: function () {

                        var that = this;
                        var td ;
                        var tr ;
                        this.$('td').click( function () {
                            td = this;
                        });
                        this.$('tr').click( function () {
                            tr = this;
                        });

                    }
                }).buttons().container().appendTo("#data_kk_wrapper .col-md-6:eq(1)");
                $(".dt-buttons").css("float",  "inline-end")
                $(".dt-buttons").removeClass("btn-group")
                $(".dt-buttons button").removeClass("btn-secondary")
                $(".dt-buttons button.buttons-excel").addClass("btn-outline-success")
                $(".dt-buttons button.buttons-collection").addClass("btn-outline-dark")
                $(".buttons-colvis").html("Kolom")

            }else{
                 $("#data_kk").DataTable()

            }
        }
    })
}

function view(base, title, nama) {
    $('#modal_berkas').modal('show')
    $('#file_name').val(nama)
    $('#modal_title').html(title)
    $('#img_preview').attr('src', base)
}

function save(formData){
  
    $.ajax({
        type: 'post',
        processData: false,
        contentType: false,
        url: 'submitkepala',
        data : formData,
        success: function(result){
  
          bootbox.alert({
            message: 'Berhasil Tersimpan!',
            buttons: {
              ok: {
                    label: '<i class="fa fa-check"></i> Ok',
                    className: 'btn-info btn-xs'
                },
            },
            callback: function (result) {
              load()
              $('.dismiss-canvas').click()
              $('[name="form_kepala"]').val('')
              window.ektp = null
              window.kartu_keluarga = null
              window.ektp_edit = null
              window.kartu_keluarga_edit = null
            }
        });
          
        }
      });
  };
  
  function edit(id,nama,nomor_telepon,pekerjaan,keterangan,status,ktp,kk) {
    $('#btn_edit').click()

    $('#id_edit').val(id)
    $('#nama_edit').val(nama)
    $('#nomor_telepon_edit').val(nomor_telepon)
    $('#pekerjaan_edit').val(pekerjaan)
    $('#status_edit').val(keterangan)
    $('#keterangan_edit').val(status)
  }

  function hapus(id, nama) {
    bootbox.confirm({
        message: `Yakin <b>Hapus</b> data "${nama}"?`,
        buttons: {
        confirm: {
            label: '<i class="fa fa-check"></i> Ya',
            className: 'btn-success btn-xs',
        },
        cancel: {
            label: '<i class="fa fa-times"></i> Tidak',
            className: 'btn-danger btn-xs',
        }
      },
      callback : function(result) {
      if(result) {
        var formData = new FormData();
            formData.append('table', 'data_kk');
            formData.append('id', id);
                $.ajax({
                    type: 'post',
                    processData: false,
                    contentType: false,
                    url: 'delete',
                    data : formData,
                    success: function(result){
            
                    bootbox.alert({
                        message: 'Berhasil Dihapus!',
                        buttons: {
                        ok: {
                                label: '<i class="fa fa-check"></i> Ok',
                                className: 'btn-info btn-xs'
                            },
                        },
                        callback: function (result) {
                            load()
                            }
                        })
                    }  
                })
            }
        }
    })
  }

  function downloadBase64File() {
    const linkSource = $('#img_preview').attr('src');
    const downloadLink = document.createElement("a");
    downloadLink.href = linkSource;
    downloadLink.download = $('#file_name').val()+'.jpg';
    downloadLink.click();
  }