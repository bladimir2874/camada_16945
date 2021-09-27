import {useState,useEffect} from 'react'
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import Container from "react-bootstrap/Container"


const App = () => {
    
    const [contador, setContador] = useState(0)


    //useEffect(a,[])
    useEffect(()=>{

        console.log("Soy un efecto")
        //depende el efecto que escribas, vas a querer que pase una sola vez y no por cada render

    },[])

    //const resultado = useState(0)
    //let [contador, setContador] = resultado

    //let contador = 0
    //let contador = resultado[0]
    //let setContador = resultado[1]

    //console.log(resultado)
    
    const aumentar = () => {
        //contador = contador + 1
        //console.log(contador)
        //setContador(contador++)
        setContador(contador + 1)
    }

    return (
        <>
            <Header/>
            <Container fluid>
            <p>El contador va : {contador}</p>
            <button onClick={aumentar} >sumar</button>
            </Container>
        </>
    )
}

export default App