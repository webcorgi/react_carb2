import { Link } from "react-router-dom";


function List() {

    return (
        <>
            <div class="overlay">
                <div class="overlay__inner">
                    <h1 class="overlay__title">
                        <p>😊 퍼블리싱 리스트</p>
                        Carbell
                    </h1>
                    <table>
                        <tbody>
                            <tr>
                                <th>페이지 위치</th>
                                <th>링크</th>
                            </tr>
                            <tr>
                                <th>00.온보딩</th>
                                <td><Link to="/onboarding" target="_blank">/onboarding</Link></td>
                            </tr>
                            <tr>
                                <th>00.로그인, 00.로그인-활성화, 00.로그인-미입력</th>
                                <td><Link to="/main" target="_blank">/main</Link></td>
                            </tr>
                            <tr>
                                <th>03. 입고 요청</th>
                                <td><Link to="/request" target="_blank">/request</Link></td>
                            </tr>
                            <tr>
                                <th>03-A. 입고 요청 상세</th>
                                <td><Link to="/requestDetail" target="_blank">/requestDetail</Link></td>
                            </tr>
                            <tr>
                                <th>04. 진행중</th>
                                <td><Link to="/proceeding" target="_blank">/proceeding</Link></td>
                            </tr>
                            <tr>
                                <th>04-A. 입고/검수</th>
                                <td><Link to="/receiving" target="_blank">/receiving</Link></td>
                            </tr>
                            <tr>
                                <th>04-A. 입고/검수 - 입력</th>
                                <td><Link to="/receivingInput" target="_blank">/receivingInput</Link></td>
                            </tr>
                            <tr>
                                <th>04-A. 입고/검수 - 임시 저장 팝업</th>
                                <td><Link to="/receivingPopup" target="_blank">/receivingPopup</Link></td>
                            </tr>
                            <tr>
                                <th>04-A. 입고/검수 - 사진 업로드 팝업</th>
                                <td><Link to="/receivingPopupUpload" target="_blank">/receivingPopupUpload</Link></td>
                            </tr>
                            <tr>
                                <th>04-A. 정비/출고 - 견적서 업로드</th>
                                <td><Link to="/maintenance" target="_blank">/maintenance</Link></td>
                            </tr>
                            <tr>
                                <th>04-A. 정비/출고 - 정비 예상 시간</th>
                                <td><Link to="/maintenanceTime" target="_blank">/maintenanceTime</Link></td>
                            </tr>
                            <tr>
                                <th>04-A. 정비/출고 - 출고 요청</th>
                                <td><Link to="/maintenanceShipment" target="_blank">/maintenanceShipment</Link></td>
                            </tr>
                            <tr>
                                <th>05. 진행 완료</th>
                                <td><Link to="/processEnd" target="_blank">/processEnd</Link></td>
                            </tr>
                            <tr>
                                <th>06. 정산 확인</th>
                                <td><Link to="/confirm" target="_blank">/confirm</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <footer>
                    <a href="https://kmong.com/gig/154084" target="_blank">Made By Webcorgi</a>
                </footer>
            </div>
<style>
    {`
        footer {
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        footer a {
            font-size: 16px;
            color: blue;
            text-decoration: underline;
            margin-top: 50px;
        }

        :root {
            --dark-color: hsl(var(--hue), 100%, 9%);
            --light-color: hsl(var(--hue), 95%, 98%);
            --base: hsl(var(--hue), 95%, 50%);
            --complimentary1: hsl(var(--hue-complimentary1), 95%, 50%);
            --complimentary2: hsl(var(--hue-complimentary2), 95%, 50%);

            --font-family: "Poppins", system-ui;

            --bg-gradient: linear-gradient(to bottom,
                    hsl(var(--hue), 95%, 99%),
                    hsl(var(--hue), 95%, 84%));
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        body {
            max-width: 1920px;
            min-height: 100vh;
            display: grid;
            place-items: center;
            padding: 2rem;
            font-family: var(--font-family);
            color: var(--dark-color);
            background: var(--bg-gradient);
        }

        .orb-canvas {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        }

        strong {
            font-weight: 600;
        }

        .overlay {
            width: 100%;
            max-width: 1140px;
            padding: 4rem 4rem 0;
            background: rgba(255, 255, 255, 0.375);
            box-shadow: 0 0.75rem 2rem 0 rgba(0, 0, 0, 0.1);
            border-radius: 2rem;
            border: 1px solid rgba(255, 255, 255, 0.125);
        }

        .overlay__inner {
            width: 100%;
        }

        .overlay__title {
            font-size: 34px;
            line-height: 2.75rem;
            font-weight: 700;
            letter-spacing: -0.025em;
            margin-bottom: 2rem;
        }

        .text-gradient {
            background-image: linear-gradient(45deg,
                    var(--base) 25%,
                    var(--complimentary2));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            -moz-background-clip: text;
            -moz-text-fill-color: transparent;
        }

        .overlay__description {
            font-size: 24px;
            line-height: 1.6;
            margin-bottom: 3rem;
        }

        .overlay__btns {
            width: 100%;
            display: flex;
        }

        .overlay__btn {
            width: 350px;
            height: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 17px;
            font-weight: 600;
            color: var(--light-color);
            background: var(--dark-color);
            border: none;
            border-radius: 0.5rem;
            transition: transform 150ms ease;
            outline-color: hsl(var(--hue), 95%, 50%);
        }

        .overlay__btn:hover {
            transform: scale(1.05);
            cursor: pointer;
        }

        .overlay__btn--transparent {
            background: transparent;
            color: var(--dark-color);
            border: 2px solid var(--dark-color);
            border-width: 2px;
            margin-right: 0.75rem;
        }

        .overlay__btn-emoji {
            margin-left: 0.375rem;
        }

        a {
            text-decoration: none;
            color: var(--dark-color);
            width: 100%;
            height: 100%;
            display: block;
        }

        /* Not too many browser support this yet but it's good to add! */
        @media (prefers-contrast: high) {
            .orb-canvas {
                display: none;
            }
        }

        @media only screen and (max-width: 1140px) {
            .overlay {
                padding: 8rem 4rem;
            }
        }

        @media only screen and (max-width: 840px) {
            body {
                padding: 1.5rem;
            }

            .overlay {
                padding: 4rem;
                height: auto;
            }

            .overlay__title {
                font-size: 1.25rem;
                line-height: 2rem;
                margin-bottom: 1.5rem;
            }

            .overlay__description {
                font-size: 0.875rem;
                line-height: 1.5rem;
                margin-bottom: 2.5rem;
            }
        }

        @media only screen and (max-width: 600px) {
            .overlay {
                padding: 1.5rem;
            }

            .overlay__btns {
                flex-wrap: wrap;
            }

            .overlay__btn {
                width: 100%;
                font-size: 0.75rem;
                margin-right: 0;
            }

            .overlay__btn:first-child {
                margin-bottom: 1rem;
            }
        }

        body {
            text-align: center;
            font-family: 'Noto Sans KR', sans-serif;
        }

        body * {
            box-sizing: border-box;
            -webkit-box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-size: 17px;
            word-break: break-all;
        }

        table {
            border-collapse: collapse;
            border-spacing: 0;
            width: 100%;
            margin: 0 auto;
        }

        table caption {
            text-align: left
        }

        h1 {
            font-size: 24px;
            padding: 20px 0 0;
            font-weight: 400;
        }

        body table {
            margin: 50px auto;
            width: 100%;
        }

        body table tr {}

        body table tr:first-child th {
            border: 0;
            border-bottom: 2px solid #000;
            border-top: 1px solid #000;
            text-align: center;
            font-weight: bold;
        }

        body table th {
            font-weight: 400;
        }

        body table th,
        body table td {
            border-bottom: 1px solid #f5f5f5;
            padding: 10px;
            text-align: left;
        }

        body table td a {
            color: blue !important;
            text-decoration: underline;
        }


        @media screen and (max-width:991px) {
            body * {
                font-size: 13px;
            }

            body table th,
            body table td {
                padding: 5px;
            }
        }
    `}
</style>
        </>
    )
}
export default List;