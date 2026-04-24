import SearchEngine from "./SearchEngine";

function Hero() {
  return (
    <section className="hero" aria-label="Hero section">
      <div className="hero__content">
        <SearchEngine />
      </div>
    </section>
  )
}

export default Hero