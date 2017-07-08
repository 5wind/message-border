import React,{Component} from 'react'
import '!style-loader!css-loader!./App.css'
import '../zepto.js'
import '../sm.js'
import Commenttwo from './commenttwo.js'
class Comment extends Component{
	constructor(){
		super();
		this.state={
			data:[],
			dataone:"",
			datatwo:"",
			id:""
			
			
			
		}
		this.handleClick=this.handleClick.bind(this);
	}
	
	
	handleClick(){
		
		
		{/*let Tools = {
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
		
		var userId=localStorage.getItem('key');
		var articleId=this.props.params.id;
		console.log(this.props.params.id);
		var userId=localStorage.getItem('usertoken');
		var com=this.refs.com.value;
		console.log(com);
		console.log(articleId);
		console.log(userId);
		console.log(this.props.location.state);
		// 判断输入的内容再执行代码
		
			var data={
			userId:userId,
			articleId:articleId, 
			com:com
			
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
  		fetch('http://10.25.164.148/article/comment',_options)
        .then(Tools.checkStates)
        .then(Tools.parseJSON)
        .then((data)=>{
        	
        	console.log(data);
        	this.setState({
        		data:data.title
        	})
        	
        	
        	
               
            
        })
		*/}
	
	}
	render(){
		
		{/*let rows=[];
		let rowsone=[];
		console.log(this.state.data);
		
		console.log(this.state.dataone);
		this.state.data.map((item)=>{
			rows.push(
				<Commenttwo username={item.username}></Commenttwo>
			)
		})
				
				
			
		return(
			<div>
				<Commenttwo name={this.state.dataone} content={this.state.datatwo}></Commenttwo>
				{rows}
				
			</div>
		)*/}
		console.log(this.state.time);
		let rows=this.state.data;
		let rowssan=[];
		for(var i=0;i<rows.length;i++){
		
		
		let minute=rows[i].createAt;
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
		console.log(shijian)
			 rowssan.push(<div>
			 	
			 	<div className="indextop">
				<p><span><img src="../image/head.PNG" className="touxiang" className="tuxiang"></img></span></p>
				<p className="author">
				<span className="yonghuming"></span>
				<span>{rows[i].username}</span>
				<span><img src="../image/shijian.PNG"></img>{shijian}</span>
				</p>
				</div></div>
				);
			
			
		}
			return(
				<div>
				<Commenttwo name={this.state.dataone} content={this.state.datatwo} id={this.state.id}></Commenttwo>
				<div>{rowssan}</div>
				
				</div>
			)
			
		
	}
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
	}
}
export default Comment
