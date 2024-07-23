
const User = () => {
    return (
      <div className="bg-stone-400 bg-cover bg-center h-screen" style={{ backgroundImage: 'url(./src/assets/photos/heroSection.jpg)', backgroundSize :"auto" }}>
        <div className="ml-5 flex items-center h-full bg-opacity-50">
          <div className="ml-2  ">
            <h1 className="text-4xl md:text-6xl text-white font-bold mb-4"></h1>
            <p className="text-lg md:text-2xl text-gray-300"></p>
            <a href="#" className="bg-green-300 hover:bg-violet-300 text-gray py-2 px-4 rounded-10px text-lg">get infos</a>
            </div>
          </div>
        </div>
      
    );
  };
  
  export default User;