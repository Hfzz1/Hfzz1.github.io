import Image, { listProyek } from "../data";
import { listTools } from "../data";
function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 pt-10 items-center xl:gap-0 gap-6 grid-cols-1 pb-5">
        <div id="beranda">
          <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Hafidz</h1>
          <p className="text-base/loose mb-6 opacity-50 text-justify">
            Saya mempunyai ketertarikan dalam bidang pengembangan web terutama
            Frontend. Saya senang menciptakan antarmuka yang menarik dan
            responsif untuk memberikan pengalaman pengguna yang optimal.
            Pengetahuan yang saya kuasai adalah HTML, CSS, JavaScript dan Saya
            juga memiliki pengetahuan dasar tentang React.js dan Tailwind CSS
            sebagai Frontend Web. Dan untuk pengembangan backend, saya memiliki
            pengetahuan dasar tentang Laravel.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="#"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-zinc-800"
            >
              Download CV
              <i class="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#"
              className="bg-zinc-800 p-4 rounded-2xl hover:bg-zinc-500"
            >
              Lihat Proyek
              <i class="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={Image.HeroImage}
          alt="Hero Image"
          className="w-[500px] md:ml-auto rounded-full h-2/3 object-cover object-top"
        />
      </div>

      {/* Tentang */}
      <div id="tentang">
        <div className="text-center">
          <h1 className="text-4xl/tight font-bold mb-4 mt-6">Tentang</h1>
        </div>
        <div className="flex gap-6 items-center justify-center mt-10 mb-10 md:grid-cols-2 flex-col md:flex-row">
          <div className="radius-lg overflow-hidden w-1/2 md:w-1/4">
            <img src={Image.HeroImage} alt="Image" className="w-full h-auto" />
          </div>
          <div className="w-5/6 md:w-1/2 flex text-center md:text-justify text-zinc-500 flex-col gap-4">
            <p>
              Lulusan Teknik Informatika Universitas Negeri Malang dengan IPK
              3.63. Memiliki kemampuan pengembangan antarmuka web dengan
              menggunakan React.js, Tailwind CSS dan JavaScript sebagai
              bahasanya. Memiliki kemampuan dasar backend dengan menggunakan
              Laravel. Mencari kesempatan untuk berkontribusi dalam tim yang
              dinamis untuk menciptakan solusi digital yang inovatif.
            </p>
          </div>
        </div>
      </div>
      {/* Tentang */}

      {/* Tools */}
      <div className="mt-20" id="tools">
        <h1 className="font-semibold text-2xl mb-4">Tools yang saya gunakan</h1>
        <p className="w-3/4 mb-6 text-zinc-500">
          Berikut tools yang saya biasa pakai untuk pembuatan website
        </p>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map((tool) => (
            <div
              key={tool.id}
              className="mb-4 border p-4 rounded-xl flex items-center gap-4"
            >
              <img src={tool.gambar} alt={tool.nama} className="w-14 h-14" />
              <div className="min-w-0">
                <h2 className="text-xl font-semibold break-words">
                  {tool.nama}
                </h2>
                <p className="text-gray-500 break-words">{tool.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Tools */}

      {/* Proyek */}
      <div>
        <h1 className="font-semibold text-3xl mb-4 mt-10" id="proyek">
          Proyek
        </h1>
        <p className="text-zinc-500 mb-4">
          Beberapa proyek yang telah saya buat
        </p>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-6">
          {listProyek.map((proyek) => (
            <div key={proyek.id}>
              <img
                src={proyek.gambar}
                alt={proyek.nama}
                className="w-full h-[400px] object-cover object-top border p-4 rounded-xl border-zinc-200"
              />
              <h2 className="font-semibold mt-4 p-2">{proyek.nama}</h2>
              <div className="p-2">
                {proyek.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="font-semibold inline-block bg-zinc-400 text-zinc-800 text-sm px-2 py-1 rounded-full mr-2 mb-2"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <div>
                <a
                  href={proyek.website}
                  className="p-1 md:ml-auto border rounded-lg border-zinc-400 pr-4 pl-4 hover:bg-zinc-400 hover:text-white transition-all"
                >
                  Lihat
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Proyek */}

      {/* Kontak */}
      <div
        className="mt-4 p-4 justify-center items-center flex flex-col"
        id="kontak"
      >
        <h1 className="font-semibold text-3xl mb-4 mt-10">Kontak</h1>
        <div className="border border-zinc-400 rounded-lg p-4 w-full md:w-1/2">
          <form
            action="https://formsubmit.co/hafidzhusseinv@gmail.com"
            method="POST"
            autoComplete="off"
          >
            <div className="m-4">
              <div className="flex flex-col mb-4">
                <label htmlFor="Nama" className="text-2xl font-semibold">
                  Nama Lengkap
                </label>
                <input
                  className="border-2 border-zinc-500 focus:outline-none p-2 rounded-lg"
                  type="text"
                  name="Nama"
                  placeholder="Masukan Nama"
                  required
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="Email" className="text-2xl font-semibold">
                  Email
                </label>
                <input
                  className="border-2 border-zinc-500 focus:outline-none p-2 rounded-lg"
                  type="Email"
                  name="Email"
                  placeholder="Masukan Email"
                  required
                />
              </div>
              <div className="grid grid-cols-1 mb-4">
                <label className="text-2xl font-semibold">Pesan</label>
                <textarea
                  className="border rounded-lg p-2 border-zinc-500 focus:outline-none"
                  placeholder="Masukan Pesan"
                  name="pesan"
                  id="pesan"
                  cols="40"
                  rows="10"
                ></textarea>
              </div>
              <div className="justify-center flex">
                <button
                  type="submit"
                  className="rounded-lg bg-violet-700 p-4 hover:bg-zinc-800 text-white w-full"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Kontak */}
    </>
  );
}

export default App;
