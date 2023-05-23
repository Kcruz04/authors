import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'


const UpdateComponent = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState();
    
    const {id} = useParams()
    const navigate = useNavigate()
    //we want to get all the data from that id to display it in the update form
    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneComponent/${id}`)
        //axios waiting on the fetch, .THEN we set the data
        .then((res) => {
            console.log(res.data)
            //declare variable that holds data results here
            const component = res.data
            console.log(component)
        //set each item to useState
        setFirstName(component.firstName)
        setLastName(component.lastName)
        })
        .catch((err) => {
            console.log('this is our udpate get error: ',err)
        })
        
    }, [id]);

    const updateHandler = (e) => {
        e.preventDefault()
        let newComponent = {firstName, lastName}
        axios.put(`http://localhost:8000/api/updateComponent/${id}`, newComponent)
        .then((res) => {
            console.log("this is the udpate Handler", res)
            navigate('/allComponents')
        }) 
        .catch((err) => { 
            console.log("this is the update error: ", err)
        })
        
    }

    return (
        <div>
            <h1>Update Author</h1>
            <hr />
            <form  onSubmit={updateHandler}>
                <div className="mb-3">
                    <div className='form'>
                        <label >First Name:</label>
                        <input className='form-control' type="text" onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>
                        <hr />
                        <label >Last Name:</label>
                        <input className='form-control' type="text" onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
                        <hr />
                        
                        <button type="submit" className="btn btn-dark">Update Author</button> | <Link to={'/allComponents'} className="btn btn-secondary">Abort</Link>
                    </div>
                    
                </div>
            </form>
            
        </div>
    )
}

export default UpdateComponent;