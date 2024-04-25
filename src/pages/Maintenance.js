import { Link } from "react-router-dom";
import icoBack from '../img/ico_back_blue.svg'
import icoArrowRightWhite from '../img/arrow_right_white.svg'
import icoArrowRightBlue from '../img/arrow_right_blue.svg'
import icoCamera from '../img/ico_camera.svg'
import { useRef, useState } from "react";



function Maintenance() {
    const fileInputRef = useRef(null);
    const [previewImage, setPreviewImage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

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
    }


    return (
        <>
            <div className="boxwrapper">
                <div className="maintenance1">
                    <Link to="" className="maintenance-top">
                        <img src={icoBack} alt="back"/>
                        <span>정비/출고</span>
                    </Link>
                    <Link to="" className="box-default blue">
                        <span>견적서 업로드</span>
                        <img src={icoArrowRightWhite} alt="arrow" />
                    </Link>
                    <Link to="" className="box-default">
                        <span>정비 예상 시간</span>
                        <img src={icoArrowRightBlue} alt="arrow" />
                    </Link>
                    <Link to="" className="box-default">
                        <span>출고 요청</span>
                        <img src={icoArrowRightBlue} alt="arrow" />
                    </Link>
                </div>
                <div className="maintenance2">
                    <div className="box-uploadimage">
                        <label className="imagelabel">
                            <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} />
                            {
                                previewImage == ''
                                && <img src={icoCamera} id="icoCamera" alt="camera icon" />
                            }
                            {isLoading ? (
                                <p>Loading...</p>
                            ) : (
                                previewImage && <img src={previewImage} id="preview" alt="Preview" />
                            )}
                        </label>
                        {
                            previewImage == ''
                            ? <button className="btn-common" onClick={handleButtonClick}>파일 선택</button>
                            : (
                                <div className="flexbox btn">
                                    <button className="btn-common">업로드</button>
                                    <button className="btn-common reverse">재촬영</button>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default Maintenance;