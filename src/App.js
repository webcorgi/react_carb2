import 'css/App.css';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import ScrollTop from 'include/ScrollTop';
import Wrapper from 'include/Wrapper';
import Header from 'include/Header';
import Main from 'pages/Main';
import Request from 'pages/Request';
import Login from 'pages/Login';
import RequestDetail from 'pages/RequestDetail';
import Proceeding from 'pages/Proceeding';
import Receiving from 'pages/Receiving';

function App() {

  return (
    <BrowserRouter
    // basename='react_carb2'
    >
      <Header />
      <ScrollTop />
      <Wrapper>
        <Routes>
          {/* 00.로그인, 00.로그인-활성화, 00.로그인-미입력 */}
          <Route path="/" element={<Login />} exact />

          {/* 02. 서비스 메인 */}
          <Route path="/main" element={<Main />} />

          {/* 03. 입고 요청 */}
          <Route path="/request" element={<Request />} />

          {/* 03-A. 입고 요청 상세 */}
          <Route path="/requestDetail" element={<RequestDetail />} />

          {/* 04. 진행중 */}
          <Route path="/proceeding" element={<Proceeding />} />

          {/* 04-A. 입고/검수 */}
          <Route path="/receiving" element={<Receiving />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;