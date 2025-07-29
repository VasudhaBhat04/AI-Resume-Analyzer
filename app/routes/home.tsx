import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumiz" },
    { name: "description", content: "Build your resume to get your dream job!" },
  ];
}

export default function Home() {
  return <main className="bg=[url('/images/bg-main.svg')] bg-cover">
   <Navbar />
    <section className="main-section">
<div className="page-heading">
  <h1>Check Your Application Progress & Resume Quality</h1>
 <h2>Track your applications and let AI rate your resume</h2>
</div>
</section>
      {[

      ]}


  </main>
}
