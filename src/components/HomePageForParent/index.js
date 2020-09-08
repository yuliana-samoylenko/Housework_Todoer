import React, { Component } from "react";
import UserPanel from '../UserPanel';
import TaskCard from '../TaskCard';
import NewTaskCard from '../NewTaskCard';
import { tasks } from '../../const';
import './homePageForParent.scss';

export default class HomePageForParent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [...tasks]
    };

    this.createNewTask = this.createNewTask.bind(this);
  }

  createNewTask(newTask) {
    this.setState({
      tasks: [...this.state.tasks, newTask],
    })
  }

  render() {
    return (
      <div>
        <main className="container">
          <article className="user-panel">
            <UserPanel role="parent" name="Jack" className=""/>
          </article>

          <article className="main-section">
            <nav>
              <ul className="navigation">
                <li className="navigation__item">
                  <button className="housework-item active-item-nav">Today’s housework</button>
                </li>
                <li className="navigation__item">
                  <button className="history-item">History</button>
                </li>
              </ul>
            </nav>

            <div>
              <ul className="tasks">
                {this.state.tasks.map((task, index) => (
                  <li key={index} className="task-item">
                    <TaskCard
                      reward={task.reward}
                      description={task.description}
                      color={task.color}
                    />
                  </li>
                ))}
                <li className="task-item">
                  <NewTaskCard addTaskToState={this.createNewTask}/>
                </li>
              </ul>
            </div>
          </article>

        </main>
        <footer className="footer">
        </footer>
      </div>
    )
  }
}