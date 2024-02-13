import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";
import DefaultContainer from "@/app/_components/default-container";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../_components/ui/tabs";
import { getServerSession } from "next-auth";

interface BarbershopDetailsPageProps {
  params: {
    id?: string;
  };
}

async function BarbershopDetailsPage({ params }: BarbershopDetailsPageProps) {
  const session = await getServerSession();

  if (!params.id) return null;

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  });

  if (!barbershop) return null;

  return (
    <>
      <BarbershopInfo barbershop={barbershop} />

      <DefaultContainer className="last-child:mb-6 flex flex-col gap-4">
        <Tabs defaultValue="services" className="w-full">
          <TabsList>
            <TabsTrigger value="services">Serviços</TabsTrigger>
            <TabsTrigger value="information">Informações</TabsTrigger>
          </TabsList>
          <TabsContent value="services">
            {barbershop.services.map((service) => (
              <ServiceItem
                key={service.id}
                isAuthenticated={!!session?.user}
                service={service}
                barbershop={barbershop}
              />
            ))}
          </TabsContent>
          <TabsContent value="information">
            {barbershop.services.map((service) => (
              <ServiceItem
                isAuthenticated={!!session?.user}
                key={service.id}
                service={service}
                barbershop={barbershop}
              />
            ))}
          </TabsContent>
        </Tabs>
      </DefaultContainer>
    </>
  );
}

export default BarbershopDetailsPage;
