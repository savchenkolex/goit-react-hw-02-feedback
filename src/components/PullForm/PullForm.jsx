import React, {Component} from "react";
import PropTypes, { shape } from "prop-types";

import css from "./PullForm.module.css";


class PullForm extends Component {

    formHeandler(e) {
        console.log(e);
    }   

    createInputElement(props) {
        const elementArr = Object.keys(props.status);
        return (
            <form className={css.form}>
            {elementArr.map((element)=>{
               console.log(props);
              
             return   <input onClick={this.formHeandler} className={css.input} type="button" value={element.toUpperCase()} />
            })}
            </form>
        )
    }

    render(){
        return (
        <>
            <h2>Please leave feedback</h2>
            {this.createInputElement(this.props)}
        </>
        )
    }
}

PullForm.propTypes = {
    props: PropTypes.objectOf(shape({
        status: PropTypes.object,
    }))   
}


export default PullForm;