/*import { DefaultUi, Player, Youtube } from "@vime/react";*/
import { CheckCircle } from "phosphor-react";

//import '@vime/core/themes/default.css'

/*
interface VideoProps {
  lessonDescription: string;
}
*/
export function Video() {
  return (
    <div className="flex-1">
      <div className="bg-white text-slate-500 flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          Video aqui
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto bg-gray-200">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-blue-100">
              Titulo do vídeo
            </h1>
            <p className="mt-4 leading-relaxed">
              Descrição do vídeo aqui
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a href="" className="p-4 text-sm bg-pink-100 text-white flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
              <CheckCircle size={24} />
              Marcar como concluida
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}