import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock';
import Toggle from './Toggle';
import LoginControl from './LoginControl';
import Page from './Page';
import Blog from './Blog';
import NameForm from './NameForm'
import EssayForm from './EssayForm'
import FlavorForm from './FlavorForm'
import Reservation from './Reservation'
import Calculator from './Calculator'
import SignUpDialog from './SignUpDialog'
import FilterableProductTable from './FilterableProductTable'

import * as serviceWorker from './serviceWorker';

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Clock />, document.getElementById('root'));
//ReactDOM.render(<Toggle />, document.getElementById('root'));
//ReactDOM.render(<LoginControl />, document.getElementById('root'));
//ReactDOM.render(<Page />, document.getElementById('root'));
//ReactDOM.render(<Blog posts={posts} />, document.getElementById('root'));
//ReactDOM.render(<NameForm />, document.getElementById('root'));
//ReactDOM.render(<EssayForm />, document.getElementById('root'));
//ReactDOM.render(<FlavorForm />, document.getElementById('root'));
//ReactDOM.render(<Reservation />, document.getElementById('root'));
//ReactDOM.render(<Calculator />, document.getElementById('root'));
//ReactDOM.render(<SignUpDialog />, document.getElementById('root'));
ReactDOM.render(<FilterableProductTable products={PRODUCTS} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();