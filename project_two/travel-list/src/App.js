import { useState } from 'react'
import Form from './Form.js'
import Logo from './Logo.js'
import PackingList from './PackingList.js'
import Stats from './Stats.js'

export default function App () {
  const [items, setItems] = useState([])

  function handleAddItem (item) {
    setItems(items => [...items, item])
  }

  function deleteItem (id) {
    setItems(items => items.filter(items => items.id !== id))
  }

  function toggleItem (id) {
    setItems(items =>
      items.map(item =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    )
  }

  function deleteList(){
    if(items.length!==0){
    const confirmed = window.confirm("Are you sure?")
    if(confirmed) setItems([]);}
  }
  return (
    <div className='app'>
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={deleteItem}
        onToggleItem={toggleItem}
        onDeleteList={deleteList}
      />
      <Stats items={items} />
    </div>
  )
}







