function PostDetail() {
  const [ porst,currentIndex] = props;
  return ( 
    <div className="detail">
      <h4>제목</h4>
      <p>날짜: 2023년 01월 20일</p>
      <p>작성자: hyun.kim</p>
      <p>상세내용</p>

      {/* 간단한 포스트 수정하기 */}
      <button type="button"
        onClick={() => {
          //배열이나 객체의 state 변경하는 법
          // 새로운 배열 또는 객체를 만들어 set함수에 넣어줘야함
          const copyPosts = [...porsts]; //배열의 복사본(새로운 배열)
          copyPosts[currentIndex] = `${copyPosts[currentIndex]} -수정`;
          setPost(copyPosts);
        }}
      >
        수정하기</button>
    </div>
   );
}

export default PostDetail;