import avatar_me from './../../../avatar_me.jpg';
import './Profile_info.css'
const Profile_info = () =>{
    return(
        <div className="profile__info">
            <div className="profile__avatar">
                <img src={avatar_me}></img>
            </div>
            <div className="profile__content">
                <h3 className="profile__content-item">Volodya Zonkov</h3>
                <p className="profile__content-item"><span>Date of Birth</span> : 23 February in 1945</p>
                <p className="profile__content-item"><span>City</span> : Barcelona </p>
                <p className="profile__content-item"><span>Education</span> : 4 higher ones</p>
                <p className="profile__content-item"><span>Web-Site</span> : <a href="https://vladzank0.github.io/site-portfolio/">https://vladzank0.github.io/site-portfolio/</a></p>
            </div>
        </div>
    )
}

export default Profile_info;