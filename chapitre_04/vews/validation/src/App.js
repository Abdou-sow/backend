import 'bootstrap/dist/css/bootstrap.min.css';
import Formuler from './components/Formuler';
import Users from './components/Users';


function App() {

  return (
    <div>
      <div className="container">
        <div className="row">
          <h1>validation</h1>
          <div className="col-6">
            <Formuler />
          </div>
          <div className="col-6">
            <Users />
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
