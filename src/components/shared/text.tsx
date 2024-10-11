import { ElementType } from "react";

interface TextProps {
  text: string | ElementType;
  font: "normal" | "medium" | "semibold";
  cor?: string;
  className?: string;
}

export default function Text(props: TextProps) {
  const TextComponent = typeof props.text === "string" ? "span" : props.text;

  return (
    <p
      className={`font-${props.font} text-[16px] ${props.cor || "text-[#1D1D1F]"} ${props.className} flex`}
    >
      {typeof props.text === "string" ? (
        props.text
      ) : (
        <TextComponent className="size-6" />
      )}
    </p>
  );
}
