import { useNavigate } from "react-router-dom";

function Product(props) {
    let navigate = useNavigate();
    return (
        <div className="col-md-4" onClick={ () => {navigate(`/detail/${props.id}`)} } style={{cursor:'pointer'}}>
            <img src={`./img/product_${props.id}.jpg`} alt="product_img" width='60%' />
            <h4 style={{fontSize:'20px'}}>{props.items.title}</h4>
            <span style={{color:'red', fontWeight:'bold', fontSize:'14px'}}>New Item!</span>
            <p>{props.items.price}</p>
        </div>
    )
}
export default Product;