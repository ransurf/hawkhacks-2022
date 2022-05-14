import React, {useEffect} from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "../firebase/initFirebase";


const Dashboard = () => {
  
  const [user, loading, error] = useAuthState(firebase.auth());

  useEffect(() => {
      if (user) {
          console.log(user)
          console.log("Loading = " + loading)
      }
  }, [user, loading]);
  return (
    <div>
      <p>Dashboard</p>
      <p>{user?.displayName}</p>
    </div>
    
  )
}

export default Dashboard