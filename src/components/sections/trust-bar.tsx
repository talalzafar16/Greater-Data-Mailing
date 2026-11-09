import { Container } from "@/components/ui/container";
import { trustBarCopy } from "@/data/copy";

function TrustBar() {
  return (
    <div className="bg-ink py-5">
      <Container>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-4 lg:flex lg:items-center lg:justify-center lg:gap-0">
          {trustBarCopy.points.map((point, index) => (
            <li key={point} className="flex items-center justify-center">
              {index > 0 ? (
                <span
                  aria-hidden="true"
                  className="mx-5 hidden size-1.5 shrink-0 rounded-full bg-growth lg:block"
                />
              ) : null}
              <span className="text-center text-sm font-medium text-white">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

export { TrustBar };
