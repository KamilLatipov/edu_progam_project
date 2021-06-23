import { rotateArrow } from '../arrow-rotate/arrow-rotate';

const expandableCheckboxLists = document.getElementsByClassName('expandable-checkbox-list');
Array.from(expandableCheckboxLists).forEach((expandableCheckboxList) => {
  initExpCheckboxList(expandableCheckboxList);
});

function initExpCheckboxList(list) {
  const listTitle = list.getElementsByClassName('expandable-checkbox-list__wrapper');
  const listMenu = list.getElementsByClassName('expandable-checkbox-list__menu');
  const arrow = document.getElementsByClassName('expandable-checkbox-list__arrow');

  listTitle[0].addEventListener('click', handleListTitleClick);

  function handleListTitleClick() {
    listMenu[0].classList.toggle('expandable-checkbox-list__menu--hidden');
    rotateArrow(arrow);
  }
}
