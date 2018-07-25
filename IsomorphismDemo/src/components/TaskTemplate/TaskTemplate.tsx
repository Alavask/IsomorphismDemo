import * as React from "react";
import {GraphVisualizer} from "../GraphVisualizer/GraphVisualizer";
import {TaskToolbar} from "../TaskToolbar/TaskToolbar";
import TaskConsole from "../TaskConsole/TaskConsole";
import { GraphGenerator, IGraph, IVertex, IEdge } from "graphlabs.core.graphs";
import * as classnames from "classnames";
import {connect, DispatchProp} from "react-redux";
import {GraphLoader} from "../GraphLoader/GraphLoader";

import { StudentMark } from "../StudentMark/StudentMark";
import { actionsCreators } from "../../redux/graph/actions";
import * as style from "../../styles/TaskTemplate.scss";
import {RootState} from "../../redux/rootReducer";
import {Dispatch} from "redux";

export interface AppProperties {
  addVertex: (name: string) => void,
  addEdge: (one: string, two: string) => void
}

export interface AppState extends React.ComponentState {}

class TaskTemplate extends React.Component<AppProperties, AppState> {

  componentWillMount() {
      const graph1: IGraph<IVertex, IEdge> = GraphLoader.parseStr('{"id": [ { "vertex": [1,2,3], "edge": [1,2,2,3] }, {"vertex":["a", "b", "c"], "edge": ["a","b"]} ] }' , 0);
      graph1.vertices.forEach(v => this.props.addVertex(v.name));
      graph1.edges.forEach(e => this.props.addEdge(e.vertexOne.name, e.vertexTwo.name));

      const graph2: IGraph<IVertex, IEdge> = GraphLoader.parseStr('{"id": [ { "vertex": [1,2,3], "edge": [1,2,2,3] }, {"vertex":["a", "b", "c"], "edge": ["a","b"]} ] }' , 1);
      graph2.vertices.forEach(v => this.props.addVertex(v.name));
      graph2.edges.forEach(e => this.props.addEdge(e.vertexOne.name, e.vertexTwo.name));
  }

  public constructor(props: AppProperties) {
    super(props);
  }

  render() {
    return (
      <div id="wrap" className={style.App}>
        <div className={style.MainRow}>
          <div className={classnames(style.GraphCell, style.bordered)}>
            <GraphVisualizer/>
          </div>
          <div className={classnames(style.TaskCell, style.bordered)}>
            Задание
          </div>
          <div className={classnames(style.ToolCell, style.bordered)}>
            <TaskToolbar/>
          </div>
        </div>
        <div className={classnames(style.LeftBottom,style.bordered)}>
          <StudentMark />
        </div>
        <div className={classnames(style.LowRow,style.bordered)}>
          <TaskConsole/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): {}  => {
  return {
  };
};

const mapDispatchToProps = (dispatch: Dispatch<RootState>): AppProperties => {
  return {
    addVertex: (name: string) => dispatch(actionsCreators.addVertex(name)),
    addEdge: (one: string, two: string) => dispatch(actionsCreators.addEdge(one, two))
  };
};

export default connect<AppState, AppProperties, {}>(mapStateToProps, mapDispatchToProps)(TaskTemplate);