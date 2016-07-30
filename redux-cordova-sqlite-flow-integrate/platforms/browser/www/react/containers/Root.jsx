/* @flow */
import { connect } from 'react-redux';
import Root from '../components/page/Root';

const mapStateToProps = state => {
  const a = 1;
  return {};
};

const LayoutCtrl = connect(
  mapStateToProps
)(Root);

export default LayoutCtrl;
