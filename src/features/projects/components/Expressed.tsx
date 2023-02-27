import highExpress from "@/assets/images/high_expression_box_(LGG_TCGA_[expression_data]).png";
import lowExpress from "@/assets/images/low_expression_box_(LGG_TCGA_[expression_data]).png";
import { Express, TitleExpress } from "@/types";

type ExpressedProps = {
  titleExpress: TitleExpress;
  express: Express;
};

export const Expressed = ({ titleExpress, express }: ExpressedProps) => {
  const { genes } = express;
  return (
    <>
      <h1 className="mb-4 mt-8">{titleExpress.title}</h1>
      <div className="flex gap-1">
        <ul className="text-grey-900 h-[267px] overflow-y-scroll rounded-lg border border-gray-200 bg-white text-sm font-medium dark:border-gray-600 dark:bg-gray-700 dark:text-white">
          {genes.map((item, index) => {
            if (index === 0)
              return (
                <li
                  key={index}
                  className="w-full rounded-t-lg border-b border-gray-200 px-4 py-2 dark:border-gray-600"
                >
                  {item}
                </li>
              );
            else if (index === genes.length - 1)
              return (
                <li key={index} className="w-full rounded-b-lg px-4 py-2">
                  {item}
                </li>
              );
            else
              return (
                <li
                  key={index}
                  className="w-full border-b border-gray-200 px-4 py-2 dark:border-gray-600"
                >
                  {item}
                </li>
              );
          })}
        </ul>
        <div className="flex-1">
          {titleExpress.title === "High Expressed" ? (
            <img className="h-[267px]" src={highExpress} />
          ) : (
            <img className="h-[267px]" src={lowExpress} />
          )}
        </div>
      </div>
    </>
  );
};
