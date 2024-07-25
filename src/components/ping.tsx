export function Ping() {
  return (
    <div class="relative">
      <div class="absolute -left-4 top-1">
        <span class="flex h-[11px] w-[11px]">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-vercel-pink opacity-75"></span>
          <span class="relative inline-flex h-[11px] w-[11px] rounded-full bg-vercel-pink"></span>
        </span>
      </div>
    </div>
  );
}
