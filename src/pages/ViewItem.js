import { useEffect, useState } from 'react';
function ViewItem(props) {
    useEffect(() => {

        let copy = [...props.viewItemId];
        props.setViewItemId(copy = copy.concat(JSON.parse(localStorage.getItem('watchedId'))));
    }, [])
    console.log(props.viewItemId)
    return (
        <div className='view_container'>
            <div className="view-wrap">
                <h1>봤던 상품 목록</h1>
                <ul className="view_items">
                    {
                        // viewItemId.map((val, idx) => {
                        //     return (
                        //         <div key={val}>1</div>
                        //     )
                        // })
                    }
                </ul>
            </div>
        </div>
    )
}


export default ViewItem;