import FullBrand from '@/assets/svg/FullBrand';
import Link from 'next/link';

export default function Footer() {
  const sections = ['Home', 'Pricing', 'FAQ', 'Contact'];

  return (
    <section className="mt-20 px-[120px] py-10 ">
      <div className="space-y-6 text-center">
        <div className="flex items-center justify-between">
          <FullBrand />
          <ul className="flex space-x-[60px]">
            {sections.map((item, key) => {
              return (
                <li name={item.toLocaleLowerCase()} key={`item-${key}`}>
                  <Link href={`#${item.toLocaleLowerCase()}`}>{item}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <p className="text-left mb-10">email@gmail.com</p>
        <hr />
        <p className="mt-10 text-left">&#169; 2024 Modular Design System. All rights reserved.</p>
      </div>
    </section>
  );
}
