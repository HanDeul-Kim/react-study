import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Detail(props) {

    let {id} = useParams()
    let findProduct = props.shoes.find( (x) => {return x.id == id})
    let [num, setNum] = useState('');
    useEffect(() => {
        if(isNaN(num) == true) {
            alert('숫자만 입력해주세요.')
        }
    }, [num])
    return (
        <div className="container">
            <input onChange={ (e) => { setNum(e.target.value) }}></input>
            <div className="row">
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${Number(id) + 1}.jpg`} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{findProduct.title}</h4>
                    <p>{findProduct.content}</p>
                    <p>{findProduct.price}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
}
export default Detail;