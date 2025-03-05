import './App.css';

function Info() {
    return (
        <div className="bg">
            <div className="container">
                <div className="square">
                    <h2>Info</h2>
                    <input type="text" name="login" placeholder="Login" className="input" />
                    <input type="text" name="password" placeholder="Password" className="input" />
                    <button className="button">Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Info;