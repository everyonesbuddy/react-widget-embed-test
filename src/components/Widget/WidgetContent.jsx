export const WidgetContent = ({ onClose, title }) => {
  return (
    <div className="w-[300px] shadow-xl p-4 bg-white rounded-lg">
      <div className="border-b pb-2 mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <div>
        <p className="text-sm text-muted-foreground">
          This is a sample widget content. Customize this content according to
          your needs.
        </p>
      </div>
    </div>
  );
};
