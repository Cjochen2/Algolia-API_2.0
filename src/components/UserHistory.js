import { useSelector } from 'react-redux';

const UserHistory = () => {

    const userHistory = useSelector(state => state.history)

    return (
        <div className='userHistory mt-3'>
            <h1 className='d-flex justify-content-center'>
                User Search History
            </h1>
            <ul>
                {userHistory.map((item, i) => <li className='userItem' key={i}>{item}</li>)}
            </ul>
        </div>
    )
};

export default UserHistory;