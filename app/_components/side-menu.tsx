"use client";

import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import {
  LogOutIcon,
  User2Icon,
  LogInIcon,
  HomeIcon,
  CalendarIcon,
} from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import Link from "next/link";

const SideMenu = () => {
  const { data } = useSession();

  const handleLoginClick = async () => await signIn("google");

  const handleLogoutClick = () => signOut();

  return (
    <>
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
            <Button variant="secondary" size="icon" onClick={handleLogoutClick}>
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
          <Link href="/" className="flex items-center">
            <HomeIcon size={18} className="mr-2" />
            Início
          </Link>
        </Button>

        {data?.user && (
          <Button variant="outline" className="justify-start">
            <Link href="/bookings" className="flex items-center">
              <CalendarIcon size={18} className="mr-2" />
              Agendamentos
            </Link>
          </Button>
        )}
      </div>
    </>
  );
};

export default SideMenu;
