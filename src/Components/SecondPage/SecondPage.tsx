import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}
const columns = [
  { field: 'id', header: 'ID' },
  { field: 'userId', header: 'User ID' },
  { field: 'title', header: 'Title' },
  { field: 'body', header: 'Body' },
];
const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});

const SecondPage: React.FC = () => {
  const [posts, setPosts] = React.useState<Post[]>([]);
  const classes = useStyles();
  const location = useLocation();
  const userDetails = localStorage.getItem('userDetails');

  if (!userDetails && !location.state) {
    window.location.replace('/');
    return null;
  }
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(error => console.error(error));
  }, []);
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {columns.map(column => (
              <TableCell key={column.field}>{column.header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map(post => (
            <TableRow key={post.id}>
              <TableCell>{post.id}</TableCell>
              <TableCell>{post.userId}</TableCell>
              <TableCell>{post.title}</TableCell>
              <TableCell>{post.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default SecondPage;