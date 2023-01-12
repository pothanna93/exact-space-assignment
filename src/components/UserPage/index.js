import "./index.css"
const UserPage=props=>{ 
    const {userDetails} = props 
    const {d,text,date} = userDetails 
    const intial = d[0]
    return(
        <li className="user-Container"> 
         <div className="user-name-date-div">
           <p className="intial">{intial}</p> 
           <p className="person-name">{d}</p> 
           <p className="date">{date.toLocaleTimeString()}</p>
         </div>
        <p className="text-fild">{text}</p>
        </li>
    )
} 
export default UserPage