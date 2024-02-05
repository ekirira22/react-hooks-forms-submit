import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([])
  const [errors, setErrors] = useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(e){
    e.preventDefault()
    if(firstName.length > 0){
      const formData = {
        firstName : firstName,
        lastName : lastName
      }
      const newDataArray = [...submittedData, formData]
      setSubmittedData(newDataArray)
      setFirstName("")
      setLastName("")
      setErrors([])
    }else{
      setErrors(["First Name is required"])
    }
    
  }

  const listOfSubmissions = submittedData.map((data,index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    )
  })

  return (
    <div>
      {/*Conditionally render errors */}
      {
       errors.length > 0 
        ? errors.map((error, index) => (
          <p key={index} style={{color:"red"}}>
            {error}
          </p>
        ))
        : null
      }
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      <h3>Submission</h3>
      {listOfSubmissions}
    </div>
  );
}

export default Form;
