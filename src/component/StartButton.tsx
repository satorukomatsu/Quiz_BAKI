
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


export const StartButton = () => {
    return (
        <div className="button">
            <Button className="startButton" variant="contained" disableElevation>
                <Link style={{ textDecoration: 'none', color: "white"}} to="/quiz">PUSH TO START</Link>
            </Button>
            <Button className="descriptionButton" variant="contained" disableElevation>
                <Link style={{ textDecoration: 'none', color: "white"}} to="/description">WHAT'S BAKI</Link>
            </Button>
        </div>
    )
}