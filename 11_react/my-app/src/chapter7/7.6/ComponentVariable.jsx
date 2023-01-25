import { useRef } from "react";
import { useState } from "react";

function ComponentVariable() {
  const [count, setCount] = useState(1);

  console.log('컴포넌트 렌더링!!');
  
  // 렌더링 될 때마다 초기화 됨
  let id = 1;
  console.log(id);

  const idRef = useRef(1);
  console.log(idRef);

  return (  
    <div>
      <p>총 {count}번 렌더링</p>
      <button onClick={() => {
        setCount(count + 1);
      }}>
        count 업데이트
      </button>
      <button onClick={() => {
        id++;
        idRef.current++;
        // console.log(id);
      }}>
        id 업데이트
      </button>
    </div>
  );
}

export default ComponentVariable;