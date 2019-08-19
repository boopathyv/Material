# ERROR Boundaries
>> It works only for Class Component

>> ## Note:
>> 
>> Error boundaries do not catch errors for:
>> 
>> * Event handlers (learn more)
>> * Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
>> * Server side rendering
>> * Errors thrown in the error boundary itself (rather than its children)


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