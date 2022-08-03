import {useState}  from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import {postFeedback} from '../api/Api'

export default function Feedback(props) {
    const [message, setMessage] = useState(null);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [feedback, setFeedback] = useState("");

    const handleChange = (event) => {
        setFeedback(event.target.value);
      };

    const sendClicked = () => {
        if(feedback === "") {
            return
        }
        postFeedback(feedback).then((response) => {
            if(response.ok){
                setMessage(
                    <Alert variant="filled" severity="success">
                    Feedback send! We will reply to you shortly.
                    </Alert>
                )
                setButtonDisabled(true)
            }
            else {
                setMessage(
                    <Alert variant="filled" severity="error">
                    Something went wrong please try again later.
                    </Alert>
                )
            }
        })   
    }

    return (
    <div>
        {message}
        <br/><br/><br/>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Send us your feedback
        </Typography>
        <TextField
          id="feedback-text"
          label="Type here"
          multiline
          rows={8}
          variant="filled"
          onChange={handleChange}
          disabled={buttonDisabled}
          sx={{ width: '60ch' }}
        />
        <br/>
        <Button variant="contained"
                disabled={buttonDisabled}
                onClick={sendClicked}
                sx={{ width: '10ch' }} >
            Send
        </Button>
    </div>
    )
}