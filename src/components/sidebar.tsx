'use client';

import SolidLogo from '~/components/solid-logo';
import { Icon } from "solid-heroicons";
import { bars_3, xMark } from 'solid-heroicons/solid';

import { createSignal } from 'solid-js';
import {
  delayRecommendedProducts,
  delayReviews,
  delayShippingEstimate,
} from '~/lib/delay';

export function Sidebar() {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <div class="fixed top-0 z-20 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800">
      <div class="flex h-14 items-center px-4 py-4 lg:h-auto">
        <div class="group flex w-full items-center gap-x-2.5">
          <div class="h-7 w-7 rounded-full border border-white/30">
            <SolidLogo />
          </div>

          <h3 class="font-semibold tracking-wide text-gray-400">
            Streaming SSR
          </h3>
        </div>
      </div>
      <button
        type="button"
        class="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
        onClick={() => setIsOpen(!isOpen())}
      >
        <div class="font-medium text-gray-100 group-hover:text-gray-400">
          Menu
        </div>
        {isOpen() ? (
          <Icon path={xMark} class="block w-6 text-gray-400" />
        ) : (
          <Icon path={bars_3} class="block w-6 text-gray-400" />
        )}
      </button>

      <div
        classList={{
          'overflow-y-auto lg:static lg:block': true,
          'fixed inset-x-0 bottom-0 top-14 mt-px bg-black': isOpen(),
          hidden: !isOpen(),
        }}
      >
        <div class="prose prose-sm prose-invert max-w-none space-y-6 px-4 pb-20 text-gray-300">
          <div class="text-gray-400">
            <p>
              <span class="font-bold text-vercel-pink">Pink dots</span>{' '}
              denote artificially delayed responses for demo purposes:
            </p>
            <ul>
              <li>Shipping estimate → {delayShippingEstimate}ms</li>
              <li>Recommended products → {delayRecommendedProducts}ms</li>
              <li>Reviews → {delayReviews}ms</li>
            </ul>
          </div>

          <p>
            <a
              target="_blank"
              href="https://blog.codinghorror.com/the-lost-art-of-progressive-html-rendering/"
            >
              Streaming (Progressive Rendering)
            </a>{' '}
            is an existing rendering model where all content is served dynamically in parts. It was introduced in 1997 as part of HTTP 1.1
          </p>
          <p>How it works:</p>
          <ul>
            <li>
              The static <em>shell</em> is served immediately, this makes
              the initial load fast.
            </li>
            <li>
              The shell leaves <em>holes</em> where dynamic content (that might
              be slower) will be streamed in to minimize the perceived overall
              page load time.
            </li>
            <li>
              The async holes are loaded in parallel, reducing the overall load
              time of the page.
            </li>
          </ul>
          <p class="text-gray-400">
            Try refreshing the page to restart the demo.
          </p>
        </div>
      </div>
    </div>
  );
}
