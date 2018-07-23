import { connect } from 'react-redux';
import FilterList from '../component/FilterList';
import todosAPI from '../api/TodoResourseAPI';
const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos,
    statusOfList: state.statusOfList
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFilterTodos: statusOfList => {
     todosAPI.filerByStatus(statusOfList,dispatch);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterList);
