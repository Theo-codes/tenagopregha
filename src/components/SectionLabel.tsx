interface SectionLabelProps {
  text: string;
  light?: boolean;
}

export default function SectionLabel({ text, light = false }: SectionLabelProps) {
  return (
    <p
      className={`font-dm-mono text-[0.7rem] uppercase tracking-[0.2em] ${
        light ? "text-rust" : "text-muted"
      }`}
    >
      {text}
    </p>
  );
}
