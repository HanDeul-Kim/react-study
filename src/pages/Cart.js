import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { change } from '../store/userSlice.js'
import { quantity } from '../store/cartSlice.js'
function Cart() {
    let state = useSelector((state) => state)
    let dispatch = useDispatch()
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
                <tbody>
                    {
                        state.cart.map((val, idx) =>
                            <tr key={idx}>
                                <th>{val.id}</th>
                                <th>{val.name}</th>
                                <th>{val.count}</th>
                                <th><button onClick={ () => {dispatch(quantity(1))}}>+</button></th>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Cart;