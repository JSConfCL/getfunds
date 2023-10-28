import React from "react";
interface CardProps {
  size: string;
  href?: string;
  title?: string;
  amount?: number;
  children?: JSX.Element | JSX.Element[];
  iconRenderer?: () => JSX.Element | JSX.Element[];
}

const moneyFormat = (amount: number | null | undefined) => {
  if (amount == null) {
    return;
  }

  const CLP = new Intl.NumberFormat("es-CL", {
    currency: "CLP",
    style: "currency",
  });

  return CLP.format(amount);
};

export const Card = ({
  size,
  href = "#",
  title,
  amount,
  children,
  iconRenderer,
}: CardProps) => {
  return (
    <a
      className={`col-span-12 text-center ${size} group`}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <div className="flex h-52 flex-col justify-center gap-2 rounded-lg border-4 border-transparent bg-[#f0dd74] p-4 text-center text-jscl-black transition-all hover:border-jscl-yellow hover:bg-[#f4e69c]">
        {children ? (
          children
        ) : (
          <>
            <div className="flex flex-col gap-1">
              <div className="text-base">{title}</div>
              <div className="text-base font-bold">
                <span className="text-4xl transition-all lg:text-5xl xl:text-6xl">
                  {moneyFormat(amount)}
                </span>
              </div>
              <div className="text-center text-base transition-all">
                {iconRenderer?.()}
              </div>
            </div>
          </>
        )}
      </div>
    </a>
  );
};
