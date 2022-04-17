var checkAll = document.getElementById('ckdCheckAll');

function checkAll() {
    $(document).ready(function () {
        $('#ckdCheckAll').click(function () {
          $('.checkBox').prop('checked', $(this).prop('checked'));
        });
    });
}

checkAll.addEventListener('click',checkAll);


/* var mybutton = document.getElementById("save_value");
mybutton.addEventListener('click', () => {
  $('#save_value').click(function () {
    var val = [];
    $(':checkbox:checked:not(#ckdCheckAll)').each(function (i) {
      val[i] = $(this).val();
  
    });
    if ('#save_value')
  
      alert(val);
  });
  $(document).ready(function () {
    $('#ckdCheckAll').click(function () {
      $('.checkBox').prop('checked', $(this).prop('checked'));
    });
  });
});  */