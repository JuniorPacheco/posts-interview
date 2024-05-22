import { deletePost } from "@/services/posts";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

interface Props {
  posts: IPost[];
  handleDeletePost: (id: number) => void;
}

export const PostLists = ({ posts, handleDeletePost }: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650, maxWidth: 1200, margin: "0 auto" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>User ID</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Body</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map(({ id, userId, title, body }) => (
            <TableRow
              key={id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {userId}
              </TableCell>
              <TableCell align="center">{title}</TableCell>
              <TableCell align="center">{body}</TableCell>
              <TableCell align="center">
                <Button
                  onClick={() => handleDeletePost(id)}
                  variant="contained"
                  color="error"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
