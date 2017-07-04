/*
 * Copyright (c) 2017, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React from 'react'
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'

import Listing from './Listing/Listing'
import Details from './Details/index'
import {PageNotFound} from '../Base/Errors/index'
import 'react-toastify/dist/ReactToastify.min.css';


class Apis extends React.Component {
    constructor(props){
        super(props);
        props.setLeftMenu(null);
    }
    render(){
        return (
            <div>
                <Switch>
                    <Route exact path={"/apis"} render={props => (<Listing {...props}
                                                                           setLeftMenu={this.props.setLeftMenu}
                                                                           leftMenu={this.props.leftMenu} />)} />
                    <Route path={"/apis/:api_uuid/"} render={ props => (<Details {...props}
                                                                             setLeftMenu={this.props.setLeftMenu}
                                                                             leftMenu={this.props.leftMenu} />)} />
                    <Route component={PageNotFound}/>
                </Switch>
            </div>
        );
    }
}

export default Apis;