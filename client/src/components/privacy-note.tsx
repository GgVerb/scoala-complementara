import { Link } from "wouter";

// L1: notă scurtă lângă fiecare buton de contact, cu link la /confidentialitate.
export default function PrivacyNote({
  className = "",
  onDark = false,
  children,
}: {
  className?: string;
  onDark?: boolean;
  children?: React.ReactNode;
}) {
  const text = onDark ? "text-gray-300" : "text-gray-500";
  const link = onDark ? "text-white" : "text-primary";
  return (
    <p className={`not-prose text-sm ${text} ${className}`}>
      {children ?? "Folosim datele pe care ni le trimiți doar ca să-ți răspundem."}{" "}
      <Link href="/confidentialitate" className={`${link} underline underline-offset-2 hover:opacity-80`}>
        Politica de confidențialitate
      </Link>
    </p>
  );
}
