let rangeSlider = document.getElementsByClassName('range-slider');
let rangeSliderInput = rangeSlider[0].getElementsByClassName('range-slider__input');
let FromToElem = rangeSlider[0].getElementsByClassName('range-slider__from-to');
let min = rangeSliderInput[0].getAttribute('data-min');
let max = rangeSliderInput[0].getAttribute('data-max');
let from = rangeSliderInput[0].getAttribute('data-from');
let to = rangeSliderInput[0].getAttribute('data-to');

$('.range-slider__input').ionRangeSlider({
    type: 'double',
    hide_min_max: true,
    hide_from_to: true,
    min: min,
    max: max,
    from: from,
    to: to,
    step: 100,
    onStart: function (data) {
        changeSliderFromToElem(data);
    },
    onChange: function (data) {
        changeSliderFromToElem(data);
    },
});

function changeSliderFromToElem (data) {
    FromToElem[0].innerHTML = data.from + '₽' + ' - ' + data.to + '₽';
}