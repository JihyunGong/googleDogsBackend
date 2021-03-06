## 코딩 테스트 - 백엔드
코딩 테스트 백엔드 작업물을 제출합니다.

### 작업 결과물 구조
- 스키마
  - User: 유저 이름, 프로필 사진, 이메일을 저장할 수 있도록 구성하였습니다.
  - Document: 문서 id, 문서 내용을 저장할 수 있도록 구성하였습니다. 미구현 사항이지만, 문서 id를 기반으로 고유한 URL을 생성할 예정입니다.

- 경로
  - 메인("/"): 메인 페이지 이하 모든 페이지를 CSR로 렌더링하기 위해 리액트로 build한 html 파일을 보냅니다.
  - 문서("/api/docs"): 검증을 마친 유저가 기존의 유저인지 판단 후, 기존 유저가 아니라면 새로운 유저를 추가합니다. 아직 미구현 사항이지만, 유저 정보를 기반으로 특정 유저가 생성한 문서들을 불러올 예정입니다. 해당 문서들은 json 형식으로 반환됩니다. 
  - 미들웨어("index.js"): 요청을 받은 headers 객체에 토큰을 추출하여 firebase 모듈을 이용해 토큰 검증을 거칩니다. 만약 검증에 성공하면 다음 함수로 넘어가게 하고, 아니라면 에러 메세지를 담은 객체를 반환하게 하였습니다. 

- 소켓 구현
  - 소켓을 통해 문서를 관리(문서 생성, 문서 자동 저장, 라이브 수정, 문서 불러오기)할 수 있도록 하였습니다.

### 막혔던 부분
백엔드 작업물을 구현하는 과정에서, 특히 로그인을 검증하는 단계에 시간 투자를 많이하였습니다. 그 이유는 클라이언트가 토큰을 검증하기 위해 서버로 GET 요청을 보냈는데, 그 요청이 올바르게 가지 않았기 때문입니다. 주요한 에러 코드는 431(Request header fields too large)였습니다.

이를 해결하기 위해, 아래와 같은 방법들을 시도해보았습니다. 
  - 헤더의 수용량 증가
  - 브라우저의 쿠키 및 캐쉬 삭제
  - 모든 쿠키 허용
  - 요청 URL 수정
  - axios.get() 사용

위와 같은 방법들을 시도한 후, 요청이 올바르게 가기 시작하였으나 종종 똑같은 요청에 동일한 에러가 일어나는 것을 확인하여 아직 완전히 해결하지 못했습니다. 이 부분은 더 탐구헤보겠습니다. 
