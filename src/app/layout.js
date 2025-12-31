import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

export const metadata = {
  title: "Lama Dev Portfolio App",
  description: "Animated Portfolio Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
