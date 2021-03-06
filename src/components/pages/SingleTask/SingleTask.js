import React, { PureComponent } from "react";
import { formatDate } from "../../../helpers/utils";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faCheck } from "@fortawesome/free-solid-svg-icons";
import EditTaskModal from "../../EditTaskModal/EditTaskModal";
import { connect } from "react-redux";
import { getSingleTask, removeTask } from "../../../store/actions";
import styles from "./singleTask.module.css";

class SingleTask extends PureComponent {
  state = {
    openEditModal: false,
  };

  componentDidMount() {
    const taskId = this.props.match.params.id;
    this.props.getSingleTask(taskId);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.editTaskSuccess && this.props.editTaskSuccess) {
      this.setState({
        openEditModal: false,
      });
    }
  }

  onRemove = () => {
    const taskId = this.state.task._id;

    fetch(`http://localhost:3001/task/${taskId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.error) {
          throw response.error;
        }

        this.props.history.push("/");
      })
      .catch((error) => {
        console.log("ToDo -> error", error);
      });
  };

  toogleEditModal = () => {
    this.setState({
      openEditModal: !this.state.openEditModal,
    });
  };

  render() {
    const { openEditModal } = this.state;
    const { task } = this.props;
    const historyPush = this.props.history.push;
    return (
      <>
        {!!task ? (
          <div className={styles.singleTaskContainer}>
            <h2>{task.title}</h2>
            <p>Description: {task.description}</p>
            <p>Date: {formatDate(task.date)}</p>
            <p>Created at: {formatDate(task.created_at)}</p>

            <Button variant="success">
              <FontAwesomeIcon icon={faCheck} />
            </Button>

            <Button
              variant="info"
              onClick={this.toogleEditModal}
              className={styles.editbtn}
            >
              <FontAwesomeIcon icon={faEdit} />
            </Button>

            <Button
              variant="danger"
              onClick={() =>
                this.props.removeTask(task._id, "single", historyPush)
              }
            >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </div>
        ) : (
          <h3>No task found !!!</h3>
        )}

        {openEditModal && (
          <EditTaskModal
            data={task}
            from="single"
            onSave={this.saveTask}
            onClose={this.toogleEditModal}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    task: state.task,
    editTaskSuccess: state.editTaskSuccess,
  };
};

const mapDispatchToProps = {
  getSingleTask,
  removeTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleTask);