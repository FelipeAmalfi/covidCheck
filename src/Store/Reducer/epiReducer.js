import produce from 'immer';
import {epiConst} from '../Types/types';

const initialState = {
  epiList: {},
  loading: true,
  done: false,
  error: false,
};

const addItem = (draft, item, index) => {
  draft.epiList[index] = {id: index, name: item, checked: false};
};

export default (state = initialState, {type, payload}) => {
  produce(state, (draft) => {
    switch (type) {
      case epiConst.EPI_FETCHED: {
        const {epis} = payload;
        epis.forEach((item, index) => addItem.bind(null, draft, item, index));
        draft.loading = false;
        break;
      }
      case epiConst.EPI_UPDATED: {
        const {id, checked} = payload;
        draft.epiList[id].checked = checked;
        break;
      }
      case epiConst.EPI_DONE: {
        draft.epiList = {};
        draft.done = true;
        break;
      }
      case epiConst.EPI_FETCHED_FAILED: {
        draft.error = true;
        draft.loading = false;
      }
    }
  });
};
