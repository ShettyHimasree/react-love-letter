import  React, {useState , useRef} from 'react'
import './LoveLetter.css'
import audioFile from './Kushi.mp3'
const LoveLetter = () =>{
    const [isOpen , setIsOpen] = useState(false);
    const [isFullSize, setIsFullSize] = useState(false);
    const audioRef = useRef(null);
 

    const handleOpenLetter = ()=>{
        setIsOpen(true);
        setTimeout(()=>{
            setIsFullSize(true);
            //ensuring audio to play automatically on userInteraction 
            if(audioRef.current)
                {
                    audioRef.current.play()
                    .then(()=> console.log("playback succeeded"))
                    .catch(e=> console.error("Playback failed:",e));

                }
        },800);

    };

    const handleCloseLetter = ()=>{
        setIsFullSize(false);
        setTimeout(()=>{
            if(audioRef.current)
                {
                    audioRef.current.pause();
                }
                setIsOpen(false);
        },800);

    };

    return (
        <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}>
          <div className="flap"></div>
          <div className="body"></div>
          <div className={`letter ${isFullSize ? 'fullSize' : ''}`}>
          mah dear kannaa🖤,<br />
        never have i been so blessed as to fall in love with someone as wonderful as you...<br />i loveeee youuuu :)<br />
        always yours,<br />                     
        @bangaram
           </div>
           <audio ref={audioRef} src={audioFile} onError={(e)=> console.error('Audio error:', e.message)} />
            
        </div>
    );
}

    export default LoveLetter;



