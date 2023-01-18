console.log('You are running jQuery version: ' + $.fn.jquery);
$(document).ready(function(){
  window.emots = 0
  $('#kirim_survey').on('click', function () {
    bootbox.confirm({
      message: "Apakah data yg anda masukan sudah <b>sesuai</b> ?",
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
        var nomor         = $('#nomor').val()
        var jenis_kelamin = $('[name="jenis_kelamin"]:checked').val()
        var pendidikan    = $('#pendidikan').val()
        var pekerjaan     = $('#pekerjaan').val()
    
        var kesesuaian    = $('[name="kesesuaian"]:checked').val()
        var kemudahan     = $('[name="kemudahan"]:checked').val()
        var kecepatan     = $('[name="kecepatan"]:checked').val()
        var pelayanan     = $('[name="pelayanan"]:checked').val()
        var kompetensi    = $('[name="kompetensi"]:checked').val()
        var perilaku      = $('[name="perilaku"]:checked').val()
        var penanganan    = $('[name="penanganan"]:checked').val()
        var sarana        = $('[name="sarana"]:checked').val()
        var saran_kritik  = $('#saran_kritik').val()
        var emots  = window.emots
    
        var formData = new FormData();
        formData.append('table', 'data_survey');
        formData.append('nomor', nomor);
        formData.append('jenis_kelamin', jenis_kelamin);
        formData.append('pendidikan', pendidikan);
        formData.append('pekerjaan', pekerjaan);
        // formData.append('kesesuaian', kesesuaian);
        // formData.append('kemudahan', kemudahan);
        // formData.append('kecepatan', kecepatan);
        // formData.append('pelayanan', pelayanan);
        // formData.append('kompetensi', kompetensi);
        // formData.append('perilaku', perilaku);
        // formData.append('penanganan', penanganan);
        // formData.append('sarana', sarana);
        formData.append('saran_kritik', saran_kritik);
        formData.append('emot', emots);

        save(formData)
        }
      }
    })

  })
});

function save(formData){

  var dialog = bootbox.dialog({
    message: '<p class="text-center mb-0"><i class="fa fa-spin fa-spinner"></i> Mohon Tunggu ...</p>',
    closeButton: true
  });

  $.ajax({
      type: 'post',
      processData: false,
      contentType: false,
      url: 'submitsurvey',
      data : formData,
      success: function(result){

        bootbox.alert({
          message: 'Berhasil Terkirim!',
          buttons: {
            ok: {
                  label: '<i class="fa fa-power-off"></i> Keluar',
                  className: 'btn-danger btn-xs'
              },
          },
          callback: function (result) {
            setTimeout(() => {
              window.close();
            }, 1000);
          }
      });
        
      }
    });
};

function emot(param, kode){

  $('.emot').find("i").removeClass('text-success')
  $('.emot').find("i").removeClass('text-info')
  $('.emot').find("i").removeClass('text-danger')
  $('.emot').find("i").addClass('text-default')

  if(kode == 1){
    $(param).find("i").removeClass('text-default')
    $(param).find("i").addClass('bx bx-smile text-success')
    window.emots = 1
  }

  if(kode == 2){
    $(param).find("i").removeClass('text-default')
    $(param).find("i").addClass('bx bx-meh text-info')
    window.emots = 2
  }

  if(kode == 3){
    $(param).find("i").removeClass('text-warning')
    $(param).find("i").addClass('bx bx-sad text-danger')
    window.emots = 3
  }
  
}

function onlyNumberKey(evt) {
              
  // Only ASCII character in that range allowed
  var ASCIICode = (evt.which) ? evt.which : evt.keyCode
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
      return false;
  return true;
}

