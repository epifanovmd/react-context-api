import React, {Component} from "react";

interface IProps {
}

export interface IStore {
  isActive: boolean;
  toggleActive: () => void;
}

const initialState: IStore = {
  isActive: false,
  toggleActive: Function,
};
export const Context = React.createContext<IStore>(initialState);

export class Provider extends Component<IProps, IStore> {
  constructor(props: IProps) {
    super(props);
    this.state = initialState;
  }

  public render(): JSX.Element {
    const value = {
      isActive: this.state.isActive,
      toggleActive: this.toggleActive,
    };

    return (
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>
    );
  }

  private toggleActive = (): void => {
    this.setState((state) => ({isActive: !state.isActive}));
  };
}
