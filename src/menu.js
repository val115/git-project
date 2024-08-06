$(document).ready(function () {
  $('.nav a[href^ = "#"]').click(function()   { //выбрать ссылки из меню
    var offset = $('.nav').innerHeight();  //высота меню, получаем динамически
    var target = $(this).attr('href');     //Сохраняем значение атрибута href
    $('html, body').animate({
      scrollTop: $(target).offset().top  * offset  //вычеслить высоту
    }, 500) //время анимации

    $('.nav a[href^ = "#"]').removeClass('active');     //удаляем класс active
    $(this).addClass('active');   //к активной ссылке добавляем класс active
    return false;
  
  })
})