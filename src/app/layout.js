import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

export const metadata = {
  title: "Armun Portfolio App",
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
