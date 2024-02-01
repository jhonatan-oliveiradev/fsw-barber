import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Header from "../_components/header";
import Search from "./_components/search";
import BookingItem from "../_components/booking-item";
import DefaultContainer from "../_components/default-container";
import SectionTitle from "../_components/section-title";
import BarbershopItem from "./_components/barbershop-item";
import { db } from "../_lib/prisma";

export default async function Home() {
  // chamar prisma e pegar barbearias
  const barbershops = await db.barbershop.findMany({});

  return (
    <div>
      <Header />
      <DefaultContainer>
        <h2 className="text-xl">
          Olá, <span className="font-bold">Jhonatan</span>!
        </h2>
        <p className="capitalize text-sm">
          {format(new Date(), "EEEE',' dd 'de' MMMM", {
            locale: ptBR,
          })}
        </p>
      </DefaultContainer>
      <DefaultContainer>
        <Search />
      </DefaultContainer>
      <DefaultContainer>
        <SectionTitle title="Agendamentos" />
        <BookingItem />
      </DefaultContainer>
      <DefaultContainer>
        <SectionTitle title="Recomendados" />
        <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </DefaultContainer>
    </div>
  );
}
