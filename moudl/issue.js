import React,{Component} from 'react'
import {Link} from 'react-router'

class Issue extends Component{
	constructor(){
		super();
		
	}
	
	render(){
		return(
			<div>
			<div className="issuetop">
				发表文章
			</div>
			<div className="content">
			<p className="titleone">
				<input type="text" className="title" placeholder="请输入内容"></input>
			</p>
			<p className="contentone">
				<textarea className="fileframe" placeholder="请输入内容" cols="30" rows="10"></textarea>
			</p>
			
			</div>
			<div className="anniu">
			<button className="delete">
			取消
			</button>
			<button className="publish">
			发表
			</button>
		</div>
			</div>
		)
	}
}
export default Issue
