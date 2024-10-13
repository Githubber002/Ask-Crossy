import React, { useEffect } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const FAQ = () => {
  const faqItems = [
    {
      question: 'Van welke bedrijven zijn de experts?',
      answer: 'Medewerkers van de volgende bedrijven werken mee aan dit project: <strong>Sendcloud B.V</strong> (Huib Adriaans), <strong>Foris (Maarten Berkien)</strong>, <strong>Youwe Concept B.V.</strong> (Juran van Breukelen), <strong>Azerty</strong> (Jorrit ten Brummeler), <strong>Stanley</strong> (Harold Derlagen), <strong>Gallaghar Europe B.V.</strong> (Tjarko Dijkstra), <strong>Code.nl</strong> (Coen Frederiks), <strong>EvoFenedex</strong> (Mischa German), <strong>Better Strategy</strong> (Antonie Glaser), <strong>Laudermarke</strong> (Pia Hohdorf), <strong>VonRoc</strong> (Albert Kamphuis), <strong>4 Goodz BV</strong> (Onno Laarman), <strong>Logitrade Logistic Systems</strong> (Erik Sloof), <strong>Raleigh</strong> (Dennis Visschedijk), <strong>LandMark</strong> (Leon Zondervan), <strong>Didi</strong> (Paul de Vries), <strong>Yoursurprise.com</strong> (Leander van der Stoep), <strong>Tomahawk digital marketing</strong> (Roel Linssen), <strong>Cirro</strong> (Peter van Keulen), <strong>IJben season sports</strong> (Niels IJben), <strong>Makro</strong> (Florine van Helsdingen, Alex Baar), <strong>Over en Beyond</strong> (Jordi Geuyen), <strong>NLOCKD</strong> (Rob van Gent), <strong>Decathlon</strong> (Stijn Doensen), <strong>Seven Senders Netherlands B.V.</strong> (Oscar Determan), <strong>Daelmans Group</strong> (Koen Damen), <strong>Mepal</strong> ( Rob de Bruijn ), <strong>Online Plastics Group B.V.</strong> (Max Bisseling), <strong>Salesupply</strong> (Hans Siebum), <strong>Active Ants B.V</strong> (Dennis Raadschelders).'
    },
    {
      question: 'Wat gebeurt er met de data/gegenves die ik invoer? Wordt die vertrouwelijk behandeld?',
      answer: 'De data die verzameld wordt via dit formulier wordt gebruikt om Crossy te verbeteren. We zullen je gegevens niet verspreiden of verkopen en alleen gebruiken om Crossy te verbeteren'
    },
    {
      question: 'Is deze Chatbot echt gratis?',
      answer: 'Ja, deze chatbot is echt gratis. 100% gratis en 100% belangenloos gevuld door meer dan 30 crossborder e-commerce experts. Wij doen dit om Nederlandse bedrijven te ondersteunen. Het is volledig non profit.'
    },
    {
      question: 'Wanneer gaat de Chatbot uit de test fase en volledig live?',
      answer: 'Er is nog geen exacte live datum, daarom houden we je op de hoogte via e-mail. De test fase van Crossy gaat in elk geval live in oktober 2024. We zijn nog hard aan het werk om de adviezen van de experts in te voeren en de chatbot te trainen.'
    },
    {
      question: 'Wat maakt deze Chatbot anders dan ChatGPT?',
      answer: 'ChatGPT 4.0 is getraind op een breed scala aan internationale databronnen, wat resulteert in een uitgebreide kennisbasis. Onze chatbot "Crossy" is echter specifiek getraind op databronnen die zijn gevalideerd of geschreven door experts. Hierdoor is "Crossy" meer gespecialiseerd in internationaal ondernemen, gezien vanuit een Nederlanads perspectief.'
    },
    {
      question: 'Wat zit er in het prijzenpakket',
      answer: 'Het prijzenpakket wordt samengesteld door de bedrijven waar onze experts werken, we zijn nog bezig met het samesntellen van het pakket. We kunnen in elk geval aangeven dat in het pakket: o.a. zitten: Een gratis CRO audit van jouw website. Een aantal gereedschappen. Stroopwafels van Daelmans groep. Een selecie van Mepal producten. Giftcards van Decathlon en DiDi Fashion. Een huisletterpakket van kunstoffplaten.nl. Een verrassende giftset van YourSurprise. Meer informatie volgt nog.'
    }
  ];

  return (
    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
      {faqItems.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>
            <div dangerouslySetInnerHTML={{ __html: item.answer }} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

const Home = () => {
  useEffect(() => {
    window.customToken = "667aa2a8a188cffb169d687f";
    const script = document.createElement('script');
    script.src = "https://saas.staging.antonic.ai/app/webchat/webChat.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const startChatbot = () => {
    if (window.WebChat && typeof window.WebChat.open === 'function') {
      window.WebChat.open();
    } else {
      console.error('WebChat is not initialized or does not have an open method');
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Script id="chatbot-init">
        {`
          window.customToken = "667aa2a8a188cffb169d687f";
        `}
      </Script>
      <header className="p-6 bg-blue-600 text-white">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Crossy%20Logo-ek45H6hBYyIrIRPJq5WLvxS8njbpTH.png"
              alt="Crossy Logo"
              width={80}
              height={80}
              className="mr-4"
            />
            <div>
              <h1 className="text-4xl font-bold">Crossy: bereik de wereld met je bedrijf</h1>
              <p className="text-xl mt-2">Een gratis AI chatbot voor internationale ondernemers</p>
            </div>
          </div>
          <Button onClick={startChatbot} className="bg-white text-blue-600 hover:bg-blue-100">
            Start Chatbot
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Wie is "Crossy"?</h2>
          <p className="text-lg">
            Crossy is de AI Chatbot die Nederlandse bedrijven helpt om internationaal te groeien met deskundig advies op maat. Het advies is gebaseerd op ervaringen van ruim 30 Nederlandse experts op het gebied van internationaal ondernemen.
          </p>
        </section>

        <section className="mb-12 bg-gray-100 p-6 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Gemaakt door 30 experts op het gebied van internationaal online ondernemen</h2>
          <div className="mb-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Groep-yyB5jR24Fi1xtRucNeYlx6hEFWxFGH.jpg"
              alt="Groep van 30 experts"
              width={1200}
              height={800}
              layout="responsive"
              className="rounded-lg"
            />
          </div>
          <p className="text-lg">
            De Crossborder Expertgroep van Shopping Tomorrow, een initiatief van Thuiswinkel.org, heeft deze chatbot ontwikkeld om bedrijven te helpen bij het navigeren door de complexiteit van crossborder retail.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Probeer Crossy: jouw crossborder assistent</h2>
          <p className="text-lg mb-4">
            Probeer het zelf! Je kunt "Crossy" testen door op de "Start Chatbot" knop te klikken of het blauwe chat icoontje in de rechter onderhoek te gebruiken.
          </p>
          <div className="flex justify-center mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Crossy%20Logo-ek45H6hBYyIrIRPJq5WLvxS8njbpTH.png"
              alt="Crossy Logo Large"
              width={300}
              height={300}
              className="mx-auto"
            />
          </div>
          <div className="text-center">
            <Button onClick={startChatbot} className="bg-blue-600 text-white hover:bg-blue-700">
              Start Chatbot
            </Button>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Test nu de bèta-versie en win prijzen!</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <p className="text-lg mb-4">
                Alleen tussen 10 oktober en 10 november: probeer Crossy uit, vul de enquête in, en ding mee naar een van de 5 pakketten vol cadeaus, gesponsord door de expertgroep Crossborder.
              </p>
              <Button
                onClick={() => window.open('https://4o7i3cum1yx.typeform.com/to/MZEMxv35?typeform', '_blank', 'noopener,noreferrer')}
              >
                Vul de enquête in
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image03-q9AfUFhht58PwjaMx0LkRqQ1FSlohv.jpg"
                alt="Sponsor logos"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Veel gestelde vragen</h2>
          <FAQ />
        </section>
      </main>

      <footer className="bg-gray-200 p-6 text-center">
        <p className="mb-4">&copy; 2024 Crossy. Alle rechten voorbehouden.</p>
        <div className="mt-4 max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold mb-2">Powered by</h3>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image05-C8iU2hfwLrqeHrzBA8ttYqTCUl8Ffv.jpg"
            alt="Salesupply and Active Ants logos"
            width={600}
            height={150}
            className="mx-auto max-w-full h-auto"
          />
        </div>
      </footer>
    </div>
  );
};

export default Home;
