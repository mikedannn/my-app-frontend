import './App.css';

function Login() {

  return (

    <div>
        <img className="travelPicture" src="plane-pic.jpg"/>

        <div className="loginForm">
        {/* <h3 className='loginFormTitle'>Login</h3> */}
            <form>
                <input 
                    type='text'
                    name='name' 
                    placeholder='Username' 
                    //   value={newHousewife.name}
                    //   onChange={handleChange}
                    required
                />
                <input 
                    type='text' 
                    name='password' 
                    placeholder='Password' 
                    //   value={newHousewife.image}
                    //   onChange={handleChange}
                    required
                />
                <button className='formButton' type='submit'>Log in</button>
                <button className='formButton' type='submit'>Sign up</button>

            </form>
        </div>
    </div>
  );
}

export default Login;