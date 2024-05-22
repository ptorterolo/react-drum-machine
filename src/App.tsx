import { useState, useEffect } from 'react';
import DrumPadButton from './components/DrumPadButton';
function App() {
  const [displayText, setDisplayText] = useState('');

  function updateBtnStyle(id: string) {
    const btn = document.getElementById(`drum-pad-${id.toLowerCase()}`);
    const style = ['!border-blue-500', 'shadow-lg', 'shadow-red-900'];
    if (btn) {
      btn.classList.add(...style);
      setTimeout(() => {
        btn.classList.remove(...style);
      }, 200);
    }
  }

  function playSound(id: string) {
    const audio = document.getElementById(id) as HTMLAudioElement;
    if (!audio) return;
    updateBtnStyle(id);
    audio.play();
    setDisplayText(`Playing sound: ${id}`);
  }

  const data = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: '/sounds/Heater-1.mp3',
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: '/sounds/Heater-2.mp3',
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: '/sounds/Heater-3.mp3',
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: '/sounds/Heater-4_1.mp3',
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap',
      url: '/sounds/Heater-6.mp3',
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: '/sounds/Dsc_Oh.mp3',
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: '/sounds/BD_KICK.wav',
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Kick',
      url: '/sounds/RP4_KICK_1.mp3',
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: '/sounds/Cev_H2.mp3',
    },
  ];
  const drumPads = data.map((drumPad) => (
    <DrumPadButton
      drumPadData={drumPad}
      onClick={() => playSound(drumPad.keyTrigger)}
      key={`drum-pad-${drumPad.keyTrigger.toLocaleLowerCase()}`}
    />
  ));

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (
        data.map((item) => item.keyTrigger).includes(event.key.toUpperCase())
      ) {
        playSound(event.key.toUpperCase());
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <div id="drum-machine" className="container mx-auto mt-4">
        <div className="pt-4 px-4 bg-gradient-to-b from-stone-400 to-stone-800 max-w-max mx-auto rounded shadow-inner">
          <div className="border-4 border-stone-900 p-2 rounded-lg max-w-max mx-auto shadow-inner bg-stone-700">
            <div id="drum-pads " className="grid grid-cols-3 gap-4">
              {drumPads}
            </div>
          </div>
          <div className="mt-4">
            <div
              id="display"
              className="w-96 h-48 mx-auto p-4 rounded-tl rounded-tr bg-yellow-600 border-4 border-yellow-900"
            >
              <div className="h-full w-full border-2 border-black  flex items-center justify-center text-white font-semibold text-xl ">
                <span className="opacity-75">{displayText}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
