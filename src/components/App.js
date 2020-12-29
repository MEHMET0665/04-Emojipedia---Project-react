import emojipedia from '../emojipedia'
import Entry from './Entry';

  function App() {
    console.log(emojipedia)
    return (
      <div className="dictionary"> 
      {emojipedia.map(item=><Entry name={item.name} id={item.id} meaning={item.meaning} emoji={item.emoji}/>)}
     </div>
    )
  }
export default App