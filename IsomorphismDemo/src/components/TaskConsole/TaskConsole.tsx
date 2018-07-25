import * as React from "react";
import { addAction, IStudentAction } from "graphlabs.core.notifier";
import { connect, Dispatch } from "react-redux";

import { RootState } from "../../redux/rootReducer";
import * as styles from "../../styles/TaskConsole.scss";



interface TaskConsoleProperties {
    actions: Array<IStudentAction>;
}

interface TaskConsoleState extends React.ComponentState {
}

class TaskConsole extends React.Component<TaskConsoleProperties, TaskConsoleState> {
    public constructor(props: TaskConsoleProperties) {
        super(props);
    }

    public render() {
        console.log(this.props.actions);
        var actions = this.props.actions.map(i => {
            let date = new Date(+(i.datetime.replace(/\s/g, '')));
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            let message = i.message;
            let result = hours + ':' + minutes + ':' + seconds + '  : ' + message;
            return <div>{result}</div>;
        });
//This is the rest of console
        return (<div className={styles.Console}>
            {actions}

        </div>);
    }

}

const mapStateToProps = (state: RootState): {} => {
    return {
        actions: state.notifier.studentActions
    };
};

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {
    return {
    };
};

export default connect<TaskConsoleState, TaskConsoleProperties, {}>(mapStateToProps, mapDispatchToProps)(TaskConsole);

