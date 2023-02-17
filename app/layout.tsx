import './globals.css';
import Menu from '@/components/Menu';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="isolate bg-white">
        <Menu />
        <main>{children}</main>
      </body>
    </html>
  );
}
