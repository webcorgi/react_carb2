import icoClose from '../img/ico_close_blue.svg'

function ReceivingPopup() {

    return (
        <>
            <div className="popup temp">
                <div className="con">
                    <div className="top">
                        <h2>임시 저장</h2>
                        <button>
                            <img src={icoClose} alt="close" />
                        </button>
                    </div>
                    <div className="btm">
                        <h3>임시 저장하시겠습니까?</h3>

                        <div className="flexbox btn">
                            <button className='btn-common'>확인</button>
                            <button className='btn-common reverse'>닫기</button>
                        </div>
                    </div>
                </div>
                <div className="bg"></div>
            </div>
        </>
    )
}
export default ReceivingPopup;