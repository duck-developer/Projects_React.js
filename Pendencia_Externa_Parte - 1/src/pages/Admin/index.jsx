import { useContext, useEffect, useState } from "react";
import MyChart from "../../components/MyChart";
import axios from 'axios';
import { ContextInfo } from '../../context/ContextInfo'
export default function Admin() {
  var allvideo = []
  var videoUrl = "https://videos.filmeshentai.com/MIMK-111-583.mp4"
  // var videoUrl = "http://storage.pornocomlegendas.com.br/NovosPremium/Novos/jota035.mp4"
  const [isValid, setIsValid] = useState(false);

  // videoUrl.localeCompare
  // for(var i=0; i<3;i++){
  //   // console.log( `http://storage.pornocomlegendas.com.br/NovosPremium/Novos/jota0${i}.mp4`)
  //   const response =  axios.head(`http://storage.pornocomlegendas.com.br/NovosPremium/Novos/jota0${i}.mp4`);
  //   allvideo.push(response.headers['content-type'].startsWith('video'));
  // }
  
  // async function test(e){
    

  //   // console.log(e)

  // }
  // Função para verificar a validade do vídeo
  const checkVideoValidity = async () => {
    try {
      const response = await axios.head(videoUrl);
      // Verifica se o cabeçalho Content-Type indica um vídeo
      setIsValid(response.headers['content-type'].startsWith('video'));
    } catch (error) {
      setIsValid(false);
    }
  };

  // Chama a função de verificação quando o componente é montado
  // useEffect(() => {
  //   checkVideoValidity();
  // }, [videoUrl]);
  checkVideoValidity();
  // console.log(allvideo)

  return (
    <main className=" pt-4">
      <div><h1 className=" text-center text-[40px] font-semibold">Gráfico de solicitações </h1></div>
      <MyChart />


    </main>
  )
}
