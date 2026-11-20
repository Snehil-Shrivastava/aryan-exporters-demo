// const LabTestingEnquiry = () => {
//   return (
//     <div className="px-10 max-lg:px-4 max-w-[1920px] mx-auto w-full pt-15">
//       <div className="flex flex-col gap-4">
//         <div className="flex flex-col items-start gap-1.5 xl:flex-row xl:items-center xl:gap-10">
//           <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold capitalize">
//             Enquiry
//           </h2>
//           <p className="lg:flex lg:flex-col py-0 text-xs md:text-sm xl:text-xs 2xl:text-sm text-gray-600">
//             <span>Send it to</span>
//             <span>the laboratory</span>
//           </p>
//         </div>
//         <div>{/* the remaining content goes here */}</div>
//       </div>
//     </div>
//   );
// };

// export default LabTestingEnquiry;

// ------------------------------------------

"use client";

import { ChevronDown, FileDown, Send } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";

const needOptions = [
  "Material qualification",
  "Batch release testing",
  "Failure analysis",
  "Incoming material check",
  "Something else",
];

const materialOptions = ["Rubber", "Plastic", "Metal", "Composite", "Other"];

// Swap "#" for the real file path (e.g. "/downloads/nabl-certificate.pdf")
// and add the `download` attribute to the <a> once the files exist.
const downloads = [
  { label: "NABL accreditation certificate", href: "#" },
  { label: "Scope of accreditation, as issued", href: "#" },
  { label: "ISO 9001:2015 certificate", href: "#" },
  { label: "IRIS certificate", href: "#" },
];

const fieldBase =
  "w-full rounded-xl border border-neutral-300 bg-white px-5 text-sm md:text-base text-neutral-900 placeholder:text-neutral-400 outline-none transition focus:border-[#a42826] focus:ring-2 focus:ring-[#a42826]/20";
const inputClass = `${fieldBase} h-12 lg:h-14`;
const selectClass = `${inputClass} appearance-none pr-12 invalid:text-neutral-400`;

const Field = ({
  label,
  htmlFor,
  className = "",
  children,
}: {
  label: string;
  htmlFor: string;
  className?: string;
  children: ReactNode;
}) => (
  <div className={`flex flex-col gap-3 ${className}`}>
    <label htmlFor={htmlFor} className="text-sm md:text-base font-semibold">
      {label}
    </label>
    {children}
  </div>
);

const SelectField = ({
  id,
  label,
  placeholder,
  options,
}: {
  id: string;
  label: string;
  placeholder: string;
  options: string[];
}) => (
  <Field label={label} htmlFor={id}>
    <div className="relative">
      <select
        id={id}
        name={id}
        required
        defaultValue=""
        className={selectClass}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="text-neutral-900">
            {option}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-neutral-900">
        <ChevronDown />
      </span>
    </div>
  </Field>
);

const LabTestingEnquiry = () => {
  const [fileName, setFileName] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Static for now. When you wire this up:
    // const data = new FormData(e.currentTarget);
    // then POST it to your API route or server action.
  };

  return (
    <div className="px-10 max-lg:px-4 max-w-[1920px] mx-auto w-full pt-15 pb-15">
      <div className="flex flex-col gap-15">
        <div className="flex flex-col items-start gap-1.5 xl:flex-row xl:items-center xl:gap-10">
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold capitalize">
            Enquiry
          </h2>
          <p className="flex lg:flex-col py-0 text-xs md:text-sm xl:text-xs 2xl:text-sm text-gray-600">
            <span>Send it to&nbsp;</span>
            <span>the laboratory</span>
          </p>
        </div>

        <div className="flex flex-col gap-12">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            {/* Row 1: who you are */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[2fr_2fr_1fr_1fr] gap-x-8 gap-y-6">
              <Field label="Full Name" htmlFor="fullName">
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Enter your full name"
                  className={inputClass}
                />
              </Field>
              <Field label="Company and country" htmlFor="company">
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  autoComplete="organization"
                  placeholder="Company and country"
                  className={inputClass}
                />
              </Field>
              <Field label="Email" htmlFor="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Email"
                  className={inputClass}
                />
              </Field>
              <Field label="Contact" htmlFor="contact">
                <input
                  id="contact"
                  name="contact"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+91 999999 9999"
                  className={inputClass}
                />
              </Field>
            </div>

            {/* Row 2: what the work is */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1.7fr_1.2fr_1.4fr_1fr] gap-x-8 gap-y-6">
              <SelectField
                id="need"
                label="What do you need?"
                placeholder="Select a service"
                options={needOptions}
              />
              <SelectField
                id="materialType"
                label="Material"
                placeholder="Select a material"
                options={materialOptions}
              />
              <Field label="Material" htmlFor="materialDetail">
                <input
                  id="materialDetail"
                  name="materialDetail"
                  type="text"
                  placeholder="Most enquiries leave this blank. That is fine."
                  className={inputClass}
                />
              </Field>
              <Field label="Number of samples" htmlFor="samples">
                <input
                  id="samples"
                  name="samples"
                  type="number"
                  min={1}
                  inputMode="numeric"
                  placeholder="40"
                  className={inputClass}
                />
              </Field>
            </div>

            {/* Row 3: details, attachment, send */}
            <div className="grid grid-cols-1 xl:grid-cols-[4fr_2.7fr_1fr] gap-x-8 gap-y-6 items-center">
              <Field label="What do you need to find out?" htmlFor="details">
                <textarea
                  id="details"
                  name="details"
                  required
                  placeholder="Describe"
                  className={`${fieldBase} py-4 resize-none h-full`}
                />
              </Field>

              <Field label="Attachment" htmlFor="attachment">
                <div className="flex items-center gap-4 rounded-xl border border-neutral-300 bg-white px-4 py-4">
                  <input
                    id="attachment"
                    name="attachment"
                    type="file"
                    className="peer sr-only"
                    onChange={(e) =>
                      setFileName(e.target.files?.[0]?.name ?? "")
                    }
                  />
                  <label
                    htmlFor="attachment"
                    className="shrink-0 cursor-pointer rounded-lg bg-neutral-100 px-5 py-4 text-base md:text-lg font-bold transition hover:bg-neutral-200 peer-focus-visible:ring-2 peer-focus-visible:ring-[#a42826]/40 text-brand-red"
                  >
                    Choose file
                  </label>
                  <div className="min-w-0">
                    <p className="truncate text-sm md:text-base text-neutral-500">
                      {fileName || "No file chosen"}
                    </p>
                    <p className="text-xs text-neutral-500">
                      Specification, drawing, or a photograph of the failed
                      part.
                    </p>
                  </div>
                </div>
              </Field>

              <button
                type="submit"
                className="flex items-center justify-center gap-3 rounded-lg bg-brand-red text-xl md:text-2xl font-semibold text-white transition hover:bg-[#8a2020] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a42826] py-4 mt-auto"
              >
                Send
                <Send size={24} />
              </button>
            </div>
          </form>

          {/* Downloads */}
          <section className="rounded-2xl bg-neutral-100 px-6 py-8 lg:px-10 lg:py-10">
            <h3 className="mb-8 text-lg md:text-xl font-bold uppercase">
              Downloads
            </h3>
            <div className="flex flex-wrap gap-4 xl:justify-between">
              {downloads.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 rounded-lg border border-neutral-300 bg-white px-6 py-5 text-base md:text-lg font-semibold text-brand-red transition hover:border-brand-red"
                >
                  {item.label}
                  <FileDown />
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LabTestingEnquiry;
