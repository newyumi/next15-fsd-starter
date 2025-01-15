export default function SignupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="max-w-[452px] desktop:mx-auto">{children}</div>;
}
