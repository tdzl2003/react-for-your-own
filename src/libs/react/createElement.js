/**
 * Created by tdzl2003 on 3/26/17.
 */

export class ReactElement {
  // string (HTML DOM: TagName)
  // class (Component Class)
  type;

  props;

  key;

  ref;

  get children() {
    return this.props && this.props.children;
  }
}

export default function createElement(type, props, ...children) {
  const ret = new ReactElement();

  ret.type = type;
  ret.key = props && props.key || null;
  ret.ref = props && props.ref || null;

  if (children.length > 0) {
    if (children.length === 1) {
      ret.props = {
        ...props,
        children: children[0],
      };
    } else {
      ret.props = {
        ...props,
        children: children,
      };
    }
  } else {
    // length === 0
    ret.props = props;
  }
  return ret;
}
