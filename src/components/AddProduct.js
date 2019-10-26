import React, {Component} from 'react'
import './AddProduct.css'

class AddProduct extends Component {
    constructor (props){
        super(props)
        this.state = {
            tutors: [],
            students: [],
            studentID: '',
            tutorID: '',
            subject: '',
            rate: ''
        }
        
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    
    
    componentDidMount(){
        fetch("https://y9ynb3h6ik.execute-api.us-east-1.amazonaws.com/prodAPI/tutors")
        .then(response => response.json())
        .then(response => this.setState({
            tutors: response
        }))
        .catch(err => console.log("ERR: " + err))
        
        fetch("https://y9ynb3h6ik.execute-api.us-east-1.amazonaws.com/prodAPI/students")
        .then(response => response.json())
        .then(response => this.setState({
            students: response
        }))
        .catch(err => console.log("ERR: " + err))
    }
    
    handleChange(e) {
        let {id, value} = e.target
        if (id === 'student') {
            this.setState({
                studentID: e.target.value
            })
        } else if (id === 'tutor') {
            this.setState({
                tutorID: e.target.value
            })
        } else if (id === 'rate') {
            this.setState({
                rate: e.target.value
            })
        } else if (id === 'subject') {
            this.setState({
                subject: e.target.value
            })
        }
    }
    
    handleSubmit(e){
        e.preventDefault();
        let {studentID, tutorID, rate, subject} = this.state
        if(studentID === '' || tutorID === '' || rate === '' || subject === '' ) 
            alert ("Please enter an option in each field")
        else {
            const endpoint = "https://y9ynb3h6ik.execute-api.us-east-1.amazonaws.com/prodAPI/products"
            const fullURL = endpoint + "?tutorID=" + tutorID + "&studentID=" + studentID + "&rate=" + rate + "&subject=" + subject
            fetch(fullURL, {method: "POST"})
            .then(response => {
                console.log(response.json())
                alert ("Product Added!")
            })
            .catch(err => {
                console.log("ERR: " + err)
                alert("There was an Error Adding this Product: " + err)
            })
        }
        e.target.reset()
    }
    
    render(){
        return (
            <div className = "newProductForm">
                <h3> Create New Product </h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Tutor: </label>
                        <select id="tutor" onChange={this.handleChange} defaultValue=''>
                            <option disabled="disabled" value=''>---Select a Tutor---</option>
                            {this.state.tutors.map(tutor => <option key = {tutor.Name} value = {tutor.TutorID}>{tutor.Name}</option> )}
                        </select>
                    </div>
                    <div>
                        <label>Student: </label>
                        <select id='student' onChange={this.handleChange} defaultValue=''>
                             <option disabled="disabled" value=''>---Select a Student---</option>
                            {this.state.students.map(student => <option key = {student.Name} value = {student.StudentID}>{student.Name}</option> )}
                        </select>
                    </div>
                    <div>
                        <label>Subject: </label>
                        <input id='subject' type='text' onChange={this.handleChange} required/>
                    </div>
                    <div>
                        <label>Hourly Rate: </label>
                        <input id = 'rate' type='number' onChange={this.handleChange} min='0' max='1000' required/> $/hr
                    </div>
                    <div>
                        <button> Add </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddProduct

