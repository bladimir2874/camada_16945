import Nav from "./Nav"

const Header = ({param1,param2,param3,param4,param5,param6,param7}) => {

    //const {param1,param2} = props
    //const param1 = props.param1;
    //const param2 = props.param2;

    //console.log(props)

    param5()

    setTimeout(param6,4000)

    console.log(param1)
    console.log(param2)
    console.log(param3)
    //console.log(props.param1)
    //console.log(props["param1"])
    //console.log(props[variable])

    return (
        <header>
            <h1>E-Commerce</h1>
            {param7}
            <img src={param4}/>
            <i className="material-icons">shopping_cart</i>
            <Nav/>
        </header>
    );
}

export default Header;