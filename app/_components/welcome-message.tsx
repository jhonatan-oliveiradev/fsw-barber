"use client";

import { useSession } from "next-auth/react";

const WelcomeMessage = () => {
  const { data } = useSession();

  const onlyFirstUserName = data?.user?.name?.split(" ")[0];

  return (
    <h2 className="text-xl">
      Olá, <span className="font-bold">{onlyFirstUserName || "visitante"}</span>
      !
    </h2>
  );
};

export default WelcomeMessage;
