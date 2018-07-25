import * as React from "react";
import { addAction, IStudentAction } from "graphlabs.core.notifier";
import { connect, Dispatch } from "react-redux";

import { ToolButton } from "../ToolButton/ToolButton";
import * as style from "../../styles/ToolButtonList.scss";
import { RootState } from "../../redux/rootReducer";
import { Action } from "redux";

interface ToolButtonListProperties {
    addAction: (payload: IStudentAction) => Promise<Action>;
}

interface ToolButtonListState extends React.ComponentState {
}

class ToolButtonList extends React.Component<ToolButtonListProperties, ToolButtonListState> {

    //TODO: Add normal types to these variables (maybe Dictionary)
    public toolButtons: Object;

    componentWillMount() {
        this.toolButtons = {};
    }

    public constructor(props: ToolButtonListProperties) {
        super();
    }

    private setDefaultButtonList() {
        let list = {};
        list["/images/Help.png"] = () => {
            this.props.addAction({
                message: "Help required",
                fee: 0,
                datetime: Date.now().toLocaleString()
            })
        };
        list["/images/Complete.png"] = () => {
            this.props.addAction({
                message: "Task is complete",
                fee: 0,
                datetime: Date.now().toLocaleString()
            })
        };
        list["/images/DontTouch.png"] = () => {
            this.props.addAction({
                message: "DON'T TOUCH",
                fee: 1,
                datetime: Date.now().toLocaleString()
            })
        };
        return list;
    }

    private getList() {
        const result = [];
        const defaultList = this.setDefaultButtonList();
        for (const key in defaultList) result.push(<div key={key}><ToolButton path={key} listener={defaultList[key]} /></div>);
        for (const key in this.toolButtons) result.push(<ToolButton key={key} path={key} listener={this.toolButtons[key]} />);
        return <div className={style.ButtonList}>{result}</div>;
    }

    render() {
        return this.getList();
    }
}

const mapStateToProps = (state: RootState): {} => {
    return {
    };
};

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {
    return {
        addAction: payload => addAction(payload).then(res => dispatch(res))
    };
};

export default connect<ToolButtonListState, ToolButtonListProperties, {}>(mapStateToProps, mapDispatchToProps)(ToolButtonList);