const Index = ({ setlogued }) => {

  const cambiar = () => {
    setlogued(false)
  }
  return (
    <>
      <h1>Bienvenido estas en el Index</h1>
      <input type="button" value="regresar"
        onClick={cambiar}
      />
    </>
  )
}

export default Index