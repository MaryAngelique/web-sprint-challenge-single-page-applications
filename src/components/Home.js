import { Link, Route, Switch } from 'react-router-dom';

export default function Header(props) {

    return (
        <div className="topBar">
            <h1>Give me an A</h1>
            <Link to="/pizza" id="order-pizza">Order Pizza</Link>
        </div>
    )
}