console.log('You are running jQuery version: ' + $.fn.jquery);
$(document).ready(function(){
    load()
});

function load(){
    
    $.ajax({
        type: 'post',
        dataType: 'json',
        url: 'loadtamu',
        success: function(result){
            let data = result.data;
            let code = result.code;
            
            if(code){
                var dt = $('#datatamu').DataTable({
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
                    aoColumns: [
                        { 'mDataProp': 'id', 'width':'10'},
                        { 'mDataProp': 'nama'},
                        { 'mDataProp': 'telp', 'width':'10'},
                        { 'mDataProp': 'jenis_kelamin', 'width':'10'},
                        { 'mDataProp': 'tujuan'},
                        { 'mDataProp': 'create_date'},
                        { 'mDataProp': 'tujuan'},
                    ],
                    order: [[0, 'ASC']],
                    fixedColumns: true,
                    aoColumnDefs:[
                        { width: 50, targets: 0 },
                        // {
                        //     mRender: function ( data, type, row ) {
                        //         if(type == 'display'){
                        //             let el = `<div class="popup-gallery d-flex flex-wrap">
                        //                             <a href="#" title="Project 1">
                        //                                 <div class="img-fluid">
                        //                                     <img src="${row.ektp}" alt="" width="120">
                        //                                 </div>
                        //                             </a>
                        //                             <a href="#" title="Project 2">
                        //                                 <div class="img-fluid">
                        //                                     <img src="${row.selfie}" alt="" width="120">
                        //                                 </div>
                        //                             </a>
                        //                         </div>`
                        //             return el
                        //         }
                        //         return data;
                        //     },
                            
                        //     aTargets: [ 5 ]
                        // },
                        {
                            mRender: function ( data, type, row ) {
                                if(type == 'display'){
                                    let el = `<a type="button" class="btn btn-sm btn-outline-info waves-effect waves-light" onclick="viewimage('${row.ektp}', '${row.selfie}')"><i class="mdi mdi-image"></i> Foto</a>`
                                    return el
                                }
                                return data;
                            },
                            
                            aTargets: [ 6 ]
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
                });
            }else{
                 $("#datatamu").DataTable()
            }
        }
    })
}

function viewimage(ektp, selfie) {
    $('#modal-image').modal('show')
    $('#img-ektp').attr("src", ektp)
    $('#img-selfie').attr("src", selfie)
}
