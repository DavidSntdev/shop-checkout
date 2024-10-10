import { Link } from "@nextui-org/link";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen bg-[#F3F4F6]">
      <main className="container mx-auto max-w-7xl flex-grow">{children}</main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://nextui-docs-v2.vercel.app?utm_source=next-pages-template"
          title="nextui.org homepage"
        >
          <span className="text-default-600">Desenvolvido por</span>
          <p className="text-primary">David Santos</p>
        </Link>
      </footer>
    </div>
  );
}
