import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thầy Thanh Phong: \"Sinh viên thành công là người biết giữ đưọc hai chữ cân bằng\"",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children
}
