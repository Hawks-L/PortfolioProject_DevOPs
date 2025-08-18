import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-6 py-12 space-y-24">
      {/* HERO SECTION */}

      <section id="hero" className="text-center space-y-6">
        <h1 className="text-4xl font-bold">¡Hola! Soy</h1>
        <h1 className="text-4xl font-bold">
          <span className="text-blue-600">Leonardo Andrés Estepa Castro</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Ingeniero de sistemas • Full Stack Developer • Apasionado por la
          tecnología
        </p>

         {/* Bloque de la foto de perfil */}
      <div className="flex flex-col items-center space-y-4">
        <Image
          src="/MiPersona.png" // 👈 pon aquí el nombre real del archivo en /public
          alt="Foto de perfil"
          width={220}
          height={220}
          className="rounded-full shadow-lg object-cover border-4 border-gray-300"
        />
      </div>
          {/* Fin del bloque de la foto de perfil */} 




        <Button asChild>
          <a href="#contacto">Contáctame</a>
        </Button>
      </section>


      {/* SOBRE MÍ */}
      <section id="about" className="max-w-2xl text-left space-y-6">
        <h2 className="text-2xl font-semibold text-center">Sobre mí</h2>

        <p className="text-muted-foreground">
          Soy estudiante de <strong>Ingeniería de Sistemas</strong> con
          experiencia en proyectos de <strong>hardware</strong> y{" "}
          <strong>software</strong>.
        </p>

        {/* HARDWARE */}
        <div>
          <h3 className="text-xl font-semibold text-blue-500">
            Experiencia en Hardware
          </h3>
          <ul className="list-disc list-inside text-muted-foreground">
            <li>Mantenimiento y reparación de computadores.</li>
            <li>Administración de redes y servidores.</li>
            <li>
              Conocimiento y diferenciación de distintos dispositivos
              tecnológicos.
            </li>
          </ul>
        </div>

        {/* SOFTWARE */}
        <div>
          <h3 className="text-xl font-semibold text-blue-500">
            Experiencia en Software
          </h3>
          <ul className="list-disc list-inside text-muted-foreground">
            <li>
              <strong>Java, Python y C# (nivel básico).</strong>
            </li>
            <li>
              <strong>JavaScript, Node.js, React, Angular, HTML y CSS.</strong>
            </li>
            <li>
              Bases de datos (<strong>SQL</strong>) y despliegues en{" "}
              <strong>Cloud</strong>.
            </li>
            <li>
              Manejo de <strong>Linux</strong> (especialmente{" "}
              <strong>Kali Linux</strong> y <strong>ParrotOS</strong>).
            </li>
          </ul>
        </div>

        {/* CIBERSEGURIDAD */}
        <div>
          <h3 className="text-xl font-semibold text-blue-500">
            Enfoque en Ciberseguridad
          </h3>
          <ul className="list-disc list-inside text-muted-foreground">
            <li>
              <strong>Pentesting</strong>
            </li>
            <li>
              <strong>Análisis forense digital</strong>
            </li>
            <li>
              <strong>Planes de continuidad del negocio</strong>
            </li>
            <li>
              <strong>
                Seguridad de redes y dispositivos (hardware y software)
              </strong>
            </li>
          </ul>
        </div>

        <p className="text-muted-foreground">
          Mi objetivo es seguir fortaleciendo mis conocimientos para convertirme
          en un <strong>especialista en ciberseguridad</strong>, aportando
          soluciones seguras y eficientes en entornos tecnológicos.
        </p>
      </section>

      {/* PROYECTOS */}
      <section id="projects" className="w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-6 text-center">Proyectos</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Sistema de Reservas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Una aplicación web para gestionar reservas en restaurantes
                usando .NET y Angular.
              </p>
              <Button variant="outline" asChild className="mt-4">
                <a href="https://github.com/Hawks-L" target="_blank">
                  Ver código
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Portafolio Personal</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Este portafolio creado con Next.js, Tailwind y ShadCN/UI para
                mostrar mis proyectos.
              </p>
              <Button variant="outline" asChild className="mt-4">
                <a href="https://github.com/Hawks-L" target="_blank">
                  Ver código
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">Contacto</h2>
        <p className="text-muted-foreground">Puedes encontrarme en:</p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <a href="leonardoestepaac@gmail.com">Gmail</a>
          </Button>
          <Button variant="secondary" asChild>
            <a
              href="https://www.linkedin.com/in/leonardo-andr%C3%A9s-estepa-castro-a8a091361"
              target="_blank"
            >
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/Hawks-L" target="_blank">
              GitHub
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}


