https://reactjs.org/docs

# Advanced Concepts:
# Code Splitting(https://reactjs.org/docs/code-splitting.html)
  React.lazy, Suspense, MyErrorBoundary,Named Exports
# Context(https://reactjs.org/docs/context.html)
  React.createContext('defaultValue');
# Error Boundaries
NOTE: Error boundaries do not catch errors for:

* Event handlers (learn more)
* Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
* Server side rendering
* Errors thrown in the error boundary itself (rather than its children)
 
*static getDerivedStateFromError() or componentDidCatch()*

# React.forwardRef
Note

* The second ref argument only exists when you define a component with React.forwardRef call. 
* Regular function or class components don’t receive the ref argument, and ref is not available in props either.
* Ref forwarding is not limited to DOM components. You can forward refs to class component instances, too.
## Forwarding refs in higher-order components--> Good Concept
