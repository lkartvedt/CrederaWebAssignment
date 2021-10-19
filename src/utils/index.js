/**
 * Function which accepts a DOM node and removes all of its child nodes
 */

export const removeChildNodes = (node) => {
  while (node.firstChild) {
    node.removeChild(node.lastChild);
  }
};
