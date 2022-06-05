import React, { Component } from 'react'
import classes from './css/form.module.css'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments:'',
             option:'React'
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username:event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments:event.target.value
        })
    }

    handleOptionChange = (event) => {
        this.setState({
            option:event.target.value    
        })
    }

    handleSubmit = (event) =>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.option}`)
    }
    
    render() {
        return (
            <>
                <h3>setState Tutorial</h3>
                <form onSubmit={this.handleSubmit}>
                    {/* <div className={classes.Formdiv}>
                        <label className={classes.Formlabel}>Username</label>
                        <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
                    </div>
                    <div className={classes.Formdiv}>
                        <label className={classes.Formlabel}>Comments</label>
                        <textarea 
                            value={this.state.comments} 
                            onChange={this.handleCommentsChange} 
                            className={classes.Formtextarea}
                            rows="1" cols="5"></textarea>
                    </div>
                    <div className={classes.Formdiv}>
                        <label className={classes.Formlabel}>Skill</label>
                        <select value={this.state.option} onChange={this.handleOptionChange}>
                            <option value="React">React</option>
                            <option value="Angular">Angular</option>
                            <option value="Vue">Vue</option>
                        </select>
                    </div> */}
                    <input type="file" name="" id="img" />
                    <div className={classes.Formdiv}>
                        <input type="submit" value='Submit'/>
                    </div>
                </form>
            </>
        )
    }
}

export default Form
