https://reactjs.org/docs

Advanced Concepts:
* Code Splitting(https://reactjs.org/docs/code-splitting.html)
  React.lazy, Suspense, MyErrorBoundary,Named Exports
* Context(https://reactjs.org/docs/context.html)
  React.createContext('defaultValue');
* Error Boundaries

>NOTE:
Error boundaries do not catch errors for:

* Event handlers (learn more)
* Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
* Server side rendering
* Errors thrown in the error boundary itself (rather than its children)
