export const Link = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <a
      className='border-b border-b-transparent font-semibold text-purple-500 hover:border-b-blue-900'
      href={href}
    >
      {children}
    </a>
  );
};
