import { connect } from 'react-redux';
import Fails from './fails.component';

const mapStateToProps = state => ({
  fails: state.app.fails,
});

export default connect(mapStateToProps)(Fails);
