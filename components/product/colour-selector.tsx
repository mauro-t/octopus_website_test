"use client";

import { useCallback } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Fieldset } from "@base-ui/react/fieldset";
import { Field } from "@base-ui/react/field";
import { RadioGroup } from "@base-ui/react/radio-group";
import { Radio } from "@base-ui/react/radio";
import type { ProductColour } from "@/data/types";

type Props = {
  colours: ProductColour[];
};

export default function ColourSelector({ colours }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedColour = colours.find((c) => c.hex == searchParams.get("colour")) || colours[0];

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  return (
    <Field.Root>
      <Fieldset.Root
        render={
          <RadioGroup
            value={selectedColour.hex}
            onValueChange={async (value) => {
              router.push(pathname + "?" + createQueryString("colour", value));
            }}
          />
        }
      >
        <div className="flex gap-8">
          <Fieldset.Legend>Colour</Fieldset.Legend> <span>-</span>{" "}
          <output>{selectedColour?.label}</output>
        </div>
        <div className="mt-8 flex flex-wrap gap-8">
          {colours.map((colour) => (
            <Field.Item key={colour.hex}>
              <Radio.Root
                value={colour.hex}
                className="data-checked:ring-accent inline-block size-[44px] rounded-full p-[7px] ring-2 ring-transparent ring-inset"
              >
                <span
                  style={{ backgroundColor: colour.hex }}
                  className="inline-block h-full w-full rounded-full ring ring-inset"
                ></span>
              </Radio.Root>
              <Field.Label className="sr-only">{colour.label}</Field.Label>
            </Field.Item>
          ))}
        </div>
      </Fieldset.Root>
    </Field.Root>
  );
}
