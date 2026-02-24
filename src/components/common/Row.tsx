import { cn } from "@/lib/utils";

interface IRow {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Row: React.FC<IRow> = ({ className, children, id }) => {
  return (
    <div id={id} className={cn("flex items-center", className)}>
      {children}
    </div>
  );
};

export default Row;
