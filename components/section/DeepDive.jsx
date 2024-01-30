import Shape1 from '@/assets/svg/Shape-1';

export default function DeepDive() {
  return (
    <section className="mt-[100px] px-10">
      <div className="space-y-6 text-center mb-20">
        <h1 className="font-h1">Deep Dive</h1>
        <h3 className="font-body-lg">For more details, please contact us below.</h3>
      </div>
      <div className="flex items-center justify-center relative pb-[100px]">
        <CardForm />
        <div className="absolute bottom-0">
          <Shape1 />
        </div>
      </div>
    </section>
  );
}

function CardForm() {
  return (
    <div className="p-6 rounded-[10px] border min-w-[44%] z-10 bg-display backdrop-filter backdrop-blur-md bg-opacity-70">
      <ul className="space-y-6">
        <li className="space-y-[6px] flex flex-col">
          <label htmlFor="name">
            <span>Name</span>
          </label>
          <input className="bg-transparent p-[10px] border rounded-[6px]" id="name" type="text" placeholder="angelina caroline" />
        </li>
        <li className="space-y-[6px] flex flex-col">
          <label htmlFor="name">
            <span>Name</span>
          </label>
          <input className="bg-transparent p-[10px] border rounded-[6px]" id="name" type="text" placeholder="angelina caroline" />
        </li>
        <li className="space-y-[6px] flex flex-col">
          <label htmlFor="name">
            <span>Name</span>
          </label>
          <input className="bg-transparent p-[10px] border rounded-[6px]" id="name" type="text" placeholder="angelina caroline" />
        </li>
        <li className="space-y-[6px] flex flex-col">
          <label htmlFor="name">
            <span>Name</span>
          </label>
          <input className="bg-transparent p-[10px] border rounded-[6px]" id="name" type="text" placeholder="angelina caroline" />
        </li>
      </ul>
      <button className="w-full bg-purple-400 p-[10px] mt-10 rounded-[6px]">Submit</button>
    </div>
  );
}
