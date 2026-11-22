import { Hero } from "@/components/sections/Hero";
import { Membership } from "@/components/sections/Membership";
import { BiologicalAge } from "@/components/sections/BiologicalAge";
import { Systems } from "@/components/sections/Systems";
import { AppShowcase } from "@/components/sections/AppShowcase";
import { Future } from "@/components/sections/Future";
import { Closing } from "@/components/sections/Closing";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Membership />
      <BiologicalAge />
      <Systems />
      <AppShowcase />
      <Future />
      <Closing />
    </main>
  );
}
