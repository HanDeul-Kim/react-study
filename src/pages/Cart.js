import { Table } from 'react-bootstrap'
import { IoIosAdd, IoIosRemove} from 'react-icons/io';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { addCount, removeCount } from '../store/cartSlice.js'

function Cart() {
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>상품번호</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경</th>
                    </tr>
                </thead>
                <ItemList />
            </Table>
        </div>
    )
}

function ItemList() {
    let navigate = useNavigate();
    let state = useSelector((state) => state)
    let dispatch = useDispatch()
    return (
        <tbody>
            {
                state.cart.map((val, idx) =>
                    <tr className="cart_list" key={idx}>
                        <th>{state.cart[idx].id}</th>
                        <th className="cart_item" onClick={ () => { navigate(`/detail/${val.id}`) }}>
                            <span>{state.cart[idx].name}</span>
                        </th>
                        <th>{state.cart[idx].count}</th>
                        <th style={{ display: 'flex', gap: '5px', justifyContent: 'center' }}>
                            <button onClick={() => {
                                dispatch(removeCount(state.cart[idx].id))
                            }}><IoIosRemove size="27" color="#000" /></button>
                            <button onClick={() => {
                                dispatch(addCount(state.cart[idx].id))
                            }}><IoIosAdd size="27" color="#000" /></button>
                        </th>
                    </tr>
                )
            }
        </tbody>
    )

}
export default Cart;