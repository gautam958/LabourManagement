import React, { useEffect } from 'react';
import LabourInputFormContainer from './Containers/Labour/LabourInputFormContainer';
import ListTaskContainer from './Containers/Labour/ListTaskTypeContainer';
import environment from './Environments/environment';

function App(props) {

  useEffect(() => {

  }, []);

  return (
    <div>

      <h1 style={{ height: "90px", width: "150px", overflowx: "auto" }}>
        <img src="./Logo.png" alt="logo" />
        {environment.REACT_APP_appTitle}
      </h1>

      <div className="ui two column doubling stackable grid container">
        <div className="column">
          <LabourInputFormContainer />
        </div>
        <div className="column">
          <ListTaskContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
