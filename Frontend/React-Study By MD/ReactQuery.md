# React Query

### React Query란 무엇일까?

swr과 API 통신 과정을 간결하고 강력하게 사용할 수 있게 할 수 있는 라이브러리

React Query는 클라이언트에서 관리할 데이터와 서버에서 관리할 데이터를 분류해서 바라보게 해준다.

```React
function* deletePost({id}) {
  try {
    yield put({ type: DELETE_POST_SUCCESS, deletePostId: id });
  } catch (err) {
    yield put({ type: DELETE_POST_ERROR, payload: err });
  }
}

function* watchAddComment() {
  yield takeLatest(DELETE_POST_REQUEST, addComment);
}
```

saga 방식으로 짜면 불편한 것이 많이 있다.

### 사용 방법

```code
npm i react-query
 # or
 $ yarn add react-query
```

위 방법을 터미널로 설치한다.

App.js를 보면

```React
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
		<Todos />
    </QueryClientProvider>
  )
}
```

Server State가 전역으로 관리되는 느낌이 있는데 react에서 제공하는 context를 기반으로 만들어졌고 데이터를 관리한다.

### React Query 쓰기

react-query 사용해보기
Queries

```React
import { useQuery } from 'react-query'

function App() {
const info = useQuery('todos', fetchTodoList, options)
}
```

useQuery는 data, error, isError, isLoading, isSuccess, refetch, status 등등을 반환한다.

### Query Keys

useQuery에 사용되는 key는 query를 식별하는 unique한 값으로 string과 array 두 가지 타입만 사용이 가능합니다.

#### string

```React
useQuery('todos', . . . ); // queryKey === ['todos']
```

단, string도 내부적으로 단일 배열로 변환됩니다.

#### array

쿼리 데이터 식별에 추가적인 정보가 필요하다면 array 형태로 key를 제공할 수 있다.

```React
useQuery(['todo', 5], ...)

useQuery(['todo', 5, { preview: true }], ...)
```

배열의 순서에 따라 모두 개별 key로 인식한다.

참고한 사이트 : https://velog.io/@n0eyes/React-Query-%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EC%9E%90
