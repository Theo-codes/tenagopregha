export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white/90 py-8 px-6 md:py-12 md:px-16 mt-auto border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <h2 className="font-playfair font-bold text-3xl">Tena.</h2>
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 order-last md:order-none">
          <p className="font-dm-mono text-[0.7rem] text-white/40 uppercase tracking-wider">
            © 2025 · Built with intention
          </p>
        </div>
      </div>
    </footer>
  );
}
