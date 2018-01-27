import React, { Component } from "react";
import ReduxContext from "./ReduxContext";

export default class Connect extends Component {
  static defaultProps = {
    mapStateToProps: state => {
      return state;
    }
  };
  render() {
    return (
      <ReduxContext.Consumer>
        {({ dispatch, state, actions }) => {
          const filteredState = this.props.mapStateToProps(state);
          const passedProps = {
            dispatch,
            state: filteredState,
            actions
          };
          if (this.props.render) {
            return this.props.render(passedProps);
          }
          return this.props.children(passedProps);
        }}
      </ReduxContext.Consumer>
    );
  }
}
