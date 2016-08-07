import { List } from 'immutable';
// import Category from '../../entities/category';
// import { CagegoryDbEntity } from '../../initializer/dbEntities';
import { CATEGORY_ACTIONS } from '../actions/constants';

const initialStateList = List([]);

const categories = (state = initialStateList, action) => {
  switch (action.type) {
    case 'SET_CATEGORY_TABLE_RECORDS': {
      return action.payload.list;
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
