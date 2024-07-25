import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { CartCountProvider } from "~/components/cart-count-context";
import { Header } from "~/components/header";
import { Sidebar } from "~/components/sidebar";

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <Sidebar />
          <div class="lg:pl-72">
            <div class="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8">
              <div class="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
                <div class="rounded-lg bg-black p-3.5 lg:p-6">
                  <CartCountProvider>
                    <div class="space-y-10">
                      <Header />
                      <Suspense>{props.children}</Suspense>
                    </div>
                  </CartCountProvider>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
