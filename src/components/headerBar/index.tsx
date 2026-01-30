import { Button } from '../';

function HeaderBar() {
    return (
        <div style={{ justifyContent: 'space-between', display: 'flex', alignItems: 'center'}}>
            <p style={{ color: 'white', fontWeight: 'bold' }}>Site MAJU</p>
            <div style={{ display: 'flex', gap: '10px' }}>
                <Button title="Home" to="/home"/>
                <Button title="App" to="/"/>
                <Button title="Not found" to="/caca"/>
            </div>
        </div>
    );

}

export default HeaderBar;