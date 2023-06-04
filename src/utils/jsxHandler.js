const each = function (obj) {
  if (typeof obj !== "object")
    throw new Error("请传入对象");
  return Reflect.ownKeys(obj);
};

export function createElement(type, props, ...children) {
  const virtualDom = {
    $$typeof: Symbol("react.element"),
    key: null,
    ref: null,
    type: null,
    props: {},
  };
  virtualDom.type = type;
  if (props !== null) {
    virtualDom.props = { ...props };
  }
  if (children.length === 1) {
    virtualDom.props.children = children[0];
  } else {
    virtualDom.props.children = children;
  }  
  return virtualDom;
}

export const render = (virtualDom, container) => {
  const { type, props } = virtualDom;
  if (typeof type === "string") {
    const ele = document.createElement(type);
    const keys = each(props);
    for (const key of keys) {
      if (key === "className") {
        ele.className = props.className;
        continue;
      }
      if (key === "style") {
        const styles = each(props.style);
        for (let attr of styles) {
          ele.style[attr] = props.style[attr];
        }
        continue;
      }
      if (key === "children") {
        let children = props.children;
        if (!Array.isArray(children)) {
          children = [children];
        }
        children.forEach((child) => {
          if (/^(string|number)$/.test(typeof child)) {
            ele.innerText = child
            return;
          }
          render(child, ele);
        });
      }
      ele.setAttribute(key, props[key]);
    }

    container.appendChild(ele);
  }
};
