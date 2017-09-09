import React , {Component} from 'react';

const styles={
	pre:{
		display:"block"
	}
};

class Display extends Component{
	constructor(props){
		super(props)
		this.state={
			data:''
		}
		this.getData = this.getData.bind(this);
	}

	getData(){
		let data = {
			"Name" : this.props.name+"<br/>",
			"Email" : this.props.email,
			"Phone" : this.props.phone,
			"Address" : this.props.address,
			"Occupation": this.props.occupation
		}
		return data;
	}

	render(){
		var data = this.getData()
		return(
			<div>
				<p><pre style={styles.pre}>{JSON.stringify(data)}</pre></p>
			</div>
		);
	}
}

export default Display;