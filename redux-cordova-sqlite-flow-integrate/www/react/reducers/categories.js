import { List } from 'immutable';
// import Category from '../../entities/category';
// import { CagegoryDbEntity } from '../../initializer/dbEntities';
import { CATEGORY_ACTIONS } from '../actions/constants';

const initialStateList = List([]);
// const category = (state, action) => {
//   switch (action.type) {
//     case CATEGORY_ACTIONS.ADD_CATEGORY:
//       return Category.fromJS({
//         name: action.payload.name,
//         metaData: action.payload.metaData,
//       });
//     default:
//       return state;
//   }
// };

const categories = (state = initialStateList, action) => {
  switch (action.type) {
    case 'SET_CATEGORY_TABLE_RECORDS': {
      return action.payload.list;
    }
    case CATEGORY_ACTIONS.ADD_CATEGORY: {
      console.log('add category');
      return state.push(action.payload.category);
    }
    default: {
      return state;
    }
  }
};

export default categories;
