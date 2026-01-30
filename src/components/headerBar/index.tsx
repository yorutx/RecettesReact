import { Button } from '../';

function HeaderBar() {
    return (
        <>
            <p>HeaderBar Component</p>
            <Button title="Home" to="/home"/>
            <Button title="App" to="/"/>
            <Button title="Not found" to="/caca"/>
        </>
    );

}

export default HeaderBar;