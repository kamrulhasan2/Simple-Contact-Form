import { useState } from 'react';

function Table({ contacts }) {
    const [filter,setFilter] = useState('All');
    const [searchTerm,setSearchTerm] = useState('')

    const handelOnChange = (e)=>{
        setFilter(e.target.value);
    }
    let filterContacts = [];

    const searchCb = (contact)=> (contact.name.includes(searchTerm) || contact.email.includes(searchTerm));
    
    

    if(filter === 'All'){
        filterContacts = searchTerm ? contacts.filter(searchCb) : contacts;
    }else{
        filterContacts = contacts.filter((contact)=> contact.group === filter && searchCb(contact));
    }


    return (
        <>

            <div className='filter-section'>
                <label htmlFor="filter">Filter</label>
                <select name="filter" id="filter" value={filter} onChange={handelOnChange} >
                    <option value="All">All</option>
                    <option value="">None</option>
                    <option value="home">Home</option>
                    <option value="office">Office</option>
                </select>
                <input type="search" name="search" id="search" placeholder='search' onChange={(e) => setSearchTerm(e.target.value)} />
            </div>

            <div className='user-info-section'>
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