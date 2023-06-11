import React from "react";

function DemoOne(props) {
  console.log(props.children);
  // chidlren的类型：
  // 没有传子组件的时候：undefined
  // 传进来一个子元素：对象
  // 传来多个子元素： 数组

  // let { children } = props;
  // if (!children) {
  //   children = [];
  // } else if (!Array.isArray(children)) {
  //   children = [children];
  // }

  // 或者
  const children = React.Children.toArray(props.children)


  // 默认插槽
  // return (
  //   <div
  //     style={{
  //       width: "200px",
  //       height: "200px",
  //       backgroundColor: '#bfa'
  //     }}
  //   >
      
  //     {/* 多个插槽的处理办法  先给children变成数组，再分别渲染 */}
  //     {children[0]}
  //     <div>----------------------</div>
  //     {children[1]}
  //   </div>
  // );


  // 具名插槽  需要自己实现

  // 分别拿出这两个child，这样就不需要调用的时候按顺序传入子元素了
  const header = children.filter(item => 
      item.props.slot === 'header'
    )
  const footer = children.filter(item => 
      item.props.slot === 'footer'
    )
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: '#bfa'
      }}
    >
      {header}
      <div>----------------------</div>
      {footer}
    </div>
  );
}

export default DemoOne;
