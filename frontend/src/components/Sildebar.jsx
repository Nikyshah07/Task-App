import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from "axios";
import { authactions } from '../store/auth';

function Sildebar({ onCloseSidebar }) {
    const dispatch = useDispatch();
    const history = useNavigate();
    const [Data, setData] = useState();
    
    const data = [
        {
            title: 'All tasks',
            icon: <ion-icon name="reader-outline"></ion-icon>,
            link: '/'
        },
        {
            title: 'Important tasks',
            icon: <ion-icon name="caret-forward-outline"></ion-icon>,
            link: '/important'
        },
        {
            title: 'Completed tasks',
            icon: <ion-icon name="checkmark-done-outline"></ion-icon>,
            link: '/completed'
        },
        {
            title: 'Incompleted tasks',
            icon: <ion-icon name="receipt-outline"></ion-icon>,
            link: '/incompleted'
        }
    ];

    const logout = () => {
        dispatch(authactions.logout());
        localStorage.clear("id");
        localStorage.clear("token");
        setTimeout(() => {
            history('/sign');
        }, 0);
    };

    const headers = {
        id: localStorage.getItem("id"),
        authorization: `Bearer ${localStorage.getItem("token")}`
    };

    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get("http://localhost:5000/getalltask", { headers });
            setData(response.data.data);
        };
        if (localStorage.getItem("id") && localStorage.getItem("token")) {
            fetch();
        }
    }, []);

    return (
        <>
            <div className='sidebardiv'>
                {Data && (
                    <div className='sinner1'>
                        <h3 className='side1'>{Data.username}</h3>
                        <h3 className='side2'>{Data.email}</h3>
                        <hr />
                    </div>
                )}
                <div className='sinner2'>
                    {data.map((items, i) => (
                        <Link 
                            to={items.link} 
                            className='smapitem' 
                            key={i} 
                            onClick={onCloseSidebar} // Call onCloseSidebar for all links
                        >
                            <p>{items.icon}</p>
                            {items.title}
                        </Link>
                    ))}
                </div>
                <div className='sinner3'>
                    <button className='slgbtn' onClick={logout}>Logout</button>
                </div>
            </div>
        </>
    );
}

export default Sildebar;
