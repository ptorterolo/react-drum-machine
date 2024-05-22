export interface DrumPadButtonProps {
  drumPadData: {
    keyTrigger: string;
    url: string;
  };
  onClick: () => void;
}
