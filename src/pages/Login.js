import logo from '../img/logo.svg'

function Login() {

    return (
        <>
            <div className="loginbox">
                <img src={logo} alt="carbell" />
                <h2>파트너사 로그인</h2>

                <div className="form">
                    <div className="inputwrap">
                        <input type="id" placeholder='아이디' className='input-id warning' />
                        <p className='text-warning'>아이디를 입력하세요.</p>
                    </div>
                    <div className="inputwrap">
                        <input type="password" placeholder='비밀번호'  className='input-pw active' />
                        <p className='text-warning'>비밀번호를 입력하세요.</p>
                    </div>
                    <div className="inputwrap">
                        <input type="text" placeholder='사업자 등록번호'  className='input-biz' />
                        <p className='text-warning'>등록번호를 입력하세요.</p>
                    </div>

                    <label className='checklabel'>
                        <input type="checkbox" />
                        <i></i>
                        <span>자동 로그인</span>
                    </label>

                    <button className='btn-common login'>로그인</button>
                </div>
            </div>
        </>
    )
}
export default Login;