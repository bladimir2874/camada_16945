import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

const App = () => {

    const mensaje = () => {
        console.log("Hola desde App!")
    }

    const saludo = "Hola desde App!"

    return (
        <>
            <Header 
                param1="Hola" 
                param2="Chau"
                param3={10}
                param4="http://placehold.it/400x400"
                param5={mensaje}
                param6={()=>{console.log("Hola Anonimo")}}
                param7={saludo}
            />
            <Main />
            <Footer param7={saludo}/>
        </>
    )
}

export default App