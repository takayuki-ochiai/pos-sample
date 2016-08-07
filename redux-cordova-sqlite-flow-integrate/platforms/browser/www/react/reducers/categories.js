import { List } from 'immutable';
// import Category from '../../entities/category';
// import { CagegoryDbEntity } from '../../initializer/dbEntities';
import { CATEGORY_ACTIONS } from '../actions/constants';

const initialStateList = List([]);

const categories = (state = initialStateList, action) => {
  switch (action.type) {
    case CATEGORY_ACTIONS.SET_LIST: {
      return action.list;
    }
    case CATEGORY_ACTIONS.ADD: {
      console.log('add category');
      return state.push(action.record);
    }
    default: {
      return state;
    }
  }
};

export default categories;
