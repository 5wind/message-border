import React,{Component} from 'react'
import '!style-loader!css-loader!./App.css'
class Me extends Component{
	render(){
		return(
			<div>
				<p className="me">我</p>
				<p className="mehead"><span><img src="../image/head.PNG" className="touxiang"></img></span><span>n ></span></p>
				<p className="infor"><img src="../image/file.PNG"></img><span>我的文章</span></p>
				<p className="resign"><button  className="retu">退出登录</button></p>
			</div>
			
		)
	}
}
export default Me
