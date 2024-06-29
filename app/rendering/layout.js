import Header from "@/components/header";
import React from "react";

export default function RenderingLayout({
  children,
}) {
  return (
    <section className='mt-10'>
      <Header/>
      {children}
    </section>
  )
}