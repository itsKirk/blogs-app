import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

export default function Blogs() {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('http://localhost:9090/blogs')
            .then((response) => response.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <Box>
            {blogs.map(blog => (
                <Box key={blog.id}>
                    <Typography variant="h5">{blog.title}</Typography>
                    <Typography variant="body1">{blog.details}</Typography>
                </Box>
            ))}
        </Box>
    )
}
