interface TextProps {
  text: string;
  font: "normal" | "medium" | "semibold";
  className?: string;
}

export default function TextProps(props: TextProps) {
  return (
    <p className={`font-${props.font} text-[16px] ${props.className}`}>
      {props.text}
    </p>
  );
}
