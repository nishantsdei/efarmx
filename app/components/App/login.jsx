import React, { Component, PropTypes } from 'react';
import {reduxForm} from 'redux-form';
import {Link} from 'react-router';
import {login} from '../actions/index';


 class Login extends Component {
	static contextTypes={
		router:PropTypes.object
	}

	   onSubmit(props){
		   console.log(props);
		   this.context.router.push('posts/all');
        // this.props.login(props)
         //   .then(()=>{
                //blog has been created now lets go to index
                //by using this.context.router.push with the path to navigate
           //     
          //  })
     }

   render() {
	   const  { fields :{ email, password}, handleSubmit}=this.props;    
		return (
		<div className="container main_con">
			<div className="row">
				<div className="col-sm-6 col-md-4 col-md-offset-4">
					<h1 className="text-center ">Sign in to continue</h1>
					<div className="account-wall">
						<img className="profile-img" src="https://cdn2.iconfinder.com/data/icons/business-set-2/512/Icon_3-512.png"
						alt="" />
						<form  className="form-signin" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
							<div  className={`form-group ${email.touched && email.invalid ? 'has-danger' : ''}`}>
							<input type="email" name="email" className="form-control" placeholder="Email"  autofocus  {...email}/>
							<div className="text-help">
								{email.touched ? email.error:''}
							</div>
							</div>
							<div  className={`form-group ${password.touched && password.invalid ? 'has-danger' : ''}`}>
							<input type="password" name="password" className="form-control" placeholder="Password" {...password} />
							<div className="text-help">
								{password.touched ? password.error:''}
							</div>
							</div>
							<button className="btn btn-lg btn-primary btn-block" type="submit">
								Sign in</button>
							<a href="#" className="pull-right need-help">Need help? </a><span className="clearfix"></span>
						</form>
					</div>
				</div>
			</div>
		</div>
		);
	}
}



function validate(values){
    const errors={};

    if(!values.email){
        errors.email='Email required!';
    }
    if(!values.password){
        errors.password='password required';
    }

    return errors;
}

//connect:1st argument is mapStateToProps ,2nd is mapDispatchToProps
//reduxForm: 1st is form config, 2nd is mapStateToProps ,3rd is mapDispatchToProps


export default reduxForm({
    form:'loginForm',
    fields:['email','password'],
	validate
},null,{login})(Login);