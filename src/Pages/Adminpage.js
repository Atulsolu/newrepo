import '../Styles/pensionerpage.css'; 
import '../Styles/pensionerpage.css'; 
import { NavLink } from 'react-router-dom';
export default function Adminpage() {
    return (
        <>
            <h1> Welcome to Admin Page</h1>
            <div class="container">
                <div class="box-container">
                    <NavLink className="box" to="/getpensioner"><h3>Pensioner</h3>
                        <p>Update Pensioner , Delete Pensioner.</p></NavLink>
                    <NavLink className="box" to="/plan"><h3>Plans</h3>
                        <p>Admin Add New Plans into Database.</p>
                    </NavLink>
                    <NavLink className="box" to="/payment"><h3>Send Payment</h3>
                        <p>Admin Send Payment to Individual Pensioner.</p></NavLink>
                    <NavLink className="box" to="/getplan"><h3>More</h3>
                    <p>Admin Can Update and Delete Plan.</p>
                    </NavLink>
                </div>
            </div>
        </>
    );
}