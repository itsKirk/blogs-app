import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Masonry from 'react-masonry-css'
import BlogCard from '../components/BlogCard'

export default function Blogs() {
    const [blogs, setBlogs] = useState([])
    const url = 'http://localhost:9090/blogs'
    const handleDelete = async (id) => {
        await fetch(`${url}/${id}`, {
            method: 'DELETE',
        })
        const filteredBlogs = blogs.filter(b => b.id !== id)
        setBlogs(filteredBlogs)
    }
    useEffect(() => {
        const getBlogs = (async () => {
            await fetch(url)
                .then((response) => response.json())
                .then(data => setBlogs(data))
        })
        getBlogs();
    }, [])
    const breakPoints = {
        default: 3,
        1100: 2,
        700: 1
    }
    return (

        <Container>
            <Masonry breakpointCols={breakPoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {blogs.map(blog => (
                    <div item key={blog.id}>
                        <BlogCard blog={blog}
                            handleDelete={handleDelete} />
                    </div>
                ))}
            </Masonry>
        </Container>
    )
}
