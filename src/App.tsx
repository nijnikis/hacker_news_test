import React from 'react'

import { StoriesList } from './components/StoriesList/StoriesList'
import { Bg } from './components/Bg/Bg'

const App: React.FC = () => {
  return (
      <div className="page">
        <Bg/>
        <div className="container" >
          <StoriesList/>
        </div>
      </div>
  );
}

export default App;
