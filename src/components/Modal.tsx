import React from "react";
import ReactDOM from "react-dom";

class Modal extends React.Component {
  private root = document.getElementById("modal");
  private el: Element;
  constructor(props: any) {
    super(props);
    this.el = document.createElement("div");
  }
  componentDidMount() {
    this.root?.appendChild(this.el);
  }
  componentWillUnmount() {
    this.root?.removeChild(this.el);
  }
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    );
  }
}

export default Modal;
