import { useEffect } from "react";

const Modal = ({movie, close})=>{

    useEffect(() => {
        document.body.style.overflow = "hidden";
    
        return () => {
          document.body.style.overflow = "auto";
        };
      }, []);

    return <div className="fixed inset-0 bg-black/30 flex justify-center items-center" onClick={close}>
        <div className="bg-pink-300 p-5 relative"
        style={{ width: "10cm", height: "15cm" }}>
            <img src={movie.movieImage} alt="" className="w-full h-full object-cover"/>
            <button className="absolute top-3 right-3 bg-black rounded px-3 py-3" onClick={close}>x</button>
        </div>
    </div>
};

export default Modal;