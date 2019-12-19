import React, { useState } from 'react';
import axios from 'axios';
import './App.scss';


interface AddNewUserProps {
  onAddNewProfile: (userProfile: any) => void;
}

const AddNewUserForm: React.FC<AddNewUserProps> = ({onAddNewProfile}) => {
  const [nameValue, setNameValue] = useState('');
  const onNameValueChange = (e: any) => setNameValue(e.target.value);


  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios.get(`https:/api.github.com/users/${nameValue}`)
      .then(res => {
        onAddNewProfile(res.data)
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="GitHub username" onChange={onNameValueChange} required />
      <button>Add card</button>
    </form>
  );
}

export default AddNewUserForm;