import icoBack from '../img/ico_back_blue.svg'
import icoCamera from '../img/ico_camera.svg'
import imgCar from '../img/car_airview.png'
import { useState } from 'react';

function Receiving() {
    const [inputDistance, setInputDistance] = useState(0);

    const onToLocaleString = (e) => {
        let value = e.target.value;
        value = Number(value.replaceAll(',', ''));
        if(isNaN(value)) {
            setInputDistance(0)
        }else {
            const formatValue = value.toLocaleString('ko-KR');
            setInputDistance(formatValue)
        }
    }

    return (
        <>
            <div className="box-receiving">
                <div className="top">
                    <div>
                        <img src={icoBack} alt="back" />
                        <span>입고/검수</span>
                    </div>
                    <button>임시 저장</button>
                </div>
                <div className="btm">
                    <div className="inner">
                        <h3>입고 사진 업로드</h3>
                        <div className="uploadbox">
                            <label className='filelabel'>
                                <input type="file" />
                                <img src={icoCamera} alt="camera" />
                            </label>
                            <label className='filelabel'>
                                <input type="file" />
                                <img src={icoCamera} alt="camera" />
                            </label>
                            <label className='filelabel'>
                                <input type="file" />
                                <img src={icoCamera} alt="camera" />
                            </label>
                            <label className='filelabel'>
                                <input type="file" />
                                <img src={icoCamera} alt="camera" />
                            </label>
                            <label className='filelabel'>
                                <input type="file" />
                                <img src={icoCamera} alt="camera" />
                            </label>
                            <label className='filelabel'>
                                <input type="file" />
                                <img src={icoCamera} alt="camera" />
                            </label>
                        </div>
                        <h3>차량 누적 주행 거리</h3>
                        <input
                            type="text"
                            className='input-distance'
                            placeholder='12,345'
                            onChange={onToLocaleString}
                            value={inputDistance}
                        />
                    </div>

                    <div className="inner">
                        <h3>타이어 교환 필요 여부</h3>
                        <div className="changeTire">
                            <label className='checklabel2'>
                                <input type="checkbox" />
                                <span>앞-좌측 타이어</span>
                            </label>
                            <label className='checklabel2'>
                                <input type="checkbox" />
                                <span>앞-좌측 타이어</span>
                            </label>
                            <label className='checklabel2'>
                                <input type="checkbox" />
                                <span>앞-좌측 타이어</span>
                            </label>
                            <label className='checklabel2'>
                                <input type="checkbox" />
                                <span>앞-좌측 타이어</span>
                            </label>
                            <img src={imgCar} alt="car" className='car' />
                        </div>
                    </div>

                    <div className="inner">
                        <h3>브레이크 패드 교환 여부</h3>
                        <div className="changePad">
                            <label className='checklabel2'>
                                <input type="checkbox" />
                                <span>앞 패드</span>
                            </label>
                            <label className='checklabel2'>
                                <input type="checkbox" />
                                <span>뒤 패드</span>
                            </label>
                        </div>
                    </div>

                    <div className="inner">
                        <h3>경고등 점등 상태</h3>
                        <p className='subtext'>(ex. 엔진 경고등, 타이어 공기압)</p>
                        <input type="text" placeholder='텍스트 필드' className='inputstyle1' />

                        <div className="h40"></div>

                        <h3>소모품 상태</h3>
                        <p className='subtext'>(ex. 엔진 오일 부족, 앞 타이어 교환 필요)</p>
                        <input type="text" placeholder='텍스트 필드' className='inputstyle1' />

                        <div className="h40"></div>

                        <h3>특이 사항</h3>
                        <p className='subtext'>(ex. 차량 외판 손상)</p>
                        <input type="text" placeholder='텍스트 필드' className='inputstyle1' />

                        <div className="h80"></div>

                        <button className="btn-common">다음</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Receiving;