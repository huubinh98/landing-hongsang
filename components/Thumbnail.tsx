import { useState, useRef, useEffect } from "react";

export default function VideoSection() {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleThumbnailClick = () => {
    setIsVideoVisible(true);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (videoRef.current && !videoRef.current.contains(event.target as Node)) {
      setIsVideoVisible(false);
    }
  };
  

  useEffect(() => {
    if (isVideoVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVideoVisible]);

  return (
    <section
      className="relative bg-cover bg-center h-96"
      style={{ backgroundImage: "url('/img/thumbnail.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        {!isVideoVisible ? (
          <div className="flex justify-center items-center flex-col gap-6 px-6">
            <button className="p-4 rounded-full" onClick={handleThumbnailClick}>
              <img src="/img/play.png" alt="Play" className="w-12 h-12" />
            </button>
            <img srcSet="/img/la.png 2x" alt="Logo" />
            <p className="text-white font-semibold text-2xl text-center">
              Video chuỗi giá trị sầu riêng Hồng Sang
            </p>
          </div>
        ) : null}
      </div>

      {isVideoVisible && (
        <div
          className="w-full h-full fixed inset-0 bg-[#000c] z-[100]"
          style={{ display: "flex" }}
        >
          <div className="w-full  max-w-[90%] md:max-w-[60%] m-auto">
            <div className="w-full h-0 pb-[56.25%] bg-[#010101] border-2 border-solid border-neutral-50 transition-all relative">
              <iframe
                className="w-full h-full absolute"
                src="https://www.youtube.com/embed/KxKY4oLwA60?autoplay=1"
                title="SẦU RIÊNG HỒNG SANG"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <div className="absolute -top-5 -right-5 w-10 h-10 bg-white rounded-full flex justify-center items-center cursor-pointer" onClick={() => setIsVideoVisible(false)}>
                X
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
