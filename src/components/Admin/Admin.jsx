
import { useSelector } from 'react-redux';

import AdminItem from '../AdminItem/AdminItem.jsx'

function Admin() {

    const feedbackList = useSelector(store => store.adminReducer);

    console.log('--- this is the feebacklist from the db', feedbackList);

    return(

        <table>

            <thead>
                <tr>
                    <th>Feeling</th>
                    <th>Understanding</th>
                    <th>Support</th>
                    <th>Comments</th>
                </tr>
            </thead>

            <tbody>
                {feedbackList.map((listItem) => (
                    <AdminItem 
                        key={listItem.id}
                        listItem={listItem}
                    />
                ))}
            </tbody>
        
        </table>

    )
}

export default Admin;