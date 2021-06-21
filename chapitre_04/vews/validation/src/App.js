import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './components/Users';


function App() {

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1>validation</h1>
            <form>
              <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">username</label>
                <input type="text" class="form-control"></input>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Age</label>
                <input type="number" class="form-control"></input>
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">La ville de l'utilisateur</label>
                <input type="text" class="form-control"></input>
              </div>
              <button type="submit" class="btn btn-primary">valider</button>
            </form>
          </div>
          <div className="col-6">
            <h1>liste users</h1>
            <Users/>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
