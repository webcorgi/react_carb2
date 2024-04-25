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
import ReceivingInput from 'pages/ReceivingInput';
import ReceivingPopup from 'pages/ReceivingPopup';
import ReceivingPopupUpload from 'pages/ReceivingPopupUpload';
import Maintenance from 'pages/Maintenance';
import MaintenanceTime from 'pages/MaintenanceTime';
import MaintenanceShipment from 'pages/MaintenanceShipment';
import ProcessEnd from 'pages/ProcessEnd';
import Confirm from 'pages/Confirm';
import Onboarding from 'pages/Onboarding';
import List from 'pages/List';

function App() {

  return (
    <BrowserRouter
      basename='react_carb2'
    >
      <ScrollTop />
      <Header />
      <Wrapper>
        <Routes>
          {/* 전체 작업 리스트 */}
          <Route path="/list" element={<List />} />

          {/* 00.온보딩 */}
          <Route path="/onboarding" element={<Onboarding />} />

          {/* 00.로그인, 00.로그인-활성화, 00.로그인-미입력 */}
          <Route path="/login" element={<Login />} exact />

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

          {/* 04-A. 입고/검수 - 입력 */}
          <Route path="/receivingInput" element={<ReceivingInput />} />

          {/* 04-A. 입고/검수 - 임시 저장 팝업 */}
          <Route path="/receivingPopup" element={<ReceivingPopup />} />

          {/* 04-A. 입고/검수 - 사진 업로드 팝업 */}
          <Route path="/receivingPopupUpload" element={<ReceivingPopupUpload />} />

          {/* 04-A. 정비/출고 - 견적서 업로드  */}
          <Route path="/maintenance" element={<Maintenance />} />

          {/* 04-A. 정비/출고 - 정비 예상 시간  */}
          <Route path="/maintenanceTime" element={<MaintenanceTime />} />

          {/* 04-A. 정비/출고 - 출고 요청  */}
          <Route path="/maintenanceShipment" element={<MaintenanceShipment />} />

          {/* 05. 진행 완료  */}
          <Route path="/processEnd" element={<ProcessEnd />} />

          {/* 06. 정산 확인 */}
          <Route path="/confirm" element={<Confirm />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;