import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
function ViewItem(props) {
    let navigate = useNavigate();
    let [viewItemId, setViewItemId] = useState([]);
    useEffect(() => {
        let copy = [...viewItemId];
        setViewItemId(copy = copy.concat(JSON.parse(localStorage.getItem('watchedId'))).reverse());
    }, [])
    return (
        <div className='view_container'>
            <div className="view-wrap">
                <h1>최근에 본 상품 목록</h1>
                <ul className="view_items">
                    {
                        viewItemId.map((val, idx) => {
                            return (
                                <li className="v_item" key={val} onClick={ () => { navigate(`/detail/${val}`)}}>
                                    <div className="item_content">
                                        <div className="content-wrap">
                                            <h1>{props.itemAll[val].title}</h1>
                                            <div>{props.itemAll[val].content}</div>
                                            <div>{props.itemAll[val].price}</div>
                                        </div>
                                    </div>
                                    <div className="item_img">
                                        <img src={`./img/product_${val}.jpg`} alt="" />
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