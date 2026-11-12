import { Accordion } from "@base-ui/react/accordion";

type Props = {
  specs: {
    title: string;
    items: string[];
  }[];
};

export default function SpecsAccordions({ specs }: Props) {
  return (
    <Accordion.Root className="bg-primary rounded-card overflow-hidden">
      {specs.map((spec, index) => (
        <Accordion.Item key={index}>
          <Accordion.Header className="leading-1.1">
            <Accordion.Trigger className="desktop:py-[20px] focus-ring group bg-primary flex w-full items-center justify-between px-[20px] py-16 font-bold ring-inset">
              {spec.title}
              <div className="size-[10px] translate-x-[-2px] -rotate-45 skew-4 border-r-2 border-b-2 border-current transition-transform duration-350 group-data-panel-open:rotate-45"></div>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel className="h-(--accordion-panel-height) overflow-hidden px-[20px] transition-[height] duration-350 data-ending-style:h-0 data-starting-style:h-0">
            <ul className="desktop:pb-[20px] list-disc pt-8 pb-16 pl-[1em]">
              {spec.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
