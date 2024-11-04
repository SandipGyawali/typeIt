import './global.css';

export const metadata = {
  title: 'Monkey Type clone',
  description: 'this is the typing test calculator project',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-foreground/10">{children}</body>
    </html>
  );
}
