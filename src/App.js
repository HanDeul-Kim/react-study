import { useEffect, useState } from 'react';
import { Button, Navbar, Container, Nav, Tab, Tabs } from 'react-bootstrap';
import './App.css';
import data from './data.js'
import Detail from './pages/Detail.js'
import Cart from './pages/Cart.js'
import ViewItem from './pages/ViewItem.js'
import Product from './components/Product.js'
import Loading from './components/Loading.js'
import { Routes, Route, Link, useNavigate, Outlet, useLocation } from 'react-router-dom'
import axios from 'axios'

function App() {
    
    let [shoes, setShoes] = useState(data);
    let navigate = useNavigate();
    let [countView, setCountView] = useState(1);
    let [loading, setLoading] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('watchedId') == undefined) {
            localStorage.setItem('watchedId', JSON.stringify([]))
        }
    }, [])

    return (
        <div className="App">
            <Navbar bg="white" variant="white">
                <Container>
                    <Navbar.Brand href="/">Cos Wear</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => { navigate('/') }}>홈으로</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/cart') }}>장바구니</Nav.Link>
                        {/* <Link to="/">홈으로</Link> */}
                        {/* <Link to="/detail">상세 페이지</Link> */}
                    </Nav>
                </Container>
            </Navbar>
            <aside className='view_item' onClick={() => { navigate('/view') }}>
                <WatchedItem />
                {
                    // location.pathname == '/' && JSON.parse(localStorage.getItem('watchedId')) !== null == true ?
                    // <WatchedItem /> 
                    // :
                    // null
                }
            </aside>
            <Routes>
                <Route path="/" element={
                    <>
                        <div className="main-banner" style={{ background: `url(${process.env.PUBLIC_URL} './img/banner.jpg') no-repeat center center / cover` }}></div>
                        <div className="container">
                            <div className="row">
                                {
                                    shoes.map((val, idx) => {
                                        return (
                                            <Product key={idx} shoes={shoes[idx]} idx={idx} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        {loading == true ? <Loading /> : null}
                        <button className="more_view" onClick={() => {
                            setLoading(true);
                            setCountView(countView + 1);
                            axios.get(`/data${countView + 1}.json`)
                                .then((result) => {
                                    for (var i = 0; i < 50000; i++) {
                                        console.log(i);
                                    }
                                    let copy = [...shoes, ...result.data];
                                    setShoes(copy);
                                    setLoading(false);
                                })

                            // Promise.all([ axios.get('/url1') ], [ axios.get('/url2') ])
                            // .then( () => {})
                        }}>더 보기</button>

                    </>
                } />
                <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/view" element={<ViewItem />} />
                <Route path="*" element={<div>없는 페이지입니다.</div>} />
            </Routes>


        </div>
    );
}
function WatchedItem() {
    const location = useLocation();
    // 옵셔널 체이닝 연산자 나의 구세주..
    if(location.pathname == '/' && JSON.parse(localStorage.getItem('watchedId'))?.length !== 0) {
        return (
            <>
                <span>최근 본 상품</span>
                <div className="img-inner">
                    <img src={`https://codingapple1.github.io/shop/shoes${Number(localStorage.getItem('itemImage')) + 1}.jpg`} alt="watched_product_image" />
                </div>
            </>
        )
    } else {
        return null
    }
}


export default App;
