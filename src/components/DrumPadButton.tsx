import { DrumPadButtonProps } from '../types'; // Import the DrumPadButtonProps type
function DrumPadButton({ drumPadData, onClick }: DrumPadButtonProps) {
  return (
    <button
      type="button"
      className={`drum-pad place-self-center bg-gray-700 w-48 h-48 rounded-md border-4 border-gray-600 hover:border-blue-500 transition duration-200 `}
      id={`drum-pad-${drumPadData.keyTrigger.toLowerCase()}`}
      key={`drum-pad-${drumPadData.keyTrigger.toLowerCase()}`}
      onClick={onClick}
    >
      <span className="text-white font-bold text-lg opacity-50">
        {drumPadData.keyTrigger}
      </span>
      <audio
        className="clip"
        id={drumPadData.keyTrigger}
        src={drumPadData.url}
      ></audio>
    </button>
  );
}
export default DrumPadButton;
