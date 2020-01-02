import React from "react";

/**
 * Abstract Title component for displaying H1 - H6s
 */
class Title extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    if (this.props.level === "1") {
      return (
        <h1 className={this.props.className}>{ this.props.text }</h1>
      );
    } else if (this.props.level === "2") {
      return (
        <h2 className={this.props.className}>{ this.props.text }</h2>
      );
    } else if (this.props.level === "3") {
      return (
        <h3 className={this.props.className}>{ this.props.text }</h3>
      );
    } else if (this.props.level === "4") {
      return (
        <h4 className={this.props.className}>{ this.props.text }</h4>
      );
    } else if (this.props.level === "5") {
      return (
        <h5 className={this.props.className}>{ this.props.text }</h5>
      );
    } else {
      return (
        <h6 className={this.props.className}>{ this.props.text }</h6>
      );
    }
  };
};

export default Title;
