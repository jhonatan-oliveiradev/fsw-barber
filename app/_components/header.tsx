"use client";

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import {
  CalendarIcon,
  HomeIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  User2Icon,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";

const Header = () => {
  const { status, data } = useSession();

  const handleLoginClick = async () => await signIn("google");

  const handleLogoutClick = () => signOut();

  return (
    <Card className="rounded-none">
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image src="/logo.png" alt="FSW Barber" height={18} width={120} />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon size={16} />
            </Button>
          </SheetTrigger>

          <SheetContent className="p-0">
            <SheetHeader className="border-b border-solid border-secondary p-5 text-left">
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            {data?.user ? (
              <div className="flex w-full items-center justify-between px-5 py-6">
                <div className="flex w-full items-center gap-2">
                  <Avatar>
                    <AvatarImage
                      src={data?.user?.image ?? ""}
                      alt={data?.user?.name ?? ""}
                    />
                    <AvatarFallback>
                      {data?.user?.name?.split(" ").map((name) => name[0])}
                    </AvatarFallback>
                  </Avatar>
                  <h2>{data?.user?.name}</h2>
                </div>
                {data && (
                  <Button
                    variant="secondary"
                    size="icon"
                    onClick={handleLogoutClick}
                  >
                    <LogOutIcon size={18} />
                  </Button>
                )}
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 px-5 py-6">
                  <div className="flex h-10 w-10 items-end justify-center rounded-full border-2 border-solid border-white/50 bg-transparent">
                    <User2Icon className="text-white/50" size={30} />
                  </div>
                  <h2 className="font-bold">Olá, faça seu login!</h2>
                </div>
                <div className="px-5">
                  <Button
                    onClick={handleLoginClick}
                    variant="secondary"
                    className="w-full justify-start rounded-lg"
                  >
                    <LogInIcon className="mr-2" size={18} />
                    Fazer Login
                  </Button>
                </div>
              </div>
            )}

            <div className="flex flex-col gap-3 px-5 py-6">
              <Button asChild variant="outline" className="justify-start">
                <Link href="/" className="jusatify-center flex items-center">
                  <HomeIcon size={18} className="mr-2" />
                  Início
                </Link>
              </Button>

              {data?.user && (
                <Button variant="outline" className="justify-start">
                  <Link
                    href="/bookings"
                    className="flex items-center justify-center"
                  >
                    <CalendarIcon size={18} className="mr-2" />
                    Agendamentos
                  </Link>
                </Button>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
};

export default Header;
