import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import Log from './moudl/landing'
import Nav from './moudl/Nav'
import Issue from './moudl/issue'
import	Shouye from './moudl/shouye'
import Register from './moudl/register'
import Comment from './moudl/comment'
import Me from './moudl/me'


render((<Router history={hashHistory}>
			<Route path="/" component={Nav}>
			<Route path="/index" component={Shouye}></Route>
			<Route path="/landing" component={Log}></Route>
			<Route name="register" path="/register" component={Register}/>
			<Route path="/issue" component={Issue}></Route>
			<Route path="/me" component={Me}></Route>
			
			</Route>
			<Route name="Comment" path="/Comment/:id" component={Comment}/>

		</Router>
), document.getElementById('app'))





