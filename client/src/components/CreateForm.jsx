import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link} from 'react-router-dom';


const CreateForm = () => {
    
    //Keep track of what is being typed via useState hook
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    
    const [errors, setErrors] = useState([])

    //Instanciate useNagivate
    const navigate = useNavigate()
    
    //need handler to handle data from form
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new component
        axios.post('http://localhost:8000/api/create', {
            firstName,
            lastName
        })
        .then(res => {
        console.log(res)
        navigate('/allComponents')
        })
        
        .catch(err=>{
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        })
    }


    return (
        <div>
            <h1>Create a Author</h1>
            {errors.map((err, index) => <p key={index} style={{color: "red"}}>{err}</p>)}
            <form onSubmit={onSubmitHandler} >
                <div className="mb-3">
                    <div className='form'>
                        <label >First Name: </label>
                        <input className='form-control' type="text" onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>
                        <label >Last Name: </label>
                        <input className='form-control' type="text" onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
                        <br />
                        <button type="submit" className="btn btn-dark">Add Author</button> <Link to={'/allComponents'} className="btn btn-secondary">Home</Link>
                    </div>
                    
                </div>
            </form>
        </div>
    )
}

export default CreateForm;