type PanelProps = {
  title: string;
  children: string;
  setEditing: React.Dispatch<React.SetStateAction<"DBML" | "Drizzle">>;
  setCode: React.Dispatch<React.SetStateAction<string>>;
};

const Panel: React.FC<PanelProps> = ({
  setCode,
  setEditing,
  title,
  children,
}) => {
  return (
    <div className="h-full bg-gray-900">
      <h2 className="m-4 text-2xl font-bold text-white">{title} Code</h2>
      <textarea
        onFocus={() => setEditing(title as "DBML" | "Drizzle")}
        onChange={(e) => setCode(e.target.value)}
        value={children}
        className="relative flex w-full max-h-full px-4 py-3 border-2 border-gray-600 rounded-md min-h-[40rem] bg-inherit"
      />
    </div>
  );
};

export default Panel;
