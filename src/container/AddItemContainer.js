import { connect } from 'react-redux';
import AddItem from '../component/AddItem';
import todosAPI from '../api/TodoResourseAPI';
const mapStateToProps = (state, ownProps) => {
  return {
    statusOfList: state.statusOfList
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddItem: conetent => {
      todosAPI.add(conetent,dispatch);
      // dispatch(addItem(todo));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddItem);
