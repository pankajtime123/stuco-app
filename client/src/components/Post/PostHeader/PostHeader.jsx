import React,{useEffect,useState} from 'react'
import { getAllUser } from "../../../api/UserRequests";
import { useSelector } from "react-redux";
import "./PostHeader.css"

const PostHeader = ({postData}) => {
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
    const [persons, setPersons] = useState([]);


    useEffect(() => {
        const fetchPersons = async () => {
          const { data } = await getAllUser();
          setPersons(data);
        };
        fetchPersons();
      }, []);

    return (
    
            
               
            persons.map((person,id)=>{
                     if(person._id===postData.userId){
                         return (
                            <div className="header-container">
                            <div className="profile-data">
                            <img key={id} src={ 
                                person.profilePicture ? serverPublic + person.profilePicture
                               : serverPublic + "defaultProfile.png" 
                           }
                           alt="Profile"
                       />
                       <span>  {person.firstname} {person.lastname} </span>
                       </div>
                        <div className="details">
                        <span> {person.worksAt} </span>
                        <span> {person.livesIn} </span>
                        <span> {person.country} </span>
                    </div>
               </div>
                         )}})
    )
}

export default PostHeader
