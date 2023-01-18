console.log('You are running jQuery version: ' + $.fn.jquery);
$(document).ready(function(){
    load()
});

function load(){

    $.ajax({
        type: 'post',
        dataType: 'json',
        url: 'loadsurvey',
        success: function(result){
            let data = result.data;
            let code = result.code;

            if(code){
                var dt = $('#datasurvey').DataTable({
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
                        { 'mDataProp': 'nomor'},
                        { 'mDataProp': 'jenis_kelamin', 'width':'10'},
                        { 'mDataProp': 'pendidikan'},
                        { 'mDataProp': 'pekerjaan'},
                        { 'mDataProp': 'emot', 'width':'10', 'class':'text-center'},
                        { 'mDataProp': 'create_date'},
                    ],
                    order: [[0, 'ASC']],
                    fixedColumns: true,
                    aoColumnDefs:[
                        { width: 50, targets: 0 },
                        {
                            mRender: function ( data, type, row ) {
                                if(type == 'display'){
                                    
                                    let icon = ''
                                    switch (data) {
                                        case '1':
                                            icon = '<i class="bx bx-smile text-success font-size-24""></i>'
                                            break;
                                        case '2':
                                            icon = '<i class="bx bx-meh text-info font-size-24"></i>'
                                            break;
                                        case '3':
                                            icon = '<i class="bx bx-sad text-danger font-size-24""></i>'
                                            break;
                                    }
                                    console.log(icon);
                                    return icon
                                }
                                return data;
                            },
                            
                            aTargets: [ 5 ]
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
                 $("#datasurvey").DataTable()
            }
        }
    })
}
