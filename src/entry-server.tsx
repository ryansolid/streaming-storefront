// @refresh reload
import { GlobalStyles } from "./styles";
import { createHandler, StartServer } from "@solidjs/start/server";

const ImagePreload = () => {
  return <link
    rel="preload"
    as="image"
    imagesrcset="/eniko/128.webp 128w, /eniko/256.webp 256w, /eniko/384.webp 384w, /eniko/640.webp 640w, /eniko/750.webp 750w, /eniko/800.webp 3840w"
    imagesizes="(min-width: 1184px) 200px, (min-width: 1024px) 20vw, (min-width: 768px) 25vw, 50vw"
  />;
};

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <ImagePreload />
          <GlobalStyles />
          {assets}
        </head>
        <body class="overflow-y-scroll bg-gray-1100 bg-[url('/grid.svg')] pb-36">
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
