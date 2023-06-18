import React from "react";
import styleModule from "./index.module.css";

function Dialog(props) {
  const children = React.Children.toArray(props.children);
  const content = children.filter((item) => item.props.slot === "content");
  const footer = children.filter((item) => item.props.slot === "footer");
  return (
    <div className={styleModule.back}>
      <div className={styleModule.wrapper}>
        <div className={styleModule.header}>
          <div>{props.title}</div>
          <div>X</div>
        </div>
        <div>{content}</div>
        <div>{footer}</div>
      </div>
    </div>
  );
}

Dialog.defaultProps = {
  title: "温馨提示",
};

export default Dialog;
