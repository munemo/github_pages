import React, { useState } from 'react'
import CalendarAPIService from '../shared/api/service/CalendarAPIService'

export const RegisterView = () => {
   //const [newUser, setNewUser] = useState({email: '', apartment_nr: '', password: '' })
   //const [user, setUserId] = useState('')
   const [APIData, setAPIData] = useState([])

   //const [newSlot, setSlot] = useState({starttime:''})


/*
      const registerNewUser = async () => {
        try{
            const {data} = await CalendarAPIService.registerUser(newUser)
             console.log(data)
        }
        catch(error){
        console.log('error!!!',error)
    }
    }


    const getOneUserByQuery = async () => {
        try{
            const {data} = await CalendarAPIService.oneUserByQuery(user)
             console.log(data)
        }
        catch(error){
        console.log('error!!!',error)
    }
    }

    const getOneUserByID = async () => {
        try{
            const {data} = await CalendarAPIService.oneUserByID(user)
             console.log(data)
        }
        catch(error){
        console.log('error!!!',error)
    }
    }

    const updateOneUserByID = async () => {
        try{
            const {data} = await CalendarAPIService.oneUserByID(user, newUser)
           setNewUser(user)
             console.log(data)
        }
        catch(error){
        console.log('error!!!',error)
    }
    }

    const deleteOneUser = async () => {
        try{
            const {data} = await CalendarAPIService.deleteUserByID(user)
           setNewUser(user)
             console.log(data)
        }
        catch(error){
        console.log('error!!!',error)
    }
    }
*/
    const getAllUsers = async () => {
        try{
            const {data} = await CalendarAPIService.allUsers()
            setAPIData(data)
             //console.log(data)
        }
        catch(error){
        console.log('error!!!',error)
    }}
     
    const displayData = () => {

        const userList = APIData.map((user) =>{
           return (
            <>
            <h3>Email: {user.email}</h3>
            <h3>Password: {user.password}</h3>
            <h3>Apartment: {user.apartment_nr}</h3>
            </>
           )})
           
           return(

            <>{userList}</>
           )
           

 
}
    
return (
    <div>
       
        <button onClick={() => getAllUsers()}>All Users</button>

        <h1>User Data</h1> <br/>
       
        <>{displayData()}</>
            
                
    </div>
)
}
