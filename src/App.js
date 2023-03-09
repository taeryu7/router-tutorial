

/*
// URL Params
파라미터를 받아올 땐 match 안에 들어있는 params 값을 참조한다.
match 객체안에는 현재의 주소가 Route 컴포넌트에서 정한 규칙과 어떻게 일치하는지에 대한 정보가 들어있다.

path 규칙에는 /profiles/:username 이라고 넣어주면,
username 에 해당하는 값을 파라미터로 넣어주어서 Profile 컴포넌트에서 match props 를 통하여 전달받을 수 있게된다.
*/
import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default App;

/*
Link: 누르면 다른 주소로 이동시키기
Link 컴포넌트는 클릭하면 다른 주소로 이동시키는 컴포넌트다.

리액트 라우터를 사용할땐 일반 <a href="...">...</a> 태그를 사용하시면 안된다.
만약 하게된다면 onClick 에 e.preventDefault() 를 호출하고 따로 자바스크립트로 주소를 변환시켜주어야한다.

그 대신에 Link 라는 컴포넌트를 사용해야한다. 그 이유는 a 태그의 기본적인 속성은 페이지를 이동시키면서, 페이지를 아예 새로 불러오게된다.
그렇게 되면서 우리 리액트 앱이 지니고있는 상태들도 초기화되고, 렌더링된 컴포넌트도 모두 사라지고 새로 렌더링을 하게된다.
그래서 a 태그 대신에 Link 컴포넌트를 사용하고있다.
이 컴포넌트는 HTML5 History API 를 사용하여 브라우저의 주소만 바꿀뿐 페이지를 새로 불러오지 않는다.
HTML5 History API → https://developer.mozilla.org/ko/docs/Web/API/History

import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
};

export default App;
*/

/*
//Route: 특정 주소에 컴포넌트 연결하기

사용자가 요청하는 주소에 따라 다른 컴포넌트를 보여줘야한다.
이 작업을 할 때에는 Route 라는 컴포넌트를 사용한다.
↓사용 방식은 아래와 같다.
<Route path="주소규칙" component={보여주고싶은 컴포넌트}>

import React from 'react';
import { Route } from 'react-router-dom';
import About from './About';
import Home from './Home';

const App = () => {
  return (
    <div>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
};

export default App;
*/