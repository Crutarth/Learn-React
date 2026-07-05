import React, { useState } from 'react'

const LearnForms = () => {
    // const [firstname, setFirstName] = useState("")
    // const [lastname, setLastName] = useState("")

    // const handleFirstName = (e) => {
    //     setFirstName(e.target.value)
    // }

    // const handleLastName = (e) => {
    //     setLastName(e.target.value)
    // }


    const [formData, setFormdata] = useState({
        firstname : "",
        lastname : "",
    })

    const handleChange = (e) => {
        setFormdata({...formData, [e.target.name] : e.target.value})
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log("Form Submitted!:", formData);
    }
  return (
    <>
        <h2>Learn Forms</h2>
        {/* <form action="">
            First Name : <input type="text" name="firstname" id="" onChange={handleFirstName} value={firstname}/>
            <br /><br />
            Last Name : <input type="text" name="lastname" id="" onChange={handleLastName} value={lastname}/>
        </form> */}

 
        <form action="" onSubmit={handleFormSubmit}>
            First Name : <input type="text" name="firstname" id="" onChange={handleChange} value={formData.firstname}/>
            <br /><br />
            Last Name : <input type="text" name="lastname" id="" onChange={handleChange} value={formData.lastname}/>
            <br /><br />
            <input type="submit" value="Submit" />
        </form>

    </>
  )
}

export default LearnForms