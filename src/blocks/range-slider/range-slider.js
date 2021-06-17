const rangeSlider = document.getElementsByClassName('range-slider');
const rangeSliderInput = rangeSlider[0].getElementsByClassName('js-range-slider__input');
const FromToElem = rangeSlider[0].getElementsByClassName('range-slider__from-to');
const min = rangeSliderInput[0].getAttribute('data-min');
const max = rangeSliderInput[0].getAttribute('data-max');
const from = rangeSliderInput[0].getAttribute('data-from');
const to = rangeSliderInput[0].getAttribute('data-to');

$('.js-range-slider__input').ionRangeSlider({
  type: 'double',
  hide_min_max: true,
  hide_from_to: true,
  min,
  max,
  from,
  to,
  step: 100,
  onStart(data) {
    changeSliderFromToElem(data);
  },
  onChange(data) {
    changeSliderFromToElem(data);
  },
});

function changeSliderFromToElem(data) {
  FromToElem[0].innerHTML = `${divideThousandthsFromRemainder(data.from)}₽ - ${divideThousandthsFromRemainder(data.to)}₽`;
}

function divideThousandthsFromRemainder(number) {
  const initNumber = number.toString();
  let dividedNumber = initNumber;
  if (number >= 1000) {
    dividedNumber = Math.floor(number / 1000);
    dividedNumber += ' ';
    dividedNumber += initNumber.substring(initNumber.length - 3);
    return dividedNumber;
  }
  return dividedNumber;
}
