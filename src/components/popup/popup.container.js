import { connect } from 'react-redux';
import { reset } from '../app/app.actions';
import Popup from './popup.component';

const mapStateToProps = (state, ownProps) => ({
  message: ownProps.message,
});

const mapDispatchToProps = dispatch => ({
  reset: () => dispatch(reset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
