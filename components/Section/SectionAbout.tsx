"use client"
import ScrollAnimation from "react-animate-on-scroll";
import "./style.css";
import 'animate.css/animate.compat.css';
export default function SectionAbout() {
  return (
    <section className="bg-secondary-color px-4 py-10 md:px-16 flex flex-col w-full">
      
      <h1 className="font-bold text-3xl md:text-4xl text-primary-color text-center m-3">Meilleurs experiences avec nos services des ventes!</h1>
      <ScrollAnimation animateIn="fadeIn" delay={300}>
      <div className="flex flex-col md:flex-row p-10 justify-center items-center md:justify-around md:items-start">
        <div className="flex flex-col gap-2  w-80 ">
          <div className="h-1/3 p-2 flex items-center justify-center">
            <svg width="100" height="100" viewBox="0 0 160 162" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="80" cy="81" rx="80" ry="81" fill="#F1BC00"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M81 109.667C95.7275 109.667 107.667 97.7275 107.667 83C107.667 68.2724 95.7275 56.3333 81 56.3333C66.2724 56.3333 54.3334 68.2724 54.3334 83C54.3334 97.7275 66.2724 109.667 81 109.667ZM83 67C83 65.8954 82.1046 65 81 65C79.8955 65 79 65.8954 79 67V67.8446C74.6522 68.6231 71 71.8896 71 76.3333C71 81.4459 75.8342 85 81 85C84.6707 85 87 87.4152 87 89.6667C87 91.9181 84.6707 94.3333 81 94.3333C77.3294 94.3333 75 91.9181 75 89.6667C75 88.5621 74.1046 87.6667 73 87.6667C71.8955 87.6667 71 88.5621 71 89.6667C71 94.1104 74.6522 97.3768 79 98.1555V99C79 100.105 79.8955 101 81 101C82.1046 101 83 100.105 83 99V98.1555C87.3478 97.3768 91 94.1104 91 89.6667C91 84.5541 86.1659 81 81 81C77.3294 81 75 78.5848 75 76.3333C75 74.0819 77.3294 71.6667 81 71.6667C84.6707 71.6667 87 74.0819 87 76.3333C87 77.4379 87.8955 78.3333 89 78.3333C90.1046 78.3333 91 77.4379 91 76.3333C91 71.8896 87.3478 68.6231 83 67.8446V67Z" fill="black"/>
            </svg>

          </div>
          <div className="h-2/3 flex items-center justify-center flex-col space-y-2">
            <h1 className="font-bold text-xl text-white">
              Le Meilleur Prix Garanti
            </h1>
            <p className="text-sm text-white">
              Nous vous assurons le meilleur prix pour votre nouvelle voiture.
            </p>
          </div>
        </div>
      
        <div className="flex flex-col gap-2  w-80">
          <div className="h-1/3 p-2 flex items-center justify-center">
            <svg width="100" height="100" viewBox="0 0 160 162" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="80" cy="81" rx="80" ry="81" fill="#F1BC00"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M53.3333 88.4747V105.667C53.3333 106.771 54.2293 107.667 55.3333 107.667H59.6373C60.111 107.667 60.5693 107.499 60.9306 107.193C61.292 106.886 61.533 106.462 61.6107 105.995L62.6667 99.6667H97.3333L98.3867 105.995C98.4643 106.462 98.7053 106.886 99.0667 107.193C99.428 107.499 99.8863 107.667 100.36 107.667H104.667C105.197 107.667 105.706 107.456 106.081 107.081C106.456 106.706 106.667 106.197 106.667 105.667V88.4747C106.667 85.3398 105.739 82.275 104 79.6667L101.92 76.5467C101.734 76.2689 101.576 75.9743 101.445 75.6667H104.096C104.468 75.6667 104.832 75.5631 105.148 75.3676C105.464 75.1722 105.719 74.8925 105.885 74.56L106.552 73.2267C106.704 72.922 106.776 72.5834 106.761 72.2432C106.745 71.903 106.643 71.5723 106.464 71.2825C106.285 70.9927 106.035 70.7535 105.738 70.5873C105.441 70.4212 105.106 70.3338 104.765 70.3333H100.267L99.44 66.2107C99.1885 64.9551 98.5807 63.7985 97.6893 62.8792C96.7979 61.9599 95.6606 61.3167 94.4133 61.0267C90.5147 60.12 85.7093 59.6667 80 59.6667C74.288 59.6667 69.4853 60.12 65.5867 61.0267C64.3389 61.3163 63.201 61.9592 62.3091 62.8786C61.4172 63.7979 60.809 64.9547 60.5573 66.2107L59.7307 70.3333H55.2373C54.8967 70.3338 54.5619 70.4212 54.2646 70.5873C53.9673 70.7535 53.7173 70.9927 53.5384 71.2825C53.3594 71.5723 53.2574 71.903 53.2421 72.2432C53.2267 72.5834 53.2985 72.922 53.4507 73.2267L54.1173 74.56C54.2831 74.8921 54.538 75.1715 54.8536 75.3669C55.1691 75.5624 55.5328 75.6662 55.904 75.6667H58.5573C58.427 75.9742 58.2681 76.2689 58.0827 76.5467L56 79.6667C54.2613 82.2747 53.3333 85.3387 53.3333 88.4747ZM95.896 75.6773C96.0797 76.5997 96.3846 77.4936 96.8027 78.336H63.1973C63.616 77.496 63.92 76.6027 64.104 75.6773L65.7893 67.2587C65.8391 67.007 65.9604 66.775 66.1387 66.5905C66.317 66.406 66.5448 66.2769 66.7947 66.2187C70.256 65.4187 74.6667 65 80 65C85.3333 65 89.744 65.416 93.2053 66.2213C93.4553 66.2789 93.6834 66.4074 93.8622 66.5914C94.041 66.7754 94.1629 67.0071 94.2133 67.2587L95.896 75.6773ZM62.6667 91.6667C63.7275 91.6667 64.7449 91.2452 65.4951 90.4951C66.2452 89.745 66.6667 88.7275 66.6667 87.6667C66.6667 86.6058 66.2452 85.5884 65.4951 84.8382C64.7449 84.0881 63.7275 83.6667 62.6667 83.6667C61.6058 83.6667 60.5884 84.0881 59.8382 84.8382C59.0881 85.5884 58.6667 86.6058 58.6667 87.6667C58.6667 88.7275 59.0881 89.745 59.8382 90.4951C60.5884 91.2452 61.6058 91.6667 62.6667 91.6667ZM101.333 87.6667C101.333 88.7275 100.912 89.745 100.162 90.4951C99.4116 91.2452 98.3942 91.6667 97.3333 91.6667C96.2725 91.6667 95.255 91.2452 94.5049 90.4951C93.7547 89.745 93.3333 88.7275 93.3333 87.6667C93.3333 86.6058 93.7547 85.5884 94.5049 84.8382C95.255 84.0881 96.2725 83.6667 97.3333 83.6667C98.3942 83.6667 99.4116 84.0881 100.162 84.8382C100.912 85.5884 101.333 86.6058 101.333 87.6667Z" fill="black"/>
            </svg>
          </div>
          <div className="h-2/3 flex items-center justify-center flex-col space-y-2">
            <h1 className="font-bold text-xl text-white">
            Voitures Neuves et d{"’"}Occasion.
            </h1>
            <p className="text-sm text-white">
               Découvrez notre large sélection de véhicules neufs et d’occasion, tous soumis à un contrôle lde qualité.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2  w-80">
          <div className="h-1/3 p-2 flex items-center justify-center">
           <svg width="100" height="100" viewBox="0 0 160 162" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="80" cy="81" rx="80" ry="81" fill="#F1BC00"/>
            <g clip-path="url(#clip0_0_1)">
            <path d="M99.6667 60.5H91.9167V54C91.9167 50.3925 89.6175 47.5 86.75 47.5H71.25C68.3825 47.5 66.0834 50.3925 66.0834 54V60.5H58.3334C55.4659 60.5 53.1667 63.3925 53.1667 67V102.75C53.1667 106.358 55.4659 109.25 58.3334 109.25H99.6667C102.534 109.25 104.833 106.358 104.833 102.75V67C104.833 63.3925 102.534 60.5 99.6667 60.5ZM71.25 54H86.75V60.5H71.25V54ZM99.6667 102.75H58.3334V96.25H99.6667V102.75ZM99.6667 86.5H58.3334V67H66.0834V73.5H71.25V67H86.75V73.5H91.9167V67H99.6667V86.5Z" fill="black"/>
            </g>
            <defs>
            <clipPath id="clip0_0_1">
            <rect width="62" height="78" fill="white" transform="translate(48 41)"/>
            </clipPath>
            </defs>
            </svg>


          </div>
          <div className="h-2/3 flex items-center justify-center flex-col space-y-2">
            <h1 className="font-bold text-xl text-white">
              Vente Rapide et Sécurisée
            </h1>
            <p className="text-sm text-white">
            Vendez votre voiture en toute confiance. <br />
            Nous vous offrons un virement sécurisé sur votre compte bancaire en 24 heures.
            </p>
          </div>
        </div>
      </div>
      </ScrollAnimation>
    </section>
  );
}
