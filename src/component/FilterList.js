import React, {Component} from 'react';
import classNames from 'classnames';
import Todo from '../model/Todo'
import {
    BrowserRouter,
    Route
} from 'react-router-dom'
import TodoList from "../container/TodoListContainer";
export default class FilterList extends Component {

    render() {
        return (

            <BrowserRouter>
                <div>
                    <Route exact path="/" component={TodoList}></Route>
                    <Route path="/:status" component={TodoList}></Route>
                    <ul className="filters">
                        <li><a
                            href="/all"
                            data-filter="all"
                            className={classNames({
                                selected: this.statusOfList === Todo.ALL
                            })}
                        >
                            ALL
                        </a></li>
                        <li>

                            <a
                                href="/active"
                                data-filter="active"
                                className={classNames({
                                    selected: this.statusOfList === Todo.ACTIVE
                                })}
                            >
                                Active
                            </a>
                        </li>
                        <li>
                            <a
                                href="/completed"
                                data-filter="completed"
                                className={classNames({
                                    selected: this.statusOfList === Todo.COMPLETED
                                })}
                            >
                                Complete
                            </a>
                        </li>
                    </ul>
                </div>
            </BrowserRouter>
        );
    }
}
