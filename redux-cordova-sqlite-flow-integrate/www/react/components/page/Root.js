/* @flow */
import React from 'react';
import { sagaTake, addCategory } from '../../actions';
import Category from '../../../entities/category';

class Root extends React.Component {
  // onClickButton: Function;
  // props: {
  //   dispatch: (action: any) => void,
  // };
  constructor(props: Object) {
    super(props);
    this.onClickInsertButton = this.onClickInsertButton.bind(this);
  }

  onClickInsertButton() {
    this.props.dispatch(sagaTake());
    console.log('dbinsert start!!!');
    const rand = (Math.random() * 200);
    const newcategory1 = Category.fromJS({
      name: `My category ${rand}`,
      metaData: { rating: 1 },
    });
    if (newcategory1.save()) {
      this.props.dispatch(addCategory(newcategory1));
    }
  }

  render() {
    const categories = this.props.categories.map((category, index) =>
      <div key={index}>
        カテゴリ名: {category.name}<br />
        レーティング: {category.metaData.rating}
      </div>
    );
    return (
      <div>
        <div>ほげsss</div>
        <button onClick={this.onClickInsertButton}>insert data</button>
        {categories}
      </div>
    );
  }
}

export default Root;
