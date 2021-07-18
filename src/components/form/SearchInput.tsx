import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createStyles, IconButton, makeStyles, Theme } from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) => createStyles({
  content: {
    display: 'flex'
  },
  input: {
    backgroundColor: '#e7dff2',
    border: 0,
    outline: 0,
    borderRadius: '5em',
    boxSizing: 'border-box',
    width: "100%",
    height: '35px',
    paddingLeft: '25px'
  },
  button: {
    backgroundColor: theme.palette.secondary.main,
    color: '#fff',
    border: 'none',
    padding: '10px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    borderRadius: "50%",
    fontSize: '16px',
    marginRight: '-15px'
  }
}));



interface IProps extends React.InputHTMLAttributes<HTMLInputElement> { 
}

export default function SearchInput(props: IProps) {
  const classe = useStyles()

  return (
    <div className={classe.content}>
      <IconButton aria-label="delete" className={classe.button}>
        <FontAwesomeIcon icon={faSearch} style={{height: '14px'}}/>
      </IconButton>
      <input {...props} placeholder="Pesquisar" className={classe.input} />
    </div>
  );
}
