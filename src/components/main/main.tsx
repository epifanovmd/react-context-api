import * as React from "react";
import "./styles.scss";
import {Context, IStore} from "../../store/provider/provider";

interface IProps {
}

export class Main extends React.Component<IProps> {
  public render(): JSX.Element {

    const toggle = ({isActive, toggleActive}: IStore): JSX.Element => (
      <div>
        <p>{`isActive: ${isActive}`}</p>
        < button onClick={toggleActive}>{"Toggle"}</button>
      </div>
    );

    return (
      <Context.Consumer>
        {toggle}
      </Context.Consumer>
    );
  }
}
