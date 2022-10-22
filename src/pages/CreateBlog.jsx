import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import BlogForm from '../components/BlogForm'
import '../index.css'
export default function CreateBlog() {
    const fieldStyles = {
        display: 'block',
        marginBottom: '20px',
        marginTop: '20px'
    }
    return (
        <Container>
            <Typography
                variant="h4"
                color='textSecondary'
                sx={fieldStyles}
            >Create a new Blog</Typography>
            <BlogForm />
        </Container >
    )
}
