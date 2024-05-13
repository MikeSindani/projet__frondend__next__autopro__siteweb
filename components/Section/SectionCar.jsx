import CardPlat from "@/components/Cards/CardPlat";
const SectionCars = ({ mot1, mot2, list, cat }) => {
  return (
    <div className="relative">
      <div className="bg-cover bg-center h-[90dvh] p-2 md:p-16 w-[100%]">
        <div className="absolute inset-0  flex flex-col items-center justify-center text-center gap-3 ">
          <div className="w-[100%] flex justify-start items-center px-3 md:px-12 m-3">
            <h1 className="text-3xl md:text-4xl  font-bold text-black flex gap-2">
              <span>{mot1}</span>
              <span className="text-primary-color">{mot2}</span>
            </h1>
          </div>
          {list && list.length > 0 ? (
            <CardPlat data={list} />
          ) : (
            <div className="flex justify-center item-center">
              <p className="text-3xl font-semi-bold text-slate-600 m-3">Aucun véhicule disponible</p>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default SectionCars;
