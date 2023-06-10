import { useState } from 'react';

export default function InputComponent() { 
  const [form, setForm] = useState({
    firstName: 'Jon',
    lastName: 'Nifas',
  }); 

  function handleClick() {
    setForm(
        {
        firstName: 'Jon',
        lastName: 'Nifas'
        }
    )
  }
  return ( 
    <> 
    <label>
        Firstname: <input value={form.firstName}
        onChange={e =>{
            setForm({
                ...form,
                firstName: e.target.value
            })
        }}/>
    </label> 
    <label>
        Lastname: <input value={form.lastName} 
        onChange={e => {
            setForm({
                ...form,
                lastName: e.target.value

            })
        }} />
    </label>
    <p>
        {form.firstName}{' '}
        {form.lastName}{' '}
    </p>
    <button onClick={ () => setForm({
        firstName: 'Jon3',
        lastName: 'Nifass'
    })}> reset
    </button>
    <button onClick={handleClick}>
        reset2
    </button>

    </> 
    
  ); 
} 