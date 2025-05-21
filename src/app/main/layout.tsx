import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "“Sinh viên toàn năng” – mặt tối sau ánh hào quang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children
}
