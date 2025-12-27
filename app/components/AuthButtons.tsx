"use client";

import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import { redirect } from "next/navigation";

export default function AuthButtons({ session }: { session: any }) {
  if (session?.user) {
    return (
      <div className="flex items-center gap-5 ">
        <Link href="/startup/create">Create</Link>

        <button onClick={() => signOut({ callbackUrl: "/" })}>Logout</button>

        <Link href={`/user/${session.user.id}`}>{session.user.name}</Link>
      </div>
    );
  }

  return <button onClick={() => signIn("github")}>Login</button>;
}
