import icoCar from '../img/ico_car.png'
import ArrowRightWhite from '../img/arrow_right_white.svg'
import imgSuccess from '../img/img_success.png'
import imgConfirm from '../img/ico_confirm.png'


function Main() {

    return (
        <>
            <div className="main">
                <div className="box-partner">
                    <img src={icoCar} alt="car" />
                    <div className="text">
                        <h2>파트너사</h2>
                        <span>지점명</span>
                    </div>
                </div>
                <div className="box-request">
                    <h2>고객사 입고요청</h2>
                    <div className="num">
                        <strong>10</strong>
                        <img src={ArrowRightWhite} alt="arrow" />
                    </div>
                </div>
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
        </>
    )
}
export default Main;