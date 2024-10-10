import { ElementType } from "react";

interface TextProps {
  text: string | ElementType;
  font: "normal" | "medium" | "semibold";
  className?: string;
}

export default function Text({ text, font, className }: TextProps) {
  const TextComponent = typeof text === "string" ? "span" : text;

  return (
    <p className={`font-${font} text-[16px] ${className} flex`}>
      {typeof text === "string" ? text : <TextComponent className="size-6" />}
    </p>
  );
}
