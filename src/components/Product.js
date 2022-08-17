import { useNavigate } from "react-router-dom";

function Product(props) {
    let navigate = useNavigate();
    return (
        <div className="col-md-4" onClick={ () => {navigate(`/detail/${props.idx}`)} } style={{cursor:'pointer'}}>
            <img src={`https://codingapple1.github.io/shop/shoes${props.idx + 1}.jpg`} alt="product_img" width='80%' />
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.price}</p>
        </div>
    )
}
export default Product;