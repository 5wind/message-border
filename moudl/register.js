import React,{Component} from 'react'
import '!style-loader!css-loader!./App.css'
import {Link} from 'react-router'
class Register extends Component{
	constructor(){
			super();
			this.state={
				token:""
			}
			this.handleClick=this.handleClick.bind(this);
			this.handleClicktwo=this.handleClicktwo.bind(this);
		}
		handleClicktwo(){
			this.refs.name.value="";
			this.refs.email.value="";
			this.refs.passone.value="";
			this.refs.passtwo.value="";
		}
		handleClick(){
		{/*var username=this.refs.name.value;
		var email=this.refs.email.value;
		var password=this.refs.passone.value;
		console.log(username);
		
			$.ajax({
			type:"POST",
			url:"http://10.25.164.148/user/register",
			data:{
				username:username,
				email:email,
				password:password
			},
			dataType:"json",
			
			success(data){
				console.log(data)
				alert(data.message)
			}
		});*/}
		let Tools = {
		    checkStates: function (response) {
		        if(response.ok){
		            return response
		        }else{
		            let error = new Error(response.statusText);
		            error.state = response.status;
		            error.response = response;
		            throw error;
		        }
		    },
		    parseJSON:function (response) {
		        return response.json();
		    },
		    _getSearchFromObject:function(param, key) {

		        if(param == null) return '';
		        let _search = '?';
		        for (let key in param) {
		            _search += `${key}=${encodeURIComponent(param[key])}&`
		        }
		        return _search.slice(0, -1);
		    },
		}
		//获取form表单的值
		let username=this.refs.name.value;
		let email=this.refs.email.value;
		let password=this.refs.passone.value;
		let rpassword=this.refs.passtwo.value;
		console.log(username+email+password)
		// 判断输入的内容再执行代码
		if(username!=''&&email!=''&&password!=''&&password==rpassword){
			var data={
			username:username, 
			email:email, 
			password: password
		}
		let _options = {
        method:'POST',         
        mode: "cors",
        headers:{
            // 'Accept':'application/json',
             'Content-Type':'application/json',
        },
        body:JSON.stringify(data)
    };
    //接口路径
    fetch('http://10.25.160.52/user/register',_options)
        .then(Tools.checkStates)
        .then(Tools.parseJSON)
        .then((data)=>{
        	
        	console.log(data.content)
        	console.log(data)
        	localStorage.setItem('usertoken',JSON.stringify(data.content));
        	this.setState({
        		token:data.content
        	})
               
            
        })
        window.location.href="http://localhost:8080/#/index?_k=yx50wt"
		}else{
			alert('请输入正确内容')
		}
	
		}
		
	render(){
		
		return(
			
			<div>
			<div className='top'>
			<Link to="/landing" className="log"><span className='login'>登录</span></Link>
			<span className='register'>注册</span>
			</div>
			<div className="list">
			<p className="user"><span className="spanuser">用户名</span>
			<input type="text" placeholder="Your name" className="myuser" ref="name"/>
			</p>
			<p className="Email"><span className="spanuser">邮箱</span>
			<input type="text" placeholder="E-mail" className="myuser" ref="email"/>
			</p>
			<p className="password"><span className="spanpassword">密码&nbsp;</span>
			<input type="text" placeholder="Password" className="mypassword"  ref="passone"/>
			</p>
			<p className="password"><span className="spanpassword">确认密码&nbsp;</span>
			<input type="text" placeholder="Password" className="mypassword"  ref="passtwo"/>
			</p>
			</div>
			<div className="anniu">
			<button className="reset" onClick={this.handleClicktwo}>
			重置
			</button>
			<button className="registeraa" onClick={this.handleClick}>
			注册
			</button>
		</div>
			</div>
		)
	}
}
export default Register
