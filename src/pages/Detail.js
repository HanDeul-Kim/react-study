import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { addProduct } from '../store/cartSlice.js'
function Detail(props) {
    
    let { id } = useParams()
    let findProduct = props.itemAll.find((x) => { return x.id == id })
    let [hidden, setHidden] = useState('');

    useEffect(() => {
        setHidden('active')
        return () => {
            setHidden('');
        }
    }, [])
    let [tab, setTab] = useState(0);
    
    // store state
    let dispatch = useDispatch()

    // 봤던 상품 id값 저장
    useEffect(() => {
        let viewId = localStorage.getItem('watchedId');
        viewId = JSON.parse(viewId);
        viewId.push(findProduct.id);
        viewId = new Set(viewId);
        viewId = Array.from(viewId);
        // if(!viewId.includes(findProduct.id)) {  
        //     viewId.push(findProduct.id);
        // }
        localStorage.setItem('watchedId', JSON.stringify(viewId));
    }, [])
    // 봤던 상품 이미지 num 저장 
    useEffect( () => {
        localStorage.setItem('itemImage', id)
    }, [])
    
    return (
        <div className={`container detail-c ${hidden}`}>
            <div className="row">
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${Number(id) + 1}.jpg`} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{findProduct.title}</h4>
                    <p>{findProduct.content}</p>
                    <p>{findProduct.price}</p>
                    <button className="btn btn-danger" onClick={ () => {
                        dispatch(addProduct( {id : props.itemAll[id].id, name : props.itemAll[id].title, count : 1} ))}
                    }>장바구니에 추가</button>
                </div>
            </div>
            <Nav justify variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link eventKey="link0" onClick={() => { setTab(0) }}>상세 정보</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1" onClick={() => { setTab(1) }}>후기</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2" onClick={() => { setTab(2) }}>Q&#38;A</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab={tab} />
        </div>
    )
   
}
function TabContent({tab}) {
    let [hidden, setHidden] = useState('')
    useEffect( () => {
        // react 18 버전 이후로 나온 새 기능인 automatic batching의 이유로 시간차를 두어야 useEffect가 clean-up함수 이후 정상적으로 작동.
        let a = setTimeout(() => {
            setHidden('active')
        }, 100);
        return () => {
            clearTimeout(a);
            setHidden('');
        }
    }, [tab])
    return (
        <div className={`content-inner ${hidden}`}>{[<div>상세 정보</div>, <div>후기</div>, <div>Q&#38;A</div>][tab]}</div>
    )
}

export default Detail;