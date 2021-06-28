const pieChart = document.getElementsByClassName('pie-chart');
const pieChartCircle = pieChart[0].getElementsByClassName('pie-chart__circle');
const pieChartArcs = pieChart[0].getElementsByClassName('pie-chart__arc');
const sumAmount = pieChartCircle[0].dataset.sumAmount;


initPieChart(pieChartArcs, sumAmount);

function initPieChart(pieChartArcs, sumAmount) {
    let arcLength = 0;
    let distanceFromTheStart = 0;

    for (let i = 0; i < pieChartArcs.length; i++) {
        distanceFromTheStart = calcDistanceFromTheStart(pieChartArcs, i, sumAmount, arcLength);
        arcLength = getArcLength(pieChartArcs[i], sumAmount);
        setArcLength(pieChartArcs[i], arcLength - 2, distanceFromTheStart);
    }
}

function getArcLength(pieChartArc, sumAmount) {
    let amount = pieChartArc.dataset.amount;
    let length = 0;

    length = calcLengthFromAmount(amount, sumAmount);
    return (length);
}

function calcLengthFromAmount(amount, sumAmount) {
    return (364 / sumAmount * amount);
}

function setArcLength(arc, length, distanceFromTheStart) {
    if (length < 0)
        length = 0;
    arc.setAttribute('stroke-dasharray', `${length}, 364`);
    arc.setAttribute('stroke-dashoffset', `${distanceFromTheStart}`);
}

function calcDistanceFromTheStart(arcs, i, sumAmount, prevLength) {
    let distanceFromTheStart;

    if (i >= 2) {
        distanceFromTheStart = getArcLength(pieChartArcs[i - 1], sumAmount) + getArcLength(pieChartArcs[i - 2], sumAmount);
        distanceFromTheStart *= -1;
    }
    else {
        distanceFromTheStart = prevLength * -1;
    }
    return (distanceFromTheStart);
}