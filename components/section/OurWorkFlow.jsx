import AuditExistingDesignSvg from '@/assets/svg/AuditExistingDesign';
import CompanyDiscussionSvg from '@/assets/svg/CompanyDiscussion';
import CreatePatternLibrarySvg from '@/assets/svg/CreatePatternLibrary';
import DocumentationLibrarySvg from '@/assets/svg/DocumentationLibrary';
import React from 'react';

export default function OurWorkFlow() {
  const list = [
    {
      title: 'Company Discussion',
      icon: <CompanyDiscussionSvg />,
    },
    {
      title: 'Audit Existing Design',
      icon: <AuditExistingDesignSvg />,
    },
    {
      title: 'Create Pattern Library',
      icon: <CreatePatternLibrarySvg />,
    },
    {
      title: 'Documentation Library',
      icon: <DocumentationLibrarySvg />,
    },
  ];
  return (
    <section className="mt-[100px] px-10">
      <div className="space-y-6 text-center mb-20">
        <h1 className="font-h1 ">Our Workflow</h1>
        <h3 className="font-body-lg">Indicating the flow of work from one step to the next.</h3>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex space-x-[60px] max-w-screen-xl">
          {list.map((item) => {
            return (
              <div key={item.title} className=" flex flex-col justify-between space-y-6 min-w-[285px] items-center">
                <div>{item.icon}</div>
                <div>{item.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
