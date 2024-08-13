import React from "react";

const ATambahPenggunaModal = ({ onClose }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="pengguna__addModal border-transparent bg-white rounded-2xl p-8">
      <div className="grid grid-cols-2 gap-1">
        <div className="modal__text text-start">
          <p className="text__title text-2xl text-black font-bold">
            Tambah Pengguna Baru
          </p>

          <p className="text__subtitle text-black pt-2">
            Silahkan isi data pengguna
          </p>

          <div className="add__form mt-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form__name">
                <label htmlFor="name" className="sr-only">
                  {" "}
                  Nama Pengguna{" "}
                </label>
                <div className="relative w-[586px]">
                  <input
                    id="name"
                    type="text"
                    className="peer w-full rounded-xl text-black border border-gray-200 p-5 shadow-sm bg-transparent placeholder-transparent"
                    placeholder="Nama Pengguna"
                    required
                  />

                  <span class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white text-xs p-2 text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs">
                    Nama Pengguna
                  </span>
                </div>
              </div>
              <div className="form__email">
                <label htmlFor="email" className="sr-only">
                  {" "}
                  Email Pengguna{" "}
                </label>
                <div className="relative w-[586px]">
                  <input
                    id="email"
                    type="email"
                    className="peer w-full rounded-xl text-black border border-gray-200 p-5 shadow-sm bg-transparent placeholder-transparent"
                    placeholder="Masukkan Email Pengguna"
                    required
                  />

                  <span class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white text-xs p-2 text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs">
                    Email Pengguna
                  </span>
                </div>
              </div>
              <div className="form__username">
                <label htmlFor="username" className="sr-only">
                  {" "}
                  Username Pengguna{" "}
                </label>
                <div className="relative w-[586px]">
                  <input
                    id="username"
                    type="text"
                    className="peer w-full rounded-xl text-black border border-gray-200 p-5 shadow-sm bg-transparent placeholder-transparent"
                    placeholder="Masukkan Username Pengguna"
                    required
                  />

                  <span class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white text-xs p-2 text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs">
                    Username Pengguna
                  </span>
                </div>
              </div>
              <div className="form__password">
                <label htmlFor="password" className="sr-only">
                  {" "}
                  Password Pengguna{" "}
                </label>
                <div className="relative w-[586px]">
                  <input
                    id="password"
                    type="password"
                    className="peer w-full rounded-xl text-black border border-gray-200 p-5 shadow-sm bg-transparent placeholder-transparent"
                    placeholder="Masukkan Password Pengguna"
                    required
                  />

                  <span class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white text-xs p-2 text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs">
                    Password Pengguna
                  </span>
                </div>
              </div>
              <div className="form__confirmPassword">
                <label htmlFor="conf-password" className="sr-only">
                  {" "}
                  Konfirmasi Password Pengguna{" "}
                </label>
                <div className="relative w-[586px]">
                  <input
                    id="conf-password"
                    type="password"
                    className="peer w-full rounded-xl text-black border border-gray-200 p-5 shadow-sm bg-transparent placeholder-transparent"
                    placeholder="Konfirmasi Password Pengguna"
                    required
                  />

                  <span class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white text-xs p-2 text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs">
                    Konfirmasi Password Pengguna
                  </span>
                </div>
              </div>
              <div className="form__role">
                <label htmlFor="role" className="sr-only">
                  {" "}
                  Role Pengguna{" "}
                </label>
                <div className="relative w-[586px]">
                  <input
                    id="role"
                    type="text"
                    className="peer w-full rounded-xl text-black border border-gray-200 p-5 shadow-sm bg-transparent placeholder-transparent"
                    placeholder="Masukkan Role Pengguna"
                    required
                  />

                  <span class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white text-xs p-2 text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs">
                    Role Pengguna
                  </span>
                </div>
              </div>
              <div className="form__unit">
                <label htmlFor="unit" className="sr-only">
                  {" "}
                  Unit Pengguna{" "}
                </label>
                <div className="relative w-[586px]">
                  <input
                    id="unit"
                    type="text"
                    className="peer w-full rounded-xl text-black border border-gray-200 p-5 shadow-sm bg-transparent placeholder-transparent"
                    placeholder="Masukkan Unit/Divisi"
                    required
                  />

<span class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white text-xs p-2 text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs">
                    Unit/Divisi
                  </span>
                </div>
              </div>
              <div className="pt-10">
                <button
                  type="submit"
                  className="transition duration-500 p-4 px-8 w-[586px] text-base shadow-red-600 drop-shadow-md rounded-xl border-2 border-red-600 bg-red-600 text-white font-bold hover:bg-white hover:text-red-600"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="modal__illustrations flex-col grid -translate-y-14">
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

          <div className="justify-self-center mt-28">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              width="511.68"
              height="365.48"
              viewBox="0 0 897.31838 556.97524"
            >
              <path
                d="M368.67963,673.55906l.99774-22.43416a72.45559,72.45559,0,0,1,33.79563-8.555c-16.23146,13.27042-14.203,38.85123-25.20757,56.69681a43.58213,43.58213,0,0,1-31.95921,20.13989l-13.58307,8.31648A73.02986,73.02986,0,0,1,348.116,668.54428a70.54231,70.54231,0,0,1,12.96441-12.04606C364.33357,665.07618,368.67963,673.55906,368.67963,673.55906Z"
                transform="translate(-151.34081 -171.51238)"
                fill="#f2f2f2"
              />
              <path
                d="M948.26231,208.06486H315.939a1.01559,1.01559,0,0,1,0-2.03069H948.26231a1.01559,1.01559,0,0,1,0,2.03069Z"
                transform="translate(-151.34081 -171.51238)"
                fill="#cacaca"
              />
              <ellipse
                cx="186.95324"
                cy="11.16881"
                rx="10.92534"
                ry="11.16881"
                fill="#3f3d56"
              />
              <ellipse
                cx="224.69531"
                cy="11.16881"
                rx="10.92534"
                ry="11.16881"
                fill="#3f3d56"
              />
              <ellipse
                cx="262.43738"
                cy="11.16881"
                rx="10.92534"
                ry="11.16881"
                fill="#3f3d56"
              />
              <path
                d="M925.64529,174.28068h-26.81a2.0304,2.0304,0,0,0,0,4.06h26.81a2.0304,2.0304,0,0,0,0-4.06Z"
                transform="translate(-151.34081 -171.51238)"
                fill="#3f3d56"
              />
              <path
                d="M925.64529,181.90068h-26.81a2.0304,2.0304,0,0,0,0,4.06h26.81a2.0304,2.0304,0,0,0,0-4.06Z"
                transform="translate(-151.34081 -171.51238)"
                fill="#3f3d56"
              />
              <path
                d="M925.64529,189.51066h-26.81a2.0304,2.0304,0,0,0,0,4.06h26.81a2.0304,2.0304,0,0,0,0-4.06Z"
                transform="translate(-151.34081 -171.51238)"
                fill="#3f3d56"
              />
              <path
                d="M808.05408,287.65387h-434.01a8.07034,8.07034,0,0,0-8.06995,8.06v204.87a8.07888,8.07888,0,0,0,8.06995,8.07h434.01a8.07677,8.07677,0,0,0,8.06-8.07v-204.87A8.06821,8.06821,0,0,0,808.05408,287.65387Z"
                transform="translate(-151.34081 -171.51238)"
                fill="#3f3d56"
              />
              <path
                d="M693.41412,386.35389a8.06825,8.06825,0,0,0-8.06005,8.06v57.87a8.07687,8.07687,0,0,0,8.06005,8.07H816.11407v-74Z"
                transform="translate(-151.34081 -171.51238)"
                fill="#e42313"
              />
              <path
                d="M1022.42853,460.3497H693.4184a8.07557,8.07557,0,0,1-8.06636-8.06636V394.41576a8.07532,8.07532,0,0,1,8.06636-8.06606h329.01013a8.07532,8.07532,0,0,1,8.06636,8.06606v57.86758A8.07557,8.07557,0,0,1,1022.42853,460.3497Z"
                transform="translate(-151.34081 -171.51238)"
                fill="#e42313"
                opacity="0.5"
              />
              <circle cx="586.57108" cy="255.53675" r="13.08937" fill="#fff" />
              <path
                d="M1012.23456,423.2459H775.72046a3.89775,3.89775,0,1,1,0-7.7955h236.5141a3.89775,3.89775,0,1,1,0,7.7955Z"
                transform="translate(-151.34081 -171.51238)"
                fill="#fff"
              />
              <path
                d="M922.40413,438.64785H775.72046a3.89794,3.89794,0,1,1,0-7.79588H922.40413a3.89794,3.89794,0,0,1,0,7.79588Z"
                transform="translate(-151.34081 -171.51238)"
                fill="#fff"
              />
              <polygon
                points="151.406 545.537 162.734 545.536 168.123 501.843 151.404 501.843 151.406 545.537"
                fill="#ffb6b6"
              />
              <path
                d="M299.85756,713.35055l3.18849-.00013,12.44833-5.06245,6.67193,5.06168h.0009a14.21764,14.21764,0,0,1,14.21688,14.21665v.462l-36.52585.00136Z"
                transform="translate(-151.34081 -171.51238)"
                fill="#2f2e41"
              />
              <polygon
                points="49.051 530.809 59.19 535.862 83.504 499.161 68.541 491.703 49.051 530.809"
                fill="#ffb6b6"
              />
              <path
                d="M199.4558,697.72216l2.8537,1.42225,13.39941,1.02234,3.71328,7.50645.00081.00041a14.21765,14.21765,0,0,1,6.3819,19.06579l-.2061.41347L192.90811,710.86Z"
                transform="translate(-151.34081 -171.51238)"
                fill="#2f2e41"
              />
              <path
                d="M307.766,518.60885l-72.026,1.87894,1.25263,35.07352s-1.25263,9.3947,1.25262,11.89995,3.75788,2.50525,2.50525,6.88944-4.491,46.27371-4.491,46.27371-29.56151,52.26983-28.30888,53.52246,2.50525,0,1.25263,3.13156-2.50526,1.87894-1.25263,3.13156a46.12822,46.12822,0,0,1,3.13157,3.75788h20.41554s1.14166-6.26313,1.14166-6.88944,1.25263-4.38419,1.25263-5.0105,35.66888-38.4175,35.66888-38.4175l7.51575-62.63129,18.16308,61.37867s0,53.86291,1.25263,55.11554,1.25262.62631.62631,3.13156-3.13157,1.87894-1.25263,3.75788,2.50526-1.25262,1.87894,1.87894l-.62631,3.13157,24.06246.26877s2.50525-5.27928,1.25262-7.15822-1.17747-1.366.35074-4.4409,2.15451-3.70117,1.5282-4.32748-.62631-3.95761-.62631-3.95761-9.03095-123.18392-9.03095-125.06286a6.24709,6.24709,0,0,1,.52029-2.81763V549.567l-2.39923-9.03716Z"
                transform="translate(-151.34081 -171.51238)"
                fill="#2f2e41"
              />
              <path
                d="M1021.02122,409.86014a27.638,27.638,0,1,1,27.638-27.638A27.638,27.638,0,0,1,1021.02122,409.86014Z"
                transform="translate(-151.34081 -171.51238)"
                fill="#e42313"
              />
              <path
                d="M1031.92643,379.49592h-8.17886v-8.179a2.72635,2.72635,0,0,0-5.4527,0v8.179h-8.179a2.72631,2.72631,0,1,0,0,5.45261h8.179v8.179a2.72635,2.72635,0,0,0,5.4527,0v-8.179h8.17886a2.7263,2.7263,0,1,0,0-5.45261Z"
                transform="translate(-151.34081 -171.51238)"
                fill="#fff"
              />
              <path
                d="M599.22412,460.72388h-105.01a8.07889,8.07889,0,0,0-8.07,8.07v39.86h121.14v-39.86A8.07677,8.07677,0,0,0,599.22412,460.72388Z"
                transform="translate(-151.34081 -171.51238)"
                fill="#e42313"
              />
              <path
                d="M599.2206,572.72388H494.21046a8.07558,8.07558,0,0,1-8.06636-8.06636V468.78994a8.07532,8.07532,0,0,1,8.06636-8.06606H599.2206a8.07532,8.07532,0,0,1,8.06636,8.06606v95.86758A8.07557,8.07557,0,0,1,599.2206,572.72388Z"
                transform="translate(-151.34081 -171.51238)"
                fill="#e42313"
                opacity="0.5"
              />
              <circle cx="373.80837" cy="321.56284" r="13.08937" fill="#fff" />
              <path
                d="M577.47185,526.05963h-61.5141a3.89775,3.89775,0,1,1,0-7.7955h61.5141a3.89775,3.89775,0,1,1,0,7.7955Z"
                transform="translate(-151.34081 -171.51238)"
                fill="#fff"
              />
              <path
                d="M545.64142,541.46158H515.95775a3.89794,3.89794,0,0,1,0-7.79588h29.68367a3.89794,3.89794,0,0,1,0,7.79588Z"
                transform="translate(-151.34081 -171.51238)"
                fill="#fff"
              />
              <path
                d="M492.02122,600.86014a27.638,27.638,0,1,1,27.638-27.638A27.638,27.638,0,0,1,492.02122,600.86014Z"
                transform="translate(-151.34081 -171.51238)"
                fill="#e42313"
              />
              <path
                d="M502.92643,570.49592h-8.17886v-8.179a2.72635,2.72635,0,1,0-5.4527,0v8.179h-8.179a2.72631,2.72631,0,1,0,0,5.45261h8.179v8.179a2.72635,2.72635,0,1,0,5.4527,0v-8.179h8.17886a2.7263,2.7263,0,1,0,0-5.45261Z"
                transform="translate(-151.34081 -171.51238)"
                fill="#fff"
              />
              <path
                d="M479.22775,399.77883H374.21761a8.07557,8.07557,0,0,1-8.06636-8.06636V295.84489a8.07532,8.07532,0,0,1,8.06636-8.06606H479.22775a8.07532,8.07532,0,0,1,8.06636,8.06606v95.86758A8.07558,8.07558,0,0,1,479.22775,399.77883Z"
                transform="translate(-151.34081 -171.51238)"
                fill="#e42313"
              />
              <circle
                cx="253.81624"
                cy="156.61796"
                r="13.08937"
                fill="#e42313"
              />
              <path
                d="M457.47973,357.11475h-61.5141a3.89775,3.89775,0,1,1,0-7.7955h61.5141a3.89775,3.89775,0,1,1,0,7.7955Z"
                transform="translate(-151.34081 -171.51238)"
                fill="#e42313"
              />
              <path
                d="M425.64929,372.5167H395.96563a3.89794,3.89794,0,1,1,0-7.79588h29.68366a3.89794,3.89794,0,1,1,0,7.79588Z"
                transform="translate(-151.34081 -171.51238)"
                fill="#e42313"
              />
              <path
                d="M479.22775,399.77883H374.21761a8.07557,8.07557,0,0,1-8.06636-8.06636V295.84489a8.07532,8.07532,0,0,1,8.06636-8.06606H479.22775a8.07532,8.07532,0,0,1,8.06636,8.06606v95.86758A8.07558,8.07558,0,0,1,479.22775,399.77883Z"
                transform="translate(-151.34081 -171.51238)"
                fill="#e42313"
                opacity="0.5"
              />
              <circle cx="253.81624" cy="156.61796" r="13.08937" fill="#fff" />
              <path
                d="M457.47973,357.11475h-61.5141a3.89775,3.89775,0,1,1,0-7.7955h61.5141a3.89775,3.89775,0,1,1,0,7.7955Z"
                transform="translate(-151.34081 -171.51238)"
                fill="#fff"
              />
              <path
                d="M425.64929,372.5167H395.96563a3.89794,3.89794,0,1,1,0-7.79588h29.68366a3.89794,3.89794,0,1,1,0,7.79588Z"
                transform="translate(-151.34081 -171.51238)"
                fill="#fff"
              />
              <circle cx="225.04328" cy="115.95149" r="21" fill="#ff6584" />
              <path
                d="M434.01086,727.29762a1.18647,1.18647,0,0,1-1.19007,1.19h-280.29a1.19,1.19,0,0,1,0-2.38h280.29A1.1865,1.1865,0,0,1,434.01086,727.29762Z"
                transform="translate(-151.34081 -171.51238)"
                fill="#ccc"
              />
              <path
                d="M371.89562,343.08843a9.77074,9.77074,0,0,1-5.75867,12.43515,9.59965,9.59965,0,0,1-1.6355.4508l-5.54616,33.9594-13.01011-12.01254,7.2613-30.40677a9.80568,9.80568,0,0,1,8.58971-10.75944,9.54738,9.54738,0,0,1,10.09939,6.33335Z"
                transform="translate(-151.34081 -171.51238)"
                fill="#ffb6b6"
              />
              <path
                d="M275.88113,420.03658s10.09745-13.34141,46.7389-12.976l20.79776-7.55641,4.75311-43.57011,16.63586,3.96092-2.37655,53.8685-35.64828,20.59678-46.73885,9.50621Z"
                transform="translate(-151.34081 -171.51238)"
                fill="#3f3d56"
              />
              <circle
                id="a9729a65-ee7a-4a83-8b52-5849077a5ed0"
                data-name="ab6171fa-7d69-4734-b81c-8dff60f9761b"
                cx="119.17533"
                cy="198.98271"
                r="21.74749"
                fill="#ffb6b6"
              />
              <path
                d="M233.70808,535.39a.41692.41692,0,0,1-.11411-.01547c-.4015-.11217-.71869-.20037.7303-12.72948l1.56387-9.90346L234.3614,503.997l-2.568-2.568,4.12725-4.12686,3.46346-9.83821-5.9928-8.88023-6.87553-36.3163a28.972,28.972,0,0,1,15.9106-31.47847l7.95773-2.325,2.89542-5.30994a9.51973,9.51973,0,0,1,8.28668-4.962l14.57262-.10908a9.51971,9.51971,0,0,1,7.61675,3.7151l5.084,6.609,21.08261,7.16176-3.49559,75.3212,0,0a5.23278,5.23278,0,0,1,.35914,7.69535c-.21921.22108-.3934.40127-.50072.52007-.35548.50479.31138,4.27462,1.1349,7.47546l1.056,4.90134h0a3.01324,3.01324,0,0,0-.54773,4.39846l1.34649,1.5905v0a7.59918,7.59918,0,0,1-6.50745,8.53505C283.49975,528.62839,233.80879,535.39,233.70808,535.39Z"
                transform="translate(-151.34081 -171.51238)"
                fill="#3f3d56"
              />
              <path
                d="M264.9527,391.1777q-.13937-.30683-.27795-.61578c.03561.00114.07086.00626.10647.00719Z"
                transform="translate(-151.34081 -171.51238)"
                fill="#2f2e41"
              />
              <path
                d="M248.16387,349.73657a6.053,6.053,0,0,1,3.79179-1.6394c1.40626.04532,2.83233,1.31545,2.541,2.692a22.34831,22.34831,0,0,1,26.89477-10.08482c3.49521,1.23313,6.9228,3.70014,7.72569,7.31847a6.59115,6.59115,0,0,0,.83032,2.70155,3.084,3.084,0,0,0,3.28228.83155l.0345-.01017a1.02753,1.02753,0,0,1,1.24158,1.45051l-.98895,1.84442a7.92529,7.92529,0,0,0,3.77572-.0803,1.02666,1.02666,0,0,1,1.0902,1.59765,17.895,17.895,0,0,1-14.26862,7.33428c-3.9514-.0241-7.94351-1.38594-11.78913-.47726a10.24049,10.24049,0,0,0-6.88767,14.37555c-1.18139-1.2922-3.46514-.98626-4.67362.28071a6.41,6.41,0,0,0-1.3995,4.90462,22.75668,22.75668,0,0,0,2.33628,7.63859,22.83575,22.83575,0,0,1-13.53662-40.67793Z"
                transform="translate(-151.34081 -171.51238)"
                fill="#2f2e41"
              />
              <path
                d="M242.18035,566.5806a9.77072,9.77072,0,0,1-2.30232-13.50905,9.59969,9.59969,0,0,1,1.09205-1.29827l-14.67524-31.12295,17.52685,2.52456,11.24882,29.16783a9.80568,9.80568,0,0,1-.97986,13.73275,9.54737,9.54737,0,0,1-11.91024.50515Z"
                transform="translate(-151.34081 -171.51238)"
                fill="#ffb6b6"
              />
              <path
                d="M237.73617,549.58654,214.38409,497.1033l-.23387-41.45184,7.36109-22.39047a23.92467,23.92467,0,0,1,30.82742-15.04008l.16208.05839.068.15844c.27206.635,6.44593,15.90631-11.86713,47.3222l-3.68552,21.49645,12.93216,49.27378Z"
                transform="translate(-151.34081 -171.51238)"
                fill="#3f3d56"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ATambahPenggunaModal;
