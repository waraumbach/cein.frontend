


const HeroSection = () => {
  return (
    <div className="mt-3 bg-cover bg-center bg-no-repeat h-96 w-full" style={{ backgroundImage: 'url(./src/assets/photos/heroSection.jpg)', backgroundSize :"100%" }}>
      <div className="flex items-center  h-full bg-opacity-50">
        <div className="ml-2  ">
          <h1 className="text-xl md:text-xl text-gray font-bold mb-4">Treat Your Body like Your Face</h1>
          <p className="text-xl md:text-l text-gray">Creating the hightly Effective Body Care</p><br />
          <a href="/detailsProduct" className="text-stone px-4 py-2 border border-transparent rounded-md hover:bg-green-300
           text-gray bg-gray-100 rounded-10px text-lg">get infos</a>
          </div>
        </div>
      </div>
    
  );
};

export default HeroSection;
