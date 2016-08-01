/* @flow */
import { connect } from 'react-redux';
import Root from '../components/page/Root';

const mapStateToProps = state => ({
  categories: state.categories,
});

const LayoutCtrl = connect(
  mapStateToProps
)(Root);

export default LayoutCtrl;
