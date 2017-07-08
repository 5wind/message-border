# message-border
1.路由的搭建:路由中将不显示将不显示导航栏的组件，写在Nav组件外面。将Nav组件写上Link to 链接写上Route的path路径
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

2.页面的建立,建立css文件，书写样式，在组件中导入，并进行渲染，然后用
import “！style-loader！css-loader！./App.css”

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

3.主页的渲染,用ajax获取数据，传值
componentDidMount是当值改变时会自动调用render函数，重新渲染
componentDidMount(){
					this.request=$.get('http://10.25.160.52/articLe/FetchList',null,function(result){
						this.setState({
							list:result
						});
					}.bind(this));
				}
}

4.用子组件和父组件传值，将页面渲染出来
父组件：
import React,{Component} from 'react'
import '../zepto.js'

import Publishziye from './publishziye.js'
class Shouye extends Component{
	constructor(){
		super();
		this.state={
			list:[]
			
		}
		
		
	}
	
	render(){
			let rows=[];
			
			
			this.state.list.forEach((item)=>{
				rows.push(
					<Publishziye username={item.user.username} content={item.content} title={item.title} createAt={item.createAt} start={item.star.length}
					id={item._id} articleid={item.user._id}
					commentNum={item.commentNum}>
					</Publishziye>
					
					)
			})
			
			
				return(
				
				<div>
				
				{rows}
				
				</div>
				
			
			)
			
			
			
		
			
		
		}
	componentDidMount(){
					this.request=$.get('http://10.25.160.52/articLe/FetchList',null,function(result){
						this.setState({
							list:result
						});
					}.bind(this));
				}
}
export default Shouye;
子组件：
class Publishziye extends Component{
	constructor(){
			super();
			this.state={
				time:"",
				zan:"",
				zantwo:false,
				dataone:[]
				
				}
			this.componentDidMount=this.componentDidMount.bind(this)
			this.handleClick=this.handleClick.bind(this)
			this.handleClicktwo=this.handleClicktwo.bind(this)
			
		}
	handleClick(e){
		
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
		var thisSpan=e.nativeEvent.target;
		var articleId=e.target.getAttribute('data-articleid');
		console.log(this.props.id);
		var userId=localStorage.getItem('usertoken');
		console.log(articleId);
		console.log(userId)
		var zan=this.props.start;
		// 判断输入的内容再执行代码
		
			var data={
			articleId:this.props.id, 
			userId:userId
			
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
  		fetch('http://10.25.160.52/article/giveStar',_options)
        .then(Tools.checkStates)
        .then(Tools.parseJSON)
        .then((data)=>{
        	
        	console.log(data)
        	if(data.title==1){
        		zan=zan+1;
        		console.log(zan)
        		thisSpan.style.color='red';
        		alert(data.content);
        		this.setState({
        			zantwo:!this.state.zantwo,
        			zan:this.props.start+1
        		})
        	}else if(data.title==0){
        		zan=zan-1;
        		thisSpan.style.color='black';
        		alert(data.content);
        		this.setState({
        			zan:this.props.start
        		})
        		console.log(zan)
        	}
        	
        	
               
            
        })
		
	}
  
  render(){
		
		let zanone=this.state.zantwo?this.state.zan:this.props.start;
		
		return(
			<div className="publishzie">
				
				<div className="indextop">
				<p><span><img src="../image/head.PNG" className="touxiang"></img></span></p>
				<p>
				<span className="yonghuming">{this.props.username}</span>
				<span><img src="../image/shijian.PNG"></img>{this.state.time}</span>
				</p>
				<p className="titlethree">{this.props.title}
				</p>
				
				<p className="contenttwo">{this.props.content}</p>
				
				<p className="pinglun">
				<span onClick={this.handleClick} data-articleid={this.props.id}>
				<img src="../image/dianzan.PNG"></img>{zanone}</span>
				<Link to={{pathname:"/Comment/"+this.props.id}}>
				<span><img src="../image/pinglun.PNG"></img>{this.props.commentNum}</span>
				</Link>
				</p>
				</div>
			</div>
		)
	}
	componentDidMount(){
		
		let minute=this.props.createAt;
		let shijian=null;
		let now=new Date().getTime();
		let diffValue=now-minute;
		let monthC=diffValue/(1000*60*24*30);
		let dayC=diffValue/(1000*60*60*24);
		let hourC=diffValue/(1000*60*60);
		let minC=diffValue/(1000*60);
		if(monthC>=1){
			shijian=parseInt(monthC)+"月前";
		}else if(dayC>=1){
			shijian=parseInt(dayC)+"天前";
		}else if(hourC>=1){
			shijian=parseInt(hourC)+"小时前"
		}else if(minC>=1){
			shijian=parseInt(minC)+"分钟前"
		}
		this.setState({
			time:shijian
		});
		
		
	}
}
export default Publishziye
5.用路由传参获取articleid
</Route>
			<Route name="Comment" path="/Comment/:id" component={Comment}/>

	</Router>
   <Link to={{pathname:"/Comment/"+this.props.id}}>
				<span><img src="../image/pinglun.PNG"></img>{this.props.commentNum}</span>
		</Link>
   componentDidMount(){
		
		
		var api='http://10.25.160.52/article/fetchArticle/'
		this.request=$.get(api+this.props.params.id,null,function(result){
			console.log(result);
			this.setState({
				data:result.content.comments,
				dataone:result.content.author.username,
				datatwo:result.content.content,
				id:this.props.params.id
				
				
			});
			
			
		}.bind(this));
    6.用location.reload()刷新页面重新重服务器端请求页面。
