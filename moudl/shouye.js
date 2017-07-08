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

