https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization


>> >> import memoize from "memoize-one";
>> 
>> class Example extends Component {

>>   // State only needs to hold the current filter >> text value:

>>   state = { filterText: "" };
>> 
>>   // Re-run the filter whenever the list array or >> filter text changes:

>>   filter = memoize(
>>     (list, filterText) => list.filter(item => >> item.text.includes(filterText))
>>   );
>> 
>>   handleChange = event => {
>>     this.setState({filterText:event.target.value });
>>   };
>> 
>>   render() {
>>
>>     // Calculate the latest filtered list. If  these arguments haven't changed
>>     // since the last render, `memoize-one` will reuse the last return value.
>>   
>>  const filteredList = this.filter(this.props.list, this.state.filterText);
>> 
>>     return (
>>       <Fragment>
>>         <input onChange={this.handleChange} value=>> {this.state.filterText} />
>>         <ul>{filteredList.map(item => <li key=>> {item.id}>{item.text}</li>)}</ul>
>>       </Fragment>
>>     );
>>   }
>> }




When using memoization, remember a couple of constraints:

In most cases, you’ll want to attach the memoized function to a component instance. This prevents multiple instances of a component from resetting each other’s memoized keys.

Typically you’ll want to use a memoization helper with a limited cache size in order to prevent memory leaks over time. (In the example above, we used memoize-one because it only caches the most recent arguments and result.)

None of the implementations shown in this section will work if props.list is recreated each time the parent component renders. But in most cases, this setup is appropriate.