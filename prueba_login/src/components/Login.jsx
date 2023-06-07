import { useState } from "react"

const Login = ({ setemail, setpassword, password, email, setlogued, logued }) => {
  const [data, setdata] = useState([]);

  //Peticion al endpoint
  const obtenerdatos = async () => {

    try {

      const response = await fetch("http://localhost:8081/", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email })
      });

      const response_json = await response.json()
      setdata(response_json);

      if (response_json.length > 0) {
        (response_json[0].password == password) ? setlogued(true) : alert("Contraseña incorrecta")
      } else {
        alert("Usuario no existe");
      }
    } catch (error) {
      console.log("Error ", error);
    }

  }


  //ejecutar
  const handlesubmit = async (e) => {
    e.preventDefault();
    await obtenerdatos();
  };


  return (

    <>
      <h1>Login</h1>
      <form action="" method="post">
        <input type="text"
          name={email}
          id=""
          placeholder="Email"
          onChange={e => (setemail(e.target.value))}
        /><br /><br />

        <input
          type="text"
          name={password}
          id=""
          placeholder="Password"
          onChange={e => (setpassword(e.target.value))}
        /><br /><br />
        <input type="submit" value="Iniciar Sesion"
          onClick={e => handlesubmit(e)}
        />
      </form>
    </>

  )
}

export default Login