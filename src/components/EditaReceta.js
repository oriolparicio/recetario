import React from "react";

export default class EditaReceta extends React.Components {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.idReceta,
    };
  }

  render() {
    return;
    <>
      <h3>{this.state.id}</h3>
    </>;
  }
}
