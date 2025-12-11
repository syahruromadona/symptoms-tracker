import { useState } from "react";

export default function NewTodoForm (props) {
    props.onSubmit
   const [newItem, setNewItem] = useState("")
   
    function handleSubmit (e) {
    e.preventDefault()
    if (newItem === "") return
    props.onSubmit(newItem)
    setNewItem('');
  }
    
    
    return(
    <form onSubmit={handleSubmit} className='new-item-form'>
      <div className='form-row'>
        <label htmlFor='item'>Symptoms Trackers</label>
          <input value={newItem} onChange={e => setNewItem(e.target.value)} type='text' id='item'></input>
        <button className='btn' >Add Symptoms</button>
      </div>
  </form>
    )
}