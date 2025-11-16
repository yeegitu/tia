import BackgroundCarousel from "@/components/BackgroundCarousel";
import Gallery from "@/components/Gallery";
import FloatingIcons from "@/components/FloatingIcons";
import MusicPlayer from "@/components/MusicPlayer";
import MotivationalWords from "@/components/MotivationalWords";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-100 via-slate-200 to-emerald-100 flex flex-col items-center">
      {/* Floating Love & Stars */}
      <FloatingIcons />

      {/* Background Carousel */}
      <BackgroundCarousel />

      {/* Judul */}
      <header className="z-10 text-center mt-16 px-4">
        <div className="inline-block">
          <h1 className="text-[10vw] md:text-7xl font-bold bg-gradient-to-r from-rose-500 via-pink-400 to-orange-400 bg-clip-text text-transparent drop-shadow-2xl mb-3 tracking-tight">
            MY GALLERY
          </h1>

          <div className="h-1 w-full bg-gradient-to-r from-rose-400 via-pink-300 to-orange-300 rounded-full mb-4"></div>
        </div>

        {/* Teks di bawah judul, otomatis di baris kedua di mobile */}
        <p className="text-[4vw] md:text-xl text-rose-800 font-medium mt-4 text-center">
          ✨ <span className="italic">Sebuah cerita indah dalam foto-foto</span> 💫
        </p>
      </header>



      {/* Galeri Foto */}
      <Gallery />

      {/* Pemutar Musik */}
      <MusicPlayer />

      {/* Kata-kata Semangat */}
      <MotivationalWords />
    </main>
  );
}
