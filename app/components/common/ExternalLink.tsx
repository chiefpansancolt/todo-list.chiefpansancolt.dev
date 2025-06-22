import { HiExternalLink } from "react-icons/hi";

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function ExternalLink({
  href,
  children,
  className = "",
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <HiExternalLink className="ml-1 inline h-3 w-3" />
    </a>
  );
}
