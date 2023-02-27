import React, { Component } from "react"

class Icon extends Component {
    render() {
        const { className } = this.props
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="578"
                height="800"
                viewBox="0 0 578 800"
                className={className}
            >
                <path
                    d="M430.53 138.994c21.264 16.162 45.85 25.439 67.431 25.439 17.114 0 31.08-5.981 39.283-16.846l16.454-21.704c9.424-12.403 10.646-29.761 3.468-48.877-7.057-18.798-21.485-37.134-40.552-51.562C495.277 9.256 470.716.004 449.158.004c-17.114 0-31.08 5.957-39.306 16.821L393.397 38.53c-19.214 25.292-2.541 70.386 37.133 100.464zm-8.033-112.599c5.273-6.934 14.428-10.595 26.489-10.595 17.944 0 39.623 8.325 58.008 22.266 15.698 11.914 27.881 26.806 34.35 41.992 6.201 14.623 6.103 27.833-.269 36.231-5.298 6.958-14.428 10.62-26.466 10.62-17.943 0-39.648-8.301-58.056-22.29-15.673-11.866-27.881-26.758-34.326-41.967-6.199-14.602-6.102-27.81.27-36.257zM524.059 512.381H424.034c-42.676 0-50.879-7.153-50.879-18.676 0-13.111 21.362-36.085 26.27-44.311 4.931-8.203 36.108-36.108 42.652-77.174 6.615-41.015-42.652-70.581-59.058-42.651-9.741 16.576-34.474 65.65-64.038 86.987-54.809 39.6-100.147 125.782-157.251 125.782v185.79c47.07 0 153.686 52.319 191.454 59.888 42.774 8.568 98.658 27.465 128.321-12.818 18.286-24.829 46.948-91.723 68.458-160.106 54.542-52.417 16.87-102.711-25.904-102.711zM445.642 163.652h-11.744v96.118h11.744v-96.118zM471.231 291.019l11.743-.05-.403-96.118-11.744.049.404 96.119zM.916 590.775v157.666c0 23.12 18.75 41.87 41.87 41.87h49.975c15.43 0 27.93-12.5 27.93-27.905v-213.5H42.786c-23.12-.001-41.87 18.774-41.87 41.869z"
                ></path>
            </svg>
        )
    }
}

export default Icon