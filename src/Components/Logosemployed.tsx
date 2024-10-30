import bolivar from "./IMG/bolivar.png";
import cartagena from "./IMG/cartagena-Photoroom.png";
import casco from "./IMG/logo2.png";
import construct from "./IMG/logo3.png";
import soto from "./IMG/logos-construoferta-102-31_27_11zon-Photoroom.png";

export default function Logosemployed() {
  return (
    <div className="py-24 sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <h2 className="text-3xl font-semibold leading-8 text-center text-white">
          EMPRESAS ALIADAS
        </h2>
        <div className="grid items-center max-w-lg grid-cols-4 mx-auto mt-10 gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            alt="Transistor"
            src={bolivar}
            width={158}
            height={48}
            className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
          />
          <img
            alt="Reform"
            src={cartagena}
            width={158}
            height={48}
            className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
          />
          <img
            alt="Tuple"
            src={casco}
            width={158}
            height={48}
            className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
          />
          <img
            alt="SavvyCal"
            src={construct}
            width={158}
            height={48}
            className="object-contain w-full col-span-2 max-h-12 sm:col-start-2 lg:col-span-1"
          />
          <img
            alt="Statamic"
            src={soto}
            width={158}
            height={48}
            className="object-contain w-full col-span-2 col-start-2 max-h-12 sm:col-start-auto lg:col-span-1"
          />
        </div>
      </div>
    </div>
  );
}
