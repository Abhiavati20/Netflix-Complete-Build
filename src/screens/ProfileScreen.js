import React from 'react'
import './ProfileScreen.css'
import Nav from "../Nav"
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import PlanScreen from './PlanScreen'
function ProfileScreen() {
    const user=useSelector(selectUser)
    return (
        <div className="profileScreen">
            <Nav/>
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img 
                        src="https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABc0jTkOerx0tI4TfdbzDeSo-0rWVzoQ99XHdXB12g960QbEZb49eOHTiM656ruYYMc6MOqST_DNvPLv1uxIENbw2dMpE.png?r=535" 
                        alt=""
                    />
                    <div className="profileScreen__details">
                        <h2 className="profileScreen__details__heading">{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans</h3>
                                <PlanScreen/>
                            {/* <Plans packageName="Netflix Standard" videoQuality="1080p" buttonTxt="Subscribe"/>
                            <Plans packageName="Netflix Basic" videoQuality="480p" buttonTxt="Subscribe"/>
                            <Plans packageName="Netflix Premium" videoQuality="4K+HDR" buttonTxt="Current Package" Gray={true}/> */}
                            <button onClick={()=>auth.signOut()} className="profileScreen__signOut">Sign Out</button>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default ProfileScreen
