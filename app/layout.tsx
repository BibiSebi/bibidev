import './globals.css';
import Menu from '@/components/Menu';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="overflow-hidden bg-white font-sans antialiased">
        <div className="isolate ">
          <Menu />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
