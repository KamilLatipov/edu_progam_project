const $firstInput = $('.js-separated-datepicker__first');
const $secondInput = $('.js-separated-datepicker__second');

$firstInput.datepicker({
    prevHtml: '<div class=datepicker__nav-arrow>arrow_back</div>',
    nextHtml: '<div class=datepicker__nav-arrow>arrow_forward</div>',
    toggleSelected: 'false',
    range: true,
    multipleDatesSeparator: ' - ',
    clearButton: true,
    onSelect: function (fd, d, picker) {
        $firstInput.val(fd.split("-")[0]);
        $secondInput.val(fd.split("-")[1]);
    }
})

$secondInput.on('click', handleSecondInputClick);

function handleSecondInputClick() {
    $firstInput.data('datepicker').show();
}

const airDatepicker = document.getElementsByClassName('datepicker');

if (airDatepicker[0]) {
    const airDatepickerButtons = airDatepicker[0].getElementsByClassName('datepicker--buttons');
    addApplyButton(airDatepickerButtons[0]);
}

function addApplyButton(buttonsElem) {
    const applyButton = document.createElement('div');
    applyButton.classList.add('datepicker--button-apply');
    applyButton.innerHTML = 'Применить';
    buttonsElem.append(applyButton);
}