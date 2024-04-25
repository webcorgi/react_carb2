import icoCar from '../img/ico_car.png'
import ArrowRightWhite from '../img/arrow_right_white.svg'
import imgSuccess from '../img/img_success.png'
import imgConfirm from '../img/ico_confirm.png'
import icoBack from '../img/ico_back_blue.svg'
import icoFilter from '../img/ico_filter.svg'
import icoClose from '../img/ico_close_blue.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function ProcessEnd() {
    const [showPopup, setShowPopup] = useState(false);

    const clickShowPopop = () => setShowPopup(true)
    const clickHidePopop = () => setShowPopup(false)


    return (
        <>
            <div className="boxwrapper">
                <div className="main">
                    <div className="box-partner">
                        <img src={icoCar} alt="car" />
                        <div className="text">
                            <h2>파트너사</h2>
                            <span>지점명</span>
                        </div>
                    </div>
                    <Link className="box-request">
                        <h2>고객사 입고요청</h2>
                        <div className="num">
                            <strong>10</strong>
                            <img src={ArrowRightWhite} alt="arrow" />
                        </div>
                    </Link>
                    <Link to="" className="flexbox">
                        <div className="box-wait">
                            <h2>입고 대기</h2>
                            <div className="num">
                                <strong className='c_navy2'>10</strong>
                            </div>
                        </div>
                        <div className="box-fixing">
                            <h2>정비중</h2>
                            <div className="num">
                                <strong>10</strong>
                            </div>
                        </div>
                    </Link>
                    <div className="flexbox">
                        <Link to="" className="box-confirm">
                            <h2>진행 완료</h2>
                            <img src={imgSuccess} alt="진행 완료" />
                        </Link>
                        <Link to="" className="box-confirm">
                            <h2>정산 확인</h2>
                            <img src={imgConfirm} alt="정산 확인" />
                        </Link>
                    </div>
                </div>
                <div className='sidewrap processEnd'>
                    {/* 기간설정 */}
                    <div className={showPopup ? 'setDatePopup active' : 'setDatePopup'}>
                        <div className="con">
                            <div className="top">
                                <b>기간 설정</b>
                                <button onClick={clickHidePopop}><img src={icoClose} alt="close" /></button>
                            </div>
                            <div className="btm">
                                <p>조회 기간</p>
                                <div className="flexbox btn">
                                    <button className='btn-common2'>월별</button>
                                    <button className='btn-common2 navy'>직접 설정</button>
                                </div>
                                <div className="flexbox date">
                                    <input type="text" />
                                    <span>~</span>
                                    <input type="text" />
                                </div>
                                <button className="btn-common">필터 적용</button>
                            </div>
                        </div>
                        <div className="bg" onClick={clickHidePopop}></div>
                    </div>
                    {/* // 기간설정 */}

                    <Link to="" className="requestlist-top">
                        <img src={icoBack} alt="back" />
                        <span>완료 리스트</span>
                    </Link>
                    <div className="requestlist-btm">
                        <div className="processEndResult">
                            <button className="setDate" onClick={clickShowPopop}>
                                <span>기간 설정</span>
                                <img src={icoFilter} alt="filter" />
                            </button>
                            <div className="result">
                                <b>합계</b>
                                <div className="text">
                                    <b>15대</b>
                                    <p>990,000원</p>
                                </div>
                                <button className='btn-common view_mo'>확인</button>
                            </div>
                        </div>
                        <div className="requestlist">
                            <ul>
                                <li>
                                    <span>No.00001</span>
                                    <b></b>
                                </li>
                                <li>
                                    <span>입고 날짜</span>
                                    <b>2024.01.02</b>
                                </li>
                                <li>
                                    <span>차량 정보</span>
                                    <b>SM3 · 01다 1234</b>
                                </li>
                                <li>
                                    <span>정산 금액</span>
                                    <b>85,000원</b>
                                </li>
                            </ul>
                        </div>
                        <div className="requestlist">
                            <ul>
                                <li>
                                    <span>No.00001</span>
                                    <b></b>
                                </li>
                                <li>
                                    <span>입고 날짜</span>
                                    <b>2024.01.02</b>
                                </li>
                                <li>
                                    <span>차량 정보</span>
                                    <b>SM3 · 01다 1234</b>
                                </li>
                                <li>
                                    <span>정산 금액</span>
                                    <b>85,000원</b>
                                </li>
                            </ul>
                        </div>
                        <div className="requestlist">
                            <ul>
                                <li>
                                    <span>No.00001</span>
                                    <b></b>
                                </li>
                                <li>
                                    <span>입고 날짜</span>
                                    <b>2024.01.02</b>
                                </li>
                                <li>
                                    <span>차량 정보</span>
                                    <b>SM3 · 01다 1234</b>
                                </li>
                                <li>
                                    <span>정산 금액</span>
                                    <b>85,000원</b>
                                </li>
                            </ul>
                        </div>
                        <div className="requestlist">
                            <ul>
                                <li>
                                    <span>No.00001</span>
                                    <b></b>
                                </li>
                                <li>
                                    <span>입고 날짜</span>
                                    <b>2024.01.02</b>
                                </li>
                                <li>
                                    <span>차량 정보</span>
                                    <b>SM3 · 01다 1234</b>
                                </li>
                                <li>
                                    <span>정산 금액</span>
                                    <b>85,000원</b>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProcessEnd;