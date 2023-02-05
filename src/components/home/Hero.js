export const Hero = () => {
  return (
    <section className={`home__hero h-72 ${ process.env.isProd ? "prod" : "dev" }`}>
      <div className="container flex flex-col justify-center h-full gap-3 lg:gap-5">
        <h2 className="text-white inter-b text-2xl lg:text-[40px] max-w-[478px] lg:leading-[48px] tracking-[-0.02em]">Your tracking experience start with us.</h2>
        <p className="text-xs lg:text-lg text-white max-w-[505px]">We know you can't wait to get your package. We can't wait to deliver it too!</p>
      </div>
    </section>
  )
}
