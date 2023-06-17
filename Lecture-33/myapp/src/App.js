import { React, useState} from 'react'
import Children from './Components/Children/Children'
import Todo from './Components/Todo/Todo'

const App = () => {

  return (
    <div>
      <Todo />
      {/* <Children>
          <div>Hello World</div>
          <p>Learning Children</p>
      </Children> */}
    </div>
  )
}

export default App