/* @flow */
import React from 'react';
import { sagaTake } from '../../actions';
import { Category } from '../../../initializer/dbEntities';
class Root extends React.Component {
  // onClickButton: Function;
  // props: {
  //   dispatch: (action: any) => void,
  // };
  constructor(props: Object) {
    super(props);
    this.onClickButton = this.onClickButton.bind(this);
  }

  onClickButton() {
    this.props.dispatch(sagaTake());
    console.log("dbinsert start!!!")
    const newcategory1 = new Category({ name: "My category3" });
    newcategory1.metaData = { rating: 6 };
    persistence.add(newcategory1);
    persistence.flush();
  }

  render() {
    return (
      <div>
        <div>ほげsss</div>
        <button onClick={this.onClickButton}></button>
      </div>
    );
  }
}

// function Root() {
//   return (
//     <div>ほげほげ</div>
//   );
// }

export default Root;
