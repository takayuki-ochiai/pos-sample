// import { Record } from 'immutable';
import { CagegoryDbEntity } from '../initializer/dbEntities';
import { CATEGORY_ACTIONS } from '../react/actions/constants';
import GenBase from './GenBase';

const CategoryGen = new GenBase({
  name: '',
  metaData: null,
});

export default class Category extends CategoryGen {
  static fromJS(object = {}) {
    return (new this).merge({
      name: object.name,
      metaData: object.metaData,
    });
  }

  static get actions() {
    return CATEGORY_ACTIONS;
  }

  get actions() {
    return CATEGORY_ACTIONS;
  }

  createEntity() {
    return new CagegoryDbEntity(this.toJS());
  }
}
