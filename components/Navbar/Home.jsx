import SideBar from '@/components/Navbar/SideBar';
import TopBar from '@/components/Navbar/TopBar';

export default function Main() {
  const section = [
    {
      id: 'Home',
      content: <Home />,
    },
    {
      id: 'Pricing',
      content: <Pricing />,
    },
    {
      id: 'Faq',
      content: <Faq />,
    },
    {
      id: 'Contact',
      content: <Contact />,
    },
  ];

  return (
    <main className="min-h-screen h-screen flex flex-col overflow-hidden bg-[#1D1B1D]">
      <TopBar />
      <div className="grid grid-cols-12 h-full">
        <div className="col-span-2 flex items-center justify-center">
          <SideBar />
        </div>

        <div className="col-span-10 overflow-hidden">
          <div className="overflow-y-auto px-10 pt-10 space-y-10 h-full">
            {section.map((sec) => {
              return (
                <section id={sec.id.toLocaleLowerCase()} key={sec.id.toLocaleLowerCase()} className="h-full border-blue-500 border-b">
                  <div>{sec.content}</div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

function Home() {
  return <div>Home</div>;
}

function Pricing() {
  return <div>Pricing </div>;
}

function Faq() {
  return <div>Faq</div>;
}

function Contact() {
  return <div>contact </div>;
}
