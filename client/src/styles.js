import { makeStyles } from "@material-ui/core/styles";
import { flexbox } from "@material-ui/system";

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: flexbox,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "rgba(0,183,255,1)",
  },
  image: {
    marginLeft: "15px",
  },
}));
