http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/


## mount -->
* constructor()
* static getDerivedStateFromProps(props, state);
* Render()  *****
* UNSAFE_ componentWillMount()
* update DOM n Refs
* ComponentDidMount()

## update -->
* UNSAFE_ componentWillReceiveProps(nextProps)
* static getDerivedStateFromProps(props, state);
* shouldComponentUpdate(nextProps, nextState)
* Render()  *****
* getSnapshotBeforeUpdate(prevProps, prevState)
* UNSAFE_ componentWillUpdate(nextProps, nextState)
* update DOM n Refs
* ComponentDidUpdate(prevProps)

## unmount -->
* ComponentWillUnmount()

## Error Handling
These methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.

* static getDerivedStateFromError(error)
* componentDidCatch()

componentDidCatch(error, info) {

    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App

    logComponentStackToMyService(info.componentStack);
	
  }