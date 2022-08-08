import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/dashboard/Dashboard'
import Customers from '../pages/customers/Customers'
import Products from '../pages/products/Products';
import ProductEdit from '../pages/products/ProductEdit';
import ProductAdd from '../pages/products/ProductAdd';
import Orders from '../pages/orders/Orders';
import Categories from '../pages/categories/Categories';
import Users from '../pages/users/Users';
import Login from '../pages/login/Login';
import PrivateRouter from './PrivateRouter';
import NotFound from '../pages/notFound/NotFound';
const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/customers' component={Customers}/>
            <Route path='/products' exact component={Products}/>
            <Route path='/products/edit' component={ProductEdit}/>
            <Route path='/products/add' component={ProductAdd}/>
            <Route path='/orders' component={Orders}/>
            <Route path='/categories' component={Categories}/>
            <Route path='/users' component={Users}/>
            <Route path='/login' component={Login}/>
            <Route path='*' component={NotFound}/>
        </Switch>
    )
}

export default Routes
