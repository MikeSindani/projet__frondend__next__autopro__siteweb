
import Link from "next/link";

const Footer = async () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary-color text-white">
      <div className="container m-auto flex flex-wrap items-start justify-between p-10">
        {/* Logo */}
        <div className="w-full md:w-1/4 p-2">
          <div className="flex flex-col justify-center mb-4 gap-y-2">
            <div className="text-2xl text-primary-color font-extrabold font-Great-Vibes text-primary-color">
              AutoPro
            </div>
            <p className="text-white text-sm">
              {" "}
              meilleur vendeur des auto a lubumbashi.
            </p>
          </div>
        </div>
        {/* Navigation */}
        <div className="w-full md:w-1/4 p-2">
          <h3 className="text-lg font-bold mb-4">Navigation</h3>
          <ul className="list-none">
            <li className="mb-2">
              <a href="#" className="hover:text-primary-color text-gray-100 text-sm">
                Accueil
              </a>
            </li>
            <li className="mb-2">
              <Link href="#services" className="hover:text-primary-color text-gray-100 text-sm">
                Services
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#categories" className="hover:text-primary-color text-gray-100 text-sm">
                Categories
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#occasion" className="hover:text-primary-color text-gray-100 text-sm">
                Voiture d{"'"}occasion
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#neuve" className="hover:text-primary-color text-gray-100 text-sm">
                  Voiture neuve
              </Link>
            </li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div className="w-full md:w-1/4 p-2">
          <h3 className="text-lg font-bold mb-4">Suivez-nous</h3>
          <ul className="list-none">
            <li className="mb-2">
              <a href="#" className="hover:text-blue-600 text-gray-100">
                Facebook
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-orange-500 text-gray-100">
                x
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-red-500 text-gray-100">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Informations de contact */}
        <div className="w-full md:w-1/4 p-2">
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <ul className="list-none">
            <li className="mb-2">
              <a
                href="mailto:contact@example.com"
                className="hover:text-orange-500"
              >
                mikesindani@gmail.com
              </a>
            </li>
            <li className="mb-2">
              <a href="tel:+1234567890" className="hover:text-orange-500">
                +123 456 7890
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-primary-color text-white p-6">
        <div className="container mx-auto text-center">
          <p className="mb-2 text-white font-bold">
            © {currentYear} AutoPro Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

export const FooterSkeleton = () => {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="container mx-auto flex flex-wrap items-center justify-start p-10">
        {/* Logo */}
        <div className="w-full md:w-1/4 p-2">
          <div className="flex flex-col justify-center mb-4">
            <div className="h-12 w-auto bg-gray-300 rounded-full"></div>
            <div className="h-5 w-32 bg-gray-300 rounded-full mt-2"></div>
            <div className="h-5 w-48 bg-gray-300 rounded-full mt-2"></div>
          </div>
        </div>
        {/* Navigation */}
        <div className="w-full md:w-1/4 p-2">
          <div className="h-5 w-32 bg-gray-300 rounded-full mb-4"></div>
          <div className="h-5 w-48 bg-gray-300 rounded-full mb-2"></div>
          <div className="h-5 w-48 bg-gray-300 rounded-full mb-2"></div>
          <div className="h-5 w-48 bg-gray-300 rounded-full mb-2"></div>
        </div>
        {/* Réseaux sociaux */}
        <div className="w-full md:w-1/4 p-2">
          <div className="h-5 w-32 bg-gray-300 rounded-full mb-4"></div>
          <div className="h-5 w-48 bg-gray-300 rounded-full mb-2"></div>
          <div className="h-5 w-48 bg-gray-300 rounded-full mb-2"></div>
          <div className="h-5 w-48 bg-gray-300 rounded-full mb-2"></div>
        </div>
        {/* Informations de contact */}
        <div className="w-full md:w-1/4 p-2">
          <div className="h-5 w-32 bg-gray-300 rounded-full mb-4"></div>
          <div className="h-5 w-48 bg-gray-300 rounded-full mb-2"></div>
          <div className="h-5 w-48 bg-gray-300 rounded-full mb-2"></div>
        </div>
      </div>
      <div className="bg-primary-color text-white p-6">
        <div className="container mx-auto text-center">
          <div className="h-5 w-48 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </footer>
  );
};


