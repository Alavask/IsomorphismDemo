import * as React from "react";
import * as classnames from "classnames";

import * as style from "../../styles/ToolButton.scss";
// import * as console from "console";

export interface ToolButtonProperties {
  path: string,
  listener: () => void
}

export class ToolButton extends React.Component<ToolButtonProperties, React.ComponentState> {

  public constructor() {
    super();
  }

  render() {
    return (<button className={classnames("btn btn-success", style.ToolButton)} onClick={this.props.listener}>
      <img src={this.props.path}/>
    </button>);
  }
}