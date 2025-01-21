import { useState } from 'react';

function Table({ contacts }) {
    const [filter,setFilter] = useState('All');

    const handelOnChange = (e)=>{
        setFilter(e.target.value);
    }

    let filterContacts = [];
    
    if(filter === 'All'){
        filterContacts = contacts;
    }else{
        filterContacts = contacts.filter((contact)=> contact.group === filter);
    }


    return (
        <>

            <div>
                <label htmlFor="filter">Filter</label>
                <select name="filter" id="filter" value={filter} onChange={handelOnChange} >
                    <option value="All">All</option>
                    <option value="">None</option>
                    <option value="home">Home</option>
                    <option value="office">Office</option>
                </select>
            </div>

            <div>
                <h3>User info</h3>
                <table>
                    <tbody>
                        {filterContacts.map((contact, index) => (
                            <tr key={index}>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.group}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table;