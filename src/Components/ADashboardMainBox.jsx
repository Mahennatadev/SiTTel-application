import React from "react";

const ADashboardMainBox = () => {
  return (
    <div className="dashboard__box flex flex-shrink-0 gap-4 place-content-center mt-10 max-md:ml-0 max-md:w-full">
      <div className="box__diproses grid grid-cols-2 transition shadow-xl duration-300 px-7 py-6 gap-20 hover:shadow-2xl border-2 border-red-600 rounded-xl bg-white hover:-translate-y-0.5 hover:transform cursor-no-drop">
        <div className="box__text space-y-1">
          <h1 className="box__title text-black font-bold text-2xl">Dokumen <br />Sedang Diproses</h1>
          <p className="box__subtitle text-black text-base font-normal">
            Jumlah Dokumen
          </p>
          <p className="box__value text-black text-7xl font-normal pt-10">
            10
          </p>
        </div>
        <div className="box__illustrations flex items-center flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            width="192.55"
            height="165.23"
            viewBox="0 0 601.6 630"
          >
            <rect
              x="756.96373"
              y="195.50659"
              width="1.67162"
              height="109.19622"
              transform="translate(-245.06837 491.48745) rotate(-46.40674)"
              fill="#e6e6e6"
            />
            <polygon
              points="498.845 143.982 497.175 144.083 497.679 152.309 489.437 152.21 489.419 153.882 499.457 154.001 498.845 143.982"
              fill="#e6e6e6"
            />
            <polygon
              points="427.781 76.326 427.763 77.998 419.522 77.899 420.026 86.125 418.355 86.226 417.745 76.206 427.781 76.326"
              fill="#e6e6e6"
            />
            <circle cx="458.59956" cy="115.10464" r="9.19286" fill="#e6e6e6" />
            <rect
              x="389.27378"
              y="249.26889"
              width="109.19622"
              height="1.67162"
              transform="translate(-349.25942 240.03057) rotate(-43.59326)"
              fill="#e6e6e6"
            />
            <polygon
              points="103.815 154.001 113.853 153.882 113.834 152.21 105.593 152.309 106.097 144.083 104.427 143.982 103.815 154.001"
              fill="#e6e6e6"
            />
            <polygon
              points="185.527 76.206 184.916 86.226 183.246 86.125 183.749 77.899 175.508 77.998 175.49 76.326 185.527 76.206"
              fill="#e6e6e6"
            />
            <circle cx="144.67187" cy="115.10464" r="9.19286" fill="#e6e6e6" />
            <path
              d="M669.36429,325.54286H530.63571a7.53,7.53,0,0,1-7.52142-7.52143v-175.5A7.53,7.53,0,0,1,530.63571,135H669.36429a7.53,7.53,0,0,1,7.52142,7.52143v175.5A7.53,7.53,0,0,1,669.36429,325.54286ZM530.63571,136.67143a5.85658,5.85658,0,0,0-5.85,5.85v175.5a5.85658,5.85658,0,0,0,5.85,5.85H669.36429a5.85658,5.85658,0,0,0,5.85-5.85v-175.5a5.85658,5.85658,0,0,0-5.85-5.85Z"
              transform="translate(-299.2 -135)"
              fill="#3f3d56"
            />
            <path
              d="M588.45985,219.35842h-30.537a3.76488,3.76488,0,0,1-3.76071-3.76071V179.562a3.76488,3.76488,0,0,1,3.76071-3.76071h30.537a3.76489,3.76489,0,0,1,3.76072,3.76071v36.03569A3.76489,3.76489,0,0,1,588.45985,219.35842Z"
              transform="translate(-299.2 -135)"
              fill="#e42313"
            />
            <path
              d="M647.79557,236.07271h-30.537a3.7649,3.7649,0,0,1-3.76072-3.76071V196.27631a3.7649,3.7649,0,0,1,3.76072-3.76072h30.537a3.76489,3.76489,0,0,1,3.76071,3.76072V232.312A3.76489,3.76489,0,0,1,647.79557,236.07271Z"
              transform="translate(-299.2 -135)"
              fill="#ccc"
            />
            <path
              d="M600.15985,287.05128h-30.537a3.76488,3.76488,0,0,1-3.76071-3.76071V247.25488a3.76489,3.76489,0,0,1,3.76071-3.76072h30.537a3.7649,3.7649,0,0,1,3.76072,3.76072v36.03569A3.76489,3.76489,0,0,1,600.15985,287.05128Z"
              transform="translate(-299.2 -135)"
              fill="#ff6584"
            />
            <path
              d="M893.27857,506H754.55a7.53005,7.53005,0,0,1-7.52143-7.52143v-175.5a7.53005,7.53005,0,0,1,7.52143-7.52143H893.27857A7.53,7.53,0,0,1,900.8,322.97857v175.5A7.53,7.53,0,0,1,893.27857,506ZM754.55,317.12857a5.85658,5.85658,0,0,0-5.85,5.85v175.5a5.85658,5.85658,0,0,0,5.85,5.85H893.27857a5.85658,5.85658,0,0,0,5.85-5.85v-175.5a5.85658,5.85658,0,0,0-5.85-5.85Z"
              transform="translate(-299.2 -135)"
              fill="#3f3d56"
            />
            <path
              d="M847.73214,354.31786H800.09643a3.34286,3.34286,0,0,1,0-6.68572h47.63571a3.34286,3.34286,0,0,1,0,6.68572Z"
              transform="translate(-299.2 -135)"
              fill="#e42313"
            />
            <path
              d="M871.13214,386.075H776.69643a3.34286,3.34286,0,1,1,0-6.68571h94.43571a3.34286,3.34286,0,1,1,0,6.68571Z"
              transform="translate(-299.2 -135)"
              fill="#ccc"
            />
            <path
              d="M871.13214,403.625H776.69643a3.34286,3.34286,0,1,1,0-6.68571h94.43571a3.34286,3.34286,0,1,1,0,6.68571Z"
              transform="translate(-299.2 -135)"
              fill="#ccc"
            />
            <path
              d="M871.13214,421.175H776.69643a3.34286,3.34286,0,1,1,0-6.68571h94.43571a3.34286,3.34286,0,1,1,0,6.68571Z"
              transform="translate(-299.2 -135)"
              fill="#ccc"
            />
            <path
              d="M871.13214,438.725H776.69643a3.34286,3.34286,0,1,1,0-6.68571h94.43571a3.34286,3.34286,0,1,1,0,6.68571Z"
              transform="translate(-299.2 -135)"
              fill="#ccc"
            />
            <path
              d="M871.13214,456.275H776.69643a3.34286,3.34286,0,1,1,0-6.68571h94.43571a3.34286,3.34286,0,1,1,0,6.68571Z"
              transform="translate(-299.2 -135)"
              fill="#ccc"
            />
            <path
              d="M871.13214,473.825H776.69643a3.34286,3.34286,0,1,1,0-6.68571h94.43571a3.34286,3.34286,0,1,1,0,6.68571Z"
              transform="translate(-299.2 -135)"
              fill="#ccc"
            />
            <path
              d="M445.45,506H306.72143A7.53,7.53,0,0,1,299.2,498.47857v-175.5a7.53,7.53,0,0,1,7.52143-7.52143H445.45a7.53005,7.53005,0,0,1,7.52143,7.52143v175.5A7.53005,7.53005,0,0,1,445.45,506ZM306.72143,317.12857a5.85658,5.85658,0,0,0-5.85,5.85v175.5a5.85658,5.85658,0,0,0,5.85,5.85H445.45a5.85658,5.85658,0,0,0,5.85-5.85v-175.5a5.85658,5.85658,0,0,0-5.85-5.85Z"
              transform="translate(-299.2 -135)"
              fill="#3f3d56"
            />
            <path
              d="M423.44834,356.89277H381.66263a3.34286,3.34286,0,0,1,0-6.68572h41.78571a3.34286,3.34286,0,1,1,0,6.68572Z"
              transform="translate(-299.2 -135)"
              fill="#3f3d56"
            />
            <path
              d="M423.44834,374.44277H381.66263a3.34286,3.34286,0,0,1,0-6.68572h41.78571a3.34286,3.34286,0,1,1,0,6.68572Z"
              transform="translate(-299.2 -135)"
              fill="#3f3d56"
            />
            <path
              d="M360.22223,384.43578h-30.537a3.76489,3.76489,0,0,1-3.76072-3.76071V344.63938a3.7649,3.7649,0,0,1,3.76072-3.76072h30.537a3.76489,3.76489,0,0,1,3.76071,3.76072v36.03569A3.76488,3.76488,0,0,1,360.22223,384.43578Z"
              transform="translate(-299.2 -135)"
              fill="#e42313"
            />
            <path
              d="M423.1588,410.37848H328.72309a3.34286,3.34286,0,1,1,0-6.68571H423.1588a3.34286,3.34286,0,1,1,0,6.68571Z"
              transform="translate(-299.2 -135)"
              fill="#ccc"
            />
            <path
              d="M423.1588,427.92848H328.72309a3.34286,3.34286,0,1,1,0-6.68571H423.1588a3.34286,3.34286,0,1,1,0,6.68571Z"
              transform="translate(-299.2 -135)"
              fill="#ccc"
            />
            <path
              d="M423.1588,445.47848H328.72309a3.34286,3.34286,0,1,1,0-6.68571H423.1588a3.34286,3.34286,0,1,1,0,6.68571Z"
              transform="translate(-299.2 -135)"
              fill="#ccc"
            />
            <path
              d="M423.1588,463.02848H328.72309a3.34286,3.34286,0,1,1,0-6.68571H423.1588a3.34286,3.34286,0,1,1,0,6.68571Z"
              transform="translate(-299.2 -135)"
              fill="#ccc"
            />
            <path
              d="M423.1588,480.57848H328.72309a3.34286,3.34286,0,1,1,0-6.68571H423.1588a3.34286,3.34286,0,1,1,0,6.68571Z"
              transform="translate(-299.2 -135)"
              fill="#ccc"
            />
            <path
              d="M497.89518,607.71863V571.68294a3.76489,3.76489,0,0,1,3.76071-3.76071h30.537a3.76489,3.76489,0,0,1,3.76071,3.76071v36.03569a3.7649,3.7649,0,0,1-3.76071,3.76072h-30.537A3.7649,3.7649,0,0,1,497.89518,607.71863Z"
              transform="translate(-299.2 -135)"
              fill="#e6e6e6"
            />
            <path
              d="M508.89518,595.71863V559.68294a3.76489,3.76489,0,0,1,3.76071-3.76071h30.537a3.76489,3.76489,0,0,1,3.76071,3.76071v36.03569a3.7649,3.7649,0,0,1-3.76071,3.76072h-30.537A3.7649,3.7649,0,0,1,508.89518,595.71863Z"
              transform="translate(-299.2 -135)"
              fill="#e42313"
            />
            <path
              d="M645.78429,584.18843a9.07776,9.07776,0,0,1-2.39821-13.71145l-9.4656-69.18787,19.71756.9678,3.09564,67.48557a9.12692,9.12692,0,0,1-10.94939,14.446Z"
              transform="translate(-299.2 -135)"
              fill="#a0616a"
            />
            <path
              d="M656.34418,503.17871a3.70494,3.70494,0,0,1-1.5051,1.06441l-17.71963,6.76294a3.72283,3.72283,0,0,1-4.729-1.96465l-15.69629-35.27523a14.73962,14.73962,0,0,1-.7212-10.43132,14.33679,14.33679,0,0,1,10.91159-9.78216,13.67275,13.67275,0,0,1,5.89.08316,14.27981,14.27981,0,0,1,10.26305,8.92147l13.956,36.89A3.73032,3.73032,0,0,1,656.34418,503.17871Z"
              transform="translate(-299.2 -135)"
              fill="#ccc"
            />
            <polygon
              points="264.807 618.06 252.547 618.06 248.102 570.549 264.809 570.773 264.807 618.06"
              fill="#a0616a"
            />
            <path
              d="M243.79024,614.55666h23.64387a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H228.90338a0,0,0,0,1,0,0v0A14.88686,14.88686,0,0,1,243.79024,614.55666Z"
              fill="#2f2e41"
            />
            <polygon
              points="321.807 618.06 309.547 618.06 303.715 570.772 321.809 570.773 321.807 618.06"
              fill="#a0616a"
            />
            <path
              d="M300.79024,614.55666h23.64387a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H285.90338a0,0,0,0,1,0,0v0A14.88686,14.88686,0,0,1,300.79024,614.55666Z"
              fill="#2f2e41"
            />
            <path
              d="M622.54889,736.23552l-19.25513-1.42578a4.50578,4.50578,0,0,1-4.16235-4.27051L594.838,641.80876a3.50008,3.50008,0,0,0-6.92481-.5332L570.002,728.68278a4.50575,4.50575,0,0,1-4.76709,3.582l-17.40576-1.39257a4.4995,4.4995,0,0,1-4.1189-4.93262L559.858,564.46306a4.49952,4.49952,0,0,1,5.43359-3.94922l61.406,13.34863a4.511,4.511,0,0,1,3.543,4.48145L627.38067,731.8322a4.5022,4.5022,0,0,1-4.489,4.416C622.77789,736.24821,622.66363,736.24333,622.54889,736.23552Z"
              transform="translate(-299.2 -135)"
              fill="#2f2e41"
            />
            <circle cx="306.50339" cy="269.88758" r="24.56103" fill="#a0616a" />
            <path
              d="M567.59552,576.9152a21.96161,21.96161,0,0,1-7.2937-16.86621c0-35.30078,30.55566-114.168,31.51367-116.6289.0935-.59278.89966-.84864,5.12939-3.70606,4.23242-2.85937,10.335-3.29883,18.13941-1.30566a4.47911,4.47911,0,0,1,3.25,3.31836l1.4519,2.09765a3.49144,3.49144,0,0,0,2.02881,2.40625c6.29346,2.65137,26.29809,14.87793,19.48144,60.89161-6.33227,42.74316-8.90185,67.88086-9.71264,76.70507a4.49122,4.49122,0,0,1-4.07154,4.06543c-3.08569.27637-8.38183.64356-14.68945.64356C598.20172,588.5363,578.14654,586.56364,567.59552,576.9152Z"
              transform="translate(-299.2 -135)"
              fill="#ccc"
            />
            <path
              d="M538.24736,563.83729a9.07771,9.07771,0,0,1,5.649-12.72182L574.58944,488.39l15.83345,11.79069-35.034,57.76251a9.12692,9.12692,0,0,1-17.14158,5.89414Z"
              transform="translate(-299.2 -135)"
              fill="#a0616a"
            />
            <path
              d="M592.15633,502.454a3.7049,3.7049,0,0,1-1.8429.04517l-18.48219-4.25807a3.72282,3.72282,0,0,1-2.832-4.26646l6.62251-38.03759a14.73969,14.73969,0,0,1,5.21371-9.06366,14.33681,14.33681,0,0,1,14.51142-2.04255,13.67258,13.67258,0,0,1,4.84448,3.35107,14.27983,14.27983,0,0,1,3.55082,13.12686l-8.96734,38.40871A3.7303,3.7303,0,0,1,592.15633,502.454Z"
              transform="translate(-299.2 -135)"
              fill="#ccc"
            />
            <path
              d="M599.95291,427.0789a10.58407,10.58407,0,0,1-2.83917-9.3866c.85636-4.47943,1.35942-7.41039,1.45471-8.47667h0c.32608-3.64766-3.36133-6.60057-7.01009-7.07047-.1414-.01845-.25976-.03074-.35857-.03865.09288.09135.19279.18445.2804.267.693.65084,1.55573,1.46153,1.35064,2.29769-.12362.50327-.58364.86075-1.40663,1.09087-5.70622,1.59678-10.1009.13087-13.83068-4.61645a11.026,11.026,0,0,1-2.10511-4.598c-1.33593-6.5549,2.2239-12.14277,5.4458-15.67537,2.6567-2.91295,6.96354-6.44907,12.39419-6.75209,4.2234-.23583,9.24563,2.19448,10.74888,6.57423a8.15937,8.15937,0,0,1,6.36123-3.58618,14.662,14.662,0,0,1,8.15827,2.26914c11.90914,6.8219,17.02732,23.07258,11.17684,35.48763-3.68038,7.80914-11.65421,13.62273-20.80981,15.17209a10.39312,10.39312,0,0,1-1.7349.14668A10.11515,10.11515,0,0,1,599.95291,427.0789Z"
              transform="translate(-299.2 -135)"
              fill="#2f2e41"
            />
            <path
              d="M484.77874,765h195a1,1,0,0,0,0-2h-195a1,1,0,1,0,0,2Z"
              transform="translate(-299.2 -135)"
              fill="#3f3d56"
            />
          </svg>
        </div>
      </div>

      <div className="box__selesai grid grid-cols-2 transition shadow-xl duration-300 px-7 py-6 gap-20 hover:shadow-2xl border-2 border-red-600 rounded-xl bg-white hover:-translate-y-0.5 hover:transform cursor-no-drop">
        <div className="box__text space-y-1">
          <h1 className="box__title text-black font-bold text-2xl">Dokumen<br />Ditandatangani</h1>
          <p className="box__subtitle text-black text-base font-normal">
            Jumlah Dokumen
          </p>
          <p className="box__value text-black text-7xl font-normal pt-10">
            5
          </p>
        </div>
        <div className="box__illustrations flex items-center flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            width="192.55"
            height="165.23"
            viewBox="0 0 601.6 630"
          >
            <path
              id="b9ccae5a-ffdd-4f5c-9c1e-05af9f0f3372-416"
              data-name="Path 438"
              d="M310.70569,694.02818a24.21459,24.21459,0,0,0,23.38269-4.11877c8.18977-6.87441,10.758-18.196,12.8467-28.68191l6.17973-31.01657-12.9377,8.90837c-9.30465,6.40641-18.81826,13.01866-25.26011,22.29785s-9.25223,21.94707-4.07792,31.988"
              transform="translate(-259.58071 -157.88396)"
              fill="#e6e6e6"
            />
            <path
              id="f4ad1d06-bd03-4ced-a5c4-c19a65ab4ee5-417"
              data-name="Path 439"
              d="M312.7034,733.73874c-1.62839-11.86368-3.30382-23.88078-2.15884-35.87167,1.01467-10.64932,4.26373-21.04881,10.87831-29.57938a49.20592,49.20592,0,0,1,12.62466-11.44039c1.26215-.79648,2.42409,1.20354,1.16733,1.997a46.77949,46.77949,0,0,0-18.50446,22.32562c-4.02857,10.24607-4.67545,21.41582-3.98154,32.3003.41944,6.58218,1.31074,13.1212,2.20588,19.65251a1.19817,1.19817,0,0,1-.808,1.42251,1.16348,1.16348,0,0,1-1.42253-.808Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#f2f2f2"
            />
            <path
              id="baf785f8-b4c6-42cf-85bd-8a16037845f7-418"
              data-name="Path 442"
              d="M324.42443,714.70229a17.82513,17.82513,0,0,0,15.53141,8.01862c7.8644-.37318,14.41806-5.85973,20.31713-11.07027l17.452-15.4088-11.54987-.55281c-8.30619-.39784-16.82672-.771-24.73813,1.79338s-15.20758,8.72639-16.654,16.91541"
              transform="translate(-259.58071 -157.88396)"
              fill="#e6e6e6"
            />
            <path
              id="a14e4330-7125-4e03-a856-d6453c34f6cc-419"
              data-name="Path 443"
              d="M308.10042,740.55843c7.83972-13.87142,16.93234-29.28794,33.1808-34.21552a37.02609,37.02609,0,0,1,13.95545-1.441c1.48189.128,1.11179,2.41174-.367,2.28454a34.39833,34.39833,0,0,0-22.27164,5.89215c-6.27994,4.27453-11.16975,10.21755-15.30781,16.51907-2.53511,3.86051-4.80576,7.88445-7.07642,11.903C309.48824,742.78513,307.36641,741.85759,308.10042,740.55843Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#f2f2f2"
            />
            <path
              id="ac20a106-7eb8-4a45-8835-674ef3bf3222-420"
              data-name="Path 141"
              d="M935.3957,569.31654H503.18092a5.03014,5.03014,0,0,1-5.02359-5.02359V162.90754a5.03017,5.03017,0,0,1,5.02359-5.02358H935.3957a5.03017,5.03017,0,0,1,5.02359,5.02358V564.292a5.02922,5.02922,0,0,1-5.02359,5.02359Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#fff"
            />
            <path
              id="a8878079-c7cd-406f-a434-8b15b914b9b4-421"
              data-name="Path 141"
              d="M935.3957,569.31654H503.18092a5.03014,5.03014,0,0,1-5.02359-5.02359V162.90754a5.03017,5.03017,0,0,1,5.02359-5.02358H935.3957a5.03017,5.03017,0,0,1,5.02359,5.02358V564.292a5.02922,5.02922,0,0,1-5.02359,5.02359ZM503.18092,159.88944a3.01808,3.01808,0,0,0-3.01152,3.01151V564.292a3.01808,3.01808,0,0,0,3.01152,3.01152H935.3957a3.01717,3.01717,0,0,0,3.01153-3.01152V162.90754a3.01809,3.01809,0,0,0-3.01153-3.01151Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#cacaca"
            />
            <path
              id="af64f961-e9a2-4c53-a333-5060c7f850d2-422"
              data-name="Path 142"
              d="M707.41023,262.18528a3.41053,3.41053,0,0,0,0,6.82105H894.55305a3.41053,3.41053,0,0,0,0-6.82105Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#e4e4e4"
            />
            <path
              id="baad4cfb-158d-4439-9cc3-22475bf47b22-423"
              data-name="Path 143"
              d="M707.41023,282.65037a3.41054,3.41054,0,0,0,0,6.82106h95.54019a3.41054,3.41054,0,0,0,0-6.82106Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#e4e4e4"
            />
            <path
              id="f3456279-91e5-49ad-aa43-9838b26fb6ca-424"
              data-name="Path 142"
              d="M543.84146,392.7046a3.41054,3.41054,0,0,0,0,6.82106h350.8937a3.41054,3.41054,0,0,0,0-6.82106Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#e4e4e4"
            />
            <path
              id="a3288adf-49f8-485f-8ae9-1e4f1a13d849-425"
              data-name="Path 143"
              d="M543.84146,413.1697a3.41054,3.41054,0,0,0,0,6.82106H803.13254a3.41054,3.41054,0,0,0,0-6.82106Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#e4e4e4"
            />
            <path
              id="e63a5b48-5a7d-40a2-b9b0-6adec326348a-426"
              data-name="Path 142"
              d="M543.84146,433.17177a3.41054,3.41054,0,0,0,0,6.82106h350.8937a3.41054,3.41054,0,0,0,0-6.82106Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#e4e4e4"
            />
            <path
              id="a1c669b4-dfc3-4cfa-a7be-66b71399844d-427"
              data-name="Path 143"
              d="M543.84146,453.63687a3.41054,3.41054,0,0,0,0,6.82106H803.13254a3.41054,3.41054,0,0,0,0-6.82106Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#e4e4e4"
            />
            <path
              id="bfec50d1-ffb1-4de6-a9ef-a1085e40e016-428"
              data-name="Path 142"
              d="M543.84146,474.17177a3.41054,3.41054,0,0,0,0,6.82106h350.8937a3.41054,3.41054,0,0,0,0-6.82106Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#e4e4e4"
            />
            <path
              id="bc9696ec-ec99-41d5-9116-3ad9737a38ac-429"
              data-name="Path 143"
              d="M543.84146,494.63687a3.41054,3.41054,0,0,0,0,6.82106H803.13254a3.41054,3.41054,0,0,0,0-6.82106Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#e4e4e4"
            />
            <path
              d="M599.41943,324.82812a49,49,0,1,1,48.99952-49A49.05567,49.05567,0,0,1,599.41943,324.82812Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#e42313"
            />
            <path
              d="M450.67833,510.10041a12.24754,12.24754,0,0,0-14.953-11.36231l-16.19641-22.82521-16.27138,6.45945,23.32519,31.91237a12.31392,12.31392,0,0,0,24.09559-4.1843Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#a0616a"
            />
            <path
              d="M419.11211,508.40888l-49.00774-63.57777L388.46714,387.12c1.34563-14.50936,10.425-18.56089,10.81135-18.72645l.5893-.25281,15.979,42.6119-11.73235,31.28625,28.79671,48.4319Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#3f3d56"
            />
            <path
              d="M589.30794,312.41993a12.24758,12.24758,0,0,0-10.17219,15.78672l-21.50463,17.91269,7.69816,15.72326,30.01343-25.72272a12.31392,12.31392,0,0,0-6.03477-23.69995Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#a0616a"
            />
            <path
              d="M590.06206,344.02244l-59.59835,53.77665-58.95815-13.84578c-14.57-.21979-19.31136-8.9587-19.50629-9.33113l-.29761-.568,41.2489-19.22578,32.0997,9.27828,46.06046-32.45509Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#3f3d56"
            />
            <polygon
              points="227.248 568.437 243.261 568.436 250.878 506.672 227.245 506.673 227.248 568.437"
              fill="#a0616a"
            />
            <path
              d="M483.39733,721.74476h50.32614a0,0,0,0,1,0,0V741.189a0,0,0,0,1,0,0h-36.207a14.11914,14.11914,0,0,1-14.11914-14.11914v-5.32505A0,0,0,0,1,483.39733,721.74476Z"
              transform="translate(757.57348 1305.02654) rotate(179.99738)"
              fill="#2f2e41"
            />
            <polygon
              points="163.247 568.437 179.26 568.436 186.878 506.672 163.245 506.673 163.247 568.437"
              fill="#a0616a"
            />
            <path
              d="M419.397,721.74476H469.7231a0,0,0,0,1,0,0V741.189a0,0,0,0,1,0,0h-36.207A14.11914,14.11914,0,0,1,419.397,727.06981v-5.32505a0,0,0,0,1,0,0Z"
              transform="translate(629.57273 1305.02946) rotate(179.99738)"
              fill="#2f2e41"
            />
            <polygon
              points="157.552 342.991 158.858 434.42 160.165 554.584 188.899 551.972 203.267 386.094 221.553 551.972 251.218 551.972 254.206 384.788 243.757 348.216 157.552 342.991"
              fill="#2f2e41"
            />
            <path
              d="M473.37417,513.1531c-31.26533.00239-60.04471-14.14839-60.43319-14.34263l-.32273-.16136-2.62373-62.96637c-.76082-2.22509-15.74263-46.13091-18.28-60.08625-2.57083-14.13882,34.68842-26.54742,39.213-27.99853l1.02678-11.37405,41.75366-4.49918,5.292,14.5536,14.97942,5.6168a7.40924,7.40924,0,0,1,4.59212,8.7043l-8.32539,33.85619,20.33325,112.01266-4.37755.18946C495.709,511.39658,484.38425,513.1525,473.37417,513.1531Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#3f3d56"
            />
            <circle
              cx="454.46738"
              cy="294.45965"
              r="30.06284"
              transform="matrix(0.87745, -0.47966, 0.47966, 0.87745, -345.12824, 96.19037)"
              fill="#a0616a"
            />
            <path
              d="M430.1166,323.56132c5.72926,6.10289,16.36927,2.82672,17.1158-5.51069a10.07153,10.07153,0,0,0-.01268-1.94523c-.38544-3.69311-2.519-7.046-2.008-10.94542a5.73974,5.73974,0,0,1,1.05046-2.687c4.56548-6.11359,15.28263,2.73444,19.59138-2.8,2.642-3.39359-.46364-8.73664,1.56381-12.52956,2.67591-5.006,10.60183-2.53654,15.57222-5.27809,5.53017-3.05032,5.1994-11.53517,1.55907-16.6961-4.43955-6.294-12.22348-9.65241-19.91044-10.13643s-15.32094,1.59394-22.4974,4.39069c-8.15392,3.17767-16.23969,7.56925-21.25749,14.739-6.10218,8.71919-6.68942,20.44132-3.6376,30.63677C419.10222,311.0013,425.43805,318.57766,430.1166,323.56132Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#2f2e41"
            />
            <path
              d="M641.58071,741.9626h-381a1,1,0,0,1,0-2h381a1,1,0,0,1,0,2Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#cacaca"
            />
            <path
              d="M596.58984,294.33545a3.488,3.488,0,0,1-2.38134-.93555l-16.15723-15.00732a3.49994,3.49994,0,0,1,4.76367-5.12891l13.68555,12.71192,27.07666-27.07618a3.5,3.5,0,1,1,4.94922,4.9502l-29.46094,29.46094A3.49275,3.49275,0,0,1,596.58984,294.33545Z"
              transform="translate(-259.58071 -157.88396)"
              fill="#fff"
            />
          </svg>
        </div>
      </div>

      <div className="box__ditolak grid grid-cols-2 transition shadow-xl duration-300 px-7 py-6 gap-20 hover:shadow-2xl border-2 border-red-600 rounded-xl bg-white hover:-translate-y-0.5 hover:transform cursor-no-drop">
        <div className="box__text space-y-1">
          <h1 className="box__title text-black font-bold text-2xl">Dokumen<br />Ditolak</h1>
          <p className="box__subtitle text-black text-base font-normal">
            Jumlah Dokumen
          </p>
          <p className="box__value text-black text-7xl font-normal pt-10">
            2
          </p>
        </div>
        <div className="box__illustrations flex items-center flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            width="192.55"
            height="165.23"
            viewBox="0 0 601.6 630"
          >
            <path
              d="M687.3279,276.08691H512.81813a15.01828,15.01828,0,0,0-15,15v387.85l-2,.61005-42.81006,13.11a8.00676,8.00676,0,0,1-9.98974-5.31L315.678,271.39691a8.00313,8.00313,0,0,1,5.31006-9.99l65.97022-20.2,191.25-58.54,65.96972-20.2a7.98927,7.98927,0,0,1,9.99024,5.3l32.5498,106.32Z"
              transform="translate(-276.18187 -133.91309)"
              fill="#f2f2f2"
            />
            <path
              d="M725.408,274.08691l-39.23-128.14a16.99368,16.99368,0,0,0-21.23-11.28l-92.75,28.39L380.95827,221.60693l-92.75,28.4a17.0152,17.0152,0,0,0-11.28028,21.23l134.08008,437.93a17.02661,17.02661,0,0,0,16.26026,12.03,16.78926,16.78926,0,0,0,4.96972-.75l63.58008-19.46,2-.62v-2.09l-2,.61-64.16992,19.65a15.01489,15.01489,0,0,1-18.73-9.95l-134.06983-437.94a14.97935,14.97935,0,0,1,9.94971-18.73l92.75-28.4,191.24024-58.54,92.75-28.4a15.15551,15.15551,0,0,1,4.40966-.66,15.01461,15.01461,0,0,1,14.32032,10.61l39.0498,127.56.62012,2h2.08008Z"
              transform="translate(-276.18187 -133.91309)"
              fill="#3f3d56"
            />
            <path
              d="M398.86279,261.73389a9.0157,9.0157,0,0,1-8.61133-6.3667l-12.88037-42.07178a8.99884,8.99884,0,0,1,5.9712-11.24023l175.939-53.86377a9.00867,9.00867,0,0,1,11.24072,5.9707l12.88037,42.07227a9.01029,9.01029,0,0,1-5.9707,11.24072L401.49219,261.33887A8.976,8.976,0,0,1,398.86279,261.73389Z"
              transform="translate(-276.18187 -133.91309)"
              fill="#e42313"
            />
            <circle cx="190.15351" cy="24.95465" r="20" fill="#e42313" />
            <circle cx="190.15351" cy="24.95465" r="12.66462" fill="#fff" />
            <path
              d="M878.81836,716.08691h-338a8.50981,8.50981,0,0,1-8.5-8.5v-405a8.50951,8.50951,0,0,1,8.5-8.5h338a8.50982,8.50982,0,0,1,8.5,8.5v405A8.51013,8.51013,0,0,1,878.81836,716.08691Z"
              transform="translate(-276.18187 -133.91309)"
              fill="#e6e6e6"
            />
            <path
              d="M723.31813,274.08691h-210.5a17.02411,17.02411,0,0,0-17,17v407.8l2-.61v-407.19a15.01828,15.01828,0,0,1,15-15H723.93825Zm183.5,0h-394a17.02411,17.02411,0,0,0-17,17v458a17.0241,17.0241,0,0,0,17,17h394a17.0241,17.0241,0,0,0,17-17v-458A17.02411,17.02411,0,0,0,906.81813,274.08691Zm15,475a15.01828,15.01828,0,0,1-15,15h-394a15.01828,15.01828,0,0,1-15-15v-458a15.01828,15.01828,0,0,1,15-15h394a15.01828,15.01828,0,0,1,15,15Z"
              transform="translate(-276.18187 -133.91309)"
              fill="#3f3d56"
            />
            <path
              d="M801.81836,318.08691h-184a9.01015,9.01015,0,0,1-9-9v-44a9.01016,9.01016,0,0,1,9-9h184a9.01016,9.01016,0,0,1,9,9v44A9.01015,9.01015,0,0,1,801.81836,318.08691Z"
              transform="translate(-276.18187 -133.91309)"
              fill="#e42313"
            />
            <circle cx="433.63626" cy="105.17383" r="20" fill="#e42313" />
            <circle cx="433.63626" cy="105.17383" r="12.18187" fill="#fff" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ADashboardMainBox;
