

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/zsw2kTq/download-5.jpg)'}}>
  <div className="hero-overlay bg-opacity-70 bg-white"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
     <p className="text-2xl text-black font bold"><span className="text-red-700 font-bold text-5xl">A wedding</span> is a marriage ceremony and the <span className="text-blue-700 font-bold text-3xl">party or special meal</span> that often takes place <span className="text-purple-600 font-bold text-4xl">after the ceremony</span>.</p>
    </div>
  </div>
</div>
    );
};

export default Banner;