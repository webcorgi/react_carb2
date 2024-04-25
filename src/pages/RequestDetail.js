import icoCar from '../img/ico_car.png'
import ArrowRightWhite from '../img/arrow_right_white.svg'
import imgSuccess from '../img/img_success.png'
import imgConfirm from '../img/ico_confirm.png'
import icoBack from '../img/ico_back_blue.svg'
import { Link } from 'react-router-dom'



function RequestDetail() {

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
                    <div className="box-requestdetail">
                        <Link to="" className="top">
                            <img src={icoBack} alt="back" />
                            <span>입고 요청 상세</span>
                        </Link>
                        <div className="inner-mo-scroll">
                            <ul className="list">
                                <li>
                                    <span>입고 날짜</span>
                                    <b>2024.01.02</b>
                                </li>
                                <li>
                                    <span>차량 정보</span>
                                    <b>SM · 01다 1234</b>
                                </li>
                                <li>
                                    <span>요청 사항</span>
                                    <b>
                                        엔진 오일 교환<br />
                                        타이어 점검
                                    </b>
                                </li>
                                <li>
                                    <span>정비 이력</span>
                                    <b>
                                        2023.10.10・엔진오일 교환 / 25,000km<br />
                                        2023.10.10・엔진오일 교환 / 25,000km
                                    </b>
                                </li>
                            </ul>
                            <div className="flexbox btn">
                                <button className='btn-common'>수락</button>
                                <button className='btn-common reverse'>불가</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default RequestDetail;