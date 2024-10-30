"use client";
import { LayoutGrid } from "./layout-grid";

export function LayoutGridDemo() {
  return (
    <div className="w-full h-screen py-20">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="text-xl font-bold text-white md:text-4xl">
        House in the woods
      </p>
      <p className="text-base font-normal text-white"></p>
      <p className="max-w-lg my-4 text-base font-normal text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="text-xl font-bold text-white md:text-4xl">
        House above the clouds
      </p>
      <p className="text-base font-normal text-white"></p>
      <p className="max-w-lg my-4 text-base font-normal text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="text-xl font-bold text-white md:text-4xl">
        Greens all over
      </p>
      <p className="text-base font-normal text-white"></p>
      <p className="max-w-lg my-4 text-base font-normal text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="text-xl font-bold text-white md:text-4xl">
        Rivers are serene
      </p>
      <p className="text-base font-normal text-white"></p>
      <p className="max-w-lg my-4 text-base font-normal text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://img.freepik.com/foto-gratis/retrato-ingeniero-masculino-trabajando-campo-celebracion-dia-ingenieros_23-2151615132.jpg?t=st=1729692591~exp=1729696191~hmac=371464140a419eb851d65b2b7cdf753b99000dfff77cdceaa39bc5b685534227&w=1380",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://img.freepik.com/foto-gratis/edificio-inspirado-neo-brutalismo_23-2151004646.jpg?t=st=1729692652~exp=1729696252~hmac=e7ee827f6ac2b2b1ae6bb95c6f3d159fedada91006f13938223b7ddc1bff88fe&w=740",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://img.freepik.com/foto-gratis/edificio-inspirado-neo-brutalismo_23-2151004675.jpg?t=st=1729692722~exp=1729696322~hmac=1c59a75af364c12e707aafcea13c67a8e9d80890aad95789382c91df638f86c6&w=740",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://img.freepik.com/foto-gratis/casa-madera-fotorrealista-estructura-madera_23-2151302672.jpg?t=st=1729692923~exp=1729696523~hmac=593f88fad10c015a0556a5d4901e5f395db1394a00587874899d1643ec3dea92&w=1480",
  },
];
