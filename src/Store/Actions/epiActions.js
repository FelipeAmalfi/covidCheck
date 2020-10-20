import {epiConst} from '../Types/types';

export function fetchEpis() {
  axios.get('https://my.api.mockaroo.com/items?key=52d6c330');
}

export function setChecked(id, checked) {
  return {
    type: epiConst.EPI_UPDATED,
    payload: {id, checked},
  };
}

export function clearList() {
  return {
    type: epiConst.EPI_CLEAR,
  };
}
