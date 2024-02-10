"use client";

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data } = useSession();

  const handleLoginClick = async () => {
    await signIn();
  };

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
            {data?.user ? (
              <Button onClick={() => signOut()}>Logout</Button>
            ) : (
              <Button onClick={handleLoginClick}>Entrar</Button>
            )}
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
};

export default Header;
