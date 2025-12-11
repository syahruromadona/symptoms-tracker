 export function ShowPercentage ({todos}) {
    
    const doneCount = todos.filter(t => t.completed).length
    const donePercentage = ((doneCount/todos.length)*100).toFixed(0)
    
    if (doneCount > 0){
      return <h4> You have done {donePercentage}% number of stuff</h4>
    } else {
      return ''
    }
  }
