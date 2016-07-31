/* @flow */
import React from 'react';
import { sagaTake } from '../../actions';

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
