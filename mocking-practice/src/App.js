import './App.css';

function App() {
  return (
    <div className="bg">
      <div className="container">
        <div className="square">
          <h2>Login</h2>
          <input type="text" name="login" placeholder="Login" className="input" />
          <input type="text" name="password" placeholder="Password" className="input" />
          <button className="button">Login</button>
        </div>
      </div>
    </div>
  );
}

export default App;
