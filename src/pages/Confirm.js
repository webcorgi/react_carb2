import icoCar from '../img/ico_car.png'
import ArrowRightWhite from '../img/arrow_right_white.svg'
import imgSuccess from '../img/img_success.png'
import imgConfirm from '../img/ico_confirm.png'
import icoBack from '../img/ico_back_blue.svg'
import icoFilter from '../img/ico_filter.svg'
import { Link } from 'react-router-dom'

function Confirm() {

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
                    <Link to="" className="requestlist-top">
                        <img src={icoBack} alt="back" />
                        <span>정산 확인</span>
                    </Link>
                    <div className="requestlist-btm">
                        <div className="requestlist">
                            <ul>
                                <li>
                                    <span className='date-confirm'>2024년 4월</span>
                                    <b></b>
                                </li>
                                <li>
                                    <span>완료 건수</span>
                                    <b>10건</b>
                                </li>
                                <li>
                                    <span>정산 금액</span>
                                    <b>150,000원</b>
                                </li>
                            </ul>
                        </div>
                        <div className="requestlist">
                            <ul>
                                <li>
                                    <span className='date-confirm'>2024년 4월</span>
                                    <b></b>
                                </li>
                                <li>
                                    <span>완료 건수</span>
                                    <b>10건</b>
                                </li>
                                <li>
                                    <span>정산 금액</span>
                                    <b>150,000원</b>
                                </li>
                            </ul>
                        </div>
                        <div className="requestlist">
                            <ul>
                                <li>
                                    <span className='date-confirm'>2024년 4월</span>
                                    <b></b>
                                </li>
                                <li>
                                    <span>완료 건수</span>
                                    <b>10건</b>
                                </li>
                                <li>
                                    <span>정산 금액</span>
                                    <b>150,000원</b>
                                </li>
                            </ul>
                        </div>
                        <div className="requestlist">
                            <ul>
                                <li>
                                    <span className='date-confirm'>2024년 4월</span>
                                    <b></b>
                                </li>
                                <li>
                                    <span>완료 건수</span>
                                    <b>10건</b>
                                </li>
                                <li>
                                    <span>정산 금액</span>
                                    <b>150,000원</b>
                                </li>
                            </ul>
                        </div>
                        <div className="requestlist">
                            <ul>
                                <li>
                                    <span className='date-confirm'>2024년 4월</span>
                                    <b></b>
                                </li>
                                <li>
                                    <span>완료 건수</span>
                                    <b>10건</b>
                                </li>
                                <li>
                                    <span>정산 금액</span>
                                    <b>150,000원</b>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Confirm;