# MPA와 SPA, SSR과 CSR, 그리고 SEO

### MPA(Multiple Page Application)
- 페이지를 요청할 때마다 웹 서버가 요청한 UI와 필요한 데이터를 HTM로 구문 분석하여 보여주는 방식의 웹 애플리케이션
- 적은 양의 데이터를 요청해도 매번 페이지를 렌더링해야 한다. 
- 장점<br/>
1. SEO(Search Engine Optimization, 검색 엔진 최적화) 관점에서 유리하다. 
2. MPA는 완성된 형태의 HTML 파일을 서버에서 전달받기에 검색엔진이 페이지를 크롤링하기 적합하다. 
- 단점<br />
1. 매번 페이지 전체를 새로 불러와서 렌더링을 해야되기 때문에 화면이 깜빡거리는 성능상의 이슈가 있을 수도 있다. 
2. 프론트와 백엔드가 밀접하게 연관되어 있어 개발 복잡도가 증가한다. 
<br />

### SPA(Single Page Application)
- 하나의 HTML 파일을 Js를 이용하여 동적으로 화면의 컨텐츠를 바꾸는 웹 애플리케이션
- 처음에 한 번만 정적 리소스를 다운받고, 새로운 요청이 들어올 때 필요한 데이터만 부분적으로 바꿔준다. 
- 장점 <br />
1. 사용자 경험 측면에서도 좋다. 성능이 우수하다. 
2. 서버 없이도 개발 가능하며 디버깅이 상대적으로 쉽다. 
3. 로컬데이터를 효과적으로 캐시할 수 있다. 처음에 받은 데이터를 모두 로컬캐시에 저장해 놓으면 오프라인에서도 쓸 수 있다.
- 단점<br />
1. 초반 스타트가 느리다. 처음에 모든 정적 리소스들을 모두 다운받아야 되기 때문이다. 
2. SEO관점에서 불리하다. 

<img src="https://user-images.githubusercontent.com/39187116/83652198-503d8100-a5f5-11ea-90fc-625fd88c3713.png" />

### SSR(Server Side Rendering)
- 서버에서 정적인 페이지로 렌더링되어 사용자에게 내려오는 것
- 초기 로딩속도가 빠르고(JS 파일을 다운로드 하기 전에 이미 브라우저에 보여지기 때문에) SEO에 사용되는 meta태그들이 이미 정의되어 SEO에 유리하다.
<img src="https://media.vlpt.us/images/byseop/post/5d20be94-1eaa-4236-9b65-e00cdf348d00/SSR.png" />

### CSR(Client Side Rendering)
- 브라우져가 JS를 받아와 동적으로 렌더링한다. 
- 첫 로딩시에 필요한 파일 크기는 더 크지만(HTML, JS, 그 외 리소스 포함) 다 받기만 하면 동적으로 렌더링하기 때문에 사용자가 느끼는 UX에 유리하다.
- SSR과는 다르게 하나의 HTML파일로 모든 페이지를 구성하기 때문에 meta 태그 정의에 약점이 있다. 

<img src="https://media.vlpt.us/images/byseop/post/14fe740a-2ade-43ae-a87e-242ab3302756/CSR.png" />


### <b>MPA가 주로 SSR을 쓰는 것</b>이고 <b>SPA가 CSR을 사용하는 것</b>이다. 

참고한 사이트 : https://devowen.com/309