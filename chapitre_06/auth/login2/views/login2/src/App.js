import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from "./components/Signup";

function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <h1>validation</h1>
          <div className="col-6">
            <Signup />
          </div>
          <div className="col-6">
            {/* <Users /> */}
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
