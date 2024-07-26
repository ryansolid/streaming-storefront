const IMG_URL = "https://www.partialprerendering.com/_next/image"

export function Image(props: { src: string; alt: string; class: string, loading: "eager" | "lazy" }) {
  return (
    <img
      alt={props.alt}
      loading={props.loading}
      decoding="async"
      data-nimg="fill"
      class={props.class}
      style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
      sizes="(min-width: 1184px) 200px, (min-width: 1024px) 20vw, (min-width: 768px) 25vw, 50vw"
      srcset={`${IMG_URL}?url=%2F${props.src}&amp;w=128&amp;q=75 128w, ${IMG_URL}?url=%2F${props.src}&amp;w=256&amp;q=75 256w, ${IMG_URL}?url=%2F${props.src}&amp;w=384&amp;q=75 384w, ${IMG_URL}?url=%2F${props.src}&amp;w=640&amp;q=75 640w, ${IMG_URL}?url=%2F${props.src}&amp;w=750&amp;q=75 750w, ${IMG_URL}?url=%2F${props.src}&amp;w=828&amp;q=75 828w, ${IMG_URL}?url=%2F${props.src}&amp;w=1080&amp;q=75 1080w, ${IMG_URL}?url=%2F${props.src}&amp;w=1200&amp;q=75 1200w, ${IMG_URL}?url=%2F${props.src}&amp;w=1920&amp;q=75 1920w, ${IMG_URL}?url=%2F${props.src}&amp;w=2048&amp;q=75 2048w, ${IMG_URL}?url=%2F${props.src}&amp;w=3840&amp;q=75 3840w`}
      src={`${IMG_URL}?url=%2F${props.src}&amp;w=3840&amp;q=75`}
    />
  );
}

export function ImageSmall(props: { src: string; alt: string; class: string }) {
  return (
    <img
      alt={props.alt}
      loading="lazy"
      decoding="async"
      data-nimg="fill"
      class={props.class}
      style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
      sizes="(min-width: 1184px) 75px, (min-width: 768px) 8.33vw, 16.66vw"
      srcset={`${IMG_URL}?url=%2F${props.src}&amp;w=16&amp;q=75 16w, ${IMG_URL}?url=%2F${props.src}&amp;w=32&amp;q=75 32w, ${IMG_URL}?url=%2F${props.src}&amp;w=48&amp;q=75 48w, ${IMG_URL}?url=%2F${props.src}&amp;w=64&amp;q=75 64w, ${IMG_URL}?url=%2F${props.src}&amp;w=96&amp;q=75 96w, ${IMG_URL}?url=%2F${props.src}&amp;w=128&amp;q=75 128w, ${IMG_URL}?url=%2F${props.src}&amp;w=256&amp;q=75 256w, ${IMG_URL}?url=%2F${props.src}&amp;w=384&amp;q=75 384w, ${IMG_URL}?url=%2F${props.src}&amp;w=640&amp;q=75 640w, ${IMG_URL}?url=%2F${props.src}&amp;w=750&amp;q=75 750w, ${IMG_URL}?url=%2F${props.src}&amp;w=828&amp;q=75 828w, ${IMG_URL}?url=%2F${props.src}&amp;w=1080&amp;q=75 1080w, ${IMG_URL}?url=%2F${props.src}&amp;w=1200&amp;q=75 1200w, ${IMG_URL}?url=%2F${props.src}&amp;w=1920&amp;q=75 1920w, ${IMG_URL}?url=%2F${props.src}&amp;w=2048&amp;q=75 2048w, ${IMG_URL}?url=%2F${props.src}&amp;w=3840&amp;q=75 3840w`}
      src={`${IMG_URL}?url=%2F${props.src}&amp;w=3840&amp;q=75`}
    />
  );
}
