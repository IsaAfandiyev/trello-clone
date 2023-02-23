import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import styles from "./index.module.css";

const TrelloCard = ({ text }) => {
  return (
    <Card className={styles.cardContainer}>
      <CardContent>
        <Typography gutterBottom>{text}</Typography>
      </CardContent>
    </Card>
  );
};

export default TrelloCard;
