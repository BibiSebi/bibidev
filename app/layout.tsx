import './globals.css';
import Menu from '@/components/Menu';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <body className='bg-white font-sans antialiased'>
        <div className='isolate flex min-h-screen flex-col'>
          <Menu />
          {children}
        </div>
      </body>
    </html>
  );
}
