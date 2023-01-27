const students = [
  {
    id:'a1',
    name:'김현정',
  },
  {
    id:'a2',
    name:'송중기',
  },
  {
    id:'a3',
    name:'한예슬',
  },
  {
    id:'a4',
    name:'이미주',
  },
];











// Quiz: 배열의 각 요소를 렌더링하고 배열 렌더링 시 key 값 추가해보기
// key값은 id속성을 추가
function AttrndanceBook() {  
  return ( 
    <ul>
      {students.map((student) => {
        return <li key={student.id}>{student.name}</li>
      })}
    </ul>
   );
}

export default AttrndanceBook;