import './Profile.css';
import Profile_info from "./Profile_info/Profile_info";
import Profile_postsContainer from './Profile_posts/Profile_postsContainer';

const Profile = () => {
    return (
            <section className='profile'>
                <div className="profile__banner"></div>
                
                <Profile_info />
                <Profile_postsContainer/>

            </section>
    )
}
export default Profile;