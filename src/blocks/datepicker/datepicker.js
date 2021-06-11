let datepicker = document.getElementsByClassName('js-datepicker__input')

datepicker[0].value = '19 июн - 23 авг';

$('.js-datepicker__input').datepicker({
    range: true,
    multipleDatesSeparator: ' - ',
    dateFormat: 'd, M',
    onSelect: function (formattedDate, date, inst) {
        datepicker[0].value = datepicker[0].value.replace(/[\s.,%]/g, ' ')
    }
});
