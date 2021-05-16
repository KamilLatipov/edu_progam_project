const dropdownElem = document.getElementsByClassName('dropdown__hidden-part');
let i;
for (i = 0; i < dropdownElem.length; i++) {
    initDropdown(dropdownElem[i]);
}

function initDropdown(dropdownItem) {
    const inputFieldValues = dropdownItem.getAttribute('data-input-field').split(';');
    const paramArray = dropdownItem.getAttribute('data-parameters').split(';');
    const clearBtn = dropdownItem.getAttribute('data-clear-btn');

    addDropdownParameters(paramArray, dropdownItem);
}

function addDropdownParameters(paramArray, dropdownItem) {
    let parameter;

    for (i = 0; i < paramArray.length; i++) {
        parameter = createDropdownParamElem(paramArray[i]);
        dropdownItem.append(parameter);
    }
}

function createDropdownParamElem(paramArrayItem) {
    let parameter
    parameter = document.createElement('li');
    parameter.innerText = paramArrayItem;

    return (parameter);
}