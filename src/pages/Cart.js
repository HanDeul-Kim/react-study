import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addCount, removeCount } from '../store/cartSlice.js'
function Cart() {
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <ItemList />
            </Table>
        </div>
    )
}

function ItemList() {
    let state = useSelector((state) => state)
    let dispatch = useDispatch()
    return (
        <tbody>
            {
                state.cart.map((val, idx) =>
                    <tr key={idx}>
                        <th>{state.cart[idx].id}</th>
                        <th>{state.cart[idx].name}</th>
                        <th>{state.cart[idx].count}</th>
                        <th style={{ display: 'flex', gap: '5px', justifyContent: 'center' }}>
                            <button onClick={() => {
                                dispatch(removeCount(state.cart[idx].id))
                            }}>-</button>
                            <button onClick={() => {
                                dispatch(addCount(state.cart[idx].id))
                            }}>+</button>
                        </th>
                    </tr>
                )
            }
        </tbody>
    )

}
export default Cart;