import { useEffect } from "react";
import { useState } from "react";

function CounterEffect(props) {

  const [count,setCount] = useState(0);
  
  // componentDidMount,componentDidUpdate와 같은 방식으로 작동
  useEffect(() => {
    console.log('effect 실행!');

    // 브라우저 API를 이용하여 문서 타이틀을 업데이트
    document.title = `You clickd ${count} times`;
  }, [count]);
  // 함수 컴포넌트 안에 선언되기 때문에 해당 컴포넌트의 props와 state에 접근 가능
  
  return (
    <div>
      {/* state사용 */}
      <p>총 {count}번 클릭했습니다</p>
      <button onClick={() => setCount(count + 1)}>클릭</button>
     
    </div>
  );
}

export default CounterEffect;