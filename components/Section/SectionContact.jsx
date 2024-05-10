"use client";
import { ReactBingmaps } from 'react-bingmaps';


const SectionContact = () => {
  
  return (
    <div className="flex flex-col">
      <div className="relative">
        <div
          className="bg-cover bg-center h-[140dvh] md:h-[110dvh]  w-[100%]"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=600')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center gap-3 backdrop-blur-sm p-12 md:p-24">
            <h1
              id="contact"
              className="text-3xl font-bold  text-primary-color text-center"
            >
              Contactez-nous
            </h1>

            <div className="flex flex-col md:flex-row justify-center items-start space-x-3 md:divide-x-2 max-md:divide-y-2 ">
              <div className="flex flex-col md:w-1/2 gap-3 md:p-6 justify-start items-center p-3">
                <h2
                  id="contact"
                  class="text-white font-semibold text-2xl md:text-lg"
                >
                  Nos Contactes
                </h2>
                <div>
                  <ul className="list-none text-left space-y-3">
                    <li>
                      <a
                        className="text-white"
                        href="mailto:contact@autopro.lu"
                      >
                        Email : contact@autopro.lu
                      </a>
                    </li>
                    <li>
                      <a className="text-white" href="tel:06 00 00 00 00">
                        Télephone 1 : 06 00 00 00 00
                      </a>
                    </li>
                    <li>
                      <a className="text-white" href="tel:06 00 00 00 00">
                        Télephone 2 : 06 00 00 00 00
                      </a>
                    </li>
                    <li>
                      <a className="text-white" href="tel:06 00 00 00 00">
                        WhatsApp : 06 00 00 00 00
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white"
                        href="https://goo.gl/maps/1Vq6JU4Y5rF2"
                      >
                        Adresse : 15, Avenue de la Résistance, Lubumbashi
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:w-1/2 flex flex-col justify-center items-start p-3 md:p-6">
                <h2 class="text-white font-semibold text-2xl md:text-lg">
                  Ecrivez-nous sans plus tarder
                </h2>
                <div class="p-2">
                  <form
                    class="flex gap-3 flex-col justify-center"
                    action="https://formsubmit.co/contact@autopro.lu"
                    method="POST"
                    id="contact@Autopro.lu"
                  >
                    <div className="">
                      <label for="name">
                        <span class="label text-primary-color">Nom</span>
                      </label>
                      <input
                        className="p-4 border-x-0 border-t-0 border-b-2  w-full border-b-primary-color text-white text-sm bg-transparent"
                        type="text"
                        name="name"
                        placeholder="Nom "
                      />
                    </div>
                    <div className="flex flex-col justify-start">
                      <label for="name">
                        <span class="text-primary-color">Email</span>
                      </label>
                      <input
                        className="p-4 border-x-0 border-t-0 border-b-2  w-full border-b-primary-color text-white text-sm bg-transparent "
                        type="email"
                        name="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="">
                      <label for="name">
                        <span class="label text-primary-color">Téléphone</span>
                      </label>
                      <input
                        className="p-4 border-x-0 border-t-0 border-b-2  w-full border-b-primary-color text-white text-sm bg-transparent "
                        type="tel"
                        name="phone"
                        placeholder="Numero de Téléphone"
                      />
                    </div>
                    <input
                      type="hidden"
                      name="_autoresponse"
                      value="Bonjour, Merci Pour Votre message! AutoPro"
                    />
                    <input type="hidden" name="_template" value="basic" />
                    <input type="hidden" name="_captcha" value="false" />
                    <div className="">
                      <label for="name">
                        <span class="label text-primary-color">Message</span>
                      </label>
                      <textarea
                        className="p-4 border-x-0 border-t-0 border-b-2  w-full border-b-primary-color text-white text-sm bg-transparent "
                        placeholder="Nous souhaitons vous rencontre pour faire au mieux notre choix!"
                        name="message"
                      ></textarea>
                    </div>
                    <div className="flex justify-center items-center">
                      <button className="p-3 rounded-lg text-white w-44 md:w-64 bg-primary-color hover:opacity-80 transition-all text-sm">
                        Envoyer
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:p-16 p-8 flex flex-col justify-center items-center bg-slate-100">
        <h1 className="font-bold text-2xl md:text-3xl text-black text-center m-3">
          Ou nous trouvez?
        </h1>
        <ReactBingmaps
            bingmapKey="ApA3ACcLjbdAODnlrezTgeAZoTsHoMPfBQNVK-U4X2GZcQbYyYWCUX__EYR3XH46"
            center={[13.0827, 80.2707]}
            width="100%" // Ajustez la largeur comme souhaité (par exemple, "500px" ou "100%")
            height="400px" // Ajustez la hauteur comme souhaité (par exemple, "300px" ou "50vh")
        />
      </div>
    </div>
  );
};

export default SectionContact;
