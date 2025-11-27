export const metadata = {
  title: "Sanity Studio - Maison de la Poterie",
  description: "Administration du contenu du site",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
