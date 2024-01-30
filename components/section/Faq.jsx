export default function Faq() {
  return (
    <section className="mt-[100px] px-10">
      <div className="space-y-6 text-center mb-20">
        <h1 className="font-h1 ">Frequently Asked Question (FAQ)</h1>
        <h3 className="font-body-lg">Still have question? Check the list of common questions.</h3>
      </div>
      <div className="grid grid-cols-5">
        <div className="col-start-2 col-span-3 space-y-4">
          <Collapsible />
          <Collapsible />
          <Collapsible />
          <Collapsible />
        </div>
      </div>
    </section>
  );
}

function Collapsible() {
  return (
    <div className="p-4 flex items-center justify-between space-x-[10px] border rounded-[10px]">
      <p className="flex-1">What is a Design System?</p>
      <div>icon</div>
    </div>
  );
}
