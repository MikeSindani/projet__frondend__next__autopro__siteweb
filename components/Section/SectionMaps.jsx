'use client'
import maps from "@/asset/maps.svg";
import Image from "next/image";
import { ReactBingmaps } from 'react-bingmaps';

export default function SectionMaps() {

  return (
    <div className="max-md:p-8 pt-16 flex flex-col justify-center items-center bg-slate-200">
      <div className="flex flex-col justify-center items-center">
        <Image src={maps} alt="" width={40} height={40} />
      </div>
      <h1 className="font-bold text-3xl md:text-4xl text-black text-center m-3">
        Ou nous trouvez?
      </h1>
      <div id="maps" style={{ height: '400px', width: '100%' }} >maps</div>
    </div>
  );
}
