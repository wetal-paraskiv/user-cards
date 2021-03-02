import './SocialCard.css';
import Location from './Location'
import PhoneNumber from './PhoneNumber'


const SocialCard = ({ userData }) => {
    return (
        <div className='card'>
            <div className='card-title'>
                {userData.name.first} {userData.name.last}
            </div>
            <div className='card-body'>
                <Location location={userData.location} />
                <PhoneNumber type={'home'} number={userData.phone} />
                <PhoneNumber type={'cell'} number={userData.phone} />
                <div className='card-image'>
                    <img src={userData.picture.medium} alt='face' />
                </div>

            </div>

        </div>
    );
};

export default SocialCard;