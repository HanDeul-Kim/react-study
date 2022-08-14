import { useParams } from 'react-router-dom';
import styled from 'styled-components';

let Btn = styled.button`
    background : ${props => props.bg};
    color : ${props => props.bg == 'orange' ? '#000' : '#fff'};
    padding : 10px;
    outline : none;
    border : none;
`



function Detail(props) {
    let {id} = useParams()
    let findProduct = props.shoes.find( (x) => {return x.id == id})
    console.log(findProduct)
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${Number(id) + 1}.jpg`} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{findProduct.title}</h4>
                    <p>{findProduct.content}</p>
                    <p>{findProduct.price}</p>
                    <button className="btn btn-danger">주문하기</button>
                    <Btn bg="orange">스타일드 컴포넌트</Btn>
                    <Btn bg="tomato">스타일드 컴포넌트</Btn>
                </div>
            </div>
        </div>
    )
}
export default Detail;