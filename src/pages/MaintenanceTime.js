import { Link } from "react-router-dom";
import icoBack from '../img/ico_back_blue.svg'
import icoArrowRightWhite from '../img/arrow_right_white.svg'
import icoArrowRightBlue from '../img/arrow_right_blue.svg'
import imgDoc from '../img/doc.png'
import { useState } from "react";



function MaintenanceTime() {
    const [previewImage, setPreviewImage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setIsLoading(true);
            const reader = new FileReader();
            reader.onload = () => {
                setPreviewImage(reader.result);
                setIsLoading(false);
            };
            reader.readAsDataURL(file);
        } else {
            setPreviewImage('');
            setIsLoading(false);
        }
    };


    return (
        <>
            <div className="boxwrapper">
                <div className="maintenance1">
                    <Link to="" className="maintenance-top">
                        <img src={icoBack} alt="back"/>
                        <span>정비/출고</span>
                    </Link>
                    <div className="box-doc">
                        <div className="top">견적서</div>
                        <div className="btm">
                            <div className="img">
                                <img src={imgDoc} alt="img" />
                            </div>
                        </div>
                    </div>
                    <Link to="" className="box-default blue">
                        <span>정비 예상 시간</span>
                        <img src={icoArrowRightWhite} alt="arrow" />
                    </Link>
                    <Link to="" className="box-default">
                        <span>출고 요청</span>
                        <img src={icoArrowRightBlue} alt="arrow" />
                    </Link>
                </div>
                <div className="">
                    <div className="maintanBox">
                        <div className="top">
                            <span>정비 예상 시간</span>
                        </div>
                        <div className="btm">
                            <div className="time">
                                <span>종료 시간</span>
                                <div className="right">
                                    <input type="text" />
                                    <span>월</span>
                                    <input type="text" />
                                    <span>일</span>
                                    <input type="text" className="othersize" />
                                </div>
                            </div>
                            <button className="btn-common">확인</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MaintenanceTime;