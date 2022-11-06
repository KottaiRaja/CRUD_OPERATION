import axios from 'axios';
import React from 'react';



export function New(){
    // const [name,setName] = useState('');
    // const [email,setEmail] = useState('');


const Fun = async(e)=>{
    e.preventDefault();
     const datastring = new FormData(e.target)
     const config = {headers:{'enctype':'multipart/form-data'}};

    await axios.post('http://localhost:3004/data',datastring,config)
    .then(function(res){
        if(res.data.status === 'insert'){
            alert('inserted'); 
        }else{
            alert('not inserted')
        }
    })
    .catch(function(err){
        alert(err);
    })
}
    return(
        <>
        <form onSubmit={Fun}>
        <label>Name</label><br/>
        <input type='text' name="name" id='name' /><br/>
        <label>Email</label><br/>
        <input type='email'name='email' id='email' /><br/>
        <label>ID</label><br/>
        <input type='number'name='id' id='id' /><br/>
        <button type='submit'>Submit</button>
        </form>
        </>
    )
}