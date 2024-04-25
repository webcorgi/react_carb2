import icoClose from '../img/ico_close_blue.svg'
import guideLineFront from '../img/guideline_front.png'
import { useState } from 'react';

function ReceivingPopupUpload() {
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
            <div className="popup upload">
                <div className="con">
                    <div className="top">
                        <h2>사진 업로드 - 앞범퍼</h2>
                        <button>
                            <img src={icoClose} alt="close" />
                        </button>
                    </div>
                    <div className="btm">
                        <h3>가이드라인에 맞는 이미지를 업로드 해주세요.</h3>
                        <label className="guidelineLabel">
                            <input type="file" onChange={handleFileChange} accept="image/*"/>
                            <img src={guideLineFront} alt="guideline" id="guideline" />
                            {isLoading ? (
                                <p>Loading...</p>
                            ) : (
                                previewImage && <img src={previewImage} id="preview" alt="Preview" />
                            )}
                        </label>
                        <div className="flexbox btn">
                            <button className='btn-common'>파일 선택</button>
                            {previewImage && <button className='btn-common reverse'>재촬영</button>}
                        </div>
                    </div>
                </div>
                <div className="bg"></div>
            </div>
        </>
    )
}
export default ReceivingPopupUpload;