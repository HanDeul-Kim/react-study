import { memo, useMemo, useState } from 'react'
function Parents() {
    let [test, setTest] = useState(0);
    // let result = Child();
    let result = useMemo( () => {return Child()}, [])
    return (
        <div>{result}</div>
    )
 
}
function Child() {
    console.log('나 자식인데 나까지 함재렌더링 돼')
    return (
        <div>반복문 1억번 돌린 코드라고 가정</div>
    )
}


export default Parents; 