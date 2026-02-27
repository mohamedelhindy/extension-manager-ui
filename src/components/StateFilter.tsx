import { Link, useLocation } from "react-router";

interface Path {
  href: string;
  title: string;
}

const paths: Path[] = [
  {
    href: "/",
    title: "all",
  },
  {
    href: "/active",
    title: "active",
  },
  {
    href: "/inactive",
    title: "inactive",
  },
];

export const StateFilter = () => {
  const pathname = useLocation().pathname;

  return (
    <div className="flex gap-4">
      {paths.map(({ href, title }) => (
        <StyledLink key={href} to={href} isActive={pathname === href}>
          {title}
        </StyledLink>
      ))}
    </div>
  );
};

interface StyledLinkProps {
  children: React.ReactNode;
  to: string;
  isActive: boolean;
}

const StyledLink = ({ isActive, ...props }: StyledLinkProps) => (
  <Link
    className={`bg-neutral-800 rounded-full py-3 px-5 font-semibold font-noto transition-colors duration-300 capitalize ${isActive && "bg-red-700 text-neutral-800"}`}
    {...props}
  />
);
