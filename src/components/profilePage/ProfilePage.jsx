import React, { useEffect, useState } from 'react';
import Map from './Map';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
    const userInfo = useSelector(state => state.userProfileDetail)

    return (
        <div>
            {userInfo && userInfo.name}
            {/* <div>
                <p>آدرس :</p>
                <p>{userInfo.address.country}، {userInfo.address.city}، {userInfo.address.street}، {userInfo.address.alley}، پلاک {userInfo.address.number} </p>
            </div> */}

            <Map />

        </div>
    )
}

export default ProfilePage;
    // const [userInfo, setUserInfo] = useState({
    //     name: '',
    //     address: {
    //         country: '',
    //         city: '',
    //         street: '',
    //         alley: '',
    //         number: ''
    //     }
    // })
    // const { id } = useParams();
    // useEffect(() => {
    //     axios.get(`https://jsonplaceholder.ir/users/${id}`)
    //         .then(response => {
    //             console.log(response.data)
    //             setUserInfo(response.data)
    //         })
    // }, [id])