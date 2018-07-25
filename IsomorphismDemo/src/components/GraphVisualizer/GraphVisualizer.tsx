import * as React from "react";
import CommonGraphAdapter from "../../adapters/CommonGraphAdapter";

export interface GraphVisualizerProperties {
}

export class GraphVisualizer extends React.Component<GraphVisualizerProperties, React.ComponentState> {

  public constructor() {
    super();
  }

  public render() {
    return <CommonGraphAdapter />;
  }
}