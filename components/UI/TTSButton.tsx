import { Dispatch, SetStateAction } from "react";

type Props = {
  lang: string;
  text: string;
  setIsPlaying: Dispatch<SetStateAction<any | boolean>>;
  isPlaying: boolean;
};

const TTSButton = ({ lang, text, setIsPlaying, isPlaying }: Props) => {
  let audio: HTMLAudioElement | null = null;

  const playAudio = async () => {
    if (audio !== null) {
      audio.pause();
      audio.currentTime = 0;
    }

    const inputData = { lang, text };
    const response = await fetch("/api/tts", {
      method: "POST",
      body: JSON.stringify(inputData),
    });

    const data = await response.json();

    audio = new Audio(data);
    audio.play();
    setIsPlaying(true);
    audio.addEventListener("ended", () => setIsPlaying(false));
  };

  return (
    <button disabled={isPlaying} onClick={() => playAudio()}>
      Play
    </button>
  );
};

export default TTSButton;
