import React,{Component} from 'react'
import '!style-loader!css-loader!./App.css'
import {Link} from 'react-router'
import '../zepto.js'
import '../sm.js'



class Log extends Component{
	constructor(){
		super();
		this.handleClick=this.handleClick.bind(this);
	}
	handleClick(){
		var username=this.refs.username.value;
		var password=this.refs.password.value;
		console.log(username+password)
		if(username==""||password==""){
			alert("输入的内容不能为空")
			
		}else{
			$.ajax({
			type:"POST",
			url:"http://10.25.164.148/user/login",
			data:{
				username:username,
				password:password
			},
			dataType:"json",
			
			success(data,status){
				var token=localStorage.getItem('usertoken');
				if(token){
					
					window.location.href="http://localhost:8080/#/index?_k=yx50wt"
					console.log(data)
				}
				
			}
		});
		}
		
		
		
	}
	render(){
		return(
			
			<div>
			<div className='top'>
			<span className='login'>登录</span>
			<Link to="register" className="log"><span className="register">注册</span>
			</Link>
			</div>
			<div className="list">
			<p className="user"><span className="spanuser">用户名</span>
			<input type="text" placeholder="Your name" ref="username" className="myuser"/></p>
			<p className="password"><span className="spanpassword">密码&nbsp;</span>
			<input type="text" ref="password" placeholder="Password" className="mypassword"/></p>
			</div>
			<div className="buttonone">
			<p>
			<button className="press" onClick={this.handleClick}>登陆</button></p>
			</div>
			</div>
		)
		
	}
}
export default Log