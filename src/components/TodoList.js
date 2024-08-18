
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const TodoListBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  
  margin: 20px;
  ul {
  list-style-type: none;}
`;

const TodoHeadBlock = styled.div`
 
   

  h1 {
    text-align: center;
    color: gray;
    margin:10px;
  }

  .task-left {
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    font-size: 30px;
    color: hotpink;
    margin-top:10%;
    
    font-weight: bold;
  }
`;
  

  
    
  


// 함수 정의
const a = () => {};
function a() {};
const a = function() {};

// 함수 사용 -> 소괄호
a();



// 함수 정의 - 매개변수 (parameter)

const add = (parameter1, parameter2) => {
  console.log(parameter1 + parameter2);
}


// 함수 사용 - 인자 (arguments)
   
add(1, 2); // -> 콘솔에 3이 출력



// setState 함수의 첫번째 인자가 값 -> 업데이트
// setState 함수의 첫번째 인자가 함수 -> 그 함수(첫번째 인자)의 첫번째 매개변수가 state의 값
  



// const [state, setState] = useState(defaultValue);

function TodoList() {
  const [task, setTask]=useState('');
  const [tasks, setTasks] = useState([]);
  const totalTasks = tasks.length;
  const refCount= useRef(0);
  const h1El=useRef(null);
 

  function addList(e) {
    e.preventDefault()
    const addValue = task.trim();
    if (addValue === '') return;
    ++refCount.current;

    const newTask = {
      id: refCount.current,
      text: addValue
    };

    setTasks(tasks=> [...tasks, newTask]);
    setTask( b=> '');
    console.log (h1El.current.innerHTML);

  }

  function deleteTask(id) {

    const a = [1, 2, 3, 4, 5];
    const b = a.filter(i => i !== 4);

    //.filter(x => x.id !== 4)
    //.map(x => x * 2)
    // b: [1, 2, 3, 5];

    // const a = [1, 2, 3, 4, 5];
    // a.map(x => x * 2)   // 2, 4, 6, 8, 10

    const c = [12, 3, 5, 3, 6];
    c
      .filter(i => i !== 3)
      .map(x => x * 2);
    

    // tasks = [{id: ~, text: ~}, {id: ~, text: ~}]
    

    // id!==tasks.id
    setTasks(tasks=> tasks.filter(i => i.id !==id));
  }

 

  

  return (
    <TodoListBlock>
      <TodoHeadBlock>
        <h1 ref={h1El}>To Do List</h1>
        <div className='task-left'>할일 {totalTasks}개 남음</div>
      </TodoHeadBlock>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.text}
            <span
              style={{ marginLeft: '5px', cursor: 'pointer' }}
              onClick={() => deleteTask(task.id)}
            >
              ❌
            </span>
          </li>
        ))}
      </ul>
      <form onSubmit={addList} >
        <input type='text' name='task' value={task} onChange={e=>setTask(e.currentTarget.value)}/>
        <input type='submit' value='추가' />
      </form>
    </TodoListBlock>
  );
}

export default TodoList;
