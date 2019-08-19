## Forwarding Refs
NOTE:
* ref is not available in props either.
* Ref forwarding is not limited to DOM components. You can forward refs to class component instances, too.

* const ref = React.createRef();

* React.forwardRef((props, ref) => {
    return <div {...props} ref={ref}/>;
  });