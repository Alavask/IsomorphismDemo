import * as React from "react";
import * as styles from "../../styles/StudentMark.scss";

export interface StudentMarkProperties {
}

export interface StudentMarkState {
  mark: number,
  message: string
}

export class StudentMark extends React.Component<StudentMarkProperties, Partial<StudentMarkState>> {

  public constructor() {
    super();
    this.state = {
      mark: 50,
      message: ""
    }
  }

  private getStyle(): string {
    if (this.state.mark > 100) return "";
    if (this.state.mark > 75) return styles.MarkPositive;
    if (this.state.mark > 60) return styles.MarkNeutral;
    if (this.state.mark > 0) return styles.MarkNegative;
    return "";
  }

  public render() {
      /*for( var action : this.state.notifier.studentActions ){
          console.log( action );
      }*/
    return (<div className={styles.StudentMark}>
      <p className={this.getStyle()}>{this.state.mark} {this.state.message}</p>
    </div>
    );
  }
}