import CardPlat from "@/components/Cards/CardPlat";
const SectionCars = ({ mot1, mot2, list, cat }) => {
  return (
 
      <div className="bg-cover bg-center  px-4 py-10 md:px-16 w-[100%] h-auto">
        <div className="flex flex-col items-center justify-center text-center gap-3">
          <div className="w-[100%] flex justify-center items-center flex-col m-3">
            <h1 className="text-3xl md:text-4xl  font-bold text-black flex gap-2">
              <span>{mot1} <span className="text-primary-color">{mot2}</span></span>
              
            </h1>
            <p className="text-gray-700">Voici la liste des quelques-uns de nos véhicules mis en vente pour votre confort.</p>
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
  );
};

export default SectionCars;
