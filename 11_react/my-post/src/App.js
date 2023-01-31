import './App.css';
import { useState } from 'react';
import PostDetail from './components/PostDetail';

function App() {
  // 서버에서 데이터를 가져왔다고 가정
  const [posts, setPosts] = useState(['리액트 잘 쓰려면?', '자바스크립트 핵심 문법', '스타일링 가이드']);

  const [showPostDetail, setShowPostDetail] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [likeCount, setLikeCount] = useState([0, 0, 0]);
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      {/* 상단 헤더 만들기 */}
      <header className="header--dark">
        <h4>Goni Post</h4>
        <nav>
          <ul>
            <li>트렌딩</li>
            <li>최신</li>
          </ul>
        </nav>
      </header>

      <div className="inner">
        {/* 포스트 목록 */}
        {/* <div className="list">
          <h4>{posts[0]}</h4>
          <p>2023년 1월 20일</p>
          <p>by goni.kim</p>
        </div>
        <div className="list">
          <h4>{posts[1]}</h4>
          <p>2023년 1월 2일</p>
          <p>by alice</p>
        </div>
        <div className="list">
          <h4>{posts[2]}</h4>
          <p>2022년 12월 20일</p>
          <p>by herohero</p>
        </div> */}
      
        {/* Quiz: map()을 이용하여 posts 반복 출력하기 */}
        {posts.map((post, index) => {
          return (
            <div key={index} className="list"
              onClick={() => {
                setShowPostDetail(true);
                setCurrentIndex(index);
              }}
            >
              <h4>{post}</h4>
              <p>2023년 1월 20일</p>
              <p>by goni.kim</p>

              <hr />
              <div className='toolbar'>
              {/* 좋아요 버튼 */}
              <span onClick={(e) => {
                // (버그수정) 현재는 좋아요 버튼 누를때 포스느 상세보기까지 같이 클릭됨
                // 부모-자식 관계에 있을 때 이벤트 버블링이 일어남

                e.stopPropagation() // 상위요소로 전파되는 이벤트 버블링을 막고 싶을 때

                const copyLikeCount = [...likeCount];
                // TODO: 
                copyLikeCount[index] ++;
                setLikeCount(copyLikeCount);
              }}
              >💍 {likeCount[index]}</span>

              {/* Q. 포스트마다 삭제 버튼 & 기능 만들기 */}
              <span style={{fontSize: 27}}
              onClick={(e) => {
                e.stopPropagation();

                // const copyPosts = [...posts];
                // copyPosts.splice(index,1);
                // setPosts(copyPosts);

                // 또는 배열의 filter() 함수 사용
                const filteredPosts = posts.filter((value,idx) => { 
                  return index !== idx;
                });
                setPosts(filteredPosts);

                // 삭제 시 해당 포스트의 좋아요 카운트도 같이 삭제
                const copyLikeCount = [...likeCount];
                copyLikeCount.splice(index,1);
                setLikeCount(copyLikeCount);
              }}
              >🗑 </span>

              </div>
            </div>
          );
        })}

          

        {/* 새로운 포스트 등록 */}
        <input type="text" value={inputValue} onChange={(e) => {
          setInputValue(e.target.value);
        }}
        />
        <button type='button' onClick={(e) => {
          // post state에 요소 하나 추가하면 자동으로 렌더링 됨
          const copyPost = [...posts];
          copyPost.unshift(inputValue);
          setPosts(copyPost)
          setInputValue('');

          // 포스트 하나 추가 시 좋아요 카운트도 같이 추가
          const copyLikeCount = [...likeCount];
          copyLikeCount.unshift(0);
          setLikeCount(copyLikeCount);


        }}>
          포스트 등록
        </button>


        {/* 포스트 상세보기 조건부 렌더링 */}
        {/* {showPostDetail ? <PostDetail /> : null} */}
        {showPostDetail && <PostDetail posts={posts} setPosts={setPosts} currentIndex={currentIndex} />}
      </div>
    </>
  );
}

export default App;
