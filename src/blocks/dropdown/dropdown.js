const dropdowns = document.getElementsByClassName('dropdown');
let i;
for (i = 0; i < dropdowns.length; i++) {
    initDropdown(dropdowns[i]);
}

function initDropdown(dropdown) {
    const inputField = dropdown.getElementsByClassName('dropdown__input-field');
    const inputFieldValues = inputField[0].getAttribute('data-input-field').split(';');
    const inputFieldPlaceholder = inputField[0].getAttribute('data-placeholder');
    const dropdownParams = dropdown.getElementsByClassName('dropdown__parameter');
    let paramValues = [];

    Array.from(dropdownParams).forEach(function(dropdownParam, index) {
        paramValues[index] = getParamValue(dropdownParam);
    });

    if (!checkTotalAmountIsZero(paramValues)) {
        inputField[0].placeholder = inputFieldPlaceholder;
    }
    else {
        inputField[0].placeholder = fillInputField(paramValues, inputFieldValues);
    }
}

function getParamValue(dropdownParam) {
    const paramNumValueElem = dropdownParam.getElementsByClassName('dropdown__num-value');
    const value = paramNumValueElem[0].innerHTML;

    return (value);
}

function checkTotalAmountIsZero(paramValues) {
    let count = 0;

    paramValues.forEach(function(value) {
        count += parseInt(value);
    })
    return (count);
}

function fillInputField(paramValues, inputFieldValues) {
    let inputField = '';
    let sumAmount = 0;
    let suitableTextForm = '';
    let isComma = '';
    if (inputFieldValues.length < paramValues.length) {
        for (let i = 0; i < paramValues.length - 1; i++) {
            sumAmount += paramValues[0];
        }
        suitableTextForm = findSuitableTextForm(inputFieldValues[0], sumAmount);
        inputField = `${sumAmount} ${inputFieldValues[0]}, ` + inputField;
        suitableTextForm = findSuitableTextForm(inputFieldValues[1], paramValues[i]);
        inputField = `${paramValues[i]} ${inputFieldValues[1]}` + inputField;
    }
    else {
        for (let i = 0; i < paramValues.length; i++) {
            if (paramValues[i] != '0' && inputField != '')
                isComma = ',';
            else
                isComma = '';
            suitableTextForm = findSuitableTextForm(inputFieldValues[i], paramValues[i]);
            inputField += isComma + ' ';
            inputField = inputField + suitableTextForm;
        }
    }
    inputField = editInputField(inputField);
    return (inputField);
}

function findSuitableTextForm(textForms, paramValue) {
    textForms = textForms.split(',');
    paramValue = parseInt(paramValue);
    if (paramValue == 0) {
        return ('');
    }
    if (paramValue > 20) {
        paramValue = paramValue % 10;
        return (`${paramValue} ` + getSuitableForm(paramValue, textForms));
    }
    else {
        return (`${paramValue} ` + getSuitableForm(paramValue, textForms));
    }
}

function getSuitableForm(paramValue, textForms) {
    let suitableTextForm = '';
    switch (paramValue) {
        case 1:
            suitableTextForm = textForms[0];
            break;
        case 2:
        case 3:
        case 4:
            suitableTextForm = textForms[1];
            break;
        default:
            suitableTextForm = textForms[2];
    }
    return (suitableTextForm);
}

function editInputField(inputField) {
    let editedText = '';
    console.log(inputField.length);
    if (inputField.length > 25) {
        editedText = inputField.slice(0, 22);
        editedText += '...';
    }
    return (editedText);
}