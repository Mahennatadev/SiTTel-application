import React from "react";

const MRiwayatNotificationFailed = ({ onClose }) => {
  return (
    <div className="riwayat__failednotification border-transparent bg-white rounded-2xl p-8">
      <div className="grid grid-cols-2 gap-4">
        <div className="notification__text text-start">
          <p className="text__title text-lg text-black font-bold">
            Dokumen tidak dapat diunduh
          </p>
          <p className="text__subtitle text-black pt-2">
            Dokumen telah ditolak karena <br />terdapat kesalahan di dalamnya
          </p>

          <div className="done__catatan mt-4 border h-32 border-gray-400 bg-white rounded-2xl">
            <p className="isi__catatan text-black p-4 font-medium">
              Isi Catatan...
            </p>
          </div>
        </div>
        <div className="notification__illustrations flex-col grid">
          <button type="button" className="justify-self-end" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="mt-9">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              width="311.68"
              height="165.48"
              viewBox="0 0 920.30414 515.08657"
            >
              <path
                id="a935b196-91fc-4d65-bd04-49275a33d175-4744"
                data-name="Path 1"
                d="M333.52692,705.58229h-140.6s-2.85-41.8,14.012-42.275,14.962,18.525,36.1-7.6,46.787-24.7,50.112-9.262-6.412,27.787,11.4,23.987S348.01392,676.60726,333.52692,705.58229Z"
                transform="translate(-139.84793 -192.45672)"
                fill="#e6e6e6"
              />
              <path
                id="af9a6d89-7824-4af5-a475-6980c18ad0f3-4745"
                data-name="Path 2"
                d="M260.85394,705.5923l-.475-.019c1.107-27.52,6.87-45.2,11.511-55.19,5.038-10.844,9.893-15.234,9.942-15.277l.316.355c-.048.043-4.846,4.389-9.844,15.16C267.68893,660.56526,261.95694,678.1753,260.85394,705.5923Z"
                transform="translate(-139.84793 -192.45672)"
                fill="#fff"
              />
              <path
                id="ae138407-70d7-43ff-b006-9d3240c337f6-4746"
                data-name="Path 3"
                d="M311.73993,705.6483l-.456-.133a73.682,73.682,0,0,1,18.551-30.863l.319.352A73.183,73.183,0,0,0,311.73993,705.6483Z"
                transform="translate(-139.84793 -192.45672)"
                fill="#fff"
              />
              <path
                id="a7d931fe-d47e-4aa5-ae01-a0d26a3448cc-4747"
                data-name="Path 4"
                d="M215.07292,705.61531l-.471-.065a51.73206,51.73206,0,0,0-4.653-30.238,41.63309,41.63309,0,0,0-7.34-10.71606l.329-.343a42.15523,42.15523,0,0,1,7.441,10.848A52.20594,52.20594,0,0,1,215.07292,705.61531Z"
                transform="translate(-139.84793 -192.45672)"
                fill="#fff"
              />
              <path
                id="b274f1e0-b558-44b1-a0b2-dcd77bbddb14-4748"
                data-name="Path 5"
                d="M352.60792,706.21727h-174.845l-.04-.592c-.1-1.473-2.331-36.228,8.93-48.629a12.33392,12.33392,0,0,1,9.013-4.325c7.34-.209,11.953,2.541,15.674,4.747,7.013,4.16,11.645,6.909,28.49-13.91,18.247-22.553,37.936-27.406,49.254-24.708,7.313,1.744,12.353,6.671,13.828,13.52,1.4,6.485.952,12.578.594,17.475-.383,5.239-.685,9.376,1.467,11.252,1.8,1.565,5.381,1.707,11.281.448,12-2.56,28.748-.37,37.153,10.491,4.522,5.843,8.085,16.463-.623,33.88Zm-173.652-1.271h172.865c6.489-13.165,6.692-24.287.581-32.182-7.711-9.963-23.888-12.585-35.883-10.026-6.411,1.368-10.23,1.142-12.381-.732-2.631-2.292-2.308-6.71-1.9-12.3.352-4.815.789-10.808-.569-17.115-1.368-6.351-6.063-10.926-12.881-12.551-10.957-2.614-30.1,2.177-47.971,24.27-17.534,21.672-22.817,18.54-30.126,14.2-3.767-2.234-8.043-4.767-14.99-4.57a11.10885,11.10885,0,0,0-8.108,3.909c-10.118,11.146-8.884,42.398-8.636,47.097Z"
                transform="translate(-139.84793 -192.45672)"
                fill="#2f2e41"
              />
              <path
                id="bca7d782-7e31-494e-97b0-f49b8df7894d-4749"
                data-name="Path 8"
                d="M923.90791,706.92328h-172.216l-.033-.965-8.223-235.18h188.727Zm-170.284-2h168.352l8.117-232.145h-184.587Z"
                transform="translate(-139.84793 -192.45672)"
                fill="#3f3d56"
              />
              <g id="e7d5632f-8461-4dcf-9cd9-df8e3f64d5e2" data-name="Group 1">
                <rect
                  id="ad932c98-7027-4b28-8e73-a76d8a4136e0"
                  data-name="Rectangle 17"
                  x="639.82597"
                  y="321.89657"
                  width="13.099"
                  height="162.097"
                  fill="#3f3d56"
                />
                <rect
                  id="ae1e5d8b-7977-4a56-a24c-fbb057f76b38"
                  data-name="Rectangle 18"
                  x="691.40202"
                  y="321.89657"
                  width="13.099"
                  height="162.097"
                  fill="#3f3d56"
                />
                <rect
                  id="bffa0855-fc38-45cc-9e39-6daa1d3e4103"
                  data-name="Rectangle 19"
                  x="742.97801"
                  y="321.89657"
                  width="13.099"
                  height="162.097"
                  fill="#3f3d56"
                />
              </g>
              <path
                d="M1041.59738,539.83884l-.8457-.53418L826.83762,404.12156l18.55566-29.36182.84571.53418,213.91308,135.18262Zm-212-136.33935,211.377,133.57959,16.418-25.97949-211.376-133.58106Z"
                transform="translate(-139.84793 -192.45672)"
                fill="#3f3d56"
              />
              <path
                id="b31113e7-cae2-4653-b248-af5e4acb0a6c-4750"
                data-name="Path 10"
                d="M989.9499,393.22629a38.459,38.459,0,0,0-58.62,38.07l10.2,6.446a30.344,30.344,0,1,1,28.98,18.321l10.2,6.446a38.459,38.459,0,0,0,9.249-69.283Z"
                transform="translate(-139.84793 -192.45672)"
                fill="#3f3d56"
              />
              <rect
                id="bbfb7505-c422-4cd7-b125-b9dee40ff3b1"
                data-name="Rectangle 21"
                y="513.08657"
                width="909"
                height="2"
                fill="#3f3d56"
              />
              <g id="b91459ce-423d-4e92-a857-d0ba85dc07c7" data-name="Group 6">
                <path
                  id="bc369f15-2cd9-428d-9eec-3a8fd8cc1bba-4751"
                  data-name="Path 111"
                  d="M536.88489,691.89628h-14.564l-6.932-56.174h21.5Z"
                  transform="translate(-139.84793 -192.45672)"
                  fill="#feb8b8"
                />
                <path
                  id="fafca8b8-1a63-4513-a3fa-e64917847011-4752"
                  data-name="Path 112"
                  d="M494.23393,705.41828h45.771v-17.684h-28.332a17.439,17.439,0,0,0-17.439,17.439h0Z"
                  transform="translate(-139.84793 -192.45672)"
                  fill="#2f2e41"
                />
                <path
                  id="a38ea43e-f1b1-406e-84c8-61e7480f01b4-4753"
                  data-name="Path 113"
                  d="M531.766,604.85129l10.046,10.545,45.452-33.727-14.826-15.563Z"
                  transform="translate(-139.84793 -192.45672)"
                  fill="#feb8b8"
                />
                <path
                  id="b5ba90e2-8a51-4a77-95c4-5b486c8770ec-4754"
                  data-name="Path 114"
                  d="M552.16123,620.2275l-19.54908-20.51237-12.80321,12.202,31.582,33.1382.17738-.169a17.4414,17.4414,0,0,0,.59292-24.65874Z"
                  transform="translate(-139.84793 -192.45672)"
                  fill="#2f2e41"
                />
                <path
                  id="b1536285-e66e-494f-8c4f-a2304265e4c3-4755"
                  data-name="Path 115"
                  d="M430.39593,450.95329a11.94591,11.94591,0,0,1,5.715-17.4l57.179-145.727,22.288,13.345-63.518,139.8a12.01,12.01,0,0,1-21.664,9.982Z"
                  transform="translate(-139.84793 -192.45672)"
                  fill="#feb8b8"
                />
                <path
                  id="acd6249e-4699-4411-813c-091b3a750afe-4756"
                  data-name="Path 116"
                  d="M647.42792,461.3983a11.94507,11.94507,0,0,1-10.727-14.85l-84.354-131.869,23.891-10.2,75.836,133.523a12.01,12.01,0,0,1-4.646,23.4Z"
                  transform="translate(-139.84793 -192.45672)"
                  fill="#feb8b8"
                />
                <path
                  id="ece4d731-f277-435f-bbc1-e3b70679d22f-4757"
                  data-name="Path 117"
                  d="M493.8529,436.36129l14.931,221.913,35.682-3.148,7.34595-163.722,19.94,70.314,43.028,3.148-17.031-139Z"
                  transform="translate(-139.84793 -192.45672)"
                  fill="#2f2e41"
                />
                <path
                  id="b91f5bf0-a8c5-41a2-a26e-8e2fd84207c6-4758"
                  data-name="Path 118"
                  d="M578.04889,551.2243l-6.3,10.495-44.073,30.434,31.484,16.792s60.869-33.583,55.622-44.078Z"
                  transform="translate(-139.84793 -192.45672)"
                  fill="#2f2e41"
                />
                <path
                  id="b0b7866d-f3ba-460a-97cc-8103175b89de-4759"
                  data-name="Path 119"
                  d="M462.60693,346.57728l12.421-35a62.4941,62.4941,0,0,1,32.332-35.668h0a89.42706,89.42706,0,0,1,52.484-2.873l4.52,1.122a87.36364,87.36364,0,0,1,33.128,16c7.654,6.034,14.54,13.674,15.153,21.892a.24435.24435,0,0,0,.015.051c2.12,9.292,3.169,57.567,3.169,57.567h-18.7l2.958,65.067-.239-.471s-107.856,20.411-107.856,9.916v-67.168l-2.211-24.32Z"
                  transform="translate(-139.84793 -192.45672)"
                  fill="#ccc"
                />
                <circle
                  id="bd3b9138-8795-4826-98b2-48d72249760b"
                  data-name="Ellipse 12"
                  cx="423.432"
                  cy="41.59257"
                  r="29.889"
                  fill="#feb8b8"
                />
                <path
                  id="e83e2647-99b5-4c80-ac3e-9e5d1f9bc81d-4760"
                  data-name="Path 120"
                  d="M567.757,220.64529l23.208.93c2.92-.009,6.108-.112,8.332-2,3.35-2.849,2.789-8.225.995-12.241-5-11.182-16.153-15.188-28.4-14.859s-25.08,4.48-31.675,14.8-8.377,23.352-5.893,35.344a38.534,38.534,0,0,1,31.508-21.97Z"
                  transform="translate(-139.84793 -192.45672)"
                  fill="#2f2e41"
                />
              </g>
              <g id="ff061cc6-72bd-494d-9c36-32e4a4020cd7" data-name="Group 4">
                <path
                  id="bc404282-8d4f-43f7-bc12-02f97785eba1-4761"
                  data-name="Path 81"
                  d="M705.57123,513.00138l-84.00157-58.87289a3.60743,3.60743,0,0,1-.882-5.01481L686.619,355.0409a3.60743,3.60743,0,0,1,5.01481-.882l84.00156,58.87289a3.60742,3.60742,0,0,1,.882,5.01481l-65.92963,94.07033A3.60742,3.60742,0,0,1,705.57123,513.00138Z"
                  transform="translate(-139.84793 -192.45672)"
                  fill="#ff2c2c"
                />
                <path
                  id="ae4af9f3-88ec-4cab-9b9e-a4fc234f7062-4762"
                  data-name="Path 82"
                  d="M724.46214,449.12032l-49.29069-34.54561a5.30063,5.30063,0,1,1,6.08441-8.6814l49.29069,34.54561a5.30063,5.30063,0,0,1-6.08441,8.6814Z"
                  transform="translate(-139.84793 -192.45672)"
                  fill="#fff"
                />
                <path
                  id="fe48f3fd-992f-41c2-af3b-c30882e26a16-4763"
                  data-name="Path 83"
                  d="M713.14975,465.26118l-49.29069-34.54561a5.30063,5.30063,0,1,1,6.0844-8.6814l49.29069,34.54561a5.30063,5.30063,0,0,1-6.0844,8.6814Z"
                  transform="translate(-139.84793 -192.45672)"
                  fill="#fff"
                />
                <path
                  id="e216638f-22ba-49ea-a46c-300c78c4e875-4764"
                  data-name="Path 84"
                  d="M701.71568,481.57565,652.425,447.03a5.30063,5.30063,0,1,1,6.0844-8.68141l49.29069,34.54561a5.30063,5.30063,0,0,1-6.0844,8.68141Z"
                  transform="translate(-139.84793 -192.45672)"
                  fill="#fff"
                />
                <path
                  id="ee43e3d8-5f22-4b53-a964-043fec166479-4765"
                  data-name="Path 85"
                  d="M724.32359,417.19028l-19.09171-13.38052a5.30063,5.30063,0,1,1,6.0844-8.6814L730.408,408.50887a5.30063,5.30063,0,0,1-6.08441,8.68141Z"
                  transform="translate(-139.84793 -192.45672)"
                  fill="#fff"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MRiwayatNotificationFailed;
