import React,{Component} from 'react'
import '!style-loader!css-loader!./App.css'
class Commenttwo extends Component{
	constructor(){
		super();
		this.state={
			dataone:"",
			datatwo:"",
			datasan:""
			
		}
		this.handleClick=this.handleClick.bind(this);
	}
	handleClick(){
		
		{/*var userId=localStorage.getItem('key');
		console.log(this.props.id);
		var userId=localStorage.getItem('usertoken');
		var comment=this.refs.com.value;
		console.log(comment);
		console.log(userId);
	var articleId=this.props.id*/}
		
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
		
		var userId=localStorage.getItem('key');
		var articleId=this.props.id;
		console.log(this.props.id);
		var userId=localStorage.getItem('usertoken');
		var comment=this.refs.com.value;
		console.log(comment);
		console.log(articleId);
		console.log(userId);
		
		// 判断输入的内容再执行代码
		
			var data={
			userId:userId,
			articleId:articleId, 
			comment:comment
			
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
  		fetch('http://10.25.160.52/article/comment',_options)
        .then(Tools.checkStates)
        .then(Tools.parseJSON)
        .then((data)=>{
        	
        	console.log(data);
        	this.setState({
        		dataone:data.value
        	})
        	
        	
        	
        	
               
            
        })
		
	
	}
	
	render(){
		console.log(this.state.dataone);
		return(
			<div>
			<div className="listto">
				<p>{this.props.name}</p>
				
				<p className="time">作者:{this.props.name} 发表于2个小时前</p>
				<p className="contentfour">{this.props.content}</p>
				<p className="ping">评论:</p>
				<div className="commentit">
					<input type="text" placeholder="说点什么吧" ref="com"/>
					<button onClick={this.handleClick}>评论</button>
				</div>
				
				</div>
				</div>
				
		)
	}
}
export default Commenttwo
