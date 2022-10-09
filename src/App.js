import { useEffect, useState, lazy, Suspense } from 'react';
import { Button, Navbar, Container, Nav, Tab, Tabs } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import './App.css';
import data from './data/data.js'
import dataAll from './data/dataAll.js'
import ViewItem from './pages/ViewItem.js'
import Product from './components/Product.js'
import Loading from './components/Loading.js'
import { Routes, Route, Link, useNavigate, Outlet, useLocation } from 'react-router-dom'
import axios from 'axios'
const Detail = lazy( () => import('./pages/Detail.js'));
const Cart = lazy( () => import('./pages/Cart.js'));

function App() {
    let [itemAll, setItemAll] = useState(dataAll);
    let [items, setItems] = useState(data.top);
    let [tab, setTab] = useState('top');
    let navigate = useNavigate();
    let [countView, setCountView] = useState(1);
    let [loading, setLoading] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('watchedId') == undefined) {
            localStorage.setItem('watchedId', JSON.stringify([]))
        }
    }, [])
    let state = useSelector((state) => state)
    useEffect(() => {
        const notice = document.querySelector('.cart_notice');
        state.cart.length === 0 ? notice.classList.remove('active') : notice.classList.add('active')
    }, [state.cart])
    return (
        <div className="App">
            <Navbar className="main_nav" bg="white" variant="white">
                <Container>
                    <Navbar.Brand onClick={() => { navigate('/') } } style={{cursor:'pointer'}}>Cos Wear</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => { navigate('/') }}>홈으로</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/cart') }} style={{position:'relative'}}>
                            장바구니
                            <div className="cart_notice">{state.cart.length}</div>
                        </Nav.Link>
                        {/* <Link to="/">홈으로</Link> */}
                        {/* <Link to="/detail">상세 페이지</Link> */}
                    </Nav>
                </Container>
            </Navbar>
            <aside className='view_item' onClick={() => { navigate('/view') }}>
                <WatchedItem />
            </aside>
            <Suspense fallback={<div>loading...</div>}>
                <Routes>
                    <Route path="/" element={
                        <>
                            <div className="main-banner" style={{ background: 'url("./img/banner.jpg") no-repeat center center / cover' }}></div>
                            <div className="tab-inner">
                                {/* <div className="tab" onClick={ () => { setItems(data.shoes); setTab('all'); setCountView(1); }}>전체</div> */}
                                <div className={`tab ${tab === 'top' ? 'active' : ''}`} onClick={ () => { setItems(data.top); setTab('top'); setCountView(1); }}>상의</div>
                                <div className={`tab ${tab === 'bottom' ? 'active' : ''}`} onClick={ () => { setItems(data.bottom); setTab('bottom'); setCountView(1); }}>하의</div>
                                <div className={`tab ${tab === 'shoes' ? 'active' : ''}`} onClick={ () => { setItems(data.shoes); setTab('shoes'); setCountView(1); }}>신발</div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    {
                                        items.map((val, idx) => {
                                            return (
                                                <Product key={idx} items={items[idx]} idx={idx} id={items[idx].id} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            {loading == true ? <Loading /> : null}
                            <button className="more_view" onClick={() => {
                                setLoading(true);
                                setCountView(countView + 1);
                                axios.get(`./data/${tab}_data${countView + 1}.json`)
                                    .then((result) => {
                                        for (var i = 0; i < 10000; i++) {
                                            console.log('요청 중 로딩 테스트')
                                        }
                                        let copy = [...items, ...result.data];
                                        setItems(copy);
                                        setLoading(false);
                                    })
                                    .catch( (error) => {
                                        setLoading(false);
                                        alert('상품이 더 이상 없습니다.')
                                    })
                                // Promise.all([ axios.get('/url1') ], [ axios.get('/url2') ])
                                // .then( () => {})
                            }}>더 보기</button>
                        </>
                    } />
                    <Route path="/detail/:id" element={<Detail items={items} itemAll={itemAll} />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/view" element={<ViewItem itemAll={itemAll} />} />
                    <Route path="*" element={<div>없는 페이지입니다.</div>} />
                </Routes>
            </Suspense>
        </div>
    );
}
function WatchedItem() {
    const location = useLocation();
    if (location.pathname == '/' && JSON.parse(localStorage.getItem('watchedId'))?.length !== 0) {
        return (
            <>
                <span>최근 본 상품</span>
                <div className="img-inner">
                    <img src={`./img/product_${Number(localStorage.getItem('itemImage'))}.jpg`} alt="watched_product_image" />
                </div>
            </>
        )
    } else {
        return null
    }
}
export default App;
