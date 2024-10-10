interface TextSmallProps {
  text: string;
  className?: string;
}

export default function TextSmall(props: TextSmallProps) {
  return (
    <p className={`font-semibold text-[12px] ${props.className}`}>
      {props.text}
    </p>
  );
}
