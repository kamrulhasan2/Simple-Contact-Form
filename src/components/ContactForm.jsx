import React, { useState } from 'react'



const INITIAL_VALUE = {
    name: '',
    email: '',
    group: ''
}

function ContactForm({getContacts}) {

    const [values, setValues] = useState({ ...INITIAL_VALUE });
    const { name, email, group } = values;
    

    const handelSubmit = (e) => {
        e.preventDefault();
        getContacts(values);
    }

    const handelOnChange = (e)=>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form onSubmit={handelSubmit}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '0.5rem' }}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name='name' value={name} onChange={handelOnChange} />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' name='email' value={email} onChange={handelOnChange} />
                </div>
                <div>
                    <label htmlFor="group">Group</label>
                    <select name="group" id="group" value={group} onChange={handelOnChange} >
                        <option value="">Select group</option>
                        <option value="home">Home</option>
                        <option value="office">Office</option>
                    </select>
                </div>

                

                <input type="submit" value="Create New Contact" />
            </div>

        </form>
    )
}

export default ContactForm;