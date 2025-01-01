export default function Stats ({ items }) {
    const length = items.length
    if(length===0)
      return <footer className='stats'>
    <em>
      Please add new Items, 🚀
    </em>
  </footer>
  
    const ready = items.filter(item => item.packed).length
    const percentage = Math.round((ready / length) * 100)
    return (
      <footer className='stats'>
        <em>
          {percentage === 100
            ? 'You are Ready to go, ✈️ '
            : `💼You have ${length} items on your list, and you already packed ${ready}(${percentage}%)`}
        </em>
      </footer>
    )
  }