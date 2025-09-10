export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-5xl w-full px-4">{children}</div>;
}
