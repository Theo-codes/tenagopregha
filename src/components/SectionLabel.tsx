interface SectionLabelProps {
  text: string;
  light?: boolean;
}

export default function SectionLabel({ text }: SectionLabelProps) {
  return (
    <p className="font-dm-mono text-[0.7rem] uppercase tracking-[0.3em] text-rust">
      [ {text} ]
    </p>
  );
}
