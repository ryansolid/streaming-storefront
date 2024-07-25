// @refresh reload
import { GlobalStyles } from "./styles";
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          {assets}
          <GlobalStyles />
        </head>
        <body class="overflow-y-scroll bg-gray-1100 bg-[url('/grid.svg')] pb-36">
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
