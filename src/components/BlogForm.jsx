import Button from '@mui/material/Button'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { TextField } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { purple } from "@mui/material/colors";
import { useState } from 'react';
import '../index.css'
function BlogForm() {
    const [category, setCategory] = useState('science')
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        setTitleError(false)
        setDetailsError(false)
        if (title === '') setTitleError(true)
        if (details === '') setDetailsError(true)
        if (title && details) {
            const options = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, details, category })
            }
            fetch('http://localhost:9090/blogs', options)
                .then()
        }
    }
    const fieldStyles = {
        display: 'block',
        marginBottom: '20px',
        marginTop: '20px'
    }
    return (
        <form noValidate autoComplete='off' onSubmit={handleSubmit}>
            <TextField
                onChange={(e) => setTitle(e.target.value)}
                sx={fieldStyles}
                variant='outlined'
                color='secondary'
                fullWidth
                required
                error={titleError}
                label='Blog Title' />
            <TextField
                onChange={(e) => setDetails(e.target.value)}
                sx={fieldStyles}
                variant='outlined'
                color='secondary'
                error={detailsError}
                fullWidth
                multiline
                rows={10}
                required
                label='Blog Details' />
            <FormControl sx={fieldStyles}>
                <FormLabel style={{ fontWeight: 'bold' }}>Category</FormLabel>
                <RadioGroup
                    row
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    color={purple}
                >
                    <FormControlLabel color='success' value="tech" control={<Radio />} label="Tech" />
                    <FormControlLabel value="science" control={<Radio />} label="Science" />
                    <FormControlLabel value="sport" control={<Radio />} label="Sport" />
                    <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Other"
                    />
                </RadioGroup>
            </FormControl>
            <Button
                endIcon={<KeyboardArrowRightIcon />}
                variant='contained'
                color='secondary'
                type='submit'>
                Submit
            </Button>
        </form>)
}

export default BlogForm