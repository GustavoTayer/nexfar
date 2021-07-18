import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core";

interface ISelectOption {
  value: any;
  label: string;
}

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  items: ISelectOption[];
  label: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'space-evenly'
    },
    select: {
      flex: 1,
      backgroundColor: "#e7dff2",
      border: 0,
      outline: 0,
      borderRadius: "5em",
      boxSizing: "border-box",
      width: "100%",
      height: "35px",
      paddingLeft: "25px",
    },
    label: {
      marginRight: '10px',
      alignSelf: 'center'
    }
  })
);

export default function CustomSelect(props: IProps) {
  const classe = useStyles();

  return (
    <div className={classe.content}>
      <Typography className={classe.label} variant="body2" >{props.label}</Typography>
      <select {...props} className={classe.select} placeholder="Nome (A-Z)">
        {props.items.map((item) => (
          <option value={item.value}>{item.label}</option>
        ))}
      </select>
    </div>
  );
}
