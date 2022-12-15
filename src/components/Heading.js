function Heading(props){

    console.log(props)

    const jsx = <h2>Goodbye World</h2>
  
    return <><h1>{props.cheese}</h1><h3>{props.bread}</h3></>
  }

export default Heading
// same thing as module.exports = Heading