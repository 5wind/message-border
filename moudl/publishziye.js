import React,{Component} from 'react'
import "!style-loader!css-loader!./App.css"
import Comment from './Comment.js'
import {Link} from 'react-router'
import '../zepto.js'
import '../sm.js'

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
	handleClicktwo(){{/*
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
		
		
		var data={
			null
			
		}
		let _options = {
        method:'get',         
        mode: "cors",
        headers:{
            // 'Accept':'application/json',
             'Content-Type':'application/json',
        },
        body:JSON.stringify(data)
    };
    var API='http://10.25.164.148/article/fetchArticle/'
    //接口路径
  		fetch(API+this.props.id,_options)
        .then(Tools.checkStates)
        .then(Tools.parseJSON)
        .then((data)=>{
        	console.log(data)
        	console.log(data.content.author.username)
        	console.log(this.props.id)
        	this.setState({
        		 dataone: data
        	});
        	console.log(this.state.dataone)
        	
        	
        	
               
            
        })
       
		*/}
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
