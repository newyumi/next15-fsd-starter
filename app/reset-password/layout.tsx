export default function ResetPAsswordLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="max-w-[452px] desktop:mx-auto">{children}</div>;
}
