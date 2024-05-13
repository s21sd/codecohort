import React from "react";
import { ModeToggle } from "./mode-toggle";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

function Header() {
  return (
    <div className="container flex justify-between border-b-2 mb-3">
      {/* right component */}
      <div className="container flex justify-between p-2">logo</div>
      {/* left component */}
      <div className="flex gap-5" >
        <div>
          <ModeToggle />
        </div>
        <div className="mt-2">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
}

export default Header;
