1. 효율적인 파일구조 알아보기
- 파일의 기능이나  라우트에 의한 분류로 정리를 한다. <br/>
ex) 메인페이지는 메인페이지끼리 묶어놓는다.
-  파일 유형에 의한 분류
ex) api는 api끼리, components는 components끼리 묶어 정리를 해놓는다.<br/>
참고한 사이트 : [https://ko.reactjs.org/docs/faq-structure.html](https://ko.reactjs.org/docs/faq-structure.html)<br/>
2. react-router-dom 공부해오기<br/>
왜 우리는 React-Router-Dom 을 왜 사용할까?
- 페이지의 로딩 없이, 페이지에 필요한 컴포넌트를 불러와 렌더링 하여 보여주도록 도와준다. <br/>
사용 방법 : 라이브러리를 설치한 후 <Route />를 사용하여 각각의 페이지 컴포넌트를 지정해준다. (ex : [youtube.com/Hello](http://youtube.com/Hello) 로 예를 들면 
<Route path=”/” components={Hello} />) 이렇게 여러개 하면 전부 다 출력이 되는데 출력이 되는 이유가 ‘/’ 가 공통적으로 들어가 있기 때문이다. 이것을 해결하기 위해서는 exact = {true}를  Route 안에 적어줘야 맞지만 true는 생략 가능하니 exact만 적어도 된다.<br/>
참고한 사이트들<br/>
[https://velog.io/@pkbird/React-Router-1](https://velog.io/@pkbird/React-Router-1)<br/>
[https://velopert.com/3417](https://velopert.com/3417)<br/>
[https://react.vlpt.us/react-router/01-concepts.htm](https://react.vlpt.us/react-router/01-concepts.html)<br/>
3. axios 라이브러리 알아보기<br/>
사용하는 이유 : 어느 코드가 진행중일때 기다리지 않고 뒤에 남은 것들을 같이 실행시켜주기 위해서이다. <br/>
axios 사용방법<br/>
- 라이브러리를 설치받는다. 
- get, post, delete, put 사용사례에 따라 axios.get 이런 모양으로 놓는다. 
- .then은 상황이 맞을 때 사용하고 .catch는 then이 실행되지 않을 때 실행된다. <br/>
참고 사이트 : [https://velog.io/@shin6403/React-axios란-feat.-Fetch-API](https://velog.io/@shin6403/React-axios%EB%9E%80-feat.-Fetch-API)<br/>
4. styled-components 공부해오기<br/>
styled components란 무엇인가?<br/>
- css 파일을 밖에 두고 테그나 id, class등 이름으로 가져와 사용하지 않고 동일한 컴포넌트에서 컴포넌트 이름 쓰듯 스타일을 지정하는 것<br/>
장점 : css 파일을 밖에 두지 않고 컴포넌트 내부에 넣기 때문에, 파일 정리에도 도움을 주고 css가 전역으로 중복되지 않도록 만들어준다. <br/>
사용법<br/>
- 라이브러리를 설치한다. 
- styled.js 이나 styled.ts 파일을 만들어준다.
- const 변수 이름 = styled.태그`` 로 변수를 만들고 ``안에는 css처럼 사용하거나 js/ts 문법을 사용하여 꾸며준다. 
- 다른 페이지에서 부를때에는 import를 해주고 <변수이름 / >, <변수이름1></변수이름>으로 사용해주면 된다. <br/>
참고한 사이트 : [https://kyounghwan01.github.io/blog/React/styled-components/#다른-파일에서-컴포넌트-import](https://kyounghwan01.github.io/blog/React/styled-components/#%E1%84%83%E1%85%A1%E1%84%85%E1%85%B3%E1%86%AB-%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%8B%E1%85%A6%E1%84%89%E1%85%A5-%E1%84%8F%E1%85%A5%E1%86%B7%E1%84%91%E1%85%A9%E1%84%82%E1%85%A5%E1%86%AB%E1%84%90%E1%85%B3-import)