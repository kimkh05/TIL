# React 디자인 패턴

### 컴포넌트를 분리하는 경우

- 재사용성 <br />
  : 중복되는 뷰 조각이 있으면 이를 컴포넌트와 해서 사용할 수 있게 한다.
- 가독성 향상 <br/>
  : 재사용성하고는 관련 없지만 개별 모듈을 분리하여 가독성을 높일 수 있다.

### View 로직은 어떻게 관리해야 할까?

1.  Container - Presenter
    : 데이터 처리와 데이터 출력을 분리하는 것이다. Container에서 처리하거나 받아온 데이터들을 Presenter 컴포넌트에 props로 넘긴다.
    개인적으로 선호하지 않는 이유는 생산성 저하 때문이다.
    Container에서 대부분의 뷰 로직을 처리하고 state를 props로 Presenter에게 전달해주다보니 전달되는 Props가 많아지고 뷰와 뷰 로직이 서로 다른 파일로 분리되어 있다보니, 개발할 때 파일을 왔다갔다 하는 게 생산성 저하로 이어지는 느낌을 크게 받았다.

2.  비지니스 로직
    2-1: Page 파일에 뷰, 뷰 로직을 함께 작성하는 것이다.
    이러면 Page 파일이 방대해진다. & 역할 및 기능을 파악하기 어렵고, 이것은 심각한 생산성 문제로 이어진다.
    2-2: 비즈니스 로직을 Custom Hook으로 개발하기이다.
    React Hook은 여러 파일에서 반복되는 React State 관련 코드를 모듈화하는 목적으로서 사용한다. 비지니스 로직에 state가 필요했던 적은 적고, React는 뷰 개발을 도와주는 라이브러리로서 만들어졌기 때문에, 뷰 관련 코드 외에는 React State 사용을 지양해야한다고 생각함.

3.  Service 파일, Helper 파일을 분리해서 개발하기
    custom Hook을 사용하는 경우 -> 비추

참고했던 블로그들
-> https://velog.io/@sonwanseo/React-%EB%94%94%EC%9E%90%EC%9D%B8-%ED%8C%A8%ED%84%B4%EC%97%90-%EB%8C%80%ED%95%9C-%EA%B3%A0%EB%AF%BC
-> https://velog.io/@dolarge/React-Container-Presenter-%ED%8C%A8%ED%84%B4
