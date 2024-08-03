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
    <div className="w-[50vw] h-full bg-gray-900">
      <h2 className="m-4 text-2xl font-bold text-white">{title} Code</h2>
      <textarea
        onFocus={() => setEditing(title as "DBML" | "Drizzle")}
        onChange={(e) => setCode(e.target.value)}
        value={children}
        className="bg-inherit m-4 p-2 border-2 border-gray-600 rounded-md flex w-[49vw] h-[91vh] relative"
      />
    </div>
  );
};

export default Panel;
