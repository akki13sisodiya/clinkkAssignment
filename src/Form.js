import React , {Component} from 'react';
import {SelectField ,Paper ,TextField , FlatButton , RaisedButton ,  RadioButtonGroup , Subheader} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Grid , Row , Col , ButtonGroup , Radio} from 'react-bootstrap';
import RadioButtons from './RadioButton.js';
import Display from './Display.js';

const styles = {
  radioButton: {
    marginBottom: 16,
  },
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
  someClass:{
  	float : "left",
  	clear : "none"
  },
  labelStyle:{
  	float: "left",
  	clear: "none",
  	display: "inlie",
  	paddingLeft : "15px",
  	paddingTop : "10px"
  },
  header:{
  	paddingTop: 15
  },
  button:{
  	marginBottom : 15,
  	marginTop: 10
  }
};

class Form extends Component{
	constructor(props){
		super(props);
		this.state={
			name:'',
			phone : '',
			email : '',
			address : '',
			occupation:'',
			errorEmail : '',
			errorPhone : '',
			errorName : '',
			errorOccupation: '',
			errorAddress : '',
			count:0
		}
		this.validateEmail = this.validateEmail.bind(this);
		this.validatePhone = this.validatePhone.bind(this);
		this.handleOccupation = this.handleOccupation.bind(this);
		this.handleName = this.handleName.bind(this);
		this.handlePhone = this.handlePhone.bind(this);
		this.handleEmail = this.handleEmail.bind(this);
		this.handleAddress = this.handleAddress.bind(this);
		this.handleForm = this.handleForm.bind(this);
	}

	validateEmail(email){
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	return re.test(email);
	}

	validatePhone(phone){
		var re =  /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/;
		return re.test(phone);
	}

	handleName(e){
		var name = e.target.value;
		this.setState({name : name});
	}

	handleEmail(e){
		var email = e.target.value;
		this.setState({email : email});
	}

	handleAddress(e){
		var address = e.target.value;
		this.setState({address: address});
	}

	handlePhone(e){
		var phone = e.target.value
		this.setState({phone : phone});
	}

	handleOccupation(e){
		var occupation = e.target.value;
		this.setState({occupation : occupation});
	}

	handleForm(e){
		e.preventDefault();
		var name = this.state.name;
		var address = this.state.address;
		var email = this.state.email;
		var phone = this.state.phone;
		var occupation = this.state.occupation;
		var count = 0;
		if(name.length==0){
			count = count + 1;
			this.setState({errorName : "Enter Name"});
		}
		if(address.length == 0){
			count = count + 1;
			this.setState({errorAddress : "Enter  Address"});
		}
		if(this.validateEmail(email) == false){
			count = count + 1;
			this.setState({errorEmail : "Enter Valid Email"});
		}
		if(this.validatePhone(phone) == false){
			count = count + 1;
			this.setState({errorPhone : "Enter Valid Phone"});
		}
		if(occupation.length == 0){
			count = count + 1;
			this.setState({errorOccupation : "Enter Occupation"});
		}
		if(count == 0)
			this.setState({count : 1});
	}

	render(){
		var data = {
			"Name" : this.state.name
		}
		if(this.state.count == 0)
			return (
			<div>
				<Grid>
    				<Row className="show-grid">
    					<Col xs={0} md={4} ls={4}>
    					</Col>
      					<Col xs={12} md={4} lg={4}>
      						<MuiThemeProvider>
								<Paper zDepth={1}>
									<form onSubmit={this.handleForm}>
											<h4 style={styles.header}>Login Page</h4>
											<TextField hintText="John Doe" type="text" errorText={this.state.errorName} onChange={this.handleName} floatingLabelText="Name" />
											<br/> 
											<TextField hintText="0123456789" type="text" errorText={this.state.errorPhone} onChange={this.handlePhone}  floatingLabelText="Phone No" />
											<br/>
											<TextField hintText="example@example.com" type="email" errorText={this.state.errorEmail} onChange={this.handleEmail} floatingLabelText="Email" />
											<br/>
											<TextField hintText="212,John Street,San Fransico" type="text" errorText={this.state.errorAddress} onChange={this.handleAddress}floatingLabelText="Address" />
											<br/>
											<TextField hintText="Engineer" type="text" errorText={this.state.errorOccupation} onChange = {this.handleOccupation} floatingLabelText="Occupation" />
											<br/>
											<RaisedButton label="Submit" type="submit" primary={true} style={styles.button}/>
									</form>
								</Paper>
							</MuiThemeProvider>
      					</Col>
    				</Row>
  				</Grid>	
			</div>
		);
		else
			return (
				<div>
					<Grid>
						<Row className="show-grid">
							<Col xs={12} md={12} lg={12}>
								<Display name={this.state.name} address={this.state.address} phone={this.state.phone} email={this.state.email} occupation={this.state.occupation} />
							</Col>
						</Row>
					</Grid>
				</div>
			);
		
	}
}

export default Form;