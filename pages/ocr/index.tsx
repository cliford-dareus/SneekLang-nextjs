import Formfield from "@/components/UI/Formfield";
import { Layout } from "@/components/Layout";
import { InputFieldType } from "@/components/TranlationForm";
import Bot from "@/components/UI/Bot";
import preprocessImage from "@/utils/preprocess";
import { motion } from "framer-motion";
import Image from "next/image";
import React, {
  LegacyRef,
  ReactElement,
  useCallback,
  useRef,
  useState,
} from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Webcam from "react-webcam";
import Tesseract from "tesseract.js";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "environment",
};

const Ocr = () => {
  const [imagePath, setImagePath] = useState<string>("");
  const [text, setText] = useState<string>("");
  const webcamRef = useRef<LegacyRef<Webcam> | any>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputFieldType>();

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImagePath(imageSrc);
  }, [webcamRef]);

  const handleClick = async () => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(imageRef.current!, 0, 0);

    setTimeout(( ) => {
        ctx.putImageData(preprocessImage(canvas),0,0);
    }, 200)

    const dataUrl = canvas.toDataURL("image/jpeg");

    Tesseract.recognize(dataUrl, "eng", { logger: (m) => console.log(m) })
      .catch((error) => console.log(error))
      .then((result) => {
        let textResult = result?.data.text;
        // console.log(result);
        // console.log(textResult);
        setText(textResult!);
      });
  };

  const onSubmit: SubmitHandler<InputFieldType> = (inputData) => {
    console.log(inputData);
  };

  const formProps = { register, errors };

  return (
    <div className="bg-gradient-to-b from-[#9A6AFF] to-[#000] absolute bottom-0 w-full  p-4 rounded-tr-xl rounded-tl-xl">
      <h1 className="text-center text-[32px] font-bold">Camera</h1>

      <p>Capture an image, you want to translate</p>
      <div className="flex flex-col mt-4 items-center">
        {!imagePath && (
          <>
            <Webcam
              className="rounded-md"
              allowFullScreen={true}
              audio={false}
              height={720}
              width={1280}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
            <button
              className="py-1 px-4 bg-white text-black self-end rounded-md mt-2 "
              onClick={capture}
            >
              Capture photo
            </button>
          </>
        )}

        {imagePath && (
          <>
            <Image
              className="rounded-md"
              src={imagePath}
              alt=""
              width={720}
              height={350}
              ref={imageRef}
            />
            <div className="self-end flex gap-4 mb-4">
              <button
                className="py-1 px-4 bg-white text-black rounded-md mt-2 "
                onClick={handleClick}
              >
                Extract
              </button>
              <button
                className="py-1 px-4 bg-white text-black rounded-md mt-2 "
                onClick={() => {
                  setImagePath("");
                  setText("");
                }}
              >
                Re-take
              </button>
            </div>
          </>
        )}

        <canvas className="hidden" ref={canvasRef}></canvas>
        <>
          {text && (
            <div className="mt-2">
              <div className="max-h-[150px] w-full rounded-md bg-white px-4 mb-2">
                <p className="text-black text-[13px]">{text}</p>
              </div>

              <form
                className="flex items-center gap-4"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Formfield {...formProps} name="to" />
                <button className="py-1 px-4 bg-white text-black rounded-md mb-2">
                  Translate
                </button>
              </form>
            </div>
          )}
        </>
        <motion.div
          className="mt-4"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
        >
          <Bot text="Make sure the image captured is clear and legible!" />
        </motion.div>
      </div>
    </div>
  );
};

Ocr.getLayout = function getLayout(Ocr: ReactElement) {
  return <Layout>{Ocr}</Layout>;
};

export default Ocr;
