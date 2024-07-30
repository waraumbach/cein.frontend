


const HeroSection = () => {
  return (
    <div className="mt-3 bg-cover bg-center bg-no-repeat h-96 w-full" style={{ backgroundImage: 'url(./src/assets/photos/heroSection.jpg)', backgroundSize :"100%" }}>
      <div className="flex items-center  h-full bg-opacity-50">
        <div className="ml-2  ">
          <h1 className="text-xl md:text-xl text-gray font-bold mb-4">Treat Your Body like Your Face</h1>
          <p className="text-xl md:text-l text-gray">Creating the hightly Effective Body Care</p><br />
          <a href="/detailsProduct" className="text-stone px-4 py-2  border-transparent border border-stone-600 rounded hover:bg-gray-300 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0text-lg">get infos</a>
          </div>
        </div>
      </div>
    
  );
};

export default HeroSection;
