import Comment from "./Comment";

// 댓글 데이터를 별도의 객체로 분리하고 반복 가능한 배열에 담기
const comments = [
  {
    name:'김재현',
    comment:'안녕하세요 겨울이에요'
  },
  {
    name:'유재석',
    comment:'리액트 재밌다~'
  },
  {
    name:'이이경',
    comment:'저도 리액트 배워보고 싶어요!!'
  },
  {
    name:'미주',
    comment:'리액트가 뭐야?'
  },
  {
    name:'유재',
    comment:'리액트 재밌다~'
  },
];

// 댓글들을 포함하는 CommentList 컴포넌트
function CommentList(props) {
  return (
    <div>
      {/* 배열을 동적으로 랜더링해야 할 때에는 배열의 map() 함수를 사용 (map()은 배열안에 있는 각 요소를 변환하여
      새로운 배열을 만듦) 앞으로 리액트에서 동적인 배열을 렌더링 해야할때는 map() 함수를 사용하여 일반 데이터 배열을 
      리액트 엘리먼트로 이루어진 배열로 변환해주면 됨  */}
      {comments.map((comment, index) => {
        return (
          <Comment key={index} name={comment.name} comment={comment.comment} />
        );
      })}
      {/* map() 함수 결과*/}
      {/* {[
        <Comment name={"김재현"} comment={"댓글입니다"} />,
        <Comment name={"이이경"} comment={"댓글"} />,
        <Comment name={"미주"} comment={"댓글입니다"} />
      ]} */}
    </div>
  );
}

export default CommentList;