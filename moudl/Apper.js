import React,{Component} from 'react'
import {Link} from 'react-router'
import "!style-loader!css-loader!./App.css"
class App extends Component{
	
	render(){
		return(
			<div>hello world
			<ul>
				
				<li><Link to="/About" activeClassName="my">About</Link></li>
				<li><Link to="/Repors" activeStyle={{color:'red'}}>Repors</Link></li>
			</ul>
			{this.props.children}
			</div>
			)
		
	}
}
export default App