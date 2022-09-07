import { useEffect, useState } from 'react';
import { Button, Navbar, Container, Nav, Tab, Tabs } from 'react-bootstrap';
import './App.css';
import data from './data.js'
import Detail from './pages/Detail.js'
import Cart from './pages/Cart.js'
import Product from './components/Product.js'
import Loading from './components/Loading.js'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import axios from 'axios'

function App() {
    let [shoes, setShoes] = useState(data);
    let navigate = useNavigate();
    let [countView, setCountView] = useState(1);
    let [loading, setLoading] = useState(false);
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
                                    for(var i = 0; i < 50000; i++) {
                                        console.log(i);
                                    }
                                    let copy = [...shoes, ...result.data];
                                    setShoes(copy);
                                    setLoading(false);
                                })
                                .catch(() => { 
                                    alert('sorry no data');
                                    setLoading(false); 
                                })
                            // Promise.all([ axios.get('/url1') ], [ axios.get('/url2') ])
                            // .then( () => {})
                        }}>더 보기</button>

                    </>
                } />
                <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<div>없는 페이지입니다.</div>} />
            </Routes>

        </div>
    );
}


export default App;
