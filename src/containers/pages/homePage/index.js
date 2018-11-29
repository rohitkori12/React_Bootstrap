import { connect } from 'react-redux';
import HomePage from './HomePage';
import { homeSelector } from '../../../store/selectors/homeSelectors';
import { logoutUser } from '../../../store/actions/authActions';

const mapStateToProps = state => ({
  homePageData: homeSelector(state).homePageData
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
});
export default connect(
  null,
  mapDispatchToProps
)(HomePage);
