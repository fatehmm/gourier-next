import Image from "next/image";
import { Container } from "./Container";
import logoRabalon from "../../../images/rabalon.webp";
import logoMicrosoft from "../../../images/microsoft.webp";
import logoFounderHub from "../../../images/founders-hub.png";
import logoLtc from "../../../images/ltc.png";
import developmentLogo from "../../../images/development.png";
import plugLogo from "../../../images/plug.png";

const sponsors = [
  { name: "Rabalon", logo: logoRabalon },
  { name: "Microsoft", logo: logoMicrosoft },
  { name: "Founder Hub", logo: logoFounderHub },
  { name: "LTC", logo: logoLtc },
  { name: "Development", logo: developmentLogo },
  { name: "Plug and Play", logo: plugLogo },
];

export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container className=" ">
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
          Current sponsorships and partnerships of Gourier.
        </h2>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-y-12 gap-x-32 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <Image
                width={220}
                height={220}
                src={sponsor.logo}
                alt={sponsor.name}
                unoptimized
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
