import Text from "@/components/shared/text";

interface InputsProps {
  label: string;
  input: string;
}

export default function Inputs(props: InputsProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="name">
        <Text
          className="text-sm"
          cor="text-[#6C727F]"
          font="semibold"
          text={props.label}
        />
      </label>
      <input
        className="h-12 w-full p-3 border-1 border-[#00000033] rounded-lg"
        placeholder={props.input}
        type="text"
      />
    </div>
  );
}
