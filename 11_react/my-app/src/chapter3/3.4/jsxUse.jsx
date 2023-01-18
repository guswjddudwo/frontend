import React from "react";
import './JsxUse.csssss'

//function JsxUse(props) {
  // JSX의 사용법(문법)
  // 1. 꼭 닫혀야하는 태그
  // const element = (
  //   <div>
  //   { /*HTML에서는 input또는 br 태그를 사용할때 닫지 않고 사용가능
  //       하지만 리액트에서는 태그를 열었으면 무조건 닫아야 함*/ }
  //   <div></div>
  //   <input />
  //   <br />
  //   </div>
  // );

// 2. 꼭 감싸져야만 하는 태그
// 두 개 이상의 태그는 무조건 하나의 태그로 감싸져있어야 함
//const element = (
  // <div>안녕하세요</div>
  // <div>안녕히계세요</div>
  
  // 반드시 하나의 부모 태그로 감싸져야 함
  // <div>
  // <div>안녕하세요</div>
  // <div>안녕히계세요</div>
  // </div>

  // 이렇게 단순히 감싸기 위하여 불필요한 div로 감싸는게 별로 좋지 않을 때도 있음
  // HTML 중첩 구조가 복잡해지며 그에 따른 스타일 설정을 할 때도 복잡해 짐
  // 이럴 때 사용하는 것이 React의 Fragment
  // 별도의 엘리먼트로 나타나지 않음
      // <React.Fragment>
      //   <div>안녕하세요</div>
      //   <div>안녕히계세요</div>
      // </React.Fragment>

  // React.Fragment는 생략도 가능
//       <>
//         <div>안녕하세요</div>
//         <div>안녕히계세요</div>
//       </>
      

// );

// 3. JXS 안에 자바스크립트 값 또는 표현식 사용하기
// 자바스크립트 변수(또는 함수)를 사용해야 할때에는 {} 사용
// const name = 'react';

// const user = {
//   firstName: 'Goni',
//   lastname: 'kim'
// };

// function formatName(user) {
//   return `${user.firstName} ${user,lastname}`;
// }

// const element = (
//   <>
//   <div>{name} 배우기</div>
//   <h1>Hello, ${formatName(user)}</h1>
//   </>
// )


// 4. style과 className
// 인라인 스타일은 객체 형태로 작성하는데 backgrund-color처럼 - 로 구분되어 있는 이름은
// camelCase형태로 네이밍
// (예:backgrund-color -> backgrundColor )
// class 값 설정할 때는 class=""가 아닌 className=""으로 설정
const style = {
  backgroundColor: 'black',
  color: 'aqua',
  finstSize: 24, //기본단위 px
  padding: '1rem' // 다른 단위 사용 시 문자열로 설장
};

const element = (
  <>
    <div style={style}>리액트 공부하기</div>
    <div className="gray-box"></div>
  </>
)


// return element;

// }

//export default JsxUse; // JsxUse 컴포넌트 내보내기
// export를해줘야 다른곳에서 import가능