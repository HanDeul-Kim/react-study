import { useState } from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import data from './data.js'
import Detail from './pages/Detail.js'
import Product from './components/Product.js'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import axios from 'axios'

function App() {
    let [shoes, setShoes] = useState(data);
    let navigate = useNavigate();
    
    return (
        <div className="App">

            <Navbar bg="white" variant="white">
                <Container>
                    <Navbar.Brand href="/">Cos Wear</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={ () => { navigate('/') }}>홈으로</Nav.Link>
                        <Nav.Link onClick={ () => { navigate('/detail') }}>상세 페이지</Nav.Link>
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
                                            <Product shoes={shoes[idx]} idx={idx} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <button className="more_view" onClick={ () => {
                            axios.get('https://codingapple1.github.io/shop/data2.json')
                            .then( (result) => {
                                let copy = [...shoes, ...result.data];
                                setShoes(copy);
                                console.log(result.data);
                            })
                            .catch( () => { alert('sorry no data')})
                        }}>더 보기</button>
                    </>
                } />
                <Route path="/detail/:id" element={<Detail shoes={shoes}/>} />
                <Route path="*" element={<div>없는 페이지입니다.</div>} />
            </Routes>

        </div>
    );
}


export default App;
