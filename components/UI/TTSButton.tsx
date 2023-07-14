import React from "react";

type Props = {
  lang: string;
  text: string;
};

const TTSButton = ({ lang, text }: Props) => {
  let audio: HTMLAudioElement | null = null;

  const playAudio = async () => {
    if (audio !== null) {
        console.log("Audio already")
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
  };

  return <div onClick={() => playAudio()}>Play</div>;
};

export default TTSButton;
