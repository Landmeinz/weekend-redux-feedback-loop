

function AdminItem({listItem}) {

    console.log('---this is the list item', listItem);

    return(
            <tr>
                <td>{listItem.feeling}</td>
                <td>{listItem.understanding}</td>
                <td>{listItem.support}</td>
                <td>{listItem.comments}</td>
            </tr>
    )
}

export default AdminItem;