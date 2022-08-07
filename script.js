$(document).ready(function(){
  var count_group = $(".list-img div").length;
  var list_color = ['#40BCBB', '#B58CD4','#BADEC0', '#9BD5E9', '#BADEC0'];
  if(count_group < 5){
    alert('Demo này chỉ chạy tốt khi có 5 hình trở lên! hay cân nhắc hoạc custom lại!');
  }
  var active = 1;
  function RemoveAllClass($id){
    $('#item_'+$id).removeClass('item');
    $('#item_'+$id).removeClass('item_0');
    $('#item_'+$id).removeClass('item_1');
    $('#item_'+$id).removeClass('item_2');
    $('#item_'+$id).removeClass('item_3');
    $('#item_'+$id).removeClass('item_4');
  }
  function Laod(){
    var item_none = active - 2 == -1 ? count_group - 1 :active - 2 == -2 ? count_group - 2 : active - 2;
    var item_0 =active-1 < 0 ? count_group - 1 : active - 1;
    var item_2 =active+1 >= count_group ? 0 :  active+1;
    var item_3 =active+2 == count_group +1 ? 1 :  active+2 == count_group ? 0 : active + 2;
    var item_none_2 =active + 3 == count_group + 2 ? 2 : active+3  == count_group +1 ? 1 :  active+3 == count_group ? 0 : active + 3;

    $('.bg-rotate').css('background-color', list_color[active]);
    $('.content .item').hide();
    $('#content_' + active).show();
    $('.dot div').removeClass('active');
    $('#dot_'+active).addClass('active');

    RemoveAllClass(active);
    $('#item_'+active).addClass('item_1');
    RemoveAllClass(item_0);
    $('#item_'+item_0).addClass('item_0');

    RemoveAllClass(item_none);
    $('#item_'+item_none).addClass('item');

    RemoveAllClass(item_2);
    $('#item_'+item_2).addClass('item_2');

    RemoveAllClass(item_3);
    $('#item_'+item_3).addClass('item_3');

    RemoveAllClass(item_none_2);
    $('#item_'+item_none_2).addClass('item_none_2');
    
  }
  Laod();
  $('#next').on('click', function(){
    active = active + 1 >= count_group ? 0 : active + 1;
    Laod();
  })
  $('#prev').on('click', function(){
    active = active - 1 < 0 ? count_group - 1 : active - 1;
    Laod();
  })
  // setInterval(Laod, 2500);
  });