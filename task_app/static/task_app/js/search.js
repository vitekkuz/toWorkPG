var minlen = 1; // минимальная длина слова
var paddingtop = 30; // отступ сверху при прокрутке
var scrollspeed = 200; // время прокрутки
var keyint = 1000; // интервал между нажатиями клавиш
var term = '';
var n = 0;
var time_keyup = 0;
var time_search = 0;
var surname = '';
var term2 = '';



function dosearch() {
    term = jQuery('#spterm').val();
    $('#table_users').find('tr').each(function() {
        var td = $(this).children("td:first");
        surname = jQuery(this).find("td:first");
        surname = $(surname).html();
        if (surname)
            if (surname.indexOf(term) == -1)
                jQuery(this).css('visibility', 'collapse');

    })
};



jQuery('#spterm').keyup(function() {
    var d1 = new Date();
    time_keyup = d1.getTime();
    if (jQuery('#spterm').val() != term) // проверяем, изменилась ли строка
        if (jQuery('#spterm').val().length >= minlen) { // проверяем длину строки
            setTimeout(function() { // ждем следующего нажатия
                var d2 = new Date();
                time_search = d2.getTime();
                if (time_search - time_keyup >= keyint) // проверяем интервал между нажатиями
                    dosearch(); // если все в порядке, приступаем к поиску
            }, keyint);
        }
        else
            $('#table_users').find('tr').each(function() {
                jQuery(this).css('visibility', '');
                console.log('not collapse')
            })
});