import ListTaskType from '../../Components/ListTaskType';
import { connect } from 'react-redux';
import { FetchTask } from '../../Services/Actions/LabourUserActions';

const mapStateToProps = (state) => ({
    ...state,
});
const mapDispatchToProps = (dispatch) => ({
    LoadList: (data) => dispatch(FetchTask(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ListTaskType);