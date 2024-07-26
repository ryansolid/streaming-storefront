import SolidLogo from "~/components/solid-logo";
import { Icon } from "solid-heroicons";
import { magnifyingGlass, shoppingCart } from "solid-heroicons/solid";
import { CartCount } from "~/components/cart-count";
// import { cookies } from 'next/headers';
import { Suspense } from "solid-js";

function CartCountFromCookies() {
  //const cartCount = Number(cookies().get('_cart_count')?.value || '0');
  return <CartCount initialCartCount={0} />;
}

const IMG_URL = "https://www.partialprerendering.com/_next/image"

export function Header() {
  return (
    <div class="flex items-center justify-between gap-x-3 rounded-lg bg-gray-800 px-3 py-3 lg:px-5 lg:py-4">
      <div class="flex gap-x-3">
        <div class="h-10 w-10 hover:opacity-70">
          <SolidLogo />
        </div>

        <div class="relative flex-1">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Icon path={magnifyingGlass} class="h-5 w-5 text-gray-300" />
          </div>
          <input
            aria-label="Search"
            type="search"
            name="search"
            id="search"
            class="block w-full rounded-full border-none bg-gray-600 pl-10 font-medium text-gray-200 focus:border-vercel-pink focus:ring-2 focus:ring-vercel-pink"
            autocomplete="off"
          />
        </div>
      </div>

      <div class="flex shrink-0 gap-x-3">
        <div class="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-600 text-white">
          <Icon path={shoppingCart} class="w-6 text-white" />
          <div class="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-vercel-cyan text-sm font-bold text-cyan-800">
            <Suspense fallback={<span></span>}>
              <CartCountFromCookies />
            </Suspense>
          </div>
        </div>

        <img
          alt="User"
          width="40"
          height="40"
          decoding="async"
          data-nimg="1"
          class="rounded-full"
          style="color:transparent"
          srcset={`${IMG_URL}?url=%2Fprince-akachi-LWkFHEGpleE-unsplash.jpg&amp;w=48&amp;q=75 1x, ${IMG_URL}?url=%2Fprince-akachi-LWkFHEGpleE-unsplash.jpg&amp;w=96&amp;q=75 2x`}
          src={`${IMG_URL}?url=%2Fprince-akachi-LWkFHEGpleE-unsplash.jpg&amp;w=96&amp;q=75`}
        />
      </div>
    </div>
  );
}
