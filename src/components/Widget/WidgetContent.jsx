import { Card, CardHeader, CardContent, Typography } from "@mui/material";

export const WidgetContent = ({ onClose, title }) => {
  return (
    <Card
      className="w-[300px] shadow-xl"
      style={{
        borderRadius: "10px",
        marginBottom: "10px",
        border: "1px solid #000",
      }}
    >
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          This is a sample widget content. Customize this content according to
          your needs.
        </Typography>
      </CardContent>
    </Card>
  );
};
