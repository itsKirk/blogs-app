import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { purple } from '@mui/material/colors';
import { format } from 'date-fns';
import { DeleteOutlined } from '@mui/icons-material';
import '../index.css'

export default function BlogCard({ blog, handleDelete }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: purple[500] }} aria-label="recipe">
                        {blog.title[0]}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings" onClick={() => handleDelete(blog.id)}>
                        <DeleteOutlined />
                    </IconButton>
                }
                title={blog.title}
                subheader={format(blog.created_at, 'MMMM do, yyyy  (kk:mm:ss)')}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {blog.details}
                </Typography>
            </CardContent>
        </Card>
    );
}
