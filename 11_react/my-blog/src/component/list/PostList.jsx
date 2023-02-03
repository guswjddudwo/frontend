import React from 'react';
import styled from "styled-components";
import PostListItem from './PostListItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

// map() 함수를 사용하여 PostListItme을 반복 렌더링하는 컴포넌트
function PostList(props) {
  const {Posts,onClickItme } =props;
  return (
    <Wrapper>
      {/* 반복렌더링 */}
      {Posts.map((post) => {
        (
          <PostListItem key={post.id}
            post={post}
            onClcik={() => {
              onClickItme(post);
            }}
            />
          );
        })}
    </Wrapper>
  );
}

export default PostList;