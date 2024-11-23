import "bootstrap/dist/css/bootstrap.min.css";
import berita1 from "../assets/berita1.jpg";
import berita2 from "../assets/berita2.jpg";
import berita3 from "../assets/berita3.jpg";
import berita4 from "../assets/berita4.jpg";
import berita5 from "../assets/berita5.jpg";
import "../styles/Home.css"; // Import file CSS untuk styling

const Home = () => {
  return (
    <div className="home-container">
      {/* Berita Utama */}
      <div className="row mb-4">
        <div className="col-md-8">
          <div
            className="news-card"
            onClick={() =>
              window.open(
                "https://www.kpopchart.net/k-update/91613986837/jadi-kota-pembuka-girl-group-babymonster-gelar-konser-world-tour-pertama-mereka-di-venue-ini",
                "_blank"
              )
            }
          >
            <div className="image-wrapper">
              <img
                src={berita1}
                alt="BABYMONSTER World Tour"
                className="news-image"
              />
            </div>
            <div className="news-content">
              <h2 className="news-title">
                Jadi Kota Pembuka, Girl Group BABYMONSTER Gelar Konser World
                Tour Pertama Mereka di Venue Ini
              </h2>
              <p className="news-description">
                Girl group BABYMONSTER akan memulai konser world tour pertama
                mereka. Konser ini dijadwalkan di beberapa kota besar. Simak
                selengkapnya tentang jadwal dan lokasi konser mereka di artikel
                ini!
              </p>
            </div>
          </div>
        </div>

        {/* Berita Sampingan */}
        <div className="col-md-4">
          <div
            className="card"
            onClick={() =>
              window.open("https://yoursay.suara.com/entertainment/2024/11/07/200229/exo-monster-pemberontakan-dari-psikis-babak-belur-yang-diselamatkan-cinta", "_blank")
            }
          >
            <img src={berita5} className="card-img-top" alt="BabyMonster" />
            <div className="card-body">
              <h5 className="card-title">
                EXO Monster : Pemberontakan dari Psikis Babak Belur yang
                Diselamatkan Cinta
              </h5>
              <p className="card-text">
                EXACT pada 9 Juni 2016. Lagu utama “Monster” berkisah tentang
                pemberontak yang berjuang melawan penindasan. Saat pertama kali
                mendengarkan lagunya, saya langsung terkesan karena Monster
                punya melodi dan dance yang intens. Vokal Baekhyun di pembuka
                lagu sudah membuat penasaran dengan keseluruhan ceritanya.
              </p>
              <p className="card-text">
                <small className="text-muted">
                  K-WAVE 10/06/2016, 11:47 WIB
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Baris Berita Kecil di Bawah */}
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div
              className="card"
              onClick={() =>
                window.open("https://www.tempo.co/hiburan/blackpink-dan-deretan-merek-yang-bekerja-sama-dengan-para-anggotanya-1160285", "_blank")
              }
            >
              <img
                src={berita3}
                className="card-img-top"
                alt="Ayu Ting Ting"
              />
              <div className="card-body">
                <h5 className="card-title">
                Blackpink dan Deretan Merek yang Bekerja Sama dengan Para Anggotanya...
                </h5>
                <p className="card-text">
                Blackpink, grup K-Pop yang mendunia, tidak hanya dikenal karena musiknya, tetapi para anggotaya juga sebagai ikon mode duta merek ternama
                  berkomentar negatif tentang...
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    SELEB 17/08/2024, 22:43 WIB
                  </small>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="card"
              onClick={() =>
                window.open("https://www.idntimes.com/korea/kpop/elizabeth-chiquita-tuedestin-priwiratu/quiz-kalau-main-escape-room-siapa-member-nct-dream-yang-bakal-menjagamu-quiz", "_blank")
              }
            >
              <img
                src={berita4}
                className="card-img-top"
                alt="Jadwal Konser"
              />
              <div className="card-body">
                <h5 className="card-title">
                Kalau Main Escape Room, Siapa Member NCT Dream yang Bakal Menjagamu?
                </h5>
                <p className="card-text">
Seandainya kamu main bareng NCT Dream, kira-kira siapa yang bakal menjagamu dari setiap tantangan berbahaya di escape room?

                </p>
                <p className="card-text">
                  <small className="text-muted">
                    EVENT 22/10/2024, 14:10 WIB
                  </small>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="card"
              onClick={() =>
                window.open("https://www.kpopchart.net/k-update/91614009917/selamat-seventeen-dan-aespa-berhasil-meraih-daesang-mama-awards-2024", "_blank")
              }
            >
              <img
                src={berita2}
                className="card-img-top"
                alt="Jadwal Konser"
              />
              <div className="card-body">
                <h5 className="card-title">
                Selamat! SEVENTEEN dan aespa Berhasil meraih Daesang MAMA Awards 2024! Hadiri acara MAMA Awards banyak idol...
                </h5>
                <p className="card-text">
                Hari terakhir MAMA Awards 2024 di Kyocera Dome Osaka, Jepang sukses di gelar dengan meriah.
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    EVENT 22/10/2024, 14:10 WIB
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
