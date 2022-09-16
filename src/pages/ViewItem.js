import { useEffect, useState } from 'react';
function ViewItem() {
    let [viewItemId, setViewItemId] = useState([]);
    useEffect(() => {
        let copy = [...viewItemId];
    }, [])

    return (
        <div className='view_container'>
            <div className="view-wrap">
                <h1>봤던 상품 목록</h1>
                <ul className="view_items">
                    {
                        viewItemId.map((val, idx) => {
                            return (
                                <li className="v_item" key={val}>
                                    <div className="item_content">{val}번 상품</div>
                                    <div className="item_img">
                                        <img src={`https://codingapple1.github.io/shop/shoes${val}.jpg`} alt="" />
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}


export default ViewItem;