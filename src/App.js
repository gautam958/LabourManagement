import LabourInputFormContainer from "./Containers/Labour/LabourInputFormContainer";
import ListTaskContainer from "./Containers/Labour/ListTaskTypeContainer";

function App() {
  return (
    <div>
      <div className="ui header">
        <h1 className="ui header">First header</h1>
      </div>
      <div className="ui two column doubling stackable grid container">
        <div className="column">
          {/* <LabourInputForm /> */}
        </div>
        <div className="column">
          <ListTaskContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
