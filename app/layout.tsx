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
      <body className="bg-white font-sans antialiased">
        <div className="isolate ">
          <Menu />
          {children}
        </div>
      </body>
    </html>
  );
}
