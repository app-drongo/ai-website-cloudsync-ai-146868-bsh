import Hero from '@/components/sections/home/Hero'
import Features from '@/components/sections/home/Features'
import Contact from '@/components/sections/home/Contact'

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  )
}