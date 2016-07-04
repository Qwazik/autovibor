//ajax message
	    $('form').submit(function(){
	    var dataForm = $(this).serialize();
	    $.ajax({
	        method : 'POST',
	        url: '../mail.php',
	        data: dataForm
	    })
	    .success(function() {
	        alert('Спасибо за сообщение! Мы с вами обязательно свяжемся.')
	    });
	    return false;
	})

//slide anchor
jQuery(document).ready(function() {
    jQuery("a.scrollto").click(function () {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
        return false;
    });


    $('#mainTabs .tabs-nav li').click(function(){
    	$(this).addClass('active').siblings().removeClass('active');
    	var data = $(this).find('a').attr('href');
    	$(this).closest('#mainTabs').find('.tab-content').hide();
    	console.log(data);
    	$(this).closest('#mainTabs').find('.tab-content'+data+'').fadeIn(300);
    	return false;
    })
    var time = new Date();
    var dayNames = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    var monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    $('#time .day').text(dayNames[time.getDay() - 1]+', ');
    $('#time .day-num').text(time.getDate()+' ');
    $('#time .day-month').text(monthNames[time.getMonth()]+' ');
    $('#time .day-year').text(time.getFullYear());
});

