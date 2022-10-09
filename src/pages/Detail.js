import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../store/cartSlice.js'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
function Detail(props) {
    let state = useSelector((state) => state)
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
    // 장바구니 alert
    const MySwal = withReactContent(Swal)
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
            <div className="row" style={{display:'flex'}}>
                <div className="col-md-6" style={{display:'flex', justifyContent:'center'}}>
                    <img src={`../img/product_${Number(id)}.jpg`} width="50%" alt="detail_page_product_img"/>
                </div>
                <div className="col-md-6" style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <h4 className="pt-5">{findProduct.title}</h4>
                    <p className='desc_p'>{findProduct.content}</p>
                    <p>{findProduct.price}</p>
                    <button className="btn btn-danger" onClick={ () => {
                        dispatch(addProduct( {id : props.itemAll[id].id, name : props.itemAll[id].title, count : 1} ))
                        MySwal.fire({
                            title: <strong>장바구니에 담았습니다.</strong>,
                            html: '',
                            icon: 'success',
                            timer: 1000,
                            confirmButtonText: ''
                        })
                        state.cart.filter( (i) => {
                            if(i.id === findProduct.id){
                                MySwal.fire({
                                    title: <strong>장바구니에 이미 있습니다.</strong>,
                                    html: '',
                                    icon: 'warning',
                                    timer: 1000,
                                    confirmButtonText: ''
                                })
                            }
                        })
                    }
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