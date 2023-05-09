import React from "react";

export const getChildrenElementsNames = (children) => {
  const childrenElements = React.Children.map(children, (child) => {
    return child.type.name;
  });

  return childrenElements;
};
