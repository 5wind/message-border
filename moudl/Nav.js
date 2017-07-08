import React,{Component} from 'react'
import '!style-loader!css-loader!./App.css'
import {Link} from 'react-router'
import '../zepto.js'

class Nav extends Component{
	constructor(){
		super();
		this.handleClick=this.handleClick.bind(this);
	}
	handleClick(){
		
	}
	render(){
		return(
			
			
			<div>
			{this.props.children}
			<div  className="navlist">
			
				<ul>
					<Link to="/index">
					<li>
					<p><img src='../image/index.PNG'></img></p>
					<p>主页</p>
					</li>
					</Link>
					<Link to="/landing" activeClassName="my">
					<li>
					<p><img src='../image/issue.PNG'></img></p>
					<p>发表</p>
					</li>
					</Link>
					<Link to="/issue">
					<li>
					
					<p><img src='../image/me.PNG'></img></p>
					<p>我</p>
					
					</li>
					</Link>
					
				</ul>
			</div>
			
			</div>
			)
			
			
		
	}
}
export default Nav