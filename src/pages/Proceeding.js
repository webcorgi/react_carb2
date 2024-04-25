import icoCar from '../img/ico_car.png'
import ArrowRightWhite from '../img/arrow_right_white.svg'
import imgSuccess from '../img/img_success.png'
import imgConfirm from '../img/ico_confirm.png'
import imgBackWhite from '../img/ico_back_white.svg'
import imgBackBlue from '../img/ico_back_blue.svg'
import { Link } from 'react-router-dom'


function Proceeding() {

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
                    <div className="flexbox">
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
                    </div>
                    <div className="flexbox">
                        <div className="box-confirm">
                            <h2>진행 완료</h2>
                            <img src={imgSuccess} alt="진행 완료" />
                        </div>
                        <div className="box-confirm">
                            <h2>정산 확인</h2>
                            <img src={imgConfirm} alt="정산 확인" />
                        </div>
                    </div>
                </div>
                <div className='sidewrap'>
                    <Link to="" className="requestlist-top navy">
                        <img src={imgBackWhite} alt="back" className='view_pc_only' />
                        <img src={imgBackBlue} alt="back" className='view_mo_only' />
                        <span>진행 중인 리스트</span>
                    </Link>
                    <div className="requestlist-btm">
                        <div className="requestlist textDateMargin first">
                            <p className='text-date'>2024년 1월 2일</p>
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
                                    <span>정비 유형</span>
                                    <b>일반 정비</b>
                                </li>
                            </ul>
                            <div className="flexbox btn">
                                <button className='btn-common reverse h40'>차량 상세</button>
                                <button className='btn-common h40'>입고/검수</button>
                                <button className='btn-common default h40'>장비/출고</button>
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
                                    <span>정비 유형</span>
                                    <b>일반 정비</b>
                                </li>
                            </ul>
                            <div className="flexbox btn">
                                <button className='btn-common reverse h40'>차량 상세</button>
                                <button className='btn-common h40'>입고/검수</button>
                                <button className='btn-common default h40'>장비/출고</button>
                            </div>
                        </div>
                        <div className="requestlist textDateMargin">
                            <p className='text-date'>2024년 1월 2일</p>
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
                                    <span>정비 유형</span>
                                    <b>일반 정비</b>
                                </li>
                            </ul>
                            <div className="flexbox btn">
                                <button className='btn-common reverse h40'>차량 상세</button>
                                <button className='btn-common h40'>입고/검수</button>
                                <button className='btn-common default h40'>장비/출고</button>
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
                                    <span>정비 유형</span>
                                    <b>일반 정비</b>
                                </li>
                            </ul>
                            <div className="flexbox btn">
                                <button className='btn-common reverse h40'>차량 상세</button>
                                <button className='btn-common h40'>입고/검수</button>
                                <button className='btn-common default h40'>장비/출고</button>
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
                                    <span>정비 유형</span>
                                    <b>일반 정비</b>
                                </li>
                            </ul>
                            <div className="flexbox btn">
                                <button className='btn-common reverse h40'>차량 상세</button>
                                <button className='btn-common h40'>입고/검수</button>
                                <button className='btn-common default h40'>장비/출고</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Proceeding;