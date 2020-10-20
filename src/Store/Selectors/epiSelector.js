import {createSelector} from 'reselect';
import _ from 'lodash';

export const getEpi = createSelector([(state) => state], (state) => {
  return _.chain(state.epi.epiList)
    .map()
    .sortBy((epi) => epi.id)
    .value();
});
