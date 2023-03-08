
//Route: 특정 주소에 컴포넌트 연결하기
/*
사용자가 요청하는 주소에 따라 다른 컴포넌트를 보여줘야한다.
이 작업을 할 때에는 Route 라는 컴포넌트를 사용한다.
↓사용 방식은 아래와 같다.
<Route path="주소규칙" component={보여주고싶은 컴포넌트}>
*/
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
