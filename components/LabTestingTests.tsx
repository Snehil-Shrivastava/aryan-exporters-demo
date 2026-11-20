// import { LabTestingTests as LabTestingTestsData } from "@/lib/data";

// const LabTestingTests = () => {
//   const labTestingTestsData = LabTestingTestsData;
//   return (
//     <div className="bg-[#F5F5F5] my-30 max-lg:my-15">
//       <div className="lg:py-20 max-lg:py-10 px-10 max-lg:px-4 max-w-[1920px] mx-auto w-full">
//         <div className="flex flex-col items-start gap-1.5 xl:flex-row xl:items-center xl:gap-10">
//           <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold capitalize">
//             Tests
//           </h2>
//           <p className="lg:flex lg:flex-col py-0 text-xs md:text-sm xl:text-xs 2xl:text-sm opacity-80">
//             <span>What we </span>
//             <span>can test</span>
//           </p>
//         </div>
//         <p className="lg:flex lg:flex-col text-xs md:text-sm xl:text-xs 2xl:text-sm opacity-90 py-8">
//           Grouped by property. The method against each test is the one we work
//           to. The last column says whether that test is inside our accredited
//           scope. Tests outside the scope are run to the same methods, but the
//           report does not carry the NABL symbol, and it says so.
//         </p>
//         <div className="bg-white rounded-xl px-6 py-6">
//           <div className="mb-12">
//             <div className="grid grid-cols-16 bg-brand-red px-6 py-2.5 rounded-lg">
//               <div className="uppercase text-white font-semibold tracking-wider col-span-5">
//                 <span>property</span>
//               </div>
//               <div className="uppercase text-white font-semibold tracking-wider col-span-5">
//                 <span>test</span>
//               </div>
//               <div className="uppercase text-white font-semibold tracking-wider col-span-4">
//                 <span>method</span>
//               </div>
//               <div className="uppercase text-white font-semibold text-end tracking-wider col-span-2">
//                 <span>in scope</span>
//               </div>
//             </div>
//             {labTestingTestsData.map((data, index) => (
//               <div
//                 key={index}
//                 className="grid grid-cols-16 px-6 py-4 border-b border-b-neutral-300"
//               >
//                 <div className="font-bold col-span-5 flex flex-col">
//                   <span className="py-2.5">{data.property}</span>
//                 </div>
//                 <div className="col-span-5">
//                   <div className="flex flex-col gap-6">
//                     {data.test.map((testData, i) => (
//                       <span key={i} className="py-2.5 opacity-80">
//                         {testData}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="col-span-4">
//                   <div className="flex flex-col gap-6">
//                     {data.method.map((methodData, i) => (
//                       <span key={i} className="py-2.5 opacity-80">
//                         {methodData}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="font-bold text-brand-red col-span-2">
//                   <div className="flex flex-col gap-6 items-end">
//                     {data.test.map((num, i) => (
//                       <div className="bg-[#f5f5f5] px-4 py-2.5 rounded-md">
//                         confirm
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <p className="max-lg:text-sm">
//             <b>Not for publication yet.</b> This table is the standard rubber
//             and elastomer suite the five instruments above would normally
//             support. It is a checklist for the laboratory to confirm, correct or
//             cut against the scope annexure, which we do not have. The annexure
//             is the authority.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LabTestingTests;

// ---------------------------------------------------------------

import { LabTestingTests as LabTestingTestsData } from "@/lib/data";

const LabTestingTests = () => {
  const labTestingTestsData = LabTestingTestsData;
  return (
    <div className="bg-[#F5F5F5] my-30 max-lg:my-15 lg:max-1440p:mb-20">
      <div className="lg:py-20 max-lg:py-10 px-10 max-lg:px-4 max-w-[1920px] mx-auto w-full">
        <div className="flex flex-col items-start gap-1.5 xl:flex-row xl:items-center xl:gap-10">
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold capitalize">
            Tests
          </h2>
          <p className="flex lg:flex-col py-0 text-xs md:text-sm xl:text-xs 2xl:text-sm opacity-80">
            <span>What we&nbsp;</span>
            <span>can test</span>
          </p>
        </div>
        <p className="lg:flex lg:flex-col text-xs md:text-sm xl:text-xs 2xl:text-sm opacity-90 py-8">
          Grouped by property. The method against each test is the one we work
          to. The last column says whether that test is inside our accredited
          scope. Tests outside the scope are run to the same methods, but the
          report does not carry the NABL symbol, and it says so.
        </p>
        <div className="bg-white rounded-xl px-6 py-6">
          {/* Scroll container: the table scrolls sideways below 1440px */}
          <div className="mb-12 overflow-x-auto">
            {/* Min width keeps the columns from squashing; removed at 1440p */}
            <div className="min-w-275 1440p:min-w-0">
              <div className="grid grid-cols-16 bg-brand-red px-6 py-2.5 rounded-lg">
                <div className="uppercase text-white font-semibold tracking-wider col-span-5">
                  <span>property</span>
                </div>
                <div className="uppercase text-white font-semibold tracking-wider col-span-5">
                  <span>test</span>
                </div>
                <div className="uppercase text-white font-semibold tracking-wider col-span-4">
                  <span>method</span>
                </div>
                <div className="uppercase text-white font-semibold text-end tracking-wider col-span-2">
                  <span>in scope</span>
                </div>
              </div>
              {labTestingTestsData.map((data, index) => (
                <div
                  key={index}
                  className="grid grid-cols-16 px-6 py-4 border-b border-b-neutral-300"
                >
                  <div className="font-bold col-span-5 flex flex-col">
                    <span className="py-2.5">{data.property}</span>
                  </div>
                  <div className="col-span-5">
                    <div className="flex flex-col gap-6">
                      {data.test.map((testData, i) => (
                        <span key={i} className="py-2.5 opacity-80">
                          {testData}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="col-span-4">
                    <div className="flex flex-col gap-6">
                      {data.method.map((methodData, i) => (
                        <span key={i} className="py-2.5 opacity-80">
                          {methodData}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="font-bold text-brand-red col-span-2">
                    <div className="flex flex-col gap-6 items-end">
                      {data.test.map((_, i) => (
                        <div
                          key={i}
                          className="bg-[#f5f5f5] px-4 py-2.5 rounded-md"
                        >
                          confirm
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="max-lg:text-sm">
            <b>Not for publication yet.</b> This table is the standard rubber
            and elastomer suite the five instruments above would normally
            support. It is a checklist for the laboratory to confirm, correct or
            cut against the scope annexure, which we do not have. The annexure
            is the authority.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LabTestingTests;
