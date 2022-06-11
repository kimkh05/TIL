# Redux 에서 사용되는 키워드 숙지
1. action(액션) <br>
상태 변화가 생길태 발생함. type 가 무조건 필요로 하고 나머지는 개발자가 추가하고 싶으면 추가한다. <br>
action 생성 함수<br>
파라미터에서 객체형태로 만듦. <br>
```React
export function addTodo(data) {
  return {
    type: "ADD_TODO",
    data
  };
}
// Arrow Function(화살표함수)
export const changeInput = text => ({ 
  type: "CHANGE_INPUT",
  text
});
```
<br>
리덕스를 사용할 때 액션 생성 함수를 사용하는 것은 필수적이 아니다. <br>

2. Reducer(리듀서)<br>
변화를 이르키는 함수, 전달받은 액션을 참고하여 새로운 상태로 만들어서 반환

3. Store(스토어)<br>
현재 앱 상태, 리듀서가 들어가있다. 내장함수도 포함되어있다.
- 디스패치 : 스토어 내장함수 중 하나. 액션을 발생 시키는 것이다. 디스패치 안에서는 액션을 파라미터로 전달한다. <br>
- 구독 : 함수 형태의 값을 파라미터 형태로 받는다. 액션이 디스패치 되었을때 전달해준 함수가 호출된다. 