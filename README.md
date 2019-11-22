# React [![Sources](https://img.shields.io/badge/출처-reactjs.org-yellow)](https://www.reactjs.org/docs/hello-world.html)

React Study Project

### Angular vs. React

- Angular는 Google에서 만들고 관리하는 Front-End `Framework`이며, 대부분의 코드 편집기에서 작성 가능하다.
- Angular는 MEAN 스택의 구성원이며 무료 오픈 소스 Tool Set이다.
- MEAN Stack은 `M`ongoDB (NoSQL DB), `E`xpress.js (Back-End Framework), `A`ngular 또는 AngularJS (Front-End Framework) 및 `N`ode.js (Server Platform)로 구성
- Angular Framework는 개발자들이 동적 단일 페이지 웹 애플리케이션(SPA)을 만들 수 있게 해준다.
- Angular가 처음 출시되었을 때 가장 주요한 장점은 HTML 기반 문서를 동적인 콘텐츠로 변환 가능하다.

- React.js는 동적 사용자 인터페이스를 만들기 위해 Facebook에서 2011년에 만든 오픈 소스 JavaScript `Library`
- React는 Front-End 개발을 위한 HTML 요소의 생성을 허용하는 JavaScript 및 JSX를 기반으로 한다.
- React에는 모바일 앱 개발을 위한 별도의 Cross-Platform Framework인 React Native가 있다.

![compare](images/compare.png)

### React 통합 및 지원 도구

- `Redux` : 상태를 관리하는 Container로 React로 대규모 응용프로그램을 작성할 때 효과적으로 많은 동적 요소가 있는 응용 프로그램의 구성 요소를 관리하며 렌더링에도 사용되며, Redux용 선택기 라이브러리 및 Redux DevTools Profiler Monitor를 포함하는 더 넓은 Redux ToolSet와 함께 작동한다.
- `Babel` : JSX를 application이 JavaScript로 변환을 시킴으로써 browser에서 이해할 수 있도록 해주는 Trans-Compiler
- `Webpack` : 모든 구성 요소가 서로 다른 파일로 작성되므로 더 나은 관리를 위해 구성 요소를 Bundle로 만들어 준다.
- `React Router` : React와 함께 일반적으로 사용되는 표준 URL Routing Library

- Angular와 달리 React에서는 단일 Tool로 전체 앱을 테스트 할 수 없으며, 각기 다른 테스트 유형마다 별도의 Tool을 사용해야 한다.
	- Enzyme /  Unexpected-react : 컴포넌트 테스팅
	- Jest :  자바스크립트 코드
	- react-testing-library : React DOM 테스팅
	- React-unit :  unit 테스팅
	- Skin-deep : Rendering Test utils

#### JSX (Javascript XML)

- JavaScript를 확장한 문법으로 UI가 어떻게 생겨야 하는지 설명하기 위해 React와 함께 사용 권장된다.
- JSX는 React `element` 를 생성한다.
- React에서는 이벤트가 처리되는 방식, 시간에 따라 state가 변하는 방식, 화면에 표시하기 위해 데이터가 준비되는 방식 등 rendering logic이 다른 UI logic과 연결된다.
- React는 별도의 파일에 markup과 logic을 넣어 기술을 인위적으로 분리하는 대신, 둘 다 포함하는 `component`라는 느슨하게 연결된 unit으로 관심사를 분리한다.

```js
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

// JSX를 if 구문 및 for loop 안에 사용하고, 변수에 할당하고, 인자로서 받아들이고, 함수로부터 반환 가능하다.
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

const user = {
  firstName: 'J.Ho',
  lastName: 'Moon'
};

const element = ( // 괄호 안에는 유효한 모든 JavaScript 표현식을 넣을 수 있다.
  <h1>
    Hello, {formatName(user)}!  // JavaScript 함수 호출의 결과를 element에 포함한다.
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

#### Element Rendering

- element는 React app의 가장 작은 단위로 화면에 표시할 내용을 기술한다.
- element는 component의 구성 요소이다.

```java
// 이 안에 들어가는 모든 element를 React DOM에서 관리하기 때문에 root DOM Node라 한다.
<div id="root"></div>

// React element를 root DOM node에 rendering하려면 둘 다 ReactDOM.render()로 전달하면 된다.
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

- React element는 불변객체로 생성한 이후에는 해당 element의 자식이나 속성을 변경할 수 없다. UI를 update하는 유일한 방법은 새로운 element를 생성하고 이를 ReactDOM.render()로 전달하는 것이다.
- React DOM은 해당 element와 그 자식 element를 이전의 element와 비교하고, DOM을 원하는 상태로 만드는데 필요한 경우에만 DOM을 update한다.

```java
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  // 매초 전체 UI를 다시 그리도록 element를 만들었지만, React DOM은 내용이 변경된 text node만 update한다.
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```

### Components & Props

- component를 통해 UI를 재사용 가능한 개별적인 여러 조각으로 나누고, 각 조각을 개별적으로 살펴볼 수 있다.
- `props`라고 하는 임의의 input을 받은 후, 화면에 어떻게 표시되는지를 기술하는 React element를 반환한다.

```java
// ECMAScript6 class를 사용하여 컴포넌트를 정의
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```
#### Run

```bash
$ npm install -g create-react-app # 프로젝트 생성 명령 설치하기, -g 옵션은 시스템 공통 폴더에 설치하라는 옵션
$ create-react-app mincloud # 프로젝트 생성하기
$ cd mincloud # 생성한 프로젝트 폴더에 들어가기
$ npm start # 프로젝트 실행하기, node.js에서 해당 프로젝트가 실행된다. (App.js)

> mincloud@0.1.0 start D:\React\mincloud
> react-scripts start

Compiled successfully!

You can now view mincloud in the browser.

  http://localhost:3000/

Note that the development build is not optimized.
To create a production build, use npm run build.
```

### State & Lifecycle

- State를 이용하여 component를 완전히 재사용하고 캡슐화하는 방법 (index.js)

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Clock from './Clock'; // <== Clock component를 import한다.
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Clock />, document.getElementById('root'));

serviceWorker.unregister();
```

```bash
$ npm start # 프로젝트 실행하기, node.js에서 해당 프로젝트가 실행된다. (Clock.js)
```