import { useNavigate } from "react-router-dom";

function Product(props) {
    let navigate = useNavigate();
    return (
        <div className="col-md-4" onClick={ () => {navigate(`/detail/${props.id}`)} } style={{cursor:'pointer'}}>
            <img src={`./img/product_${props.id}.jpg`} alt="product_img" width='80%' />
            <h4>{props.items.title}</h4>
            <p>{props.items.price}</p>
        </div>
    )
}
export default Product;