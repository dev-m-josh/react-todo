import React, {useState} from 'react'

export default function NewTodoForm({onSubmit}) {
    const [newItem, setNewItem] = useState("");

    function handleSubmits(e) {
      e.preventDefault()
      if (newItem === "") return

    onSubmit(newItem)
        
    setNewItem("")
    }

  return (
    <form className="inputs" onSubmit={handleSubmits}>
    <div className='App'>
      <input value={newItem} onChange={e => setNewItem(e.target.value)} type='text' id= "item" placeholder='Type Todo...' />
      <button className='addBtn'>Add</button>
    </div>
    </form>
  )
}
