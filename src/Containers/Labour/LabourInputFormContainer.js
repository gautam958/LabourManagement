import LabourInputForm from '../../Components/LabourInputForm';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
    ...state,
});
const mapDispatchToProps = (dispatch) => ({
});
export default connect(mapStateToProps, mapDispatchToProps)(LabourInputForm);