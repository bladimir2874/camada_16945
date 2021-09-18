import Nav from './Nav';

const Footer = ({param7}) => {
    return (
        <footer>
            <p>&copy; Copyright 2021 - Horacio Gutierrez</p>
            {param7}
            <Nav />
        </footer>
    );
}

export default Footer;