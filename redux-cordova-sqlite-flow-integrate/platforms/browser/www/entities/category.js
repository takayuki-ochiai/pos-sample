import { Record } from 'immutable';
import { CagegoryDbEntity } from './../initializer/dbEntities';

const CategoryGen = Record({
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

  save() {
    console.log('save called!');
    const newcategory = new CagegoryDbEntity({
      name: this.name,
      metaData: this.metaData,
    });
    persistence.add(newcategory);
    persistence.flush((resolve, reject) => {
      console.log(resolve);
      console.log(reject);
    });
    return true;
  }
}
