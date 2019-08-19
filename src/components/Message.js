import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default function Message() {
  const useStyles = makeStyles(theme => ({
    root: {
      margin: "50px",
      padding: theme.spacing(3, 2)
    },
    flex: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    },
    topicWindow: {
      width: "30%",
      height: "300px",
      borderRight: "1px solid grey"
    },
    chatWindow: {
      width: "70%",
      height: "300px"
    },
    chatBox: {
      width: "85%"
    },
    button: {
      width: "15%"
    }
  }));

  const classes = useStyles();

  const [allChats] = React.useContext(CTX);

  const [textValue, changeTextValue] = React.useState("");

  console.log({ allChats });

  return (
    <>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Chat
        </Typography>
        <Typography component="p">topic holder</Typography>
        <div calsssName={classes.flex}>
          <div className={classes.topicWindow}>
            <List>
              {["topic"].map(topic => (
                <ListItem button>
                  <ListItemText primary="topic" />
                </ListItem>
              ))}
            </List>
          </div>
        </div>
        <div calsssName={classes.flex}>
          <div className={classes.chatWindow} />
          {[{ from: "user", msg: "hello" }].map((chat, i) => (
            <div className={classes.flex} key={i}>
              <Chip label={chat.from} className={classes.chip} />
              <Typography variant="p">{chat.msg}</Typography>
            </div>
          ))}
        </div>
        <div className={classes.flex}>
          <TextField
            label="Send a chat"
            className={classes.chatBox}
            value={textValue}
            onChange={e => changeTextValue(e.target.value)}
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Send
          </Button>
        </div>
      </Paper>
    </>
  );
}
