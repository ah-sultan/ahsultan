const Logo = ({ type }) => {
  return (
    <div>
      {type === "light" && (
        <svg
          width="196"
          height="40"
          viewBox="0 0 196 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1318_1593)">
            <path
              d="M21.779 0C23.5188 0 25.7992 0.478874 28.6201 1.43662C28.958 1.5493 29.2282 1.60563 29.4309 1.60563C29.5998 1.60563 30.1067 1.43662 30.9511 1.09859C31.2214 0.985915 31.5086 0.929577 31.8126 0.929577C32.9444 0.929577 34.1353 1.92488 35.3852 3.91549C36.6522 5.90611 37.2856 7.80282 37.2856 9.60563C37.2856 10.6573 36.9984 11.5493 36.4241 12.2817C35.8667 12.9953 35.1825 13.3521 34.3717 13.3521C33.6961 13.3521 33.1471 13.2019 32.7248 12.9014C32.3025 12.6009 31.3735 11.7089 29.9376 10.2254C27.9107 8.12207 25.9174 7.07043 23.9579 7.07043C23.0121 7.07043 22.2519 7.32394 21.6776 7.83099C21.1202 8.33802 20.8415 9.00469 20.8415 9.83099C20.8415 11.4648 22.1336 12.6948 24.7182 13.5211C28.2148 14.6667 30.4529 15.5024 31.4326 16.0282C35.74 18.3568 37.8937 21.784 37.8937 26.3099C37.8937 30.3099 36.4241 33.5775 33.4849 36.1126C30.4782 38.7043 26.5508 40 21.7029 40C19.5407 40 17.2604 39.7183 14.8618 39.1549C12.4632 38.5727 10.7317 37.8968 9.66757 37.1268C8.85676 36.5258 8.12198 35.2207 7.46319 33.2113C6.82131 31.1831 6.50037 29.2113 6.50037 27.2957C6.50037 26.3756 6.66929 25.6807 7.00712 25.2113C7.42941 24.6104 7.96151 24.3099 8.60339 24.3099C9.24528 24.3099 9.86183 24.6761 10.453 25.4085C10.8078 25.8217 11.6439 27.1456 12.9615 29.3802C13.5865 30.4319 14.5746 31.3051 15.926 32C17.2942 32.6949 18.7047 33.0423 20.1574 33.0423C21.4073 33.0423 22.4208 32.7887 23.1978 32.2817C23.9748 31.7558 24.3634 31.0892 24.3634 30.2817C24.3634 29.5305 24.0593 28.8826 23.4512 28.3381C22.8432 27.7934 21.855 27.2864 20.4868 26.8169C18.0712 25.9718 16.23 25.2019 14.9631 24.507C13.6963 23.7934 12.5138 22.9014 11.4159 21.831C8.74696 19.2019 7.41252 16.216 7.41252 12.8732C7.41252 11.2207 7.7588 9.61502 8.45136 8.05633C9.14393 6.47887 10.1236 5.11737 11.3905 3.97183C14.2283 1.32394 17.6912 0 21.779 0Z"
              fill="#120037"
            />
            <path
              d="M53.8056 12.7883V28.0559C53.8056 31.3235 54.7769 32.9573 56.7195 32.9573C57.2093 32.9573 57.6908 32.8071 58.1637 32.5066C58.6367 32.1873 58.9661 31.8025 59.1519 31.3517C59.5236 30.4503 59.7093 28.4409 59.7093 25.3235C59.7093 22.2438 59.6165 20.1404 59.4306 19.0137C59.3631 18.5441 59.2448 18.2062 59.0759 17.9996C58.9069 17.7742 58.5861 17.5207 58.113 17.239C57.1502 16.6757 56.6688 15.962 56.6688 15.0982C56.6688 13.9339 57.4965 13.1264 59.1519 12.6757C62.2937 11.8118 65.3934 11.3799 68.4508 11.3799C70.1568 11.3799 71.0099 12.3846 71.0099 14.394C71.0099 14.6006 71.0014 15.0231 70.9845 15.6615C70.9509 16.5629 70.9254 17.6615 70.9085 18.9573V31.3798C70.9085 32.0184 71.3984 32.6006 72.3782 33.1264C73.2059 33.5771 73.6198 34.2344 73.6198 35.0982C73.6198 36.7883 71.8207 38.0935 68.2227 39.0137C66.1113 39.5583 64.0675 39.8306 62.0911 39.8306C61.2803 39.8306 60.7228 39.7272 60.4188 39.5207C60.1316 39.3141 59.9627 38.9104 59.912 38.3095C59.8275 37.1452 59.5067 36.5629 58.9492 36.5629C58.7464 36.5629 58.5607 36.6194 58.3918 36.732C58.2228 36.8259 57.7077 37.2015 56.8462 37.8588C55.1401 39.1545 53.3074 39.8025 51.3479 39.8025C48.1047 39.8025 45.8158 38.7602 44.4814 36.6757C43.3496 34.9291 42.7838 31.9902 42.7838 27.8588C42.7838 26.3189 42.7922 25.0044 42.8091 23.9151C42.8091 23.2766 42.8091 22.8446 42.8091 22.6194C42.8091 21.0044 42.674 19.8213 42.4038 19.0701C42.1504 18.3001 41.6775 17.6991 40.9848 17.2672C40.3261 16.8916 39.9037 16.5911 39.718 16.3658C39.549 16.1404 39.4646 15.8306 39.4646 15.4363C39.4646 14.009 40.4359 13.0606 42.3783 12.5911C45.6892 11.7836 49 11.3799 52.3107 11.3799C53.3074 11.3799 53.8056 11.8494 53.8056 12.7883Z"
              fill="#120037"
            />
            <path
              d="M89.5571 16.9015V25.9439C89.5571 29.9439 89.6078 32.2725 89.709 32.9297C89.8274 33.587 90.2496 34.094 90.9759 34.4509C91.6009 34.7514 92.0148 35.0331 92.2174 35.2959C92.4372 35.5589 92.5469 35.9345 92.5469 36.4227C92.5469 37.0425 92.3441 37.6058 91.9388 38.1128C91.5502 38.62 91.0266 38.9766 90.3679 39.1833C89.1516 39.5964 87.0992 39.8031 84.2108 39.8031C80.9507 39.8031 78.6618 39.5307 77.3443 38.986C76.7361 38.742 76.2379 38.3664 75.8494 37.8594C75.4609 37.3335 75.2666 36.7889 75.2666 36.2256C75.2666 35.7748 75.368 35.4275 75.5707 35.1833C75.7903 34.9391 76.2548 34.6481 76.9642 34.3101C77.6231 33.9908 78.0284 33.1176 78.1805 31.6903C78.4508 29.249 78.5858 25.7748 78.5858 21.2678C78.5858 16.6857 78.4677 13.7373 78.2311 12.4227C77.9946 11.1082 77.4034 10.1316 76.4575 9.49313C75.7481 9.04243 75.2581 8.6199 74.9878 8.22554C74.7345 7.81238 74.6078 7.31473 74.6078 6.73257C74.6078 5.81238 75.0047 5.01426 75.7986 4.3382C76.5927 3.64337 77.8595 3.00487 79.5993 2.42272C80.7649 2.02835 82.2767 1.65276 84.1348 1.29595C85.9929 0.939146 87.3442 0.760742 88.1888 0.760742C89.5233 0.760742 90.1905 1.68093 90.1905 3.52131C90.1905 4.12224 90.106 5.50253 89.9371 7.66216C89.7176 11.0237 89.5909 14.1035 89.5571 16.9015Z"
              fill="#120037"
            />
            <path
              d="M109.092 18.5635V28.0846C109.092 29.2114 109.337 30.1316 109.827 30.8452C110.334 31.5589 110.976 31.9157 111.753 31.9157C112.412 31.9157 113.282 31.5776 114.363 30.9015C114.616 30.7326 114.869 30.6481 115.123 30.6481C115.528 30.6481 115.9 30.9203 116.238 31.465C116.576 32.0095 116.744 32.6012 116.744 33.2396C116.744 34.4039 116.17 35.5213 115.021 36.5916C112.623 38.864 109.717 40.0002 106.305 40.0002C103.603 40.0002 101.432 39.1551 99.7936 37.465C98.155 35.756 97.3357 33.5119 97.3357 30.7326V17.7184C97.3357 17.2865 97.285 17.0237 97.1837 16.9297C97.0992 16.8171 96.8628 16.7607 96.4742 16.7607H93.8645C93.3747 16.7607 93.0621 16.6763 92.9271 16.5072C92.7918 16.3194 92.7242 15.8969 92.7242 15.2396V14.0002C92.7411 13.4368 92.9354 13.0236 93.3071 12.7607L104.912 4.64805C105.199 4.47904 105.554 4.39453 105.976 4.39453H108.028C108.451 4.39453 108.729 4.50721 108.864 4.73255C109.016 4.93912 109.092 5.36166 109.092 6.00016V9.80298C109.092 10.3664 109.168 10.7326 109.32 10.9016C109.489 11.0706 109.836 11.1551 110.359 11.1551H115.047C115.672 11.1551 116.077 11.2865 116.263 11.5495C116.449 11.7936 116.542 12.3288 116.542 13.1551V14.8171C116.542 15.7184 116.423 16.3476 116.187 16.7044C115.95 17.0425 115.52 17.2114 114.895 17.2114H110.309C109.836 17.2114 109.515 17.3053 109.346 17.4932C109.177 17.6809 109.092 18.0377 109.092 18.5635Z"
              fill="#120037"
            />
            <path
              d="M132.834 11.1553C135.773 11.1553 138.264 11.9816 140.308 13.6341C141.389 14.5167 142.141 15.5309 142.563 16.6764C143.003 17.8032 143.222 19.3618 143.222 21.3524L143.171 25.5497C143.171 28.4604 143.357 30.3478 143.729 31.2116C143.915 31.6247 144.092 31.8877 144.261 32.0003C144.43 32.113 144.785 32.2164 145.326 32.3102C145.866 32.4041 146.136 32.7985 146.136 33.4933C146.136 34.3947 145.807 35.3336 145.148 36.3102C144.506 37.2867 143.67 38.1036 142.639 38.7609C141.372 39.5872 140.047 40.0003 138.661 40.0003C136.888 40.0003 135.486 39.3242 134.455 37.9722C134.101 37.484 133.771 37.2398 133.467 37.2398C133.129 37.2398 132.682 37.4746 132.124 37.944C130.435 39.3149 128.518 40.0003 126.373 40.0003C124.16 40.0003 122.369 39.4746 121.001 38.4229C120.106 37.728 119.396 36.8266 118.873 35.7186C118.349 34.5918 118.087 33.4182 118.087 32.1975C118.087 30.2445 118.797 28.5167 120.216 27.0145C122.428 24.6483 125.739 23.4558 130.148 23.437C131.128 23.437 131.744 23.3336 131.998 23.1271C132.251 22.9017 132.378 22.3947 132.378 21.606C132.378 19.6154 132.192 18.1787 131.82 17.2961C131.449 16.3947 130.84 15.944 129.996 15.944C129.489 15.944 129.033 16.113 128.628 16.451C128.239 16.7891 127.749 17.4089 127.158 18.3102C125.655 20.6952 124.084 21.8877 122.445 21.8877C121.618 21.8877 120.942 21.6154 120.418 21.0708C119.895 20.5261 119.633 19.8126 119.633 18.9299C119.633 18.0285 119.954 17.1271 120.596 16.2258C121.254 15.3242 122.141 14.5355 123.256 13.8595C126.314 12.0567 129.506 11.1553 132.834 11.1553ZM131.136 27.4652C130.393 27.4652 129.743 27.8032 129.185 28.4792C128.645 29.1553 128.374 29.9628 128.374 30.9017C128.374 31.8032 128.569 32.5355 128.957 33.099C129.346 33.6435 129.861 33.9159 130.503 33.9159C131.854 33.9159 132.53 32.6483 132.53 30.113C132.53 29.0802 132.428 28.3853 132.226 28.0285C132.04 27.6717 131.677 27.484 131.136 27.4652Z"
              fill="#120037"
            />
            <path
              d="M178.542 21.5779L178.898 31.4934C178.931 32.2446 179.033 32.7985 179.201 33.1554C179.387 33.5122 179.912 34.1975 180.772 35.2117C181.025 35.5122 181.152 35.9347 181.152 36.4793C181.152 37.7187 180.485 38.5825 179.15 39.0709C177.817 39.5591 175.435 39.8033 172.006 39.8033C169.674 39.8033 168.028 39.5779 167.065 39.1272C166.069 38.6578 165.57 37.8972 165.57 36.8455C165.57 36.4699 165.621 36.1975 165.722 36.0286C165.823 35.8409 166.161 35.3996 166.736 34.7047C167.411 33.9159 167.749 31.2868 167.749 26.8173C167.749 24.2258 167.479 22.3103 166.938 21.0709C166.499 20.0755 165.689 19.5779 164.506 19.5779C163.373 19.5779 162.598 19.9817 162.174 20.7892C161.753 21.5967 161.542 23.0615 161.542 25.1835V30.761C161.542 31.869 161.601 32.6296 161.719 33.0427C161.854 33.4559 162.275 34.254 162.986 35.4371C163.171 35.775 163.264 36.16 163.264 36.5919C163.264 37.6999 162.572 38.5168 161.186 39.0427C159.801 39.5685 157.639 39.8315 154.7 39.8315C150.004 39.8315 147.656 38.7516 147.656 36.5919C147.656 36.1412 147.723 35.8033 147.859 35.5779C148.011 35.3337 148.358 34.9957 148.898 34.5637C149.337 34.2071 149.616 33.8033 149.734 33.3525C149.853 32.883 149.962 31.7468 150.064 29.9441C150.182 27.8033 150.241 25.5591 150.241 23.2117C150.241 21.9159 150.147 21.0709 149.962 20.6765C149.793 20.2634 149.286 19.7656 148.441 19.1835C147.715 18.6765 147.352 18.0567 147.352 17.3243C147.352 16.5731 147.648 15.9629 148.239 15.4934C148.83 15.0052 150.046 14.3948 151.888 13.6624C153.509 13.0239 155.072 12.4887 156.575 12.0568C158.079 11.6061 159.109 11.3807 159.667 11.3807C160.174 11.3807 160.595 11.5873 160.934 12.0004C161.287 12.4136 161.465 12.9018 161.465 13.4652C161.465 13.5215 161.456 13.7563 161.441 14.1694C161.423 14.3197 161.415 14.4511 161.415 14.5637C161.415 15.4653 161.753 15.9159 162.429 15.9159C162.833 15.9159 163.264 15.5591 163.72 14.8455C165.173 12.5169 167.285 11.3525 170.054 11.3525C172.183 11.3525 174.008 11.9722 175.527 13.2117C176.592 14.0943 177.335 15.1366 177.758 16.3385C178.18 17.5216 178.441 19.268 178.542 21.5779Z"
              fill="#120037"
            />
            <path
              d="M189.463 26.7041C191.068 26.7041 192.462 27.3237 193.645 28.5632C194.844 29.8215 195.443 31.4459 195.443 33.4365C195.443 35.2956 194.844 36.8637 193.645 38.1406C192.462 39.3801 191.068 39.9998 189.463 39.9998C187.859 39.9998 186.465 39.3801 185.282 38.1406C184.083 36.8637 183.484 35.2674 183.484 33.3519C183.484 31.399 184.083 29.8027 185.282 28.5632C186.465 27.3425 187.859 26.7229 189.463 26.7041Z"
              fill="#120037"
            />
            <path
              d="M12.784 29.6029C12.784 26.1337 9.97068 23.3213 6.50032 23.3213C3.02996 23.3213 0.216675 26.1337 0.216675 29.6029V32.9242C0.216675 36.3934 3.02996 39.2058 6.50032 39.2058C9.97068 39.2058 12.784 36.3934 12.784 32.9242V29.6029Z"
              fill="#7417FE"
              style={{ fill: "var(--primary-color)" }}
            />
            <path
              d="M12.784 29.6029C12.784 26.1337 9.97068 23.3213 6.50032 23.3213C3.02996 23.3213 0.216675 26.1337 0.216675 29.6029V32.9242C0.216675 36.3934 3.02996 39.2058 6.50032 39.2058C9.97068 39.2058 12.784 36.3934 12.784 32.9242V29.6029Z"
              stroke="#1A1A1A"
              stroke-width="3"
            />
            <path
              d="M4.4179 30.3362C4.77791 30.3362 5.08307 30.4272 5.33342 30.6093C5.46583 30.7065 5.5579 30.8181 5.60963 30.9443C5.66342 31.0684 5.69032 31.2401 5.69032 31.4593L5.68411 31.9217C5.68411 32.2422 5.70687 32.45 5.75239 32.5452C5.77514 32.5907 5.79687 32.6197 5.81755 32.6321C5.83825 32.6444 5.88169 32.6558 5.94791 32.6662C6.01411 32.6765 6.04722 32.7199 6.04722 32.7965C6.04722 32.8958 6.00687 32.9992 5.92618 33.1068C5.84755 33.2142 5.74514 33.3042 5.61893 33.3767C5.46376 33.4677 5.30135 33.5131 5.1317 33.5131C4.91446 33.5131 4.74273 33.4386 4.61652 33.2897C4.57307 33.236 4.53273 33.2092 4.49549 33.2092C4.4541 33.2092 4.39928 33.235 4.331 33.2867C4.1241 33.4376 3.88928 33.5131 3.62652 33.5131C3.35549 33.5131 3.13617 33.4552 2.96859 33.3394C2.85894 33.2629 2.77204 33.1637 2.7079 33.0415C2.64376 32.9175 2.61169 32.7882 2.61169 32.6538C2.61169 32.4386 2.69858 32.2484 2.87239 32.083C3.14342 31.8223 3.54894 31.691 4.08893 31.6889C4.20894 31.6889 4.28446 31.6775 4.31549 31.6548C4.34652 31.63 4.36204 31.5741 4.36204 31.4873C4.36204 31.2681 4.33928 31.1098 4.29376 31.0126C4.24824 30.9133 4.17377 30.8636 4.07031 30.8636C4.00824 30.8636 3.95238 30.8822 3.90273 30.9195C3.85515 30.9568 3.79514 31.0251 3.72273 31.1243C3.53858 31.3869 3.34617 31.5183 3.14549 31.5183C3.04411 31.5183 2.96135 31.4883 2.8972 31.4284C2.83307 31.3683 2.801 31.2897 2.801 31.1926C2.801 31.0932 2.84032 30.994 2.91893 30.8947C2.99962 30.7955 3.10825 30.7085 3.2448 30.6342C3.61927 30.4356 4.01032 30.3362 4.4179 30.3362ZM4.20997 32.1326C4.11893 32.1326 4.03928 32.1697 3.971 32.2443C3.9048 32.3188 3.87169 32.4076 3.87169 32.5111C3.87169 32.6103 3.89548 32.691 3.94308 32.753C3.99066 32.8131 4.05377 32.843 4.13238 32.843C4.29791 32.843 4.38066 32.7035 4.38066 32.4242C4.38066 32.3104 4.36824 32.2339 4.34342 32.1946C4.32066 32.1553 4.27618 32.1347 4.20997 32.1326ZM7.97757 29.3466L7.93722 30.6466C7.93308 30.8017 7.98066 30.8792 8.07997 30.8792C8.12963 30.8792 8.17825 30.8451 8.22584 30.7768C8.42652 30.4851 8.69447 30.3394 9.02964 30.3394C9.3586 30.3394 9.62033 30.4396 9.8148 30.6404C9.9017 30.7292 9.96274 30.8347 9.99791 30.9568C10.0351 31.0788 10.0558 31.2535 10.06 31.4811L10.0879 32.6011C10.09 32.6983 10.1024 32.7696 10.1252 32.8151C10.15 32.8606 10.2058 32.9175 10.2927 32.9858C10.3527 33.0333 10.3827 33.0902 10.3827 33.1563C10.3827 33.3797 10.0455 33.4915 9.371 33.4915C8.77101 33.4915 8.47101 33.3869 8.47101 33.1781C8.47101 33.1429 8.47618 33.116 8.48653 33.0974C8.49687 33.0788 8.53308 33.0292 8.59515 32.9485C8.68204 32.8347 8.72549 32.5504 8.72549 32.0954C8.72549 31.8203 8.69964 31.6196 8.64791 31.4935C8.57963 31.3218 8.45756 31.236 8.28169 31.236C8.15549 31.236 8.06239 31.2815 8.00238 31.3725C7.95895 31.4386 7.93722 31.5628 7.93722 31.7448V32.3435C7.9517 32.6083 7.96412 32.7582 7.97446 32.7934C7.9848 32.8285 8.03239 32.8936 8.11722 32.9888C8.15653 33.0323 8.17619 33.083 8.17619 33.1409C8.17619 33.3745 7.87204 33.4915 7.26377 33.4915C6.55205 33.4915 6.19617 33.3705 6.19617 33.1284C6.19617 33.0726 6.20756 33.0303 6.23032 33.0012C6.25307 32.9702 6.30893 32.9237 6.3979 32.8616C6.47653 32.8058 6.53032 32.6558 6.55928 32.4118C6.59031 32.1657 6.60584 31.7592 6.60584 31.1926C6.60584 30.7478 6.59342 30.4396 6.5686 30.2679C6.56032 30.2038 6.54479 30.1573 6.52204 30.1284C6.50136 30.0974 6.46101 30.0664 6.40101 30.0353C6.27273 29.9692 6.2086 29.8926 6.2086 29.8057C6.2086 29.7023 6.25722 29.6186 6.35445 29.5544C6.4517 29.4903 6.63791 29.421 6.91307 29.3466C7.28548 29.2431 7.58239 29.1914 7.80376 29.1914C7.92377 29.1914 7.9817 29.2431 7.97757 29.3466Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1318_1593">
              <rect width="195.443" height="40" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
      {type === "dark" && (
        <svg
          width="196"
          height="40"
          viewBox="0 0 196 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1318_1604)">
            <path
              d="M21.779 0C23.5188 0 25.7992 0.478874 28.6201 1.43662C28.958 1.5493 29.2282 1.60563 29.4309 1.60563C29.5998 1.60563 30.1067 1.43662 30.9511 1.09859C31.2214 0.985915 31.5086 0.929577 31.8126 0.929577C32.9444 0.929577 34.1353 1.92488 35.3852 3.91549C36.6522 5.90611 37.2856 7.80282 37.2856 9.60563C37.2856 10.6573 36.9984 11.5493 36.4241 12.2817C35.8667 12.9953 35.1825 13.3521 34.3717 13.3521C33.6961 13.3521 33.1471 13.2019 32.7248 12.9014C32.3025 12.6009 31.3735 11.7089 29.9376 10.2254C27.9107 8.12207 25.9174 7.07043 23.9579 7.07043C23.0121 7.07043 22.2519 7.32394 21.6776 7.83099C21.1202 8.33802 20.8415 9.00469 20.8415 9.83099C20.8415 11.4648 22.1336 12.6948 24.7182 13.5211C28.2148 14.6667 30.4529 15.5024 31.4326 16.0282C35.74 18.3568 37.8937 21.784 37.8937 26.3099C37.8937 30.3099 36.4241 33.5775 33.4849 36.1126C30.4782 38.7043 26.5508 40 21.7029 40C19.5407 40 17.2604 39.7183 14.8618 39.1549C12.4632 38.5727 10.7317 37.8968 9.66757 37.1268C8.85676 36.5258 8.12198 35.2207 7.46319 33.2113C6.82131 31.1831 6.50037 29.2113 6.50037 27.2957C6.50037 26.3756 6.66929 25.6807 7.00712 25.2113C7.42941 24.6104 7.96151 24.3099 8.60339 24.3099C9.24528 24.3099 9.86183 24.6761 10.453 25.4085C10.8078 25.8217 11.6439 27.1456 12.9615 29.3802C13.5865 30.4319 14.5746 31.3051 15.926 32C17.2942 32.6949 18.7047 33.0423 20.1574 33.0423C21.4073 33.0423 22.4208 32.7887 23.1978 32.2817C23.9748 31.7558 24.3634 31.0892 24.3634 30.2817C24.3634 29.5305 24.0593 28.8826 23.4512 28.3381C22.8432 27.7934 21.855 27.2864 20.4868 26.8169C18.0712 25.9718 16.23 25.2019 14.9631 24.507C13.6963 23.7934 12.5138 22.9014 11.4159 21.831C8.74696 19.2019 7.41252 16.216 7.41252 12.8732C7.41252 11.2207 7.7588 9.61502 8.45136 8.05633C9.14393 6.47887 10.1236 5.11737 11.3905 3.97183C14.2283 1.32394 17.6912 0 21.779 0Z"
              fill="white"
            />
            <path
              d="M53.8056 12.7883V28.0559C53.8056 31.3235 54.7769 32.9573 56.7195 32.9573C57.2093 32.9573 57.6908 32.8071 58.1637 32.5066C58.6367 32.1873 58.9661 31.8025 59.1519 31.3517C59.5236 30.4503 59.7093 28.4409 59.7093 25.3235C59.7093 22.2438 59.6165 20.1404 59.4306 19.0137C59.3631 18.5441 59.2448 18.2062 59.0759 17.9996C58.9069 17.7742 58.5861 17.5207 58.113 17.239C57.1502 16.6757 56.6688 15.962 56.6688 15.0982C56.6688 13.9339 57.4965 13.1264 59.1519 12.6757C62.2937 11.8118 65.3934 11.3799 68.4508 11.3799C70.1568 11.3799 71.0099 12.3846 71.0099 14.394C71.0099 14.6006 71.0014 15.0231 70.9845 15.6615C70.9509 16.5629 70.9254 17.6615 70.9085 18.9573V31.3798C70.9085 32.0184 71.3984 32.6006 72.3782 33.1264C73.2059 33.5771 73.6198 34.2344 73.6198 35.0982C73.6198 36.7883 71.8207 38.0935 68.2227 39.0137C66.1113 39.5583 64.0675 39.8306 62.0911 39.8306C61.2803 39.8306 60.7228 39.7272 60.4188 39.5207C60.1316 39.3141 59.9627 38.9104 59.912 38.3095C59.8275 37.1452 59.5067 36.5629 58.9492 36.5629C58.7464 36.5629 58.5607 36.6194 58.3918 36.732C58.2228 36.8259 57.7077 37.2015 56.8462 37.8588C55.1401 39.1545 53.3074 39.8025 51.3479 39.8025C48.1047 39.8025 45.8158 38.7602 44.4814 36.6757C43.3496 34.9291 42.7838 31.9902 42.7838 27.8588C42.7838 26.3189 42.7922 25.0044 42.8091 23.9151C42.8091 23.2766 42.8091 22.8446 42.8091 22.6194C42.8091 21.0044 42.674 19.8213 42.4038 19.0701C42.1504 18.3001 41.6775 17.6991 40.9848 17.2672C40.3261 16.8916 39.9037 16.5911 39.718 16.3658C39.549 16.1404 39.4646 15.8306 39.4646 15.4363C39.4646 14.009 40.4359 13.0606 42.3783 12.5911C45.6892 11.7836 49 11.3799 52.3107 11.3799C53.3074 11.3799 53.8056 11.8494 53.8056 12.7883Z"
              fill="white"
            />
            <path
              d="M89.5571 16.9015V25.9439C89.5571 29.9439 89.6078 32.2725 89.709 32.9297C89.8274 33.587 90.2496 34.094 90.9759 34.4509C91.6009 34.7514 92.0148 35.0331 92.2174 35.2959C92.4372 35.5589 92.5469 35.9345 92.5469 36.4227C92.5469 37.0425 92.3441 37.6058 91.9388 38.1128C91.5502 38.62 91.0266 38.9766 90.3679 39.1833C89.1516 39.5964 87.0992 39.8031 84.2108 39.8031C80.9507 39.8031 78.6618 39.5307 77.3443 38.986C76.7361 38.742 76.2379 38.3664 75.8494 37.8594C75.4609 37.3335 75.2666 36.7889 75.2666 36.2256C75.2666 35.7748 75.368 35.4275 75.5707 35.1833C75.7903 34.9391 76.2548 34.6481 76.9642 34.3101C77.6231 33.9908 78.0284 33.1176 78.1805 31.6903C78.4508 29.249 78.5858 25.7748 78.5858 21.2678C78.5858 16.6857 78.4677 13.7373 78.2311 12.4227C77.9946 11.1082 77.4034 10.1316 76.4575 9.49313C75.7481 9.04243 75.2581 8.6199 74.9878 8.22554C74.7345 7.81238 74.6078 7.31473 74.6078 6.73257C74.6078 5.81238 75.0047 5.01426 75.7986 4.3382C76.5927 3.64337 77.8595 3.00487 79.5993 2.42272C80.7649 2.02835 82.2767 1.65276 84.1348 1.29595C85.9929 0.939146 87.3442 0.760742 88.1888 0.760742C89.5233 0.760742 90.1905 1.68093 90.1905 3.52131C90.1905 4.12224 90.106 5.50253 89.9371 7.66216C89.7176 11.0237 89.5909 14.1035 89.5571 16.9015Z"
              fill="white"
            />
            <path
              d="M109.092 18.5635V28.0846C109.092 29.2114 109.337 30.1316 109.827 30.8452C110.334 31.5589 110.976 31.9157 111.753 31.9157C112.412 31.9157 113.282 31.5776 114.363 30.9015C114.616 30.7326 114.869 30.6481 115.123 30.6481C115.528 30.6481 115.9 30.9203 116.238 31.465C116.576 32.0095 116.744 32.6012 116.744 33.2396C116.744 34.4039 116.17 35.5213 115.021 36.5916C112.623 38.864 109.717 40.0002 106.305 40.0002C103.603 40.0002 101.432 39.1551 99.7936 37.465C98.155 35.756 97.3357 33.5119 97.3357 30.7326V17.7184C97.3357 17.2865 97.285 17.0237 97.1837 16.9297C97.0992 16.8171 96.8628 16.7607 96.4742 16.7607H93.8645C93.3747 16.7607 93.0621 16.6763 92.9271 16.5072C92.7918 16.3194 92.7242 15.8969 92.7242 15.2396V14.0002C92.7411 13.4368 92.9354 13.0236 93.3071 12.7607L104.912 4.64805C105.199 4.47904 105.554 4.39453 105.976 4.39453H108.028C108.451 4.39453 108.729 4.50721 108.864 4.73255C109.016 4.93912 109.092 5.36166 109.092 6.00016V9.80298C109.092 10.3664 109.168 10.7326 109.32 10.9016C109.489 11.0706 109.836 11.1551 110.359 11.1551H115.047C115.672 11.1551 116.077 11.2865 116.263 11.5495C116.449 11.7936 116.542 12.3288 116.542 13.1551V14.8171C116.542 15.7184 116.423 16.3476 116.187 16.7044C115.95 17.0425 115.52 17.2114 114.895 17.2114H110.309C109.836 17.2114 109.515 17.3053 109.346 17.4932C109.177 17.6809 109.092 18.0377 109.092 18.5635Z"
              fill="white"
            />
            <path
              d="M132.834 11.1553C135.773 11.1553 138.264 11.9816 140.308 13.6341C141.389 14.5167 142.141 15.5309 142.563 16.6764C143.003 17.8032 143.222 19.3618 143.222 21.3524L143.171 25.5497C143.171 28.4604 143.357 30.3478 143.729 31.2116C143.915 31.6247 144.092 31.8877 144.261 32.0003C144.43 32.113 144.785 32.2164 145.326 32.3102C145.866 32.4041 146.136 32.7985 146.136 33.4933C146.136 34.3947 145.807 35.3336 145.148 36.3102C144.506 37.2867 143.67 38.1036 142.639 38.7609C141.372 39.5872 140.047 40.0003 138.661 40.0003C136.888 40.0003 135.486 39.3242 134.455 37.9722C134.101 37.484 133.771 37.2398 133.467 37.2398C133.129 37.2398 132.682 37.4746 132.124 37.944C130.435 39.3149 128.518 40.0003 126.373 40.0003C124.16 40.0003 122.369 39.4746 121.001 38.4229C120.106 37.728 119.396 36.8266 118.873 35.7186C118.349 34.5918 118.087 33.4182 118.087 32.1975C118.087 30.2445 118.797 28.5167 120.216 27.0145C122.428 24.6483 125.739 23.4558 130.148 23.437C131.128 23.437 131.744 23.3336 131.998 23.1271C132.251 22.9017 132.378 22.3947 132.378 21.606C132.378 19.6154 132.192 18.1787 131.82 17.2961C131.449 16.3947 130.84 15.944 129.996 15.944C129.489 15.944 129.033 16.113 128.628 16.451C128.239 16.7891 127.749 17.4089 127.158 18.3102C125.655 20.6952 124.084 21.8877 122.445 21.8877C121.618 21.8877 120.942 21.6154 120.418 21.0708C119.895 20.5261 119.633 19.8126 119.633 18.9299C119.633 18.0285 119.954 17.1271 120.596 16.2258C121.254 15.3242 122.141 14.5355 123.256 13.8595C126.314 12.0567 129.506 11.1553 132.834 11.1553ZM131.136 27.4652C130.393 27.4652 129.743 27.8032 129.185 28.4792C128.645 29.1553 128.374 29.9628 128.374 30.9017C128.374 31.8032 128.569 32.5355 128.957 33.099C129.346 33.6435 129.861 33.9159 130.503 33.9159C131.854 33.9159 132.53 32.6483 132.53 30.113C132.53 29.0802 132.428 28.3853 132.226 28.0285C132.04 27.6717 131.677 27.484 131.136 27.4652Z"
              fill="white"
            />
            <path
              d="M178.542 21.5779L178.898 31.4934C178.931 32.2446 179.033 32.7985 179.201 33.1554C179.387 33.5122 179.912 34.1975 180.772 35.2117C181.025 35.5122 181.152 35.9347 181.152 36.4793C181.152 37.7187 180.485 38.5825 179.15 39.0709C177.817 39.5591 175.435 39.8033 172.006 39.8033C169.674 39.8033 168.028 39.5779 167.065 39.1272C166.069 38.6578 165.57 37.8972 165.57 36.8455C165.57 36.4699 165.621 36.1975 165.722 36.0286C165.823 35.8409 166.161 35.3996 166.736 34.7047C167.411 33.9159 167.749 31.2868 167.749 26.8173C167.749 24.2258 167.479 22.3103 166.938 21.0709C166.499 20.0755 165.689 19.5779 164.506 19.5779C163.373 19.5779 162.598 19.9817 162.174 20.7892C161.753 21.5967 161.542 23.0615 161.542 25.1835V30.761C161.542 31.869 161.601 32.6296 161.719 33.0427C161.854 33.4559 162.275 34.254 162.986 35.4371C163.171 35.775 163.264 36.16 163.264 36.5919C163.264 37.6999 162.572 38.5168 161.186 39.0427C159.801 39.5685 157.639 39.8315 154.7 39.8315C150.004 39.8315 147.656 38.7516 147.656 36.5919C147.656 36.1412 147.723 35.8033 147.859 35.5779C148.011 35.3337 148.358 34.9957 148.898 34.5637C149.337 34.2071 149.616 33.8033 149.734 33.3525C149.853 32.883 149.962 31.7468 150.064 29.9441C150.182 27.8033 150.241 25.5591 150.241 23.2117C150.241 21.9159 150.147 21.0709 149.962 20.6765C149.793 20.2634 149.286 19.7656 148.441 19.1835C147.715 18.6765 147.352 18.0567 147.352 17.3243C147.352 16.5731 147.648 15.9629 148.239 15.4934C148.83 15.0052 150.046 14.3948 151.888 13.6624C153.509 13.0239 155.072 12.4887 156.575 12.0568C158.079 11.6061 159.109 11.3807 159.667 11.3807C160.174 11.3807 160.595 11.5873 160.934 12.0004C161.287 12.4136 161.465 12.9018 161.465 13.4652C161.465 13.5215 161.456 13.7563 161.441 14.1694C161.423 14.3197 161.415 14.4511 161.415 14.5637C161.415 15.4653 161.753 15.9159 162.429 15.9159C162.833 15.9159 163.264 15.5591 163.72 14.8455C165.173 12.5169 167.285 11.3525 170.054 11.3525C172.183 11.3525 174.008 11.9722 175.527 13.2117C176.592 14.0943 177.335 15.1366 177.758 16.3385C178.18 17.5216 178.441 19.268 178.542 21.5779Z"
              fill="white"
            />
            <path
              d="M189.463 26.7041C191.068 26.7041 192.462 27.3237 193.645 28.5632C194.844 29.8215 195.443 31.4459 195.443 33.4365C195.443 35.2956 194.844 36.8637 193.645 38.1406C192.462 39.3801 191.068 39.9998 189.463 39.9998C187.859 39.9998 186.465 39.3801 185.282 38.1406C184.083 36.8637 183.484 35.2674 183.484 33.3519C183.484 31.399 184.083 29.8027 185.282 28.5632C186.465 27.3425 187.859 26.7229 189.463 26.7041Z"
              fill="white"
            />
            <path
              d="M12.784 29.6029C12.784 26.1337 9.97068 23.3213 6.50032 23.3213C3.02996 23.3213 0.216675 26.1337 0.216675 29.6029V32.9242C0.216675 36.3934 3.02996 39.2058 6.50032 39.2058C9.97068 39.2058 12.784 36.3934 12.784 32.9242V29.6029Z"
              style={{ fill: "var(--primary-color)" }}
            />
            <path
              d="M12.784 29.6029C12.784 26.1337 9.97068 23.3213 6.50032 23.3213C3.02996 23.3213 0.216675 26.1337 0.216675 29.6029V32.9242C0.216675 36.3934 3.02996 39.2058 6.50032 39.2058C9.97068 39.2058 12.784 36.3934 12.784 32.9242V29.6029Z"
              stroke="white"
              stroke-width="3"
            />
            <path
              d="M4.4179 30.3362C4.77791 30.3362 5.08307 30.4272 5.33342 30.6093C5.46583 30.7065 5.5579 30.8181 5.60963 30.9443C5.66342 31.0684 5.69032 31.2401 5.69032 31.4593L5.68411 31.9217C5.68411 32.2422 5.70687 32.45 5.75239 32.5452C5.77514 32.5907 5.79687 32.6197 5.81755 32.6321C5.83825 32.6444 5.88169 32.6558 5.94791 32.6662C6.01411 32.6765 6.04722 32.7199 6.04722 32.7965C6.04722 32.8958 6.00687 32.9992 5.92618 33.1068C5.84755 33.2142 5.74514 33.3042 5.61893 33.3767C5.46376 33.4677 5.30135 33.5131 5.1317 33.5131C4.91446 33.5131 4.74273 33.4386 4.61652 33.2897C4.57307 33.236 4.53273 33.2092 4.49549 33.2092C4.4541 33.2092 4.39928 33.235 4.331 33.2867C4.1241 33.4376 3.88928 33.5131 3.62652 33.5131C3.35549 33.5131 3.13617 33.4552 2.96859 33.3394C2.85894 33.2629 2.77204 33.1637 2.7079 33.0415C2.64376 32.9175 2.61169 32.7882 2.61169 32.6538C2.61169 32.4386 2.69858 32.2484 2.87239 32.083C3.14342 31.8223 3.54894 31.691 4.08893 31.6889C4.20894 31.6889 4.28446 31.6775 4.31549 31.6548C4.34652 31.63 4.36204 31.5741 4.36204 31.4873C4.36204 31.2681 4.33928 31.1098 4.29376 31.0126C4.24824 30.9133 4.17377 30.8636 4.07031 30.8636C4.00824 30.8636 3.95238 30.8822 3.90273 30.9195C3.85515 30.9568 3.79514 31.0251 3.72273 31.1243C3.53858 31.3869 3.34617 31.5183 3.14549 31.5183C3.04411 31.5183 2.96135 31.4883 2.8972 31.4284C2.83307 31.3683 2.801 31.2897 2.801 31.1926C2.801 31.0932 2.84032 30.994 2.91893 30.8947C2.99962 30.7955 3.10825 30.7085 3.2448 30.6342C3.61927 30.4356 4.01032 30.3362 4.4179 30.3362ZM4.20997 32.1326C4.11893 32.1326 4.03928 32.1697 3.971 32.2443C3.9048 32.3188 3.87169 32.4076 3.87169 32.5111C3.87169 32.6103 3.89548 32.691 3.94308 32.753C3.99066 32.8131 4.05377 32.843 4.13238 32.843C4.29791 32.843 4.38066 32.7035 4.38066 32.4242C4.38066 32.3104 4.36824 32.2339 4.34342 32.1946C4.32066 32.1553 4.27618 32.1347 4.20997 32.1326ZM7.97757 29.3466L7.93722 30.6466C7.93308 30.8017 7.98066 30.8792 8.07997 30.8792C8.12963 30.8792 8.17825 30.8451 8.22584 30.7768C8.42652 30.4851 8.69447 30.3394 9.02964 30.3394C9.3586 30.3394 9.62033 30.4396 9.8148 30.6404C9.9017 30.7292 9.96274 30.8347 9.99791 30.9568C10.0351 31.0788 10.0558 31.2535 10.06 31.4811L10.0879 32.6011C10.09 32.6983 10.1024 32.7696 10.1252 32.8151C10.15 32.8606 10.2058 32.9175 10.2927 32.9858C10.3527 33.0333 10.3827 33.0902 10.3827 33.1563C10.3827 33.3797 10.0455 33.4915 9.371 33.4915C8.77101 33.4915 8.47101 33.3869 8.47101 33.1781C8.47101 33.1429 8.47618 33.116 8.48653 33.0974C8.49687 33.0788 8.53308 33.0292 8.59515 32.9485C8.68204 32.8347 8.72549 32.5504 8.72549 32.0954C8.72549 31.8203 8.69964 31.6196 8.64791 31.4935C8.57963 31.3218 8.45756 31.236 8.28169 31.236C8.15549 31.236 8.06239 31.2815 8.00238 31.3725C7.95895 31.4386 7.93722 31.5628 7.93722 31.7448V32.3435C7.9517 32.6083 7.96412 32.7582 7.97446 32.7934C7.9848 32.8285 8.03239 32.8936 8.11722 32.9888C8.15653 33.0323 8.17619 33.083 8.17619 33.1409C8.17619 33.3745 7.87204 33.4915 7.26377 33.4915C6.55205 33.4915 6.19617 33.3705 6.19617 33.1284C6.19617 33.0726 6.20756 33.0303 6.23032 33.0012C6.25307 32.9702 6.30893 32.9237 6.3979 32.8616C6.47653 32.8058 6.53032 32.6558 6.55928 32.4118C6.59031 32.1657 6.60584 31.7592 6.60584 31.1926C6.60584 30.7478 6.59342 30.4396 6.5686 30.2679C6.56032 30.2038 6.54479 30.1573 6.52204 30.1284C6.50136 30.0974 6.46101 30.0664 6.40101 30.0353C6.27273 29.9692 6.2086 29.8926 6.2086 29.8057C6.2086 29.7023 6.25722 29.6186 6.35445 29.5544C6.4517 29.4903 6.63791 29.421 6.91307 29.3466C7.28548 29.2431 7.58239 29.1914 7.80376 29.1914C7.92377 29.1914 7.9817 29.2431 7.97757 29.3466Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1318_1604">
              <rect width="195.443" height="40" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
    </div>
  );
};

export default Logo;