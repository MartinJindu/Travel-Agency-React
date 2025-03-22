const Hero = ({ name }) => {
  return (
    <div className="relative h-[500px] bg-cover bg-center bg-[url(/travel_img.jpeg)]">
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{name}</h1>
      </div>
    </div>
  );
};
export default Hero;
